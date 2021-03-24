const fs = require('fs');

fs.appendFile('exampleRenamed.txt', 'Some data are being appended', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully appended the data.');
    }
})