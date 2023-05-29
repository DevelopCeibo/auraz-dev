

function onSumbitLogin(event){
  event.preventDefault();

  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  //console.log({ email, password });
  
  fetch('https://auraz-dev.vercel.app/users.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    //console.log(data);
    let obj = data.find(o => o.user === email && o.password === password);
    if(obj){
      //console.log(obj, "<----Ok!!!")
      localStorage.setItem("logged", "true");
      window.location.href = "index.html";
    }else{
      console.log(obj, "Error!!!")
      localStorage.setItem("logged", "false");
      alertError();
      
      return false;
    }
    //console.log(obj, "resultado")

  }).catch(err => {
    console.log(err, "error")
    // Do something for an error here
  });

}

function alertError(){
  if(document.getElementById("alert").style.display === "none") {
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){ 
      document.getElementById("alert").style.display = "none"; 
    }, 3000);
  } else {
    document.getElementById("alert").style.display = "none";
  }

  return true;
}

function onLoad(){
  let logged = localStorage.getItem("logged")

  if (logged !== "true"){
    window.location.href = "login.html";
  }

  console.log(logged, "logged")

}

function toggleContentChannel(value) {
  if (!value) return;

  // busco todos los tabs y los oculto
  //let tabs = document.querySelectorAll(".collapse");
  //tabs.forEach((tab) => (tab.style.display = "none"));


  document.querySelector(`#btn-canal-tiktok`).src = "img/tiktok_off.png";
  document.querySelector(`#tiktok`).style.display = "none";

  document.querySelector(`#btn-canal-twitter`).src = "img/twitter_off.png";
  document.querySelector(`#twitter`).style.display = "none";
  
  document.querySelector(`#btn-canal-ads`).src = "img/ads_off.png";
  document.querySelector(`#ads`).style.display = "none";
  
  document.querySelector(`#btn-canal-youtube`).src = "img/youtube_off.png";
  document.querySelector(`#youtube`).style.display = "none";
  
  document.querySelector(`#btn-canal-email`).src = "img/email_off.png";
  document.querySelector(`#email`).style.display = "none";
  
  document.querySelector(`#btn-canal-meta`).src = "img/meta_off.png";
  document.querySelector(`#meta`).style.display = "none";
  
  document.querySelector(`#btn-canal-instagram`).src = "img/instagram_off.png";
  document.querySelector(`#instagram`).style.display = "none";
  
  document.querySelector(`#btn-canal-sms`).src = "img/sms_off.png";
  document.querySelector(`#sms`).style.display = "none";


  let btn_press = document.querySelector(`#btn-canal-${value}`);
  btn_press.src = `img/${value}_on.png`;

  let channels = document.querySelector(`#${value}`);
  channels.style.display = "flex";


}

function toggleContent(value) {
    // si no recibe value, retorna sin hacer nada
    if (!value) return;
  
    // busco todos los tabs y los oculto
    let tabs = document.querySelectorAll(".collapse");
    tabs.forEach((tab) => (tab.style.display = "none"));

    let snake_act = document.querySelector(`#viborita-activista`);
    let snake_bt = document.querySelector(`#viborita-BT`);
    let snake_genz = document.querySelector(`#viborita-genz`);

    snake_act.style.display = "none";
    snake_bt.style.display = "none";
    snake_genz.style.display = "none";

  
    // busco el tab que necesito activar y lo muestro
    let activeTab = document.querySelector(`#tabla-${value}`);
    let activeSnake = document.querySelector(`#viborita-${value}`);

  
    // valido si existe el elemento antes de aplicar el cambio
    if (activeTab) activeTab.style.display = "block";
    if (activeSnake) activeSnake.style.display = "block";
    
  }
  