var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows'
};

var platform = navigator.platform.toLowerCase();
var msgs = document.getElementsByClassName('download-message');


for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0){

        var needed;

        for(var i = 0; i < msgs.length; i++ ) {
            if (msgs[i].getAttribute('data-version') === version) {
                needed = msgs[i];
                break;
            }
        }

        needed.style.display = 'block';
    }
}