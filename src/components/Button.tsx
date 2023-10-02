import React from "react";

export interface ButtonProps {
    label: string
    handler: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({label, handler}: ButtonProps) {
    return <button className={'btn'} onClick={handler}>{label}</button>
}