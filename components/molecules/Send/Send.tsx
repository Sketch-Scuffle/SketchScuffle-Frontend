import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import styles from '@/components/molecules/Send/Send.module.scss'
export default function Send(){

    return(
        <div className={styles.sendWrapper}>
            <Input placeholder={"Type..."}></Input>
            <Button onClick={()=>{console.log("send")}} variant={"primary"} size={"small"} className={styles.padd}><Image src={"/icons/send.svg"} alt={""} width={21} height={18}></Image></Button>
        </div>
    )
}