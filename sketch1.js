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
    let secAngle = map(sc, 0, 60, 0, 360)
    //arc(0,0,300,300,0,secAngle); //0 to 360 degree

    push();
    rotate(secAngle);
    stroke(255,100,150);
    line(0,0,100,0);
    pop();

    //MINUTES
    stroke(150,100,255);
    strokeWeight(8);
    noFill();
    let minAngle = map(mn, 0, 60, 0, 360);
    console.log(minAngle)
    //arc(0,0,280,280,0,minAngle); //0 to 360 degree

    push();
    rotate(minAngle);
    stroke(150,100,255);
    line(0,0,100,0);
    pop();

    //HOURS
    stroke(150,255,100);
    strokeWeight(8);
    noFill();
    let hourAngle = map(hr%12, 0, 12, 0, 360)
    //arc(0,0,260,260,0,hourAngle); //0 to 360 degree

    push();
    rotate(hourAngle);
    stroke(150,255,100);
    line(0,0,100,0);
    pop();

    //Dot in the middle
    stroke(255);
    point(0,0);

}