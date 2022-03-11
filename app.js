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



const color=['#1D2A35','#FE76B1', '#D2E7CC', '#FBBCDF', '#384602', '#B55647', '#EBE370', '#F8A822', '#E74EBC', '#A9C2C4', '#FEE8CF', '#E2366B', '#F2B19C', '#6B4A18'];


let colorCount=0;

setInterval(()=>{
colorCount++

if(colorCount>=color.length){
    colorCount=0
}

document.getElementById('title').style.color=color[colorCount];
},1500)


const img1=['images/flower1 (1).jpg','images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg'];
const img2=['images/flower1 (2).jpg','images/pic5.jpg', 'images/pic6.jpg', 'images/pic7.jpg', 'images/pic8.jpg'];
const img3=['images/flower1 (3).jpg','images/pic9.jpg', 'images/pic10.jpg', 'images/pic11.jpg', 'images/pic12.jpg'];
const img4=['images/flower1 (4).jpg','images/pic13.jpg', 'images/pic14.jpg', 'images/pic15.jpg', 'images/pic16.jpg'];
const img5=['images/flower1 (5).jpg','images/pic17.jpg', 'images/pic18.jpg', 'images/pic19.jpg', 'images/pic20.jpg'];
const img6=['images/flower1 (6).jpg','images/pic21.jpg', 'images/pic22.jpg', 'images/pic23.jpg', 'images/pic24.jpg'];
const img7=['images/flower1 (7).jpg','images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg'];
const img8=['images/flower1 (8).jpg','images/pic5.jpg', 'images/pic6.jpg', 'images/pic7.jpg', 'images/pic8.jpg'];
const img9=['images/flower1 (9).jpg','images/pic24.jpg', 'images/pic23.jpg', 'images/pic.jpg', 'images/pic5.jpg'];
const img10=['images/flower1 (10).jpg','images/pic.jpg', 'images/pic5.jpg', 'images/pic8.jpg', 'images/pic9.jpg'];
const img11=['images/flower1 (11).jpg','images/pic19.jpg', 'images/pic12.jpg', 'images/pic3.jpg', 'images/pic24.jpg'];
const img12=['images/flower1 (12).jpg','images/pic21.jpg', 'images/pic11.jpg', 'images/pic16.jpg', 'images/pic17.jpg'];

let allImagCount=0;

setInterval(()=>{
  
    if(allImagCount>=img1.length && allImagCount>=img2.length && allImagCount>=img3.length && allImagCount>=img4.length && allImagCount>=img5.length && allImagCount>=img6.length && allImagCount>=img7.length && allImagCount>=img8.length && allImagCount>=img9.length && allImagCount>=img10.length && allImagCount>=img11.length && allImagCount>=img12.length){
        allImagCount=0;
    }

    document.getElementById("img1").setAttribute('src', img1[allImagCount])
    document.getElementById("img2").setAttribute('src', img2[allImagCount])
    document.getElementById("img3").setAttribute('src', img3[allImagCount])
    document.getElementById("img4").setAttribute('src', img4[allImagCount])
    document.getElementById("img5").setAttribute('src', img5[allImagCount])
    document.getElementById("img6").setAttribute('src', img6[allImagCount])
    document.getElementById("img7").setAttribute('src', img7[allImagCount])
    document.getElementById("img8").setAttribute('src', img8[allImagCount])
    document.getElementById("img9").setAttribute('src', img9[allImagCount])
    document.getElementById("img10").setAttribute('src', img10[allImagCount])
    document.getElementById("img11").setAttribute('src', img11[allImagCount])
    document.getElementById("img12").setAttribute('src', img12[allImagCount])
    allImagCount++;
},3000)