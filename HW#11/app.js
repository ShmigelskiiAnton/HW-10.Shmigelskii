
function encore(num, codingString) {
    let flRepeated = false;
    for (let i = 0; i < codingString.length; i++) {
        if(codingString.lastIndexOf(codingString[i]) != i) {
            console.log(`coding string has repeated symbol ${codingString[i]}`);
            flRepeated = true;
        }
    }
    if(!flRepeated){
        let res = "";
        const base = codingString.length;
        do{
            const digit = Math.trunc(num % base);
            const digitSymb = codingString[digit];
            res = digitSymb + res;
            num = Math.trunc( num / base);
        }
        while(num != 0);
        return res;
    }

}
console.log(`encore(5, '&&&') = ${encore(5, '&&&')}`);
console.log(`encore(1, '.---') = ${encore(1, '.---')}`);
console.log(`encore(3, '...--') = ${encore(3, '...--')}`);

