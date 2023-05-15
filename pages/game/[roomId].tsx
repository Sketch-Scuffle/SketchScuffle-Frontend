import DrawableCanvas from "@/components/atoms/Canvas/DrawableCanvas";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { ToolType } from "@/types/drawableCanvas.types";
import GameSideBar from "@/components/organisms/Game-Side-Bar";
import { UserContext, UserContextProvider } from "@/context/User/UserContext";
import { GameContext, GameContextProvider } from "@/context/Game/GameContext";
import { useRouter } from "next/router";

type Game = {
  roomId: string;
  playersData: [];
  roomSettings: string;
};

export default function GamePage() {
  const router = useRouter();
  const canvasRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [toolType, setToolType] = useState(ToolType.Brush);
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState("#000000");

  if (!router.query.roomId || Array.isArray(router.query.roomId)) return;

  return (
    <UserContextProvider>
      <GameContextProvider roomId={router.query.roomId}>
        {/*<DrawableCanvas*/}
        {/*    refs={canvasRef}*/}
        {/*    width={1500}*/}
        {/*    height={900}*/}
        {/*    toolType={toolType}*/}
        {/*    color={color}*/}
        {/*    lineWidth={lineWidth}*/}
        {/*    disabled={disabled}*/}
        {/*/>*/}

        {/*<button onClick={() => setDisabled(!disabled)}>*/}
        {/*    Set Draw*/}
        {/*</button>*/}

        {/*<input onChange={(event: ChangeEvent<HTMLInputElement>) => {*/}
        {/*    // @ts-ignore*/}
        {/*    setColor(event.nativeEvent.target!.value);*/}
        {/*}} type={'color'} />*/}
        {/*<input min={1} max={10} type={'range'} onChange={(event) => {*/}
        {/*    //@ts-ignore*/}
        {/*    setLineWidth((event.nativeEvent.target!.value));*/}
        {/*}} />*/}

        {/*<select onChange={(e) => {*/}
        {/*    //@ts-ignore;*/}
        {/*    console.log(e.nativeEvent.target.value);*/}
        {/*    //@ts-ignore*/}
        {/*    setToolType(e.nativeEvent.target.value)*/}
        {/*}}>*/}
        {/*    <option value={"brush"}>Brush</option>*/}
        {/*    <option value={"fill"}>Fill</option>*/}
        {/*</select>*/}
        <GameSideBar></GameSideBar>
      </GameContextProvider>
    </UserContextProvider>
  );
}
