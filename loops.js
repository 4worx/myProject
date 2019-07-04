/*
for ( i = 9 ; i > 0 ; i-- ){
    console.log(i);
}
//----------

for (i = 0; i <6; i++){
    console.log(Math.random() * 49 +1);
}
//--------------

let favFilms = [
    "TR",
    "venom",
    "endgame"
];


favFilms.push("DP", "MS");

for(filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    console.log(favFilms[filmIndex]);
}
*/  //-------------

let favFilms = [
    "TR",
    "venom",
    "Ghostbusters"
];

favFilms.push("DP", "MS");

for(filmIndex = 0; filmIndex < favFilms.length; filmIndex++){
    //console.log(favFilms[filmIndex]);
}
const filmcheck = () => {

    if (favFilms[2] == "Ghostbusters"){
        console.log("Yay its ghostbuster");
    }
    else{console.log("Boooo!!");}
}
filmcheck();
//for bloody looping
