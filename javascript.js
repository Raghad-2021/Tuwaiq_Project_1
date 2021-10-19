const div8 = $("#div8");
const inputname =$("#name");
const inputimg = $("#img");
const divone = $("#div1");
const testDiv = $("#test");


let divtree = $("#div1");
function hideHandler() {
  divtree.hide();
}
function showHandler() {
  divtree.show();
}
let div7 = $("#div3");
function deletHandler() {
  div7.remove();
}

const smartarray = [
  {
    Name: "iphone",
    img: "https://www.almowaten.net/wp-content/uploads/2019/07/New-Apple-iPhone-11-Max-800x793.jpg",
    par: "iphone 12 pro with FaceTime,256gB,5G,Dark Gray-Middle East Version",
  },
  {
    Name: "ipad",
    img: "https://t.infibeam.com/img/othe/0441617/70/20/ipadwifispacegray2upscreenwallpaperscreenusen.jpg.f58ba87020.989x800x800.jpg",
    par: "ipad Pro 2021(5th Generation)12.9 lnch M1 Chip 512GB Wi-Fi 5G Space Gray With FaceTime Middle East Version",
  },
  {
    Name: "headphones",
    img: "https://www.sony-mea.com/image/8f499d4640b363762e66edd1a4916a10?fmt=pjpeg&wid=660&bgcolor=F1F5F9&bgc=F1F5F9",
    par: "Wireless On Ear HeadphonesBluetooth WH-CH510 Black ",
  },
];

function renderarr(array) {
  for (let i = 0; i < array.length; i++) {
    const div =
     $(`<div"> 
     <img id="img" src="${array[i].img}" alt="">
     <h1>${array[i].Name}</h1>
     </div>`);
     testDiv.append(div);
  }
}

renderarr(smartarray);

function addsm() {
  const newAdd = {
    Name: inputname.val(),
    img: inputimg.val(),
  };
  smartarray.push(newAdd);
  renderarr([newAdd]);
}

