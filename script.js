"use strict";

window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0xffffff,
    color1: 0x344bb6,
    color2: 0x643091,
    quantity: 3.0,
    backgroundAlpha: 0.0,
  });
});

setTimeout(() => {
  const main = document.querySelector("main");
  main.style.opacity = 1;
}, 1000);
