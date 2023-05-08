import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import SendSvg from "@/public/icons/send.svg";
import styles from '@/components/molecules/Send/Send.module.scss'
export default function Send(){

    return(
        <div className={styles.sendWrapper}>
            <Input placeholder={"Type..."}></Input>
            <Button variant={"primary"} size={"small"} className={styles.padd}><SendSvg/></Button>
        </div>
    )
}