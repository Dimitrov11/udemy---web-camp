function guestList(guest) {
    let guests = ["Angela", "Jack", "Pam", "Lara", "Jason"];

    let guestName = prompt('What is your name?')

    if (guests.includes(guestName)) {
        console.log('Welcome!');
    } else {
        console.log('Sorry, not in the list');
    }
}
guestList();
