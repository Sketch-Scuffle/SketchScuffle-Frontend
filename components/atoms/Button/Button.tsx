import React from 'react';
import cs from "classnames";
import styles from '@/components/atoms/Button/Button.module.scss';
interface ButtonProps{
    variant: 1 | 2 | 3
    child: React.ReactNode
}
export default function Button({variant, child}: ButtonProps){
    return(
        <div className={cs(
            styles.buttonWrapper,
            {
                [styles.variant1]: variant === 1,
                [styles.variant2]: variant === 2,
                [styles.variant3]: variant === 3
            }

        )}>
        </div>
    )
}