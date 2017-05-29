var bullets = new Array();

$(function () {

    randomPlayerPos();
    controls();

    setInterval(function(){
        bullets.forEach(function(item, i, arr) {
            var b = item[0];

            if(parseInt(b.style.top) < 0) b.remove();


            b.style.top = (parseInt(b.style.top) - 4) + 'px';

        });
    }, 30);
});

function controls() {
    document.body.onkeydown = function (e) {
        var el = document.getElementById('player');

        var KEYCODE_LEFT = 37;
        var KEYCODE_UP = 38;
        var KEYCODE_RIGHT = 39;
        var KEYCODE_DOWN = 40;
        var KEYCODE_SPACE = 32;

        if (e.keyCode == KEYCODE_LEFT) {
            el.style.left = (parseInt(el.style.left) - 10) + 'px';
        }
        else if (e.keyCode == KEYCODE_RIGHT) {
            el.style.left = (parseInt(el.style.left) + 10) + 'px';
        }
        else if (e.keyCode == KEYCODE_UP) {
            el.style.top = (parseInt(el.style.top) - 10) + 'px';
        }
        else if (e.keyCode == KEYCODE_DOWN) {
            el.style.top = (parseInt(el.style.top) + 10) + 'px';
        }
        else if(e.keyCode == KEYCODE_SPACE){
            shoot();
        }

    };
}

function shoot() {
    var bullet = $('<div class="bullet" />');
    bullets.push(bullet);

    var pp = getPlayerPos();
    bullet.css({top: pp.y, left: pp.x});

    $('body').append(bullet);
}

function randomPlayerPos() {
    document.getElementById('player').style.top = '50px';
    document.getElementById('player').style.left = '50px';
}

function getPlayerPos() {
    return {
        "x" : document.getElementById('player').style.left,
        "y": document.getElementById('player').style.top
    };
}
