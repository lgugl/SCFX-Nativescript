import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";

import { Unit } from "./unit";

// type unitsType = {
//     [key: string]: Unit[]
// }

@Injectable()
export class UnitService {
    private units: {[key: string]: Unit[]} = {};//: unitsType

    constructor() {
        ["protoss", "terran", "zerg"].forEach(faction => {
            this.loadFaction(faction);
        });
    }

    private loadFaction(faction: string): void {
        var app = fs.knownFolders.currentApp(),
            file = app.path + '/assets/' + faction + '.json';
        if (fs.File.exists(file)) {
            this.units[faction] = require(file);// '~/assets/...'
        } else {
            console.warn("Faction data file " + faction + ".json not found.");
        }
    }

    getUnits(faction: string): Unit[] {
        return this.units[faction] || [];
    }

    getUnit(id: string): Unit {
        for (let faction in this.units) {
            for (let unit of this.units[faction]) {
                if (unit.id == id) {
                    return unit;
                }
            }
        }
        return null;
    }
}