let x = prompt('Введите целое число', 0);
let text = '';
let a = x.length;
// alert(a -=1)
(Math.sign(Number(x)))>0 ? text = 'положительное' : (text =" отрицательное", a -=1);
console.log((Math.sign(Number(x)))>0);
 Number.isInteger(Number(x)) ? alert(`Число "${x}" ${a}-значное ${text} `) : alert(`Число ${x} ${a}-значное${text}`)

