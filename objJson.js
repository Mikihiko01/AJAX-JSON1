$(function () {

//    var tasasTomb = JSON.parse(tarsasJSON);


    $.ajax({
        url: "termekek.json",
        success: function (result) {
            console.log(result);
            tarsasTomb = result;
            kiir();
        }}
    );
$("#OK").click(ment);
$("#rendez").click(rendez);

});
var tarsasTomb =[];


function rendez() {
    tarsasTomb.sort(function(a, b){return Number(a.nev > b.nev)-0.5;});
    kiir();
}

function kiir() {
    $("article").empty();
//    console.log(tarsasTomb);
    $("article").append("<table>");
    $("article table").append("<tr>");  //<th>Név</th><th>Ára</th><th>Tipus</th></tr>");
    $("article table tr").append("<th>Termék neve</th><th>Termék ára</th><th>Termék tipusa</th>");
    for (var i = 0; i < tarsasTomb.length; i++) {
        $("article table").append("<tr>");
        for (var item in tarsasTomb[i]) {
            $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i][item]+"</td>");
        
        }
//        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].termeknev+"</td>");
//        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].ar+"</td>");
//        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].tipus+"</td>");
    }
}
function ment() {
    var ujAdat={};
        ujAdat.termeknev = $("#nev").val();
        ujAdat.ar = $("#nev").val();
        ujAdat.tipus = "Táblás";
        
        console.log(ujAdat);
        
        tarsasTomb.push(ujAdat);
        kiir();
        
}


// a z objektum szerkezet létrehozzása
//var tarsasTomb = [
//    {
//        termeknev: "Monopoly",
//        ar: 1500,
//        tipus:"Táblajáték"
//
//    },
//    {
//        termeknev: "Uno",
//        ar: 1000,
//        tipus:"Kártyajáték"
//
//    }
//];

// JSON egy szöveges szabványos adat leíró formátum megfelelhető a JS objektumának
var tarsasJSON = '[{"termeknev": "Monopoly","ar": 1500,"tipus":"Táblajáték"},{"termeknev": "Uno","ar": 1000,"tipus":"Kártyajáték"}]';



