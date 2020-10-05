class Chain {
constructor(x,y){
var options={
  length:10,
  stiffness:0.05,
  bodyA:x ,
  bodyB:y ,
}
this.chain=Matter.Constraint.create(options)
World.add(world,this.chain);
}
display(){
  line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);  
}
}