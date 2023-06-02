if( !localStorage.getItem("botScore") ){
  localStorage.setItem("botScore",0)
}


document.querySelector('button').addEventListener('click', addOne)

function addOne(){
  let botScoreVal = Number(localStorage.getItem("botScore"))
  botScoreVal += 1
  localStorage.setItem("botScore",botScoreVal)
  document.querySelector("h3").innerText = botScoreVal
}