import { szenvedoMondatok } from "./angol.js";

export default class MondatokModel {
    #mondatokLista = [];
    #cim = "";
    #hossz = 0;
    #sugoSzoveg = "";
    #aktObj = {};
    #aktElem = 2;
    constructor() {
        this.#mondatokLista = szenvedoMondatok;
        this.#cim = this.#mondatokLista[0];
        this.#sugoSzoveg = this.#mondatokLista[1];
        this.#hossz = this.#mondatokLista.length - 2
        this.aktMondatOsszeallit(2);
    }

    kovElem(index) {
        //aktElem?
        index = this.#aktElem;
        return index++;
    }

    aktMondatOsszeallit(index) {
        let obj = this.#mondatokLista[index];
        console.log(obj)
        const kv = [...obj.valasztas];
         kv.sort((a, b) => {
            return Math.random() - 0.5;
        })
        kv.unshift("Válassz!"); 

        const tm = obj.mondat.split(" ");
        /*
        const km = [...zm]
        km.sort((a, b) => {
            return Math.random() - 0.5;
        });
        */
        this.#aktObj = {
            magyar: obj.magyar,
            index: this.#aktElem,
            mondat: obj.mondat,
            alap: obj.alap,
            helyes: obj.valasztas[0],
            kevertValasztas: kv,
            teljesMondat: tm,
            //kevertMondat: km,
        }
        return this.#aktObj
    }

    get cim() {
        return this.#cim;
    }

    get sugoSzoveg() {
        return this.#sugoSzoveg;
    }

    get hossz() {
        return this.#hossz;
    }
}