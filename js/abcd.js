"use strict";
class ABCD {
    elementlist = []
    showing = 0

    constructor() {

    }

    set_list(a) {

        this.elementlist = a;
        this.show(1)

    }

    show(x) {
        let q = x - 1
        for (const l in this.elementlist) {
            if (l == q) { // i didnt use === because it may cause a bug
                this.elementlist[l].style.display = "block";
            } else {
                this.elementlist[l].style.display = "none";
            }
        }
        this.showing = q;
    }

    getId(x) {
        return document.getElementById(x);
    }
}
