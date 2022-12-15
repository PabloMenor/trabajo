let img = "";


function setup(){
    console.log("setup()");
    createCanvas(400,600);
    img = loadImage("https://i.ibb.co/FV06Lhv/ndice.jpg");
}


function draw(){
    console.log("draw()"+frameCount);
    background(220);
    image(img, frameCount%400, frameCount%600);
    console.log("teclaPulsada: "+keyCode );


    switch (keyCode) {
        case 40:
            text("abajo",75,100);
            break;
        case 38:
            text("arriba",75,75);
            break;
        case 37:
         text("izquierda",40,100);
         break;
        case 39:
         text("derecha",125,100);
           break;
        default:
            break;
    }


}
