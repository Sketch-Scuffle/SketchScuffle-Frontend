import { MutableRefObject, useEffect, useRef} from 'react';
import {LinePoints, Point} from '@/types/drawableCanvas.types';

function getPixel(pixelData: any, x: number, y: number) {
    if (x < 0 || y < 0 || x >= pixelData.width || y >= pixelData.height) {
        return -1;  // impossible color
    } else {
        return pixelData.data[y * pixelData.width + x];
    }
}

export const useDrawableCanvas = (canvasRef: MutableRefObject<HTMLCanvasElement | null> ) => {
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const context = canvasRef.current?.getContext('2d', { willReadFrequently: true });
        if (!context) {
            return;
        }

        // Context initial settings
        contextRef.current = context;
    }, [canvasRef])


    const fill = (canvas: HTMLCanvasElement, point: Point, color: string) => {
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const fillColor = parseInt('0xff' + color?.slice(1).match(/.{1,2}/g)!.reverse().join(""), 16);
        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)!;
        const pixelData = {
            width: imageData.width,
            height: imageData.height,
            data: new Uint32Array(imageData.data.buffer)
        }

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

        ctx?.putImageData(imageData, 0, 0);
    }

    const drawLine = (canvas: HTMLCanvasElement, cordsDraw: LinePoints) => {
        if (!canvas) {
            return;
        }
        const context = canvas.getContext('2d', { willReadFrequently: true });

        context?.beginPath();
        context?.moveTo(cordsDraw.start.x * canvas.width, cordsDraw.start.y * canvas.height);
        context?.lineTo(cordsDraw.end.x * canvas.width, cordsDraw.end.y * canvas.height);
        context?.stroke();
    }

    const actions = {
        drawLine: (cordsDraw: LinePoints) => {
            drawLine(canvasRef.current!, cordsDraw);
        },
        fill: (point: Point, color: string) => {
            fill(canvasRef.current!, point, color);
        }
    };


    return actions;
}