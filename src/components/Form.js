import React from 'react';
import Button from './Button';

const inputs = [
    {
        name: 'bin',
        key: 'binario',
        label: 'Binário',
        value: 0
    },
    {
        name: 'dec',
        key: 'decimal',
        label: 'Decimal',
        value: 0
    },
];

export default function Formulario(){
    return (
        <form>
            <fieldset>
                {
                    inputs.map(item => (
                        <label key={item.key}>
                            <span>{item.label}: </span>
                            <input type="number" name={item.name} value={item.value} onChange={e => e.taget.value}/>
                        </label>
                    ))
                }
                <Button />
            </fieldset>
        </form>
    );
}