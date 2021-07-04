const fs = require('fs')


fs.readFile('input.txt', 'utf8' , (err, data) => {

    if (err) {
        console.error(err)
        return
    }

    console.log(calcRes(data));

    fs.writeFileSync('ouput.txt', calcRes(data));

});



const calcRes = (data) => {
    const dataLines = data.split("\n");

    const [troom, tcond] = dataLines[0].split(" ")
    const mode = dataLines[1];

    switch (mode) {
        case "freeze":
            return (+troom <= +tcond) ? troom : tcond;

        case "heat":
            return (+troom >= +tcond) ? troom : tcond;

        case "auto":
            return tcond;
        case "fan":
            return troom;

    }

}




