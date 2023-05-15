import styles from "./Input.module.scss";

export interface InputProps {
  placeholder: string;
  onChange(args: any): void;
  value: string;
}
export default function Input({ placeholder, onChange, value }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className={styles.input}
      autoComplete={"off"}
      onChange={onChange}
      value={value}
    />
  );
}
