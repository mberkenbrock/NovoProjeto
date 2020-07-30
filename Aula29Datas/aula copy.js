//Date

const data1 = new Date();
console.log(data1);

const data2 = new Date('July 29 2020 12:34');
console.log(data2);

const data3 = new Date(2019,00,06,9,30);
console.log(data3);

data3.setFullYear(2030);
data3.toDateString;
console.log(data3.toDateString);
