function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    translate(200,200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    /* fill(255);
    noStroke();
    text(hr + ':' + mn + ':' + sc, 10, 200); */

    /* stroke(255);
    strokeWeight(16);
    noFill();
    ellipse(200,200,300,300); */

    //SECONDS
    stroke(255,100,150);
    strokeWeight(8);
    noFill();
    //let end = map(mouseX, 0, width, 0, 360)
    let end1 = map(sc, 0, 60, 0, 360)
    arc(0,0,300,300,0,end1); //0 to 360 degree
    //arc(200,200,300,300,0,PIE);
    //arc(200,200,300,300,0,OPEN);
    //arc(200,200,300,300,0,CHORD);

    //MINUTES
    stroke(150,100,255);
    strokeWeight(8);
    noFill();
    let end2 = map(mn, 0, 60, 0, 360)
    arc(0,0,280,280,0,end2); //0 to 360 degree

    //HOURS
    stroke(150,255,100);
    strokeWeight(8);
    noFill();
    let end3 = map(hr%12, 0, 12, 0, 360)
    arc(0,0,260,260,0,end3); //0 to 360 degree

}