// Moduler Wrapper Function
// (function(exports, require, module, __filename, __dirname) {
//     var people = ['sakib', 'tamim', 'mashrafi'];

//     var a =9;

//     function test(){
//         console.log('test');
//     }

//     module.exports = people;

//     return module.exports;
// })();


// var people = ['sakib', 'tamim', 'mashrafi'];
// var a = 9;

// function test() {
//     console.log('test');
// }

// module.exports = {
//     people,
//     a,
//     test
// }


// <-----------------------------------Core Module------------------------------------------>
// <-----------Events Module----------->
const EventEmitter = require('events');

class MyEvent extends EventEmitter {
    startEvent() {
        console.log('Hi Tanvir');

        // raise event when bell rings
        setTimeout(() => {
            this.emit('bellRing', {
                name: 'Tanvir Shifat',
                age: 22
            });
        }, 2000);
    }
}

module.exports = MyEvent; // export eventLearning function to index.js