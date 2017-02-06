function KeyCode2String(code) {
    if (code > 47 && code < 91) {
        return String.fromCharCode(code);
    }
    else {
        return "F" + (code - 111).toString();
    }
}
var ListenKey = (function () {
    function ListenKey() {
    }
    ListenKey.init = function () {
        document.onkeydown = function (evt) {
            for (var i = 0; i < ListenKey.arrType.length; i++) {
                switch (ListenKey.arrType[i]) {
                    case "Ctrl": if (evt.ctrlKey == true) {
                        if (KeyCode2String(evt.which) == ListenKey.arrKey[i].toUpperCase()) {
                            ListenKey.arrFun[i]();
                            return false;
                        }
                    }
                    else
                        break;
                    case "Alt": if (evt.altKey == true) {
                        if (KeyCode2String(evt.which) == ListenKey.arrKey[i].toUpperCase()) {
                            ListenKey.arrFun[i]();
                            return false;
                        }
                    }
                    else
                        break;
                    case "":
                        if (KeyCode2String(evt.which) == ListenKey.arrKey[i].toUpperCase()) {
                            ListenKey.arrFun[i]();
                            return false;
                        }
                        else
                            break;
                }
            }
        };
    };
    ListenKey.bind = function (type, key, callback) {
        ListenKey.arrType.push(type);
        ListenKey.arrKey.push(key);
        ListenKey.arrFun.push(callback);
    };
    return ListenKey;
}());
ListenKey.arrType = [];
ListenKey.arrKey = [];
ListenKey.arrFun = [];
//# sourceMappingURL=shortkey.js.map