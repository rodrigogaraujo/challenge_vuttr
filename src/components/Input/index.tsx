import React, { InputHTMLAttributes, useRef, useEffect } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const { fieldName, registerField } = useField(name);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        registerField({
            name: name,
            ref: inputRef.current,
            path: "value",
        });
    }, [name, registerField]);
    return (
        <Container>
            {Icon && <Icon size={15} />}
            <input {...rest} ref={inputRef} />
        </Container>
    );
};

export default Input;
