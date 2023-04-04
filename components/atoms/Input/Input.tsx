import styles from './Input.module.scss'

export interface InputProps{
    placeholder: string
}
export default function Input({placeholder}: InputProps) {
    return <input placeholder={placeholder} type="text" className={styles.input} autoComplete={"off"} />
}