function fibonacciGenerator(n) {
    let arr = [];

    if(n === 1) {
        arr = [0];
    } else if (n === 2){
        arr = [0, 1];
    } else {
        arr = [0, 1];
        
        for (let i = 2; i < n; i++) {
            arr.push(arr[arr.length- 2] + arr[arr.length - 1]);         
        }
    }
    console.log(arr);
}
fibonacciGenerator(10);