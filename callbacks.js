// function tilføj(tekst) {
//     console.log("tallet " + tekst);
// };

// let data = [1, 2, 3, 4, 5, 6];
// data.forEach(tilføj);

// function drik(data) {
//     console.log("åben " + data + " luk " + data);
// }

// function tilføj(data, callback) {
//     callback(data);
// }

// tilføj("Fanta", drik);




// her defineres funktion getData, den modtager 2 argumenter
function getData(dataURI, outputData) {
    // der logges 
    console.log('første linje i getData funktionen...');
    // her bliver der lavet en timer
    let timer = setTimeout(function () {
        // der logges
        console.log('Her der der gået 2 sekunder.');
        // her laves et arry
        let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
        // her bliver funktionen dataArray kaldt
        outputData(dataArray);
        // Antal sekunder timeren skal være
    }, 2000);
}
// her lavet outputData funktionen lavet med ét argument
function outputData(dataArray) {
    // der logges
    console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
}
// her bliver funktionen getData kaldt
getData('http://www.domain.com/something', outputData);
// der logge
console.log("Denne kode linje burde være den sidste.");