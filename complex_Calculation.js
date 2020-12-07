let numbers = [20, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let number;
let root = 0;
for (number = 0; number < numbers.length; number++) {
  root = Math.sqrt(numbers[number]).toFixed(2);
  console.log(numbers[number] +" Karekökü: " + root);
}

let index;
let squares = 0;
for (index = 0; index < numbers.length; index++) {
  squares = Math.pow(numbers[index], 2);
  console.log(numbers[index] + " Karesi: " + squares);
}

let i;
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Toplami: " + sum);

let num;
let avarege = 0;
let summe = 0;
for (num = 0; num < numbers.length; num++) {
  summe += numbers[num];
  avarege = summe / numbers.length;
}
console.log("Ortalamasi: " + avarege);

let sortedArray = numbers.sort(function(a, b){
    return a - b;
});

let smallestElement = sortedArray[0];
console.log("En kücük sayi: " +smallestElement);

let biggestElement = sortedArray[numbers.length-1];
console.log("En büyük sayi: " + biggestElement);


