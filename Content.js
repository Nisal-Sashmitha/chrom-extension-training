let willSmithImages = [
    "https://image.shutterstock.com/shutterstock/photos/1523924987/display_1500/stock-photo-will-smith-at-the-los-angeles-premiere-of-gemini-man-held-at-the-tcl-chinese-theatre-in-hollywood-1523924987.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/800px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg"
    
];

const imgs = document.getElementsByTagName("img");

for(let i =0;imgs.length;i++){
    const randomImg = Math.floor(Math.random()*willSmithImages.length);
    imgs[i].src = willSmithImages[randomImg];
}

