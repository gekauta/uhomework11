let x= +prompt('Введите первое число',0);
let y= +prompt('Введите третье число',0);
let z= +prompt('Введите второе число',0);
if (x>y) {
    if (x>z) {
        alert(x)
           }
     else if (z>y){
         alert(z)}
        else {}
    }
     else {alert(y)}

// function max (x, y, z) {
//     let maximum = x;
//     if (y > maximum) { maximum = y;}
//     if (z > maximum) { maximum = z;}
//     return maximum;
// }
// alert(max(x, y, z));