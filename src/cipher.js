window.cipher = {
  encode: (chain , numberEncryption) => {
    /* Acá va tu código */
    
    let msj= "";                                                                  //Cadena vacia 

for ( let i = 0; i<chain.length ; i++ ) {                                     //Ciclo for          
    if(chain.charCodeAt(i)>= 65 && chain.charCodeAt(i) <= 90){                   //Para definir limites del ASCII   
   let result =((chain.charCodeAt(i) - 65 + numberEncryption)% 26 + 65);            //formula que entrag codigo ASCII   
   let result2 =String.fromCharCode(result);                                     //Pasar codigo ASCII  a la letra
   msj += result2                                                                //Para concatenar mensajes de ciclo for
  // textocifrado.innerHTML = msj;
    }
else if (chain.charCodeAt(i)>=97 && chain.charCodeAt(i) <=122){                  //Formula para transformar en minúsculas
   let result =((chain.charCodeAt(i) - 97 + numberEncryption)% 26 + 97);
   let result2 =String.fromCharCode(result);
   msj += result2 //SIRVE PARA CONCATENAR MENSAJES
   //textocifrado.innerHTML = msj;
}
else if (chain.charCodeAt(i)>=33 && chain.charCodeAt(i) <=64){                   //Formula para transformar en otros codigos
    let result =((chain.charCodeAt(i) - 33 + numberEncryption)% 32 + 33);
    let result2 =String.fromCharCode(result);
    msj += result2 //SIRVE PARA CONCATENAR MENSAJES
    //textocifrado.innerHTML = msj;
 }
 else if (chain.charCodeAt(i)=== 32){
     let result =(chain.charCodeAt(i))
     let result2 =String.fromCharCode(result);
     msj += result2 //SIRVE PARA CONCATENAR MENSAJES
    //textocifrado.innerHTML = msj;
 }
 
}
return msj;
  },
  decode: (chainText2 , offsetEncryption) => {
    /* Acá va tu código */
    let msj2= "";                                                                  // crear variable vacia para despues concatenar
    for ( let f = 0; f<=chainText2.length-1; f++ ) {                                  //Ciclo for   
    if(chainText2.charCodeAt(f)>=65 && chainText2.charCodeAt(f) <=90 ){               //Para definir limites del ASCII  
    let result3 =((chainText2.charCodeAt(f) + 65 - offsetEncryption)% 26 + 65);       //formula que entraga codigo ASCII 
       let result4 =String.fromCharCode(result3);                                     //Pasar codigo ASCII  a la letra
       msj2 += result4                                                                //Para concatenar mensajes de ciclo for
      // textDecoded.innerHTML = msj2;
        }
        else if(chainText2.charCodeAt(f)>=97 && chainText2.charCodeAt(f) <=122){      //Formula para transformar en minúsculas 
            let result3 =((chainText2.charCodeAt(f) - 122 - offsetEncryption)% 26 + 122);
            let result4 =String.fromCharCode(result3);
            msj2 += result4 //SIRVE PARA CONCATENAR MENSAJES
           // textDecoded.innerHTML = msj2;
        }   
        else if (chainText2.charCodeAt(f)>=33 && chainText2.charCodeAt(f) <=64){      //Formula para transformar otras letras     
            let result3 =((chainText2.charCodeAt(f) - 64 - offsetEncryption)% 32 + 64);
            let result4 =String.fromCharCode(result3);
            msj2 += result4 //SIRVE PARA CONCATENAR MENSAJES
           // textDecoded.innerHTML = msj2;
         }
         else if (chainText2.charCodeAt(f)=== 32){
            let result3 =(chainText2.charCodeAt(f))
            let result4 =String.fromCharCode(result3);
            msj2 += result4 //SIRVE PARA CONCATENAR MENSAJES
           // textDecoded.innerHTML = msj2;
        }
    }
    return msj2;
  }
};
