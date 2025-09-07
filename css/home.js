
// login/signup click feedback 
document.querySelector(".signup a").addEventListener("click",()=>{
    alert("Signup feature coming soon!.")
});

document.querySelector(".login a").addEventListener("click",()=>{
    alert("Login feature coming soon!.")
});

// finding city
const cityCards=document.querySelectorAll(".city-card img");
for(let img of cityCards){
    if(img.src.includes(cityImage)){
        img.scrollIntoView({behavior:"smooth",block:"center"});
        img.parentElement.style.boxShadow="0 0 15px 5px #ff6600";
        setTimeout(() => {
            img.parentElement.style.boxShadow="none";
        }, 2000);
        break;
    }
}