import { useState } from "react"
import { useEffect } from "react";
import { useCallback } from "react";
import { Container } from "./styles"
import ToastMessage from "./ToastMessage"
import { toastEventManeger } from "../../../utils/toast";
export default function ToastContainer() {
    const [messages, setMessages] = useState([

    ]);
    useEffect(() => {
        function handleAddToast({type, text, duration }){

            setMessages((prevState) => [
                ...prevState,
                {id: Math.random(), type, text, duration},
            ]);
        }
        toastEventManeger.on('addtoast',handleAddToast)
        return () => { //para remover o listener
            toastEventManeger.removeListener('addtoast', handleAddToast)
        };
    }, [])
    const handleRemoveMessage= useCallback((id) => {
       setMessages((prevState) => prevState.filter(
        (message) => message.id !== id,
       ))
    },[])
    return( <Container>
            {messages.map((message =>(
                <ToastMessage
                key={message.id}
                message={message}
                onRemoveMessage={handleRemoveMessage }/>
            )))}
        </Container>
        )
}
