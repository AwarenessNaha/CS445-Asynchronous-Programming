class RegularBulb {
    constructor() {
        this.range = [50, 100];
        this.usageLife = 1;
    }
}

class EnergySaverBulb {
    constructor() {
        this.range = [5, 40];
        this.usageLife = 10;
    }
}

class Factory {
    makeBulb(type) {
        let bulb;
        if (type === "RegularBulb") {
            bulb = new RegularBulb();
        } else if (type === "EnergySaverBulb") {
            bulb = new EnergySaverBulb();
        }
        return bulb;
    }
}

const product = [];
const factory = new Factory();
product.push(factory.makeBulb("RegularBulb"));
product.push(factory.makeBulb("EnergySaverBulb"));
product.push(factory.makeBulb("RegularBulb"));
product.push(factory.makeBulb("EnergySaverBulb"));

for (let item of product) {
    console.log(item);
}

