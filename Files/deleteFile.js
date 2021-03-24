const fs = require('fs');

fs.unlink('exampleRenamed.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Succesfully deleted the file');
    }
})