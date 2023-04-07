import styles from '@/components/atoms/Chat-Bubble/Chat-Bubble.module.scss';
import cs from "classnames";
interface ChatBubbleProps{
    owner: string
    text: string
    date: Date
    variant: 1 | 2
}

export default function ChatBubble({owner,text,date,variant}:ChatBubbleProps){
    return(
        <div className={styles.chatBubbleContainer}>
            <div className={cs(
                styles.chatBubbleInfo,
                {
                    [styles.variant1]: variant === 1,
                    [styles.variant2]: variant === 2,
                }
            )}>
                <p>{owner}</p>
                <p>{date.toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric' })}</p>
            </div>
            <div className={cs(
                styles.chatBubbleText,
                {
                    [styles.variant1]: variant === 1,
                    [styles.variant2]: variant === 2,
                }
            )}
            >
                {text}
            </div>
        </div>
    )
}