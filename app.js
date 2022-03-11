const images=[
    'images/slider1.png',
    'images/slider2.png',
    'images/slider3.png',
    'images/slider4.png',
    'images/slider5.png',
    'images/slider6.png',
    'images/slider7.png',
];

let url=0;

setInterval(()=>{
    url++
    if(url>=images.length){
        url=0;
    }
   document.getElementById('images').setAttribute('src', images[url])
},3000)

