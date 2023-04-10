import React, {PropsWithChildren} from 'react';
import cs from "classnames";
import styles from '@/components/atoms/Button/Button.module.scss';
interface ButtonProps{
    variant: 1 | 2 | "send" | "signin" | "login" | "google"
    size?: "small" | "medium" | "large" | "x-large" | "xx-large"
    className?: string
    //TODO delete optionality on onClick
    onClick?: () => void
}
export default function Button({variant, size, className, onClick, children}: PropsWithChildren<ButtonProps>){
    return(
        <div className={styles.buttonBorder}>
            <button onClick={onClick} className={cs(
                styles.buttonWrapper,
                {
                    // Variants
                    [styles.variant1]: variant === 1,
                    [styles.variant2]: variant === 2,
                    [styles.signin]: variant === "signin",
                    [styles.login]: variant === "login",
                    [styles.google]: variant === "google",

                    // Sizes
                    [styles.small]: size === "small",
                    [styles.medium]: size === "medium",
                    [styles.large]: size === "large",
                    [styles.xlarge]: size === "x-large",
                    [styles.xxlarge]: size === "xx-large",

                },
                className

            )}>
                {children}
            </button>
        </div>
    )
}