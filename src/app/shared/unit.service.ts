import { Injectable, Self } from "@angular/core";
import * as fs from "tns-core-modules/file-system";

import { Unit } from "./unit";

@Injectable()
export class UnitService {
    private units: Array<Unit> = [];

    loadFaction(faction: String): this {
        var app = fs.knownFolders.currentApp(),
            file = fs.path.normalize(app.path + '/assets/' + faction + '.json');
        if (fs.File.exists(file)) {
            this.units = require(file);// '~/assets/...'
        } else {
            console.warn("Faction data file " + faction + ".json doesn't exist.");
        }
        return this;
    }

    getUnits(): Unit[] {
        return this.units;
    }

    getUnit(id: String): Unit {
        this.units.forEach(unit => {
            if (unit.id == id) {
                return unit;
            }
        });
        return null;
    }
}