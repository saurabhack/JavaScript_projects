function paludrome(num){
    let rev=0
    let copy=num
    while(num!=0){
        let re=num%10
        rev=rev*10+re
        num=parseInt(num/10)
    }
    if(copy==rev){
        return 1
    }else{
        return -1
    }

}

if(paludrome(121)==1){
    console.log("palidrome")
}else{
    console.log("not palidrome")
}