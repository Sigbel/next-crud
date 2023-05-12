import React from "react"

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children: any
}

export default function Botao(props: BotaoProps) {
    return (
        <button>
            {props.children}
        </button>
    )
}