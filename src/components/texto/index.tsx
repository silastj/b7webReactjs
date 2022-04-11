import styles from './texto.module.css'

type Props = {
    text?: string;
}

const Texto = ({text}: Props) => {
    return(
        <div className={styles.texto}>
            <p>{text}</p>
        </div>
    )
}

export default Texto;