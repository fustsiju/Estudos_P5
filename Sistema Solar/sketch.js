function setup() {
    createCanvas(600, 600, WEBGL);
    let angle;
    let x;
    let y;
  }
  
  function move(a,k,l){
    angle = frameCount * a
    x = 0 + cos(angle) * k
    y = 0 + sin(angle) * l
  }
  
  function draw() {
    background(0);
    
    push()
    sun();
    pop()
    push()
    mercury();
    pop()
    push()
    venus();
    pop()
    push()
    terra()
    pop()
    push()
    marte()
    pop()
    push()
    jupiter()
    pop()
    push()
    saturno()
    pop()
    push()
    urano()
    pop()
    push()
    netuno()
    pop()
  
  }
  
  function sun(){
    push()
    lines(100)
    pop()
    fill(255,255,0)
    circle(0,0,50);
  }
  
  function mercury(){
    push()
    lines(100)
    pop()
  
    move(0.08,50,50)
    fill(255,150,150);  
    circle(x,y,10)
  }
  
  function venus(){
    push()
    lines(140)
    pop()
    
    move(0.07,70,70)
    fill(255,200,150);  
    circle(x,y,20)
  }
  
  function terra(){
    
    push()
    lines(200)
    pop()
    
    move(0.06,100,100)
    fill(0,255,55);  
    circle(x,y,25)
  }
  
  function marte(){
    
    push()
    lines(260)
    pop()
    
    move(0.05,130,130)
    fill(255,200,150);  
    circle(x,y,20)
  }
  function jupiter(){
    
    push()
    lines(320)
    pop()
    
    move(0.04,160,160)
    fill(255,150,150);  
    circle(x,y,35)
  }
  function saturno(){
    
    push()
    lines(380)
    pop()
    
    move(0.03,190,190)
    fill(255,150,150);  
    circle(x,y,30)
  }
  function urano(){
    
    push()
    lines(440)
    pop()
    
    move(0.02,220,220)
    fill(0,150,150);  
    circle(x,y,30)
  }
  function netuno(){
    
    push()
    lines(500)
    pop()
    
    move(0.01,250,250)
    fill(0,100,255);  
    circle(x,y,20)
  }
  function lines(q){
    noFill()
    stroke(255,255,255)
    strokeWeight(0.25)
    circle(0,0,q);
  }