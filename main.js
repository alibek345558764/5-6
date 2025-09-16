let arr = ["olma", "banan", "shaftoli", "behi"];
alert(`boshlanishida arryning uzunligi: ${arr.length}`);
confirm("siz oxirgi ma'lumotlarni uchirishni xohlaysizmi");
if ((confirm = true)) {
  arr.pop();
  alert(`oxirida arryning uzunligi: ${arr.length}`);
} else {
  alert(`arryning uzunligi: ${arr.length}`);
}
console.log(arr);
