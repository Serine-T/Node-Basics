const fs = require('fs');

fs.mkdir('newFolder', (err) => {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile('./newFolder/example.txt', '123456', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Successfully created')
            }
        })
    }
})