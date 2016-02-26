var trues = ['Once she ran out of KFC fries, and so used her oyster card to scoop up the remaining coleslaw to eat as she travelled up the tube escalator.',
    'Once she woke up in Clapham Common dressed as Amy Winehouse.',
    'Once she adopted a scurry of baby squirrels and raised them as her own children.',
'Once she went to pet a swan because she thought it was cute.',
'Kayla is a certified cocktail masterclass graduate.',
'She fell over drunk and was concussed for days.',
'Once, she stole a pint glass from Green Pub and didn\'t want the contents, so threw the liquid over a stranger.',
'As soon as she went into the Green pub after work a nice irish man brought her a Jaegar bomb then she left the pub.',
'Once, Kayla espoused the politics of Adolf Hitler as she encouraged forced sterilisation. Seriously.',
'She attempted to sleep under Lacys desk as if she was a dog.'];

var lies = ['Once she didn\'t talk to Lacy for a week, because of the Jaffle vs. Toastie controversy (aka \"it\'s a jaffle, not a fucking toastie\").',
'Once Kayla and Lindsay had an arm wrestle to decide which commonwealth country was superior (Australia or Canada).',
'Once broke a toe playing with AFL.',
'Kayla once saved a man from choking on a Gregg\'s donut by headbutting them in the stomach.',
'Kayla\'s favourite food is coconut.',
'Kayla once took a cardboard cutout of a car through a drivethrough takeaway so they would serve her.',
'Once put out a fire at the start of a woods on the way home from work.',
'Her favourite restuarant in Morden is Verona Pizzeria.',
'Kayla once killed a joey.',
'She won a competition to go out for dinner with Jason Donovan when she was 15.',
'Kayla once got so drunk Elham had to take her back to her house to look after her. When she gave her clothes to change into for the night, she wore Elham\'s shirt as a skirt and went to sleep.'];


var all = trues.concat(lies);
var qNumber = generateRandomNumber();
var q = all[qNumber];
document.getElementById("question").innerHTML = q;
all.splice(qNumber, 1);

function generateRandomNumber() {

    return Math.floor(Math.random() * all.length);
}

function trueOrLie(reply) {
    var isTrue = (trues.indexOf(q) > -1);
    var result;
    if (isTrue === reply)
        result = "You are right!";
    else
        result = "You are wrong!";

    document.getElementById("result").innerHTML = result;
    $(".reply").hide();
    if (isTrue) {
        $(".question").addClass("true");
    } else {
        $(".question").addClass("lie");
    }
    console.log(all.length);
    if (all.length > 1)
        $(".replay").show();
}

function replay() {
    console.log(all.length);
    if (all.length < 2)
        $(".replay").hide();
    qNumber = generateRandomNumber();
    q = all[qNumber];
    document.getElementById("question").innerHTML = q;
    all.splice(qNumber, 1);
    $(".question").removeClass("true").removeClass("lie");
    document.getElementById("result").innerHTML = "";
    $(".reply").show();
    $(".replay").hide();
}
