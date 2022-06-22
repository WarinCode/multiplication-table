// RUNFILE: node script.js

const prompt_sync = require('prompt-sync')();
class multiplication {
    input = prompt_sync('เลือกสูตรคูณแม่ >>> ');
    length = prompt_sync('จำนวน >>> ')

    process = (result, zero = 0) => {
        console.log(`\nสูตรคูณแม่ ${this.input}`);
        while (zero < this.length) {
            zero++
            result = zero * parseInt(this.input);
            console.log(`${this.input} X ${zero} =  ${result}`);
        };
    };
};

new multiplication().process();
