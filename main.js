
const qr_gen="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    let url=document.querySelector(".address").value;
    if(url.length==0)return alert("Input a link")
    if(url.startsWith("http")){
        console.log("true")
        url=url.slice(12)
    }
    else if(url.startsWith("www")){
       url= url.slice(4)
    }
let ans=qr_gen+url;
window.open(ans,"_blanck");


})
