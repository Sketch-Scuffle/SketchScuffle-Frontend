export type Point = {
    x: number,
    y: number
}

export interface LinePoints {
    start: Point,
    end: Point
}

export enum ToolType {
    Brush = "brush",
    Fill = "fill",
    // Eraser = "Eraser"
}