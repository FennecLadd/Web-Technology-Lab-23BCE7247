const fs = require('fs');

// 1. Create & Write File
fs.writeFile('demo.txt', 'Hello, this is initial content.\n', (err) => {
    if (err) return console.error('Write Error:', err);
    console.log('File created and written successfully.');

    // 2. Append Data
    fs.appendFile('demo.txt', 'This is appended content.\n', (err) => {
        if (err) return console.error('Append Error:', err);
        console.log('Data appended successfully.');

        // 3. Read File
        fs.readFile('demo.txt', 'utf8', (err, data) => {
            if (err) return console.error('Read Error:', err);
            console.log('File Content:\n', data);

            // 4. Delete File
            fs.unlink('demo.txt', (err) => {
                if (err) return console.error('Delete Error:', err);
                console.log('File deleted successfully.');
            });
        });
    });
});