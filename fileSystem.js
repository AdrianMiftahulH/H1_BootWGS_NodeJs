//Membuat variabel fs
const fs = require('fs');

// mengirim data/tulisan ke test.text
fs.writeFileSync('test.text', 'Hello world secara sync');
