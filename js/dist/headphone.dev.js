"use strict";

var iniciar = function iniciar(e) {
  producto = [headphone = {
    Id: 1,
    Name: "WH-1000XM4 SONY",
    color: "black",
    price: 100,
    img: "jason-leung-xR4JHzr69Og-unsplash-removebg.png"
  }, Speakers = {
    Id: 2,
    Name: "ZX9 SPEAKER",
    color: "black",
    price: 100,
    img: "jason-leung-xR4JHzr69Og-unsplash-removebg.png"
  }, Earphones = {
    Id: 3,
    Name: "YX1 EARPHONES",
    color: "black",
    price: 100,
    img: "jason-leung-xR4JHzr69Og-unsplash-removebg.png"
  }];
  var arregle = producto.filter(function (e) {
    return e == producto[0][3];
  });
  console.log(arregle);
};

iniciar();
//# sourceMappingURL=headphone.dev.js.map
