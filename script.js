function clickMe(){
  let start = document.getElementById("txtstart");
  let end = document.getElementById("txtend");
  let step = document.getElementById("txtstep");
  let msg = document.getElementById("txtmsg");
  

  if (start.value.length == 0 || end.value == 0 || step.value == 0) {
    msg.innerHTML = `Impossible count! Please fill in all number`
    //window.alert("[ERROR} missing data.");
  } else {
    msg.innerHTML = "Counting... <br>";

    let valStart = Number(start.value);
    let valEnd = Number(end.value);
    let valStep = Number(step.value);

    if (valStart < valEnd) {
      //Contagem crescente
      for (let cont = valStart; cont <= valEnd; cont += valStep) {
        msg.innerHTML += `\u{25AA} ${cont}  `;
      }
    } else {
      //Contagem descrecente
      for (let cont = valStart; cont >= valEnd; cont -= valStep) {
        msg.innerHTML += `\u{25AA} ${cont} `;
      }
    }
    msg.innerHTML += `\u{1F538}`;
    
  }
}
