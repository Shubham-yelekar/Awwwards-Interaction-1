const items = [
  {
    img: "./images/01.jpg",
    parllaxSpeed : 0.065
  },
  {
    img: "./images/02.jpg",
    parllaxSpeed : 0.05
  },
  {
    img: "./images/03.jpg",
    parllaxSpeed : 0.08
  },
  {
    img: "./images/04.jpg",
    parllaxSpeed : 0.1
  },
  {
    img: "./images/05.jpg",
    parllaxSpeed : 0.07
  }
]

const gallery = document.querySelector('.background');

const itemPositions = [
  {top:"-10%", left:"30%"},
  {top:"40%", left:"5%"},
  {top:"5%", left:"78%"},
  {top:"55%", left:"65%"},
  {top:"60%", left:"30%"},
  {top:"10%", left:"65%"},
  {top:"40%", left:"60%"},
  {top:"80%", left:"70%"},
  {top:"50%", left:"95%"},
];

items.forEach((itemData, index) => {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add('item');

  const position = itemPositions[index];
  imageDiv.style.top = position.top;
  imageDiv.style.left = position.left;

  const img = document.createElement("img");
  img.src = itemData.img;
  imageDiv.appendChild(img);

  gallery.appendChild(imageDiv)

});

document.addEventListener("mousemove", (e)=> {
  gallery.querySelectorAll(".item").forEach((item, index)=>{
    const animationFactor = items[index].parllaxSpeed;

    const deltaX = (e.clientX - window.innerWidth/2)* animationFactor;
    const deltaY = (e.clientY - window.innerHeight/2)* animationFactor;

    gsap.to(item, {x: deltaX, y: deltaY, duration: 0.75})
  })
})