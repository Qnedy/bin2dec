import React, { useState } from 'react';
import './Form.css';

import Button from './Button';


export default function Formulario(){
    let [numBin, setNumbin] = useState(0);
    let [numDec, setNumdec] = useState(0);

    let somaDec = 0;

    function handleSubmit(e){
        e.preventDefault();
        let isABinNumber = numBin.match("^[01]+$");
        if(isABinNumber){
            let cont = 0;
            for(let i = numBin.length; i > 0; i--){
                somaDec += (Math.pow(2, cont)) * numBin[i - 1];
                cont++;
            }
            setNumdec(somaDec);
        }
        else{
            alert("Insira somente números binários. Ex: 0110");
        }
    }

    function handlePressed(){
        if(numBin.length > 8){
            alert("O número pode ter no máximo 8 caracteres.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label key="binario">
                    <span>Binário: </span>
                    <input type="number" name="bin" value={numBin} onChange={e => setNumbin(e.target.value)} onKeyPress={handlePressed}/>
                </label>
                <label key="decimal">
                    <span>Decimal: </span>
                    <input type="number" name="dec" value={numDec} onChange={e => setNumdec(e.target.value)} />
                </label><br />
                <Button />
            </fieldset>
        </form>
    );
}