import {Rate} from './rate'

export class RateInfo {
    constructor($interval) {
        var that = this;
        this.numberOfRates = 30;
        this.ids = this.generateIds(this.numberOfRates);
        this.instruments = this.generateInstruments(this.numberOfRates);
        this.rates = [];
        this.prevRates = new Map();

        that.createRates();
        $interval(() => that.createRates(), 1000);
    }

    generateInstruments(count) {
        var instruments = [];
        for (let i = 0; i < count; i++) {
            instruments.push("Instrument " + (i + 1));
        }
        return instruments;
    }

    generateIds(count) {
        var ids = [];
        for (let i = 0; i < count; i++) {
            ids.push(i);
        }
        return ids;
    }

    getRates() {
        return this.rates;
    }

    setRates(rates) {
        this.rates = rates;
    }

    randomInRange(min, max) {
        return Math.random() < 0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
    }

    getOld(id) {
        return this.prevRates.get(id);
    }

    getName(index) {
        return this.instruments[index];
    }

    changeInstrumentName(index, newName) {
        this.instruments[index] = newName;
        this.prevRates.get(this.rates[index].id).setName(newName);
        this.rates[index].setName(newName);
    }

    removeInstrument(index) {
        this.prevRates.delete(this.rates[index].id);
        this.instruments.splice(index, 1);
        this.rates.splice(index, 1);
        this.ids.splice(index, 1);
    }

    createRates() {
        var prevRates = new Map();
        this.rates.forEach(rate => {
            prevRates.set(rate.id, rate);
        });
        this.prevRates = prevRates;
        this.rates = [];
        var count = this.prevRates.size > 0 ? this.prevRates.size : this.numberOfRates;
        for (let i = 0; i < count; i++) {
            this.rates.push(new Rate(this.ids[i], this.instruments[i], this.randomInRange(2, 10).toFixed(2), this.randomInRange(3, 11).toFixed(2)));

        }

        var maxAsk = Math.max(...this.rates.map(rate => {
            return rate.getAskValue();
        }));
        var maxBid = Math.max(...this.rates.map(rate => {
            return rate.getBidValue();
        }));

        console.log("max: " + Math.max(maxAsk, maxBid));
    }

}

