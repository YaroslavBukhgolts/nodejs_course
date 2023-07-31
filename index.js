const moment = require('moment');
const greeting = require('greeting');

// moment example
let now = moment().toDate();

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {

    for(let i = 0; i < 1000; i++){
        await sleep(1000);
        let str = greeting.random();
        console.log(now + ' ' + str);
    }
})();




