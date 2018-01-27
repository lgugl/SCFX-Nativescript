import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { FactionComponent } from "./pages/faction/faction.component";

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "faction/:id", component: FactionComponent },
    // { path: "unit/:id", component: UnitComponent },
];

export const navigatableComponents = [
    HomeComponent,
    FactionComponent,
];