import React, {useCallback, useState} from "react";
import styled from "styled-components";
import checkedImage from "./checkbox-checked.svg";
import uncheckedImage from "./checkbox-empty.svg";

const Wrapper = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`;

const Input = styled.input`
    display: none;
`;

const Label = styled.label`
    line-height: 20px;
`;

const CheckboxImage = styled.div`
    display: inline-block;
    height: 20px;
    width: 20px;
    background-image: url(${({ checked }) => checked ? checkedImage : uncheckedImage});
    background-size: cover;
    cursor: pointer;
    margin-bottom: -3px;
    margin-right: 10px;
`;

const CheckboxInput = ({children, id}) => {
    const [checked, setChecked] = useState(false);
    const onChange = useCallback((event) => {
        setChecked(event.target.checked);
    }, [setChecked]);
    return (
        <Wrapper>
            <Input id={id} type="checkbox" checked={checked} onChange={onChange}/>
            <Label htmlFor={id}>
                <CheckboxImage checked={checked}/>
                {children}
            </Label>
        </Wrapper>
    );
};

export default CheckboxInput;
