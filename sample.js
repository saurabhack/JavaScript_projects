let number=123
let reverse=0;
while(number!=0){
    let r=number%10
    reverse=reverse*10+r
    number=parseInt(number/10)
}
console.log(reverse)