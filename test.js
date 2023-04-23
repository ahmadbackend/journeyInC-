var name = exports.name = 'Packt';
var secret = 'zoltan';
exports.lower = function(input) {
    return input.toLowerCase();
    };
    exports.upper = function(input) {
    return input.toUpperCase();
    };
    exports.get_name = function() {
    return name;
    }
    exports.get_secret = function() {
    return secret;
    }
    var mod = require('./mymod.js');
console.log(mod.name);
console.log(mod);
console.log(mod.lower('APPLE'));
console.log(mod.upper('mango'));
console.log(mod.get_name());
var reverse = require('./reverse.js');
console.log(reverse(name));