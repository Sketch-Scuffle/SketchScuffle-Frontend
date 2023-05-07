import {
    useEffect,
    MutableRefObject, useRef,
} from 'react';
import {useDrawableCanvas} from '@/hooks/drawableCanvas/drawableCanvas.hook';
import {Point, ToolType} from '@/types/drawableCanvas.types';

export interface CanvasProps {
    // Line drawn on change
    width?: number;
    height?: number;
    disabled?: boolean;
    color?: string;
    toolType?: ToolType;
    lineWidth?: number;
    refs: MutableRefObject<any>;
}

export default function DrawableCanvas({
    refs,
    width = 0,
    height = 0,
    color: _color = "#000000",
    toolType: _toolType = ToolType.Brush,
    lineWidth: _lineWidth = 5,
    disabled = false,
}: CanvasProps) {
    const prevCords = useRef<Point| null>(null);
    const isDrawing = useRef(false);
    const lineWidth = useRef(_lineWidth)
    const toolType = useRef(_toolType);
    const color = useRef(_color);
    const canvasActions = useDrawableCanvas(refs);

    useEffect(() => {
        const canvas = refs.current;
        if (!canvas) {
            return;
        }

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', () => { isDrawing.current = false });

        const context = canvas.getContext('2d', { willReadFrequently: true });
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.imageSmoothingEnabled = true;

        context.strokeStyle = color;
        context.lineWidth = lineWidth.current;

        return () => {
            console.log("Dismount")
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mousemove', handleMouseMove);
        }
    }, [refs])

    useEffect(() => {
        toolType.current = _toolType;
    }, [_toolType])

    useEffect(() => {
        const canvas = refs.current;
        if (!canvas) {
            return;
        }

        const context = canvas.getContext('2d', { willReadFrequently: true });
        lineWidth.current = _lineWidth;
        context.lineWidth = _lineWidth;

        color.current = _color;
        context.strokeStyle = _color;
    }, [_lineWidth, _color]);

    function handleMouseDown(this: HTMLCanvasElement, e: MouseEvent){
        const canvas = this;
        if (!canvas || disabled) {
            return;
        }

        const {offsetX, offsetY} = e;
        switch(toolType.current) {
            case ToolType.Brush:
                const cords = {
                    start: {
                        x: offsetX / canvas.width,
                        y: offsetY / canvas.height
                    },
                    end: {
                        x: offsetX / canvas.width,
                        y: offsetY / canvas.height
                    }
                }

                canvasActions.drawLine(cords)
                prevCords.current = cords.end;
                isDrawing.current = true;

                break;
            case ToolType.Fill:
                console.log("Filling");
                canvasActions.fill({
                    x: offsetX,
                    y: offsetY
                }, color.current);
                console.log("Done");
                break;
        }
    }

    function handleMouseMove(this: HTMLCanvasElement, e: MouseEvent) {
        const canvas = this;
        if (!canvas || !isDrawing.current) {
            return;
        }

        const {offsetX, offsetY} = e;

        const cords = {
            start: prevCords.current!,
            end: {
                x: offsetX / canvas.width,
                y: offsetY / canvas.height
            }
        };

        canvasActions.drawLine(cords)
        prevCords.current = cords.end;
    }

    const handleMouseUp = () => {
        isDrawing.current = false;
    }

    return <canvas
        style={{backgroundColor: "white"}}
        ref={refs}
        width={width}
        height={height}
    />
}