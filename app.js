// 1

var arr=['1','2','3','4','5','6','7','8','9','10']
document.write(arr+'<br>')
for(var i=0;i<=arr.length;i++){
if(i%2==0){
  document.write(i)
}
}

// 2

var str='web development'
console.log(str);
var reverse=str.split("").reverse().join("")
console.log(reverse);

// 3

var arr=['1','2','3','4','5','6','7','8','9','10']

for(var i=2;i<=arr.length;i++){
    if(i===2){
        console.log('its is prime Number: '+i);
    }
    else if(i===3){
        console.log('its is prime Number: '+i);
    }
    else if( i===5){
        console.log('its is prime Number: '+i);
    }
    else if(i===7){
        console.log('its is prime Number: '+i);
    }

    else{
        console.log('its is not prime number');
    }
}

// 4

var maximumNumber=Math.max('34','64','87','20','10')
console.log(maximumNumber);

// 5

var palindromeWord='madam'
console.log(palindromeWord+' its input before palindrome');
var reverse=palindromeWord.split('').reverse().join('')
console.log(reverse+' its output after palindrome');

// 6
// ???
// var fabonacciInput=[0+1+1+2+3+5+8+13+21]
// console.log(fabonacciInput);

// 7

var vowels='aeiou'
vowelscounting=0;
for (var i = 0; i < vowels.length; i++) {
    if (vowels.includes(vowels[i])) {
        console.log(vowelscounting++);
    }
}

// 8

var factorialInput=5
var result=factorialInput*4*3*2*1;
console.log(result);

// 9

var digitInput=10
var result=2*5
console.log(result);

// 10

var list='1,2,3,4,5'
// for(var i=list;i>=0;i--){
//     console.log(i);
// }
var reverse=list.split('').reverse().join('')
console.log(reverse);














