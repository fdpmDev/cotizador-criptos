// Hook personalizado
import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

export const useSelectMonedas = (label, opciones) => {
    // Con el proposito de que sea reutilizable
    const [state, setState] = useState('')
    // para enviar contenido html debes retornar () y no {} en caso de funcion
    const SelectMonedas = () => (
        // console.log('Desde select monedas')
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>

                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectMonedas ]
}
