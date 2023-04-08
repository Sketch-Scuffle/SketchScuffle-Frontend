import {MouseEventHandler, MouseEvent, useEffect, useRef, useState} from 'react';

export enum ToolType {
    Brush,
    Fill,
    Eraser
}


type Point = {
    x: number,
    y: number
}

export interface CordsSet {
    start: Point,
    end: Point
}

export interface CanvasProps {
    width?: number;
    height?: number;
    cordsDraw: CordsSet | null;
    canDraw?: boolean;
    color?: string;
    lineWidth?: number;
    onDraw?: (cords: CordsSet) => void;
    toolType?: ToolType;
}


function getPixel(pixelData: any, x: number, y: number) {
    if (x < 0 || y < 0 || x >= pixelData.width || y >= pixelData.height) {
        return -1;  // impossible color
    } else {
        return pixelData.data[y * pixelData.width + x];
    }
}

export default function Canvas({width=0, height=0, cordsDraw, canDraw=false, color='#000000', lineWidth=1, onDraw, toolType=ToolType.Brush}: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [prevCords, setPrevCords] = useState<Point| null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) { return; }

        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) { return; }

        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.imageSmoothingEnabled = true;
        contextRef.current = context;
        console.log(context)
    }, [])

    useEffect(() => {
        if (!contextRef.current) {
            return;
        }

        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = lineWidth;
    }, [color, lineWidth])

    useEffect(() => {
        if (cordsDraw) { draw(cordsDraw); }
    }, [cordsDraw])


    const fill = (ctx: CanvasRenderingContext2D, point: Point) => {
        const fillColor = parseInt('0xff' + color?.slice(1).match(/.{1,2}/g)!.reverse().join(""), 16);
        console.log(color);
        console.log('0xff' + color?.slice(1).match(/.{1,2}/g)!.reverse().join(""))

        const imageData = ctx.getImageData(0, 0, width, height)!;
        const pixelData = {
            width: imageData.width,
            height: imageData.height,
            data: new Uint32Array(imageData.data.buffer)
        }

        console.log(imageData);

        const targetColor = getPixel(pixelData, point.x, point.y);
        if (targetColor !== fillColor) {
            const pixelsToCheck: number[] = [point.x, point.y];
            while (pixelsToCheck.length > 0) {
                const y = pixelsToCheck.pop()!;
                const x = pixelsToCheck.pop()!;
                const currentColor = getPixel(pixelData, x, y);

                if (currentColor === targetColor) {
                    pixelData.data[y * pixelData.width + x] = fillColor;
                    pixelsToCheck.push(x + 1, y);
                    pixelsToCheck.push(x - 1, y);
                    pixelsToCheck.push(x, y + 1);
                    pixelsToCheck.push(x, y - 1);
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    }


    const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
        if (!canDraw) {
            return;
        }

        const {offsetX, offsetY} = e.nativeEvent;

        switch(toolType) {
            case ToolType.Brush:
                contextRef.current?.beginPath();
                contextRef.current?.moveTo(offsetX, offsetY);
                contextRef.current?.lineTo(offsetX, offsetY);
                contextRef.current?.stroke();

                const cords = {
                    start: {
                        x: offsetX / width,
                        y: offsetY / height
                    },
                    end: {
                        x: offsetX / width,
                        y: offsetY / height
                    }
                };
                if (onDraw)
                    onDraw(cords);

                setPrevCords(cords.end);
                setIsDrawing(true);
                break;
            case ToolType.Fill:
                console.log("Filling");
                fill(contextRef.current!, {
                    x: offsetX,
                    y: offsetY
                });
                console.log("Done");
                break;
        }
    }

    const handleMouseUp = () => {
        setIsDrawing(false);
    }

    const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) { return; }
        const {offsetX, offsetY} = e.nativeEvent;

        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();


        const cords = {
            start: prevCords!,
            end: {
                x: offsetX / width,
                y: offsetY / height
            }
        };

        if (onDraw && prevCords) {
            onDraw(cords);
        }

        setPrevCords(cords.end);
    }

    const draw = (cordsDraw: CordsSet) => {
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(cordsDraw.start.x * width, cordsDraw.start.y * height);
        contextRef.current?.lineTo(cordsDraw.end.x * width, cordsDraw.end.y * height);
        contextRef.current?.stroke();
    }

    return <canvas
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={() => { setIsDrawing(false) }}
        style={{backgroundColor: "white"}}
        ref={canvasRef}
        width={width}
        height={height}
    />
}