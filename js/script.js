/* calcolo la mia tariffa di telepass */

const myButton = document.getElementById ('mybutton');

myButton.addEventListener ('click',


    function () {
        const KM = document.querySelector ('[name="km"]');

        let tipoVeicolo = document.getElementById ('tipoveicolo').value;


        const prezzo = KM.value * 0.15;
        
    
        // Se il tipo di veicolo è un camion, il prezzo si triplica
        if (tipoVeicolo == 'camion') {
            let prezzoFinale = prezzo * 3;
            console.log ('Il prezzo si triplica costa: €' + " " + prezzoFinale);
        }

        else if (tipoVeicolo == 'furgone') {
            prezzoFinale = prezzo * 2;
            console.log ('Il prezzo si raddoppia costa: €' + " " + prezzoFinale)
        }

        else if (tipoVeicolo == 'auto') {
            prezzoFinale = prezzo;
            console.log ('Il prezzo non varia: €' + " " + prezzoFinale)
        }
    
    
    
    }


);
