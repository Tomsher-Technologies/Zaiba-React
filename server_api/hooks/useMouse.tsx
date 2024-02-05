import { useEffect, useState } from "react";

export const useMouse = (ref: React.RefObject<HTMLElement>) => {
    const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setMouse({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [ref]);

    return mouse;
};
