    var mousestate=0
    var keys = {
    UP: 38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
   };
   document.addEventListener("mousedown", drawClick)
   document.addEventListener("mousemove",mousemove)
   document.addEventListener("keydown", drawKeys);
   var cuadro= document.getElementById("dibujo");
   var papel = cuadro.getContext("2d");
   var x=150, y=150;
   var xclick =

   function mousemove(event) {
       if (mousestate==1) {
        dibujarLinea(color, xinicial, yinicial, event.layer.x, event.layer.y,papel);
       }
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
   }
   function drawClick(color, xinicial, yinicial, xfinal, yfinal,papel){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
   }
     
   function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
   {
     lienzo.beginPath();
     lienzo.strokeStyle = color;
     lienzo.moveTo(xinicial, yinicial);
     lienzo.lineTo(xfinal, yfinal);
     lienzo.stroke();
     lienzo.closePath();
   }
   dibujarLinea("red",x-1,y-1,x,y,papel);
   function drawKeys(event){
       var col="blue"
       var movimiento=2;
       switch (event.keyCode) {
           case keys.DOWN:
               dibujarLinea(col,x,y,x,y+movimiento,papel)
               y=y+movimiento;
               console.log("down")
               break;
               
           case keys.UP:    
           dibujarLinea(col,x,y,x,y-movimiento,papel)
           y=y-movimiento;
           console.log("up")
               break;
           case keys.LEFT:
               dibujarLinea(col,x,y,x - movimiento,y,papel)
               console.log("left")
           x=x-movimiento;
               break;
           case keys.RIGHT:
               dibujarLinea(col,x,y,x + movimiento,y,papel)
           x=x+movimiento;
               console.log("right")
               break;
       }
       /*if (event.keyCode == keys.UP) {
           console.log("up")
       }
       if (event.keyCode == keys.DOWN) {
           console.log("down")
       }
       if (event.keyCode == keys.RIGHT) {
           console.log("right")
       }
       if (event.keyCode == keys.LEFT) {
           console.log("left")
       }*/
   };