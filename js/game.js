var trues = ['Once Kayla killed me', 'true', 'true'];
var lies = ['lie', 'lie', 'lie'];
var all = trues.concat(lies);
var q = all[Math.floor(Math.random() * all.length)];
document.getElementById("question").innerHTML = q;

function trueOrLie(reply) {
    var isTrue = (trues.indexOf(q) > -1);
    var result;
    if ( isTrue === reply)
        result = "You are right!";
    else
        result = "You are wrong!";

    document.getElementById("result").innerHTML = result;
    $(".reply").hide();
    if (isTrue) {
        $(".question").addClass("true");
    }else
    {
        $(".question").addClass("lie");
    }

}
