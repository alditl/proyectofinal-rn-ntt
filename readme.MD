# ** Movie App ** #

Esta aplicación te permite visualizar películas y sus detalles.
Creada por Aldana Torres y Naomi Del Castillo 

## Dependencias ##

> Deberá instalar dependencias con el comando `npm i` 

## API ##

>La api se consume desde https://www.themoviedb.org/ + apikey

## AUTENTICACIÓN ##

> El formulario de login/crear usuario se realizó con Formik, para las validaciones se utilizó Yup, para el sistema de autenticación se utilizó Firebase y para guardar los datos AsyncStorage.

## COMENTARIOS ##

>Si bien es una app sencilla, ocurrieron algunos traspies a la hora de realizar la aplicación.

>Consumir la API fue una de ellas. Si bien ambas utilizaban apikey, un primer intento con el método visto en clases no funciono. 
>Suponemos tiene que ver con el método fetch más la diferencia de que el profesor utilizó una API sin apikey. 

>Primero intentamos cambiar la API, creyendo que quizás no funcionaba bien el request.
>Luego realizando algunas consultas en internet pudimos corregir el error y la api funcionaba a la perfección.

## COSAS A MEJORAR ##

>Con Stack Navigator es que se puede cambiar de screens dentro de la app, como por ejemplo desde el Home al apartado de Movie Details, aunque creemos que dicho screen solo debería aparecer al presionar en algun ítem, no pudimos quitarlo del "navbar" ya que si lo quitábamos no corría la app. 

>Decidimos dejarlo ya que suma al diseño de la app pero entendemos y creemos que sería mejor que tenga un searchbar en dicha pantalla para poder darle un mejor uso. 
