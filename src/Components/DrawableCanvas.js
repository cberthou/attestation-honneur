import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";

const imageKey = "attestation-signature";
const signDateKey = "attestation-signdate";

const Image = styled.img`
    cursor: pointer;
`;

const Canvas = styled.canvas`
    border: 1px solid black;
    overscroll-behavior: contain;
`;

const DrawableCanvas = ({ onSignChange }) => {
    const color = "black";
    const width = 2;

    const [image, setImage] = useState("");
    const [isEditing, setEditing] = useState(false);

    const drawSettingsRefs = useRef({
        width: 0,
        height: 0,
        flag: false,
        prevX: 0,
        currX: 0,
        prevY: 0,
        currY: 0,
        dotFlag: false
    });
    const canvasRef = useRef();
    const canvasContextRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvasRef.current) {
            canvasContextRef.current = canvas.getContext("2d");
            drawSettingsRefs.current.width = canvasRef.current.width;
            drawSettingsRefs.current.height = canvasRef.current.height;
        }
    }, [canvasRef, canvasContextRef, drawSettingsRefs, isEditing]);

    useEffect(() => {
        const image = localStorage.getItem(imageKey);
        if (image) {
            setImage(image);
            onSignChange(localStorage.getItem(signDateKey));
        } else {
            setEditing(true);
        }
    }, [setImage, setEditing]);

    useEffect(() => {
        if (localStorage.getItem(image) !== image) {
            localStorage.setItem(imageKey, image);
            localStorage.setItem(signDateKey, Date.now());
            onSignChange(Date.now());
        }
    }, [image]);

    const draw = useCallback(() => {
        canvasContextRef.current.beginPath();
        canvasContextRef.current.moveTo(drawSettingsRefs.current.prevX, drawSettingsRefs.current.prevY);
        canvasContextRef.current.lineTo(drawSettingsRefs.current.currX, drawSettingsRefs.current.currY);
        canvasContextRef.current.strokeStyle = color;
        canvasContextRef.current.lineWidth = width;
        canvasContextRef.current.stroke();
        canvasContextRef.current.closePath();
    }, [canvasContextRef, drawSettingsRefs]);

    const findxy = useCallback((res, e) => {
        const clientX = e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches[0]? e.touches[0].clientY : e.clientY;
        if (res === 'down') {
            drawSettingsRefs.current.prevX = drawSettingsRefs.current.currX;
            drawSettingsRefs.current.prevY = drawSettingsRefs.current.currY;
            drawSettingsRefs.current.currX = clientX - canvasRef.current.getBoundingClientRect().left;
            drawSettingsRefs.current.currY = clientY - canvasRef.current.getBoundingClientRect().top;
            console.log(e.clientY);

            drawSettingsRefs.current.flag = true;
            drawSettingsRefs.current.dotFlag = true;
            if (drawSettingsRefs.current.dotFlag) {
                canvasContextRef.current.beginPath();
                canvasContextRef.current.fillStyle = color;
                canvasContextRef.current.fillRect(drawSettingsRefs.current.currX, drawSettingsRefs.current.currY, 2, 2);
                canvasContextRef.current.closePath();
                drawSettingsRefs.current.dotFlag = false;
            }
        }
        if (res === 'up' || res === "out") {
            drawSettingsRefs.current.flag = false;
        }
        if (res === 'move') {
            if (drawSettingsRefs.current.flag) {
                drawSettingsRefs.current.prevX = drawSettingsRefs.current.currX;
                drawSettingsRefs.current.prevY = drawSettingsRefs.current.currY;
                drawSettingsRefs.current.currX = clientX - canvasRef.current.getBoundingClientRect().left;
                drawSettingsRefs.current.currY = clientY - canvasRef.current.getBoundingClientRect().top;
                draw();
            }
        }
    }, [draw, drawSettingsRefs, canvasRef, canvasContextRef])

    const mouseMove = useCallback((e) => {
        e.preventDefault();
        findxy("move", e);
        e.returnValue = false;
        return false;
    },[findxy]);

    const mouseDown = useCallback((e) => {
        e.preventDefault();
        findxy("down", e);
        e.returnValue = false;
        return false;
    }, [findxy]);

    const mouseUp = useCallback((e) => {
        e.preventDefault();
        findxy("up", e);
        e.returnValue = false;
        return false;
    }, [findxy]);

    const mouseOut = useCallback((e) => {
        e.preventDefault();
        findxy("out", e);
        e.returnValue = false;
        return false;
    }, [findxy]);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const listen = (event, handler) => {
            canvasRef.current.addEventListener(event, handler, { passive: false });
        };
        const removeListener = (event, handler) => {
            canvasRef.current.removeEventListener(event, handler);
        };
        listen("mousemove", mouseMove);
        listen("touchmove", mouseMove);
        listen("mousedown", mouseDown);
        listen("touchstart", mouseDown);
        listen("mouseup", mouseUp);
        listen("touchend", mouseUp);
        listen("mouseout", mouseOut);
        return () => {
            if (!canvasRef.current) {
                return;
            }
            removeListener("mousemove", mouseMove);
            removeListener("touchmove", mouseMove);
            removeListener("mousedown", mouseDown);
            removeListener("touchstart", mouseDown);
            removeListener("mouseup", mouseUp);
            removeListener("touchend", mouseUp);
            removeListener("mouseout", mouseOut);
        };
    }, [mouseMove, mouseDown, mouseUp, mouseOut, canvasRef, isEditing])

    const clear = useCallback(() => {
        canvasContextRef.current.clearRect(0, 0, drawSettingsRefs.current.width, drawSettingsRefs.current.height);
    }, [canvasContextRef, drawSettingsRefs]);

    const save = useCallback(() => {
        const newImage = canvasRef.current.toDataURL();
        setImage(newImage);
        setEditing(false);
    }, [canvasRef, setImage, setEditing]);

    const edit = useCallback(() => {
        setEditing(true);
    }, [setEditing]);

    return <div
        onTouchMove={(e) => {
            console.log(e);
            e.preventDefault()
        } }
    >
        {
            isEditing ?
                <>
                    <Canvas ref={canvasRef} width={300} height={300} />
                    <div>
                        <input type="button" onClick={clear} value="clear"/>
                        <input type="button" onClick={save} value="save"/>
                    </div>
                </> :
                <Image src={image} onClick={edit}/>
        }

    </div>
};

export default DrawableCanvas;
