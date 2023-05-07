import React, {ReactElement} from 'react';
import styles from '@/components/atoms/Section/Section.module.scss';
import cs from 'classnames';

interface SectionProps{
    title?: boolean
    titleText?: string
    side: 'left' | 'right'
}
export default function Section ({title, titleText, side, children}: React.PropsWithChildren<SectionProps>){

    return(
        <>
            {title &&
                <div className={styles.titleContainer}>
                    <div className={styles.border}></div>
                    <div className={styles.title}><p>{titleText}</p></div>
                </div>
            }
            <div className={cs(
                styles.sectionContainer,{
                    [styles.left]: side === 'left',
                    [styles.right]: side === 'right'
                }
            )}>
                {children}
            </div>
        </>
    )

}