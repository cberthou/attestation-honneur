import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";

const Text = styled.span`
    cursor: pointer;
`;

const baseKey = "attestation";

const EditableInput = ({ id, placeholder }) => {
    const [value, setValue] = useState("");
    const [isActive, setActive] = useState(false);

    const onChange = useCallback((event) => setValue(event.target.value), [setValue]);
    const onBlur = useCallback(() => setActive(false),[setActive]);
    const activate = useCallback(() => setActive(true), [setActive]);

    useEffect(() => {
        const persisted = localStorage.getItem(`${baseKey}:${id}`);
        if (persisted) {
            setValue(persisted);
        }
    }, [id]);

    useEffect(() => {
        localStorage.setItem(`${baseKey}:${id}`, value);
    }, [value, id])

    return isActive ?
        <input value={value} onChange={onChange} onBlur={onBlur}/> :
        <Text onClick={activate}>{value || placeholder}</Text>;
};

export default EditableInput;
