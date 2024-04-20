let {gui} = require("./ponyacha");
let {init} = require("./ponyacha");

class poNYACHA {
    constructor(data) {
        gui.call(this, data);
        
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                init.call(this, data);
            });
        } else {
            init.call(this, data);
        }
    }
}

module.exports = poNYACHA;
