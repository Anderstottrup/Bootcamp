# Funktioner
En funktion er en blok af kode, som der er designet til, at gøre noget lige så snart man kalder på den.

Her er et eksempel på en funktion:

     function gange(x, y){ 

    if (isNaN(x) || isNaN(y)){
       return "Ikke et tal";
     }else{
       return x * y;
           }
       }

       console.log(gange("3.687", "9.284")); 

Funktionen ovenover fungere på den måde, at hvis x eller y ikke er et tal, så skal den retunere "Ikke et tal", hvis det så er et tal, så skal den retunere resultatet af x * y (34.230108).

Nede i console kalder du på funktionen, og fortæller den værdien på x og y

# Argumenter / Parameter

