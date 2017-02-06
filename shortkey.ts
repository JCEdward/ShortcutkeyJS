
function KeyCode2String(code: number) {
    if (code > 47 && code < 91) {
        return String.fromCharCode(code);
    } else {
        return "F" + (code - 111).toString();
    }
}
class ListenKey {
    public static arrType: string[] = [];
    public static arrKey: string[] = [];
    public static arrFun: { (): void; }[] = [];

    static init() {
        document.onkeydown = function (evt) {
            for (var i = 0; i < ListenKey.arrType.length; i++) {
                switch (ListenKey.arrType[i]) {
                    case "Ctrl": if (evt.ctrlKey == true) {
                        if (KeyCode2String(evt.which) == ListenKey.arrKey[i].toUpperCase()) {
                            ListenKey.arrFun[i](); return false;
                        }
                    } else break;
                    case "Alt": if (evt.altKey == true) {
                        if (KeyCode2String(evt.which) == ListenKey.arrKey[i].toUpperCase()) {
                            ListenKey.arrFun[i](); return false;
                        }
                    } else break;
                    case "":
                        if (KeyCode2String(evt.which) == ListenKey.arrKey[i].toUpperCase()) {
                            ListenKey.arrFun[i](); return false;
                        } else break;
                }
            }
        }
    }
    static bind(type: string, key: string, callback: () => void) {
        ListenKey.arrType.push(type);
        ListenKey.arrKey.push(key);
        ListenKey.arrFun.push(callback);
    }
}
