import styles from './list.module.css'

type Props ={
    data:{
        name: string;
        age: number;
    }
}

const List = ({data}: Props) => {
    return (
        <li className={styles.list}>{data.name} - {data.age}</li>
    )
}

export default List