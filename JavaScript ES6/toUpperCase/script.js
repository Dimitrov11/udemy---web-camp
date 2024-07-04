function hello(name) {
        
    // let firstLetterName = name.slice(0,1).toUpperCase();
    // let restOfTheName = name.slice(1, name.length);
    // let newName = firstLetterName + restOfTheName;
    
    // console.log("Hello " + newName);


    // let modStr = name[0].toUpperCase() + name.slice(1);
    // console.log(modStr);


    let changedStr = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(changedStr);

}
hello("angela");
hello("krasIMira");
hello("plaMENA");