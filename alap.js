
function kereses(){
    var bekeromezo = document.getElementById("bekeromezo").value 
    //alert(bekeromezo)
    fetch(`https://api.nevnapok.eu/nev/${bekeromezo}`)
    .then(x => x.json())
    .then(y => megjelenites(y,bekeromezo))

}
function megjelenites(y,bekeromezo){
    console.log(y)
   // for (const elem of Object.values(y)[0]) {
    var szoveg=""
    for (const elem of y[bekeromezo]) {

        console.log(elem)
        szoveg+=`
        <li>
        ${elem}
        </li>
        `
    }
    document.getElementById("sor").innerHTML=szoveg
}
function kereses2(){
    var bekeromezo2 = document.getElementById("bekeromezo2").value 
    //alert(bekeromezo2)
    fetch(`https://api.nevnapok.eu/nap/${bekeromezo2}`)
    .then(x => x.json())
    .then(y => megjelenites2(y,bekeromezo2))

}
function megjelenites2(y,bekeromezo2){
    console.log(y)
   // for (const elem of Object.values(y)[0]) {
    var szoveg=""
    for (const elem of y[bekeromezo2]) {

        console.log(elem)
        szoveg+=`
        <li>
        ${elem}
        </li>
        `
    }
    document.getElementById("sor2").innerHTML=szoveg
}
