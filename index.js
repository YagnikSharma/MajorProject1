let result= 'Start';
let uscore=0;
let cscore=0;
function play(input)
{
  let uselect= input.textContent;
  let cselect= getCselection();
  let result= calcResult(uselect,cselect);
  
  showscore();
}

function getCselection()
{
  const options= ['rock', 'paper','scissors'] 
  let cselector= options[Math.floor(Math.random()*options.length)];
  return cselector;
}

function calcResult(you,com)
{
  if (you==com){
    result = 'Draw'
    return;
  }
  else if ((you=== 'rock' && com=== 'scissors')||(you==='paper' && com=== 'rock')|| (you=== 'scissors' && com== 'paper'))
  {
    uscore+=1;
    if (uscore==15){
      window.location.assign("hurray.html")
    }
    else{
      result="wins";
      return;
    }
  }
  else{
    cscore+=1;
    if(cscore==15){
      window.location.assign("Loose.html")
    }
    else{
      result= "Lose";
      return;
    }
  }

  

}

function showscore()
{
  document.getElementById("your-score").innerText= uscore;
  document.getElementById("cpu-score").innerText= cscore;
  document.getElementById("result").innerText= result;
}

function playAgain()
{
  window.location.assign("index.html")
}