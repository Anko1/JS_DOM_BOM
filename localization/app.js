var applyLanguage = function (lang) {
    alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
    var defaultLanguage = 'ua';
    //

    return defaultLanguage;
}

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);

for (var i = 0; i < langEls.length; i++) {
    var langEl = langEls[i];

    // langEl.style.display = 'inline';
    langEl.classList.add('visible');
}

//My code here

var radios = document.getElementsByName('lang');
// console.log(radios);
for (var j = 0, max = radios.length; j < max; j++) {
    radios[j].onclick = function () {
        // alert(this.value);
        var newLang = this.value;

        changeLang(newLang);

        // applyLanguage(newLang);
        currentLang = newLang;
    }
}

function changeLang(lang) {
    // var langs = document.getElementsByClassName('lang');
    // langs.forEach(function (item, i, arr) {
    //    item.style.display = 'none';
    // });


    // if(curLang == undefined) return;
    var ol = document.getElementsByClassName('lang-' + currentLang);
    ol = Array.prototype.slice.call(ol);
    ol.forEach(function (item, i, arr) {
        item.classList.remove('visible');
    });

    var nL = document.getElementsByClassName('lang-' + lang);
    nL = Array.prototype.slice.call(nL);
    nL.forEach(function (item, i, arr) {
        item.classList.add('visible');
    });

}


// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function () {
    saveInCookie(currentLang)
});

function saveInCookie(lang) {
    document.cookie = 'lang='+lang;
}

function loadLangFromCookie() {
    var lfc = getCookie('lang');
    console.log(lfc);
    
    if(lfc != undefined)
        changeLang(lfc);
}

loadLangFromCookie();

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}