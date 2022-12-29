var path = [];

var angle = 0;
var resolution = 50;

var sun;
var end;

function setup(){
    createCanvas(600, 600);
    angleMode(DEGREES);

    sun = new Orbit(width / 2, height / 2, width / 4, 0);
    var next = sun;
    for (var i = 0; i < 3; i++) {
        next = next.addChild();
    }
    end = next;
}

function draw(){

    background(0);
    

    for (var i = 0; i < resolution; i++) {
        var next = sun;
        while (next != null) {
          next.update();
          next = next.child;
        }
        path.push(createVector(end.x, end.y));
      }
    
      var next = sun;
      while (next != null) {
        next.show();
        next = next.child;
      }
    
      beginShape();
      stroke(255, 0, 255);
      noFill();
      for (var pos of path) {
        vertex(pos.x, pos.y);
      }
      endShape();

    translate(200,200);
    drawNumbers();
    rotate(-90);

    

    let hr = hour();
    let mn = minute();
    let sc = second();

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

    function drawNumbers() {
        noStroke();
        fill('white');
        textSize(30);
        textAlign(CENTER);
        for (let i = 1; i <= 12; i++) {
          text(i,
            cos(i * 30 - 90) * 150,
            sin(i * 30 - 90) * 150 + 10
          );
        }
    }

    

}