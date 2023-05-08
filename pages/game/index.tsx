import DrawableCanvas from '@/components/atoms/Canvas/DrawableCanvas';
import {ChangeEvent, useRef, useState} from 'react';
import {ToolType} from '@/types/drawableCanvas.types';
import SideMenu from "@/components/atoms/Side-Menu/Side-Menu";
import Send from "@/components/molecules/Send/Send";
export default function GamePage () {
    const canvasRef = useRef(null);
    const [disabled, setDisabled] = useState(false);
    const [toolType, setToolType] = useState(ToolType.Brush)
    const [lineWidth, setLineWidth] = useState(5);
    const [color, setColor] = useState("#000000");

    const tabs = {
        Chat: "Chat",
        Scoreboard: "Scoreboard",
    };

    return (<>
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
        <SideMenu tabs={tabs} />
        <Send/>
    </>)
}
