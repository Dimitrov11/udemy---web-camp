function loveCalculator() {
    
    let firstName = prompt('Please, enter the first name:');
    let secondName = prompt('Please, enter the second name:');

    if (firstName == undefined || secondName == undefined) {
        let msg = alert("Please refresh the page and enter a names!"); 
        return msg;
    }

    let theNum = Math.random() * 100;
    let loveScore = Math.floor(theNum) + 1;
    let loveResult;

    if(loveScore >= 80) {
        loveResult = alert(`Perfect match! ${firstName} and ${secondName}`);
    } else {
        loveResult = alert(`The love score between ${firstName} and ${secondName} is ${loveScore} %`);
    }   
  
}
loveCalculator()