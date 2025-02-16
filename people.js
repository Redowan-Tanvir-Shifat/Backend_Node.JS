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


var people = ['sakib', 'tamim', 'mashrafi'];
var a = 9;

function test() {
    console.log('test');
}

module.exports = {
    people,
    a,
    test
}