function setup() {
    createCanvas(windowWidth, windowHeight);
  
}

function draw() {
    // translate(width/2-400/2, height/2-600/2) 
    background(128);
   fill(244, 236, 247,200)
   
    translate(width/2,height/2)
    rect(-200,-270,400,540);
    noStroke()
    noFill(0)

    l=15, l3=80,l2=60
    //blue IT
    fill(133, 193, 233, )
    rect(-160,-250,l,l3)
    rect(-37.5,-250,l2,l)
    rect(-23.5,-250,l,l3)
    rect(105,-250,l,l3)
    //red ITE
    fill(236, 112, 99,)
    rect(-145,-250,l,l3)
    rect(-30,-250,l2,l)
   
    rect(-7.5,-250,l,l3)
    rect(120,-250,l2,l)
    rect(120,-218,l2,l)
    rect(120,-185,l2,l)
    rect(120,-250,l,l3)
    
    //black
    fill(80)
    rect(-30,-250,45,15)
    rect(120,-250,l2-15,l)
    rect(120,-218,l2-15,l)
    rect(120,-185,l2-15,l)
    
  
 //red   
    fill(236, 112, 99,200)

    //textSize(110)
   // text(' I  T  S',-160,-150)

    textSize(55)
    text('N   O   T   W',-146,-90)

    textSize(38)
    text('H    A    T    Y    O',-150,-25)

    textSize(32)
    text('U     L     O     O     K',-144,25)

    textSize(27)
    text('A     T     T     H     A     T',-150,70)

    textSize(20)
    text('M         A         T         T         E',-132,110)

    textSize(15)
    text('R        S         I        T        S        W        H',-138,140)

   textSize(14)
   text('A       T       Y       O       U        S       E       E',-136,170)


//blue
    fill(133, 193, 233,150)
    textSize(55)
    text('N   O   T   W',-170,-90)
    textSize(38)
    text('H    A    T    Y    O',-172,-25)
    textSize(32)
    text('U     L     O     O     K',-170,25)
    textSize(27)
    text('A     T     T     H     A     T',-170,70)
    textSize(20)
    text('M         A         T         T         E',-168,110)
    textSize(15)
    text('R        S         I        T        S        W        H',-168,140)
    textSize(14)
    text('A       T       Y       O       U        S       E       E',-166,170)


}





/*function draw (){
    let x=mouseX
    let y=mouseY
    console.log(x,y)}*/
