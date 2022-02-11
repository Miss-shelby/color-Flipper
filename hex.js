const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
console.log(hex)

const btn = document.getElementById("btn")
const color= document.querySelector(".color")
btn.addEventListener("click",function(){
    let hexColor ='#'
    //create for loop to loop through our array
    for(let i =0; i<6; i++){
        hexColor += hex[generateHex()]
    }
    document.body.style.backgroundColor=hexColor;
    color.textContent=hexColor;
})
function generateHex(){
    return Math.floor(Math.random()*hex.length);
}