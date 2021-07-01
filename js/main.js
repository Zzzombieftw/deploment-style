const foxImg = document.querySelector("#fox")
const foxSays = new Audio("../audio/fox.mp3")
const notFoxImg = document.getElementById("notFox")




foxImg.addEventListener("click", function(evt){
    foxSays.volume = .01
    foxSays.play()
  })

notFoxImg.addEventListener("click",(evt)=>{
    if(evt.target.id !== "notFox"){
      const audioE = new Audio(`../audio/${evt.target.id}`)  
      audioE.volume = .1
      audioE.play()
}})