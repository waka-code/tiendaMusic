window.onload=init;

function init(){
  document.querySelector(`.btn`).onclick=VerProduct;
  document.querySelector(`.btn3`).onclick=VerProduct;
  document.querySelector(`#arrow`).onclick=buyProduct;
  document.querySelector(`.btn0`).onclick=ViewSpeakers;
  document.querySelector(`.btn1`).onclick=ViewSpeakers;
  document.querySelector(`.btn2`).onclick=ViewEarphones;
  document.querySelector(`.menuham`).onclick=menuham;
}

const VerProduct=(e)=>{
    window.open("Product.html");
}

const buyProduct =(e)=>{
  e.preventDefault();
  const product__art=document.querySelector(`.product__art`);
  window.open("cart.html", function(){
    const carrito = new Array();
    const cat = [
      nombre=`hola`
    ]
    cat = carrito;
    document.querySelector(`cartBody`).innerHTML=`${product__art}. ${cat}`
  })
  console.log(product__art)
  //window.open("cart.html");
}

const ViewSpeakers=()=>{
  window.open("Speakers.html");
}
const ViewEarphones=()=>{
  window.open("Earphones.html");
}

function menuham (){
  document.querySelector(`.nav`).classList.toggle(`menuNAv`);
  
}

document.querySelector(`.nav`).addEventListener(`click`,function(){
  document.querySelector(`.nav`).classList.toggle(`menuNAv`)
})