
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world
var bola
var engine
var chao
var quadrado
var bola2
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
     

	engine = Engine.create();
	world = engine.world;

	//Propiedades da bola
	var propriedadesdabola = {
     
	//Elasticidade da bola
	restitution:0.7,

	//Atrito com o ar
    frictionAir:1.0,
	//Atrito
	friction:0.01
    } 
      //Propiedades do quadro
	  	var propriedadesdoquadrado = {

		 //Elasticidade do quadrado
		 restitution:0.50,

		 //Atrito com o ar
		 frictionAir:1.0,
		 //Atrito
		 friction:0.01
		  }

	//Propiedades da chão
	var propriedadesdochao = {
		isStatic: true


		}
    //Propriedades da bola2
	var propriedadesdabola2 = {
		
		//Elasticidade da bola
		restitution:0.7,

		//Atrito com o ar
		frictionAir:1.0,
		//Atrito
		friction:0.01
	}
	

    //Corpo da chão
	chao = Bodies.rectangle(600,380,1200,20, propriedadesdochao);
	//Adicionando o chão ao mundo
	World.add(world,chao);


	//Crie os Corpos Aqui.
    bola = Bodies.circle(200,200,30,propriedadesdabola);
    //Adicionando bola ao mundo
    World.add(world,bola);

	//Corpo do quadrado
	quadrado = Bodies.rectangle(80,80,100,120, propriedadesdoquadrado);

     World.add(world,quadrado);

	 //Corpo da bola2
	 bola2 = Bodies.circle(340,340,30,propriedadesdabola2);

	 World.add(world,bola2);

	
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  ellipseMode (RADIUS);

  //Atualizando o motor de fisica
  Engine.update(engine);

  //Desenhando o corpo da bola
  ellipse(bola.position.x,bola.position.y,30);
  
  rect (chao.position.x,chao.position.y,1200,20);

  rect (quadrado.position.x,quadrado.position.y,100,120);

  ellipse(bola2.position.x,bola2.position.y,30);
 
}



