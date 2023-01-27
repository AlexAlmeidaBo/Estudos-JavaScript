const escola = "Cod3r"

console.log(escola.charAt(3));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('C'));

console.log(escola.substring(1));
console.log(escola.substring(0, 5))

console.log('escola '.concat(escola).concat("!"));
console.log('escola ' + escola + '!');
console.log(`escola ${escola}!`);
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro,Gustavo'.split(','));