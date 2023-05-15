import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import styles from "@/components/molecules/Send/Send.module.scss";
import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "@/context/Game/GameContext";
export default function Send() {
  const [message, setMessage] = useState<string>("");
  const { sendMessage } = useContext(GameContext);
  return (
    <div className={styles.sendWrapper}>
      <Input
        placeholder={"Type..."}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setMessage(e.target.value);
        }}
        value={message}
      ></Input>
      <Button
        onClick={() => {
          sendMessage(message);
        }}
        variant={"primary"}
        size={"small"}
        className={styles.padd}
      >
        <Image src={"/icons/send.svg"} alt={""} width={21} height={18}></Image>
      </Button>
    </div>
  );
}
