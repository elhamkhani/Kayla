var trues = ['Once Kayla killed me', '2', '3'];
var lies = ['4', '5', '6'];
var all = trues.concat(lies);

document.getElementById("question").innerHTML = all[Math.floor(Math.random() * all.length)];
