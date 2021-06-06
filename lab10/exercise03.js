class Info {
    logging(msg) {
        console.info(msg);
    }
}

class Warn {
    logging(msg) {
        console.warn(msg);
    }
}

class Error {
    logging(msg) {
        console.error(msg);
    }
}

class Table {
    logging(msg) {
        console.table(msg);
    }
}

class Choose {
    choice = "";
    setStrategy(choice) {
        this.choice = choice;
    }
    logging(msg) {
        this.choice.logging(msg);
    }
}

const decision = new Choose();
let info = new Info();
decision.setStrategy(info);
decision.logging("Om Namo Shivaya!");

let warn = new Warn();
decision.setStrategy(warn);
decision.logging("Om Namo Shivaya!");

let table = new Table();
decision.setStrategy(table);
decision.logging("Om Namo Shivaya!");