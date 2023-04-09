import ChatBubble from "@/components/atoms/Chat-Bubble/Chat-Bubble";
import Canvas, {LinePoints, ToolType} from '@/components/atoms/Canvas/Canvas';
import {ChangeEvent, useEffect, useState} from 'react';

export default function GamePage () {
    const [lineToDraw, setLineToDraw] = useState<LinePoints | null>(null);
    const [canDraw, setCanDraw] = useState(false);
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(1);
    const [toolType, setToolType] = useState<ToolType>(ToolType.Brush);

    return (<>
        <Canvas
            width={1500}
            height={900}
            lineWidth={lineWidth}
            color={color}
            disabled={canDraw}
            lineToDraw={lineToDraw}
            toolType={toolType}
        />

        <button onClick={() => setInterval(() => {
            setLineToDraw({
                start: {
                    x: Math.random(),
                    y: Math.random()
                },
                end: {
                    x: Math.random(),
                    y: Math.random()
                }
            })
        }, 1000)}>
            Draw test
        </button>

        <button onClick={() => setCanDraw(!canDraw)}>
            Set Draw
        </button>

        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
            // @ts-ignore
            setColor(event.nativeEvent.target!.value);
        }} type={'color'} />
        <input min={1} max={10} type={'range'} onChange={(event) => {
            //@ts-ignore
            setLineWidth((event.nativeEvent.target!.value));
        }} />

        <select onChange={(e) => {
            //@ts-ignore;
            console.log(e.nativeEvent.target.value);
            //@ts-ignore
            setToolType(Number(e.nativeEvent.target.value));
        }}>
            <option value={ToolType.Brush}>Brush</option>
            <option value={ToolType.Fill}>Fill</option>
        </select>
    </>)
}
