import { useEffect, useRef, useCallback } from "react";

export default function useIsMounted(){
    const IsMounted = useRef((false));

    useEffect(() => {
        IsMounted.current = false
    },[])

    const getIsMounted = useCallback(() => IsMounted.current, [])



    return getIsMounted;
}
