const mensajeEncriptado ="^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~" ; 
let mensaje = mensajeEncriptado;


mensaje = mensaje.replace(/\\\\/g, 'i');    
mensaje = mensaje.replace(/\\/g, 'i');      
mensaje = mensaje.replace(/~/g, 'o');       
mensaje = mensaje.replace(/\`/g, 'c');      
mensaje = mensaje.replace(/\?/g, 'a');
mensaje = mensaje.replace(/\[/g, 'e');
mensaje = mensaje.replace(/\+/g, 'u');
mensaje = mensaje.replace(/¬/g, 'ó');
mensaje = mensaje.replace(/\(/g, ' ');
mensaje = mensaje.replace(/\)/g, ' ');
mensaje = mensaje.replace(/\$/g, 'r');
mensaje = mensaje.replace(/\^/g, 'm');
mensaje = mensaje.replace(/#/g, 'v');
mensaje = mensaje.replace(/%/g, 'b');
mensaje = mensaje.replace(/¡/g, 'd');
mensaje = mensaje.replace(/}/g, 'q');
mensaje = mensaje.replace(/=/g, 't');
mensaje = mensaje.replace(/{/g, 's');
mensaje = mensaje.replace(/\]/g, 'n');
mensaje = mensaje.replace(/\*/g, 'p');
mensaje = mensaje.replace(/\//g, 'l');
mensaje = mensaje.replace(/-/g, 'h');
mensaje = mensaje.replace(/¿/g, 'y');
mensaje = mensaje.replace(/!/g, 'j');
mensaje = mensaje.replace(/;/g, 'f');
mensaje = mensaje.replace(/__/g, 'z');


mensaje = mensaje.replace(/\s+/g, ' ').trim();

console.log(mensaje);

