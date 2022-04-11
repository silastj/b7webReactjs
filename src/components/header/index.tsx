import styles from './header.module.css'
import { ReactNode } from 'react'

type Props = {
    title: string;
    text: string;
    children: ReactNode;
}

export default function Header({ title, text, children }: Props) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <p>{text}</p>
            {children}
        </header>
    )
}