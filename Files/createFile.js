const fs = require('fs');

//create  a file//write in it and read it

fs.writeFile('Example.txt', '655546wedjgwuyed', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully created ')
        fs.readFile('Example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        })
    }
})