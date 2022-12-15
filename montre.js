var d = document.body;
var newD = document.createElement('div');
newD.classList.add('montre');
d.append(newD);

var newS = document.createElement('span');
newS.classList.add('one')
newD.append(newS)

var deuN = document.createElement('span');
deuN.classList.add('pointOne')
newD.append(deuN)

var newN = document.createElement('span');
newN.classList.add('two')
newD.append(newN)

var deuP = document.createElement('span');
deuP.classList.add('point')
newD.append(deuP)

var newM = document.createElement('span');
newM.classList.add('three')
newD.append(newM)

function refresh() {
    var t = 1000;
    setTimeout('showDate()', t)
}

function showDate() {
    var date = new Date();

    var h = date.getHours();
    if (h < 10) { h = '0' + h; }

    var m = date.getMinutes();
    if (m < 10) { m = '0' + m; }

    var s = date.getSeconds();
    if (s < 10) { s = '0' + s; }

    var deuxPoint = ":";
    
    // var andro = h + deuxP + m + deuxP + s;
    // newD.textContent = andro;

    newS.textContent = h ;
    deuN.textContent = deuxPoint;
    newN.textContent = m ;
    deuP.textContent = deuxPoint;
    newM.textContent = s ;
    refresh();
};

