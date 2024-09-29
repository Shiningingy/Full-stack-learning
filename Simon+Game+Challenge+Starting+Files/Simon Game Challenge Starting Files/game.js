var sound_mapping = new Map();
var squares = [];
var playing = false;
var default_level = 3;
var current_level = 3;
var buttons = $(".btn");
var ready = false;
var sequence = [];

for (var i=0;i<buttons.length;i++){
    squares.push(buttons[i].id);
    sound_mapping.set(buttons[i].id,new Audio("./sounds/"+buttons[i].id+".mp3"));
}
sound_mapping.set("wrong",new Audio("./sounds/wrong.mp3"));

function playSound(buttonId){
    sound_mapping.get(buttonId).play();
}

function playAnmination(buttonId){
    $("#"+buttonId).addClass("pressed");
    setTimeout(() => {
        $("#"+buttonId).removeClass("pressed");
    }, 100);
}


function showSequence(interval_self) {
        playSound(sequence[idx]);
        playAnmination(sequence[idx]);
}

function play(level){
    $("#level-title").html("Ready?");
    sequence = []
    ready = false;
    for (var i = 0; i<level; i++) {
        var buttonIdx = Math.floor(Math.random()*3+1);
        sequence.push(squares[buttonIdx]);
    }
    (function(){
        var idx = 0;
        var seqInterval = setInterval(function(){
            if (idx < sequence.length) {
                playSound(sequence[idx]);
                playAnmination(sequence[idx]);
                ++idx
            } else {
                clearInterval(seqInterval);
                $("#level-title").html("Its your turn now!");
                ready = true;
            }
        },1000);
    }());
}

$(".btn").click(
    function(){
        if (ready){
            if(sequence[0]==this.id){
                playSound(this.id);
                playAnmination(this.id)
                if (sequence.length == 1) {
                    current_level += 1;
                    playing = false;
                    $("#level-title").html("You win this one, press any key to challenge next level");
                } else {
                    sequence.shift();
                }
            } else {
                playSound("wrong");
                current_level = default_level;
                playing = false;
                $("#level-title").html("You Failed!\n press any key to retry");
            }
       } else {
         if (playing) {
            alert("Please wait until the sequence ends")
         }
       }
    }
)

$("body").on( "keydown", function(event){
    if (playing) {
        if(confirm("Are you sure to restart the game?")){
            current_level = default_level;
            playing = false;
        }
    } else {
        var sequence = play(current_level);
        playing = true;

    }
})

