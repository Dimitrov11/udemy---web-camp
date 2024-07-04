// document.addEventListener("keypress", respondToKey(event));

// function respondToKey(event) {
//     console.log("Key is pressed");
// }
// respondToKey(p);



function anotherEventListener(typeOfEvent,  callbackFunc) {
    
    //the code abode run when we anotherEventListener and browser detect the event
    let eventThatHappen = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 1
    };

    // is the eventThatHappen.eventType are same with typeOfEvent
    if (eventThatHappen.eventType === typeOfEvent) {
        // if they are same - trigger the callback 
        callbackFunc(eventThatHappen);
    }
}
anotherEventListener("keypress", function(event) {
    console.log(event);
});


