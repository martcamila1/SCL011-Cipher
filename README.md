## Introducción al proceso :closed_lock_with_key:
Durante la primera semana del “bootcamp” se planteó el desafío de crear una aplicación web basada en el cifrado cesar, la cual tenía una serie de requisitos.

Para empezar se pensó e investigo en una  temática a cual sería útil  aplicar este cifrado llegando a la conclusión que sería de gran utilidad para la elaboración de contraseñas seguras para las distintas universidades de nuestro país,con esa idea  se comienza a  diseñar un flujo de caja, mediante feedback con las compañeras y  las couch se realizan las mejoras necesarias para facilitar la experiencia del usuario (tale como quitar botones innecesarios que no facilitan la aplicación) 

Flujo

![imagen](https://i.ibb.co/sb85C8w/flujo2.png)

Posteriormente se realiza  prototipo en papel y se realiza la misma dinámica anteriormente mencionada, con el  feedback de compañeras y de las couch se realizan las mejoras para hacer más funcional y atractivo nuestro sitio web tales como:

-Escribir instrucciones para hacer más entendible el sitio web .

-Cambiar o explicar las palabras cifrado y descifrado para que  las persona  comprendan de mejor forma de que se tratan estos conceptos.

-Cambiar botón “otra vez” por “reestablecer”.

Por último se procede a realizar prototipo en plataforma “Balsamiq” y se realiza planificación del proyecto con los detalles del proyecto  en [Trello](https://trello.com/b/GRJEy4OI/proyecto-laboratoria) .


Prototipo

![imagen](https://i.ibb.co/wNS1Nrx/prototipo-imagenes2.png)

## Usuarios objetivos.:office:
Las universidad e institutos de nuestro país cada año reciben a cientos de estudiantes a los cuales deben crearles  contraseñas  para ingresar a los distintos portales de su institución, estas deben ser seguras y distintas para cada uno, para que  se puedan evitar cualquier tipo de fraude, robo de material, conflictos en el momento de “toma de ramos”o problemas al momento de matricularse.

Por lo que respondiendo  a estas necesidades se crea el sitio web “Tu clave secreta” un lugar donde los  establecimiento podrán crear las contraseñas que desee para sus estudiantes , estas serán completamente seguras y serán entregadas a cada uno de sus estos ,para crearlas se sugiere que lo realiza con el nombre y apellido de sus alumnos más su fecha de nacimiento , con simplemente estos datos se podrá obtener una clave para que sus alumnos ingresen a sus sitios de Intranet  y así evitar los molestos problemas mencionados anteriormente.

Además si crea alguna una contraseña y olvida a que estudiante pertenece podrá recuperar el nombre  del alumno a través del botón descifrado, por esta razón se recomienda que use los datos anteriormente mencionados.

Por lo que público objetivo  es todo  personal que trabaje en el área estudiantil o el sector de admisión de las universidades e instituto y que necesitan crear contraseñas seguras a cada uno de  estudiantes.

## Descripción “Tu Clave Secreta” :key:

Tu clave secreta como se mencionó anteriormente es un sitio web para crear contraseñas a los alumnos de las distintas instituciones estudiantiles del país, este tiene dos opciones “Cifrar” con la cual el usuario podrá crear las contraseñas que desee y “Descifrar” para que pueda descubrir el origen de la contraseña o en caso que cree alguna clave y olvide  a que alumno pertenece podrá recuperarla por medio de este método.

Este sitio está basado en el cifrado cesar, el cual es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto .Por ejemplo para cifrar el texto “ABC” con desplazamiento 3 devolverá “DEF” y para descifrar “DEF” con desplazamiento 3  devolverá el texto “ABC”

Para descargar aplicacion debe ingresar al siguiente [link](https://martcamila1.github.io/SCL011-Cipher/src/index.html)

Con esta técnica se procedió a crear el cifrado el cual se puede usar de la siguiente manera:

Para crear  contraseña se debe escoger el botón de “cifrar”:key:

     -Al presionar este se desplegara lo necesario para ejecutar dicha acción .

     -En el primer recuadro de texto  se ingresa texto que desee cifrar, en el cual se sugiere nombre, apellido y fecha de nacimiento.

     -Luego se escogen los desplazamientos deseados los cuales van desde número 1 al 5.

     -Presionar botón enviar y aparecerá texto cifrado en el segundo cuadro de texto, el cual corresponde a la     contraseña otorgada según los caracteres escritos.

     -Si desea volver a cifrar debe borrar los cuadros de textos.


Para descubrir origen de contraseña o que alumno pertenece. :key:

     -Se debe escoger botón descifrar.

     -Al presionar este se desplegara lo necesario para ejecutar dicha acción .

     -En el primer recuadro de texto  se ingresa texto que desee descifrar, que en este caso sería la contraseña a la cual se quiere averiguar nombre del alumno u origen.

     -Luego se escogen los desplazamientos deseados los cuales van desde número 1 al 5.

     -Presionar botón enviar, aparecerá texto descifrado en el segundo cuadro de texto , el cual corresponde al origen de la contraseña o nombre del alumno.

     -Si desea volver descifrar debe borrar los cuadros de textos.


## Usabilidad 
Se realiza con el fin de evaluar que tan funcional es el sitio web para los usuarios. 
Para esto se eligió a tres usuarios, a cada uno de  estos se le realizo una breve instrucción sobre de que se trataba el sitio web y se les comento  que ha medida de que fueran avanzando o leyendo textos de la aplicación fueran verbalizando lo que iban pensando sobre esta.

-Usuario uno de 24 años sexo masculino : describe el sitio web como fácil y sencillo de entender , los botones son fácil de encontrar ,el diseño es simple  pero adecuado al proyecto , se podría mejorar acotar el texto del paso número dos , hacer funcionar botón restablecer y que al presionar cifrar o decifrar baje automaticamente la página.

-Usuario dos 29 años sexo masculino: menciona que aplicación fácil de entender,  colores amigable, refiere que encuentra cajas de texto de adecuado tamaño ,refiere que se podría aumentar tamaño de letra de primer párrafo , modificar su estructura y hacer funcionar le botón restablecer.

-Usuario tres de 30 años sexo femenino: menciona que es adecuado el tipo de letras y colores, le parece amigable que existan inducciones que explique como utilizar el cifrado  y refiere  comprenderlas, las  cajas de texto le aparecen adecuadas, pero los botones les parecen un poco pequeños por lo que sugiere aumentar el tamaño de esto y le parece buena idea agregar el botón reestablecer para que el usuario no tenga que borrar por su cuenta el texto.

Con los datos señalados  se logra modificar:

 Reducir la cantidad de texto en el paso dos de instrucciones y su estructura.

 Aumentar tamaño de letra de primer párrafo .
 
 Aumentar tamaño de botones .

No se logra hacer funcionar de forma correcta botón restablecer y tampoco que al presionar cifrar o decifrar la pagina web baje automaticamente, pero es un punto importante para hacer la experiencia de usuario más funcional, por lo que se espera poder implementarlo en fututos proyectos.

Proyecto final :blush:.

![imagen](https://i.ibb.co/Zm3C3cK/Tu-clave-secreta.png)