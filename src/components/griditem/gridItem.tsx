import { Level } from '../../helpers/imc'
import styles from './griditem.module.css'
import ok from '../../img/ok.png'
import negativo from '../../img/negativo.png'

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.griditem} style={{ backgroundColor: item.color }}>
            <img src={item.icon === 'up' ? ok : negativo} alt={item.title} />
            <p className={styles.title}>{item.title}</p>
            <p>O seu IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></p>
            {item.yourImc &&
                <p>O seu valor é: {item.yourImc}</p>
            }
        </div>
    )
}