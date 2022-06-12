"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

window.onload = init;

function init() {
  document.querySelector(".btn").onclick = VerProduct;
  document.querySelector(".btn3").onclick = VerProduct;
  document.querySelector("#arrow").onclick = buyProduct;
  document.querySelector(".btn0").onclick = ViewSpeakers;
  document.querySelector(".btn1").onclick = ViewSpeakers;
  document.querySelector(".btn2").onclick = ViewEarphones;
  document.querySelector(".menuham").onclick = menuham;
}

var VerProduct = function VerProduct(e) {
  window.open("Product.html");
};

var buyProduct = function buyProduct(e) {
  e.preventDefault();
  var product__art = document.querySelector(".product__art");
  window.open("cart.html", function () {
    var carrito = new Array();
    var cat = [nombre = "hola"];
    cat = (_readOnlyError("cat"), carrito);
    document.querySelector("cartBody").innerHTML = "".concat(product__art, ". ").concat(cat);
  });
  console.log(product__art); //window.open("cart.html");
};

var ViewSpeakers = function ViewSpeakers() {
  window.open("Speakers.html");
};

var ViewEarphones = function ViewEarphones() {
  window.open("Earphones.html");
};

function menuham() {
  document.querySelector(".nav").classList.toggle("menuNAv");
}

document.querySelector(".nav").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("menuNAv");
});
//# sourceMappingURL=index.dev.js.map
