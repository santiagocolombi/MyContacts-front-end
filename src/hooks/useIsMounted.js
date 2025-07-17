import { useEffect, useRef } from "react";

export default function useIsMounted() {
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false; // Quando desmontar, define como false
        };
    }, []);

    return isMounted;
}
