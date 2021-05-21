"use strict";
class Meditator {
    constructor(name) { (this.name + +" mins!"); }
    meditate(duration = 20) {
        console.log(this.name + " is meditating for " + duration + " mins!");
    }
}
