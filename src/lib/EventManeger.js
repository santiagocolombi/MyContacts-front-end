export default class EventMeneger {
constructor(){
    this.listeners = new Map()

}
on(event, listener){
    if(!this.listeners.has(event)){
        this.listeners.set(event, []);
    }
    this.listeners.get(event).push(listener)
}
emit(event, payload){
    if(!this.listeners.has(event)){
        return;
    }

    this.listeners.get(event).forEach((listener) => {
        listener(payload);
    })
}
removeListener(event, listenerToRemove){
    const listeners = this.listeners.get(event);
    if(!listeners){
        return;
    }

    const filteredListeners = listeners.filter(
        (listener) => listener !== listenerToRemove
    );

    this.listeners.set(event , filteredListeners);
}
}
const toastEventManeger = new EventMeneger();

function addToast1(payload){
    console.log('addtoast listener1 ' , payload)
}
function addToast2(payload){
    console.log('addtoast listener2 ' , payload)
}
toastEventManeger.on('addtoast', addToast1)
toastEventManeger.on('addtoast', addToast2)

toastEventManeger.emit('addtoast', {type:'danger', text: 'Texto'});

toastEventManeger.removeListener('addtoast', addToast1);

toastEventManeger.emit('addtoast', 'depois de remover');
console.log(toastEventManeger)
