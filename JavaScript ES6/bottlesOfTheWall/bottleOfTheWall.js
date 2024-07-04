function beer(num) {

    while(num > 0){
        let bottlesOnTheWall = num;
        let bottlesLeft = bottlesOnTheWall-1;
        num--;
        console.log(`${bottlesOnTheWall} bottles of beer on the wall. Take 1 down, ${bottlesLeft} bottles left`);
    }
}
beer(10);