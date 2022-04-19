import React, { useState } from 'react';
import styles from './calculadora.module.css'
import { CalculateImc, Level, levels } from '../../helpers/imc'
import { GridItem } from '../griditem';
import Button from '../button'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const Calculadora = () => {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);


    const handlePeso = (event: InputChangeEvent) => {
        setPeso(event.target.valueAsNumber)
    }

    const handleAltura = (event: InputChangeEvent) => {
        setAltura(event.target.valueAsNumber)
    }

    const handleCalcular = () => {
        if (peso && Number.isInteger(altura) === false) {
            setToShow(CalculateImc(altura, peso))            
        } else {
            alert('Precisa preencher os campos, EX: peso( 80 ) altura( 1,50 )!!!')
        }
    }

    const handleBackButton = () => {
        setToShow(null);
        setPeso(0)
        setAltura(0)
    }

    return (
        <>
            <div className={styles.calculadora}>
                <div className={styles.calculadora__one}>
                    <label htmlFor="peso">Peso:</label>
                    <input type="number"
                        value={peso > 0 ? peso : ""}
                        onChange={handlePeso}
                        placeholder="Digite o seu peso 80"
                        disabled={toShow ? true : false}
                     />

                    <label htmlFor="altura">Altura:</label>
                    <input type="number"
                        value={altura > 0 ? altura : "Digite a sua altura"}
                        onChange={handleAltura}
                        placeholder="Digite o seu altura 1,50"
                        disabled={toShow ? true : false}
                    />
                    <button 
                    onClick={handleCalcular}
                    disabled={toShow ? true : false}
                    >Calcular a sua altura</button>
                </div>
                <div className={styles.calculadora__two}>
                    <div className={styles.calculadora__box}>
                        {!toShow &&
                            <ul>
                                {levels.map((item, index) => (
                                    <GridItem key={index} item={item} />
                                ))}
                            </ul>
                        }
                        {toShow &&
                            <ul className={styles.list}>
                                <GridItem item={toShow} />
                                <Button
                                    text="Voltar"
                                    funcao={handleBackButton}
                                />
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Calculadora;