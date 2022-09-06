const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Memmbuat pertanyaan nama 
rl.question('what is your name ? ', (name) => {
    // Membuat Pertanyaan no telepon
    rl.question('no phone ? ', (noPhone) => {
        // Membuat pertanyaan email
        rl.question('email ? ', (email) => {
            // Output ke terminal sesaui jawaban di pertanyan
            console.log(`Thank You ${name}, no phone : ${noPhone}, email : ${email}`);
            // Keluar dati rl
            rl.close();
        });
    });
});



// membuat cli kontak
// tentang yasn

