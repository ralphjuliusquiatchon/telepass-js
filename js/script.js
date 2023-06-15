/* calcolo la mia tariffa di telepass */

const myButton = document.getElementById ('mybutton');

myButton.addEventListener ('click',


    function () {
        const KM = document.querySelector ('[name="km"]');

        let tipoVeicolo = document.getElementById ('tipoveicolo').value;


        const prezzo = KM.value * 0.15;
        console.log (prezzo, typeof prezzo);
    
        // Se il tipo di veicolo è un camion, il prezzo si triplica
        if (tipoVeicolo == camion) {
            let prezzoFinale = prezzo * 3;
            console.log (prezzoFinale);
        }
    
    
    
    }


);
