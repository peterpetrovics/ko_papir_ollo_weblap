document.addEventListener('DOMContentLoaded', () => {
    let felhasználóPont = 0, számítógépPont = 0, döntetlenPont = 0;
    const választások = ["kő", "papír", "olló"];
    const kő = document.getElementById("kő"), papír = document.getElementById("papir"), olló = document.getElementById("olló");
    const ikon = document.getElementById("ikon");
    const eredmeny = document.querySelector(".eredmeny");
    const gépVálasztásKép = document.getElementById("számítógépválasztás"), felhasználóVálasztásKép = document.getElementById("felhasznaloválasztás")
    const felhasználóPontÉrték = document.getElementById("felhasznalopont"), számítógépPontÉrték = document.getElementById("számítógéppont"), döntetlenPontÉrték = document.getElementById("döntetlenpont");



    function képkattintás() {
        kő.addEventListener('click', function() {kőpapírolló("kő");})
        papír.addEventListener('click', function() {kőpapírolló("papír");})
        olló.addEventListener('click', function() {kőpapírolló("olló");})
    }

    function számítógépVálasztás() {
        const randomNumber = Math.floor(Math.random() * 3);
        return választások[randomNumber];
    }

    function képKonvertálás(választás) {
        if (választás == "kő") {
            return "images/rock.png";
        } else if (választás == "papír") {
            return "images/paper2.png";
        } else {
            return "images/scissors2.png";
        }
    }
    
    function kőpapírolló(felhasználóVálasztás) {
        const gépVálasztás = számítógépVálasztás();
        if ((felhasználóVálasztás == "kő" && gépVálasztás == "olló") ||(felhasználóVálasztás == "papír" && gépVálasztás == "kő") || (felhasználóVálasztás == "olló" && gépVálasztás == "papír") ) {
            felhasználóPont++;
            eredmeny.innerHTML = "Te nyertél!";
            eredmeny.style.color = "#00FF00";
            ikon.innerHTML = "&#9989;";
            felhasználóPontÉrték.innerHTML = "Győztes:" + felhasználóPont;
            felhasználóVálasztásKép.innerHTML = "<img src = " + képKonvertálás(felhasználóVálasztás) + ">";
            gépVálasztásKép.innerHTML = "<img src = " + képKonvertálás(gépVálasztás) + ">";
        
        }
        else if ((felhasználóVálasztás == "kő" && gépVálasztás == "papír") ||(felhasználóVálasztás == "papír" && gépVálasztás == "olló") || (felhasználóVálasztás == "olló" && gépVálasztás == "kő") ) {
            számítógépPont++;
            eredmeny.innerHTML = "Vesztettél!";
            eredmeny.style.color = "red";
            ikon.innerHTML = "&#10060;";
            számítógépPontÉrték.innerHTML = "Vesztes:" + számítógépPont;
            felhasználóVálasztásKép.innerHTML = "<img src = " + képKonvertálás(felhasználóVálasztás) + ">";
            gépVálasztásKép.innerHTML = "<img src = " + képKonvertálás(gépVálasztás) + ">";
        }
        else if ((felhasználóVálasztás == "kő" && gépVálasztás == "kő") ||(felhasználóVálasztás == "papír" && gépVálasztás == "papír") || (felhasználóVálasztás == "olló" && gépVálasztás == "olló")) {
            döntetlenPont++;
            eredmeny.innerHTML = "Döntetlen";
            eredmeny.style.color = "white";
            ikon.innerHTML = "";
            döntetlenPontÉrték.innerHTML = "Döntetlen:" + döntetlenPont;
            felhasználóVálasztásKép.innerHTML = "<img src = " + képKonvertálás(felhasználóVálasztás) + ">";
            gépVálasztásKép.innerHTML = "<img src = " + képKonvertálás(gépVálasztás) + ">";
        }
    }



    képkattintás();

})