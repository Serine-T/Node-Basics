const fs = require('fs');

fs.unlink('./newFolder/example.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        fs.rmdir('newFolder', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Deleted folder')
            }
        })
    }
})