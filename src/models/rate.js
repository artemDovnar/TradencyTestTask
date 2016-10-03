export class Rate {
    constructor(id, name, askValue, bidValue) {
        this.id = id;
        this.name = name;
        this.askValue = askValue;
        this.bidValue = bidValue;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAskValue() {
        return this.askValue;
    }

    setAskValue(askValue) {
        this.askValue = askValue;
    }

    getBidValue() {
        return this.bidValue;
    }

    setBidValue(bidValue) {
        this.bidValue = bidValue;
    }


}

