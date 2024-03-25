function cal(n1 , n2 , operator){
    switch(operator){
        case '+':
            console.log(`addition = ${n1+n2}`);
            break;

        case '-':
            console.log(`substraction = ${n1-n2}`);
            break;

        case '/':
            console.log(`division = ${n1/n2}`);
            break;

        case '%':
            console.log(`percetage = ${n1%n2}`);
            break;

        default:
            console.log(`not a vaild opration`);
            break;
    }
}

cal(10,5,'+');
cal(10,5,'-');
cal(10,5,'%');
cal(10,5,'/');
cal(10,5,'.');