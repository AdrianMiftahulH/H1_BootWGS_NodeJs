//const fs = require('fs');

// fs.writeFileSync('test.text', 'Hello world secara syncrounous');




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name ? ', (name) => {
    rl.question('no phone ? ', (noPhone) => {
        rl.question('email ? ', (email) => {
            console.log(`Thank You ${name},no phone : ${noPhone},email : ${email}`);
            rl.close();
        });
    });
});
// membuat cli kontak
// tentang yasn

