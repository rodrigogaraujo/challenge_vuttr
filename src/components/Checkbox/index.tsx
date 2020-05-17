import React, { InputHTMLAttributes, useRef, useEffect } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Checkbox: React.FC<InputProps> = ({ name, ...rest }) => {
    const { fieldName, registerField } = useField(name);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        registerField({
            name: name,
            ref: inputRef.current,
            path: "checked",
        });
    }, [name, registerField]);
    return (
        <Container>
            <input type="checkbox" {...rest} ref={inputRef} />
        </Container>
    );
};

export default Checkbox;
