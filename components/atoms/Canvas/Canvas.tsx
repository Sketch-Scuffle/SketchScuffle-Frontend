import {MouseEventHandler, MouseEvent, useEffect, useRef, useState} from 'react';

type Point = {
    x: number,
    y: number
}

interface CordsSet {
    start: Point,
    end: Point
}

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [cords, setCords] = useState<CordsSet[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        console.log("Rerender");
        const canvas = canvasRef.current;
        if (!canvas) { return; }

        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) { return; }

        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        context.imageSmoothingEnabled = true;
        contextRef.current = context;

    }, [])

    const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
        const {offsetX, offsetY} = e.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();

        setIsDrawing(true);
    }

    const handleMouseUp = () => {
        setIsDrawing(false);
    }

    const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) { return; }
        const {offsetX, offsetY} = e.nativeEvent;
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();
    }

    return <canvas
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={() => { setIsDrawing(false) }}
        style={{backgroundColor: "white"}}
        ref={canvasRef}
        width={'1500'}
        height={'900'}
    />
}