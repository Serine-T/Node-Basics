const fs = require('fs');

fs.readdir('example', (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (let file of files) {
            fs.unlink('./example/' + file, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    fs.rmdir('example', (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log('Successfully deleted file')
                        }
                    })

                }
            })
        }
    }
})