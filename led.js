var five= require("johnny-five");  // Es un sofware que interpreta javascript para el arduino (Es el sistema operativo del sevidor)
var circuito= new five.Board();    // Es el circuito en si

circuito.on("ready",prender);      //Esto es un evento, el evento Listo...

function prender()

{
   
   var ledverde = new five.Led(13);
   ledverde.on(); //Blink es la accion del restraso en este caso es una instancia del objeto led que este a su vez es una instancia del sistema operativo five.
  
    var ledazul= new five.Led(12);
    ledazul.blink(1000);
 
    

  
}