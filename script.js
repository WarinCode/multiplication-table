// node a.js

// const prompt_sync = require('prompt-sync')();
// let input = prompt_sync('ต้องการสูตรคูณแม่อะไร >>> ');
// let length = prompt_sync('จำนวน >>> ')

// let title = input
// let use = input

// console.log(`สูตรคูณแม่ ${title}`);

// function process(result) {
//     for (index = 0; index < length;) {
//         index++
//         result = index * use
//         console.log(`${use} X ${index} =  ${result}`);
//     };
// };
// process();

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
