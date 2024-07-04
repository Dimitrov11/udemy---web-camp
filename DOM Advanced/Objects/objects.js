// let bellBoy = {
//     name: "Timmy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["French", "English"]
// }

// console.log(`Hello, my name is ${bellBoy.name}. I speak two languages which are ${bellBoy.languages[0]} and ${bellBoy.languages[1]}`);



function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function() {
        console.log("I'm here to clean the room.");
    }  
}
    let houseKeeper1 = new HouseKeeper(9, 'Jane', ['lobby', 'bathrooms']);
    houseKeeper1.cleaning();