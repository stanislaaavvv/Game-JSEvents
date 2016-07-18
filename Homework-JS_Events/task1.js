/**
 * Created by user on 7/17/16.
 */


var position = {
    bottom:0,
    left: 0
};

var positionvictim = {
    top:0,
    left:0,

};

var positionbullet = {
    left: 0,
    bottom: 20
}


var moveLeft = false;
var moveRight = false;
var speed = 2;
var startbullet = false;
var speedtarget = 1;
var NumberOfBullets = 10;
var Hits = 0;
var HitDetect = 0;

function Movements() {


    if (moveLeft && position.left > 0) {
        position.left -= speed;
    }

    if (moveRight && position.left < 180) {
        position.left += speed;
    }

    document.querySelector('#shooter').style.left = position.left + 'px';


    positionvictim.left += speedtarget;

    if (positionvictim.left > 180) {
        positionvictim.left = 0;
    }

    document.querySelector('#victim').style.left = positionvictim.left + 'px';

    if (positionbullet.bottom < 180 && startbullet == true) {
        positionbullet.bottom += speed;
        document.querySelector('#bullet').style.bottom = positionbullet.bottom + 'px';

    }

    document.getElementById('shotsleft').innerHTML = NumberOfBullets;
    document.getElementById('hitresult').innerHTML = Hits;

    if (positionbullet.bottom == 180 && Hitdetect + 8 > positionvictim.left && Hitdetect - 8 < positionvictim.left) {
        document.getElementById('hitresult').innerHTML = ++Hits;
    }

    if (NumberOfBullets == 0 && Hits >= 7 && positionbullet.bottom == 180) {
        document.getElementById('looseorwin').style.borderTop = '3px dotted black';
        document.getElementById('looseorwin').style.borderLeft = '3px dotted black';
        document.getElementById('looseorwin').innerHTML = 'CONGRATULATIONS! YOU WIN!';
        return;
    }
    if (NumberOfBullets == 0 && Hits < 7 && positionbullet.bottom == 180) {
        document.getElementById('looseorwin').style.borderTop = '3px dotted black';
        document.getElementById('looseorwin').style.borderLeft = '3px dotted black';
        document.getElementById('looseorwin').innerHTML = 'TRY AGAIN! YOU LOOSE!';
        return;
    }




    if (positionbullet.bottom == 180) {
        positionbullet.bottom = 20;
        positionbullet.left = position.left;
        startbullet = false;
        document.querySelector('#bullet').style.bottom = 20 + 'px';
        document.querySelector('#bullet').style.left = position.left + 'px';
        document.querySelector('#bullet').style.display = 'none';
    }

    requestAnimationFrame(Movements);
}

requestAnimationFrame(Movements);




document.addEventListener('keydown', function(detect) {


    if (positionbullet.bottom == 20) {

        if (detect.keyCode == 32) {
            var fire = document.getElementById('bullet');
            fire.style.display = 'initial';
            startbullet = true;
            document.querySelector('#bullet').style.left = position.left + 'px';
            Hitdetect = position.left;
            --NumberOfBullets;

        }
    }

    if (detect.keyCode == 37) {
        moveLeft = true;
    }

    if (detect.keyCode == 39) {
        moveRight = true;
    }


}, false);





document.addEventListener('keyup', function(detect) {



    if (detect.keyCode == 37) {
        moveLeft = false;
    }

    if (detect.keyCode == 39) {
        moveRight = false;
    }

}, false);

document.addEventListener('mousedown', function (detect) {

    if (positionbullet.bottom == 20) {
        if (detect.button == 0) {
            var fire = document.getElementById('bullet');
            fire.style.display = 'initial';
            startbullet = true;
            document.querySelector('#bullet').style.left = position.left + 'px';
            Hitdetect = position.left;
            --NumberOfBullets;
        }

    }

} ,false);


document.addEventListener('mousemove', function (detect) {

    mousePositon = detect.pageX;
    position.left += (mousePositon - position.left) / 12;

    if (position.left  > 186 ) {
        position.left = 186;
    }

    document.getElementById('shooter').style.left = position.left + 'px';

}, false);





