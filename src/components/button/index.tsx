import styles from './button.module.css'

type Props = {
    text?: string;
    onClick?: any;
    disabled?: boolean;
    funcao?: () => void;
}

const Button = ({ text, onClick, disabled, funcao }: Props) => {

    return (
        <>
            <button className={styles.button} disabled={disabled} onClick={funcao}>{text}</button>
        </>
    )
}


export default Button