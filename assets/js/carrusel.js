const w = window.innerWidth;

function pcarrousel(){
    const phone = [
      'url("/assets/img/carrusel/phone1.png")',
      'url("/assets/img/carrusel/phone2.png")',
      'url("/assets/img/carrusel/phone3.png")',
    ];
  const car = document.querySelector(".hero");
  const p = phone[Math.floor(Math.random() * phone.length)];
  car.style.backgroundImage = p;
}

function tcarrousel(){
    const table= [
      'url("/assets/img/carrusel/tablet1.png")',
      'url("/assets/img/carrusel/tablet2.png")',
      'url("/assets/img/carrusel/tablet3.png")',
    ];
  const car = document.querySelector(".hero");
  const t = table[Math.floor(Math.random() * table.length)];
  car.style.backgroundImage = t;
}

function dcarrousel() {
    const desk = [
      'url("/assets/img/carrusel/desk1.png")',
      'url("/assets/img/carrusel/desk2.png")',
      'url("/assets/img/carrusel/desk3.png")',
    ];
    const car = document.querySelector(".hero");
    const d = desk[Math.floor(Math.random() * desk.length)];
    car.style.backgroundImage = d;
}
if(w < 549){
    setInterval(pcarrousel, 2000);
} else{
  if(w < 992){
    setInterval(tcarrousel, 2000);
  }else{
    setInterval(dcarrousel, 2000);
  }
}