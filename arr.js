



let numbers = [19,43,88,71,42,11,65,34];

// Arrayبتضيف عنصر لنهاية ال 
numbers.push(27)

// Array بتحذف عنصر من نهاية ال 
numbers.pop()

// بتحول المصفوفة ل نص واحد ويفصل بينها عنصر اختاره 
let joinNames =numbers.join(" || ")

// بتعمل فلتر للعناصر التي تحقق الشرط 
let numFilter = numbers.filter(function(num){
    return num > 50
})

console.log(numFilter)
console.log(numbers)
console.log(joinNames)