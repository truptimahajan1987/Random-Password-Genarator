const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1 =document.querySelector(".fa-copy");
const alertconatinerE1 = document.querySelector(".alert-container");

btnE1.addEventListener("click", ()=>{
    updatePassword();
});
copyIconE1.addEventListener("click",()=>{
    copyPassword();
    if(inputE1.value){
    alertconatinerE1.classList.remove("active");
    setTimeout(()=>{
        alertconatinerE1.classList.add("active");
    },2000);
}
});

function updatePassword(){
    const passwordChar ="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*():<>?\ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordNum = 14;
    let password = "";
    for(let i=0;i<=passwordNum;i++)
    {
        const randomNum = Math.floor(Math.random() * passwordChar.length);
        
        password += passwordChar.substring(randomNum, randomNum+1);
        console.log(randomNum, password);
        inputE1.value = password;
        alertconatinerE1.innerText = password +" " + "Copied!!"

    }
}
function copyPassword()
{
    inputE1.select();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputE1.value);
    
}