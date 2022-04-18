import React, { useState } from 'react';
import styles from './calculadora.module.css'
import { CalculateImc, levels } from '../../helpers/imc'
import { GridItem } from '../griditem';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const Calculadora = () => {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);


    const handlePeso = (event: InputChangeEvent) => {
        setPeso(event.target.valueAsNumber)
    }

    const handleAltura = (event: InputChangeEvent) => {
        setAltura(event.target.valueAsNumber)
    }

    const handleCalcular = () => {
        if (peso && altura) {
            CalculateImc(altura, peso)
        } else {
            alert('Precisa preencher os inputs!!!')
        }
    }

    return (
        <>
            {console.log('levels :', levels)}
            <div className={styles.calculadora}>
                <div className={styles.calculadora__one}>
                    <label htmlFor="peso">Peso:</label>
                    <input type="number"
                        value={peso > 0 ? peso : ""}
                        onChange={handlePeso}
                        placeholder="Digite o seu peso" />

                    <label htmlFor="altura">Altura:</label>
                    <input type="number"
                        value={altura > 0 ? altura : "Digite a sua altura"}
                        onChange={handleAltura}
                        placeholder="Digite o seu altura"
                    />
                    <button onClick={handleCalcular}>Calcular a sua altura</button>
                </div>
                <div className={styles.calculadora__two}>
                    <div className={styles.calculadora__box}>
                        <ul>
                            {levels.map((item, index) => (
                                <GridItem key={index} item={item}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Calculadora;