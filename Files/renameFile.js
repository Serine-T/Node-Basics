const fs = require('fs');

fs.rename('example.txt', 'exampleRenamed.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully renamed');
    }
})