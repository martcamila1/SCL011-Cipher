/*Acá va tu código*/
let starEncryption = document.getElementById("button1");

starEncryption.addEventListener("click" , function (){
    let visualizeEncryption = document.getElementById("encryption");
    let hideDecoded = document.getElementById("decoded");
    visualizeEncryption.style.display = "block" ;
    hideDecoded.style.display = "none" ;
});


let starDecoded = document.getElementById("button2");

starDecoded.addEventListener("click" , function (){
    let visualizeDecoded = document.getElementById("decoded");
    let hideEncryption = document.getElementById("encryption");
    visualizeDecoded.style.display = "block" ;
    hideEncryption.style.display = "none" ;
});

let hola = document.getElementById("clean");
hola.addEventListener("click" , function (){
  let new1 = document.getElementById("textarea1").value="";
  let new2 = document.getElementById("textarea2").value="";
  let new3 = document.getElementById("numero").value="";
  
  new1 = ("");
  new2 = ("");
  new3 = ("");
return new1,new2,new3;

});

 

let encryptionNew = document.getElementById("enviar");                              //crear variable a boton enviar
encryptionNew.addEventListener("click" , () => {                                  // crear evento click asociado a boton enviar
let chain = document.getElementById("textarea1").value;  
                                                                     // crear variable a caja de textopara tomar valor
let numberEncryption = Number.parseInt(document.getElementById("numero").value); //crear variable a input tipo number y parsear
let textocifrado = document.getElementById("textarea2"); 
textocifrado.innerHTML = window.cipher.encode(chain ,numberEncryption) // para llamar funcion
})

let decodedNew = document.getElementById("submit2");                               //crear variable para Boton enviar
    decodedNew.addEventListener("click" , () => {                                     //crear evento click
    let chainText2 = document.getElementById("textarea3").value;                      //otorgar una variable a caja de texto para tomar valor
    let offsetEncryption = Number.parseInt(document.getElementById("number2").value); //crear variable a input tipo number y parsear
    let textDecoded = document.getElementById("textarea4");  
    textDecoded.innerHTML = window.cipher.decode(chainText2 ,offsetEncryption)  
    })
