let myform=document.querySelector("#myform")


// let h3=document.createElement("h3")
// let p=document.createElement("p")
let submit=document.querySelector("#submit")
myform.addEventListener('submit',function(e){
    e.preventDefault();
     let product=document.querySelector("#product").value;
     let price=document.querySelector("#price").value;
     let h3 = document.createElement("h3");
     let p = document.createElement("p");
     h3.innerHTML = product;
     p.innerHTML = price;
     let div=document.querySelector(".box") 
     div.appendChild(h3);
     div.appendChild(p);
})
