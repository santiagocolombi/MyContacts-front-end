import EventManeger from '../lib/EventManeger'


export const toastEventManeger = new EventManeger();

export default function toast({type, text, duration}){
    toastEventManeger.emit('addtoast', {type, text, duration})
}
