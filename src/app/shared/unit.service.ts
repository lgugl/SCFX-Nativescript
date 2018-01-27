import { Injectable } from "@angular/core";

import { Unit } from "./unit";

const PROTOSS = require('~/assets/protoss.json');
// const TERRAN = require('~/assets/terran.json');
// const ZERG = require('~/assets/zerg.json');

@Injectable()
export class UnitService {
    private units = PROTOSS;

    getUnits(): Unit[] {
        return this.units;
    }

    getUnit(id: number): Unit {
        return this.units[id];
    }

    getFoobar(): any {
        return PROTOSS;
    }
}