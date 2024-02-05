import { useEffect, useMemo } from "react";
import { useMouse } from "./useMouse";

export const useMouseOverZoom = (
    source: React.RefObject<HTMLImageElement>,
    target: React.RefObject<HTMLCanvasElement>,
    cursor: React.RefObject<HTMLElement>,
    radius = 25,
    zoomFactor = 4 // You can adjust this factor to control the zoom level
) => {
    const { x, y } = useMouse(source);

    const zoomBounds = useMemo(() => {
        return {
            left: x - radius,
            top: y - radius,
            width: radius * 2 * zoomFactor, // Adjusted width for zoom
            height: radius * 2 * zoomFactor, // Adjusted height for zoom
        };
    }, [x, y, radius, zoomFactor]);

    useEffect(() => {
        const { left, top, width, height } = zoomBounds;

        if (cursor.current) {
            cursor.current.style.left = `${left}px`;
            cursor.current.style.top = `${top}px`;
            cursor.current.style.width = `${width}px`;
            cursor.current.style.height = `${height}px`;
        }

        if (source.current && target.current) {
            const ctx = target.current.getContext("2d");

            if (ctx) {
                const imageRatio = source.current.naturalWidth / source.current.width;
                ctx.clearRect(0, 0, target.current.width, target.current.height);
                ctx.drawImage(
                    source.current,
                    left * imageRatio,
                    top * imageRatio,
                    width * imageRatio,
                    height * imageRatio,
                    0,
                    0,
                    target.current.width,
                    target.current.height
                );
            }
        }
    }, [zoomBounds, source, target, cursor]);
};
