import { Component } from "@angular/core";
import { CardComponent } from "./card/card";
import { PlaneModel } from "./plane-model";

@Component({
  selector: "app-root",
  imports: [CardComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  planes: Array<PlaneModel> = [
    { name: "F-16", speed: 2400, country: "USA" },
    { name: "F-35", speed: 1900, country: "USA" },
    { name: "Su-57", speed: 2600, country: "Russia" },
    { name: "J-20", speed: 2100, country: "China" },
  ];
}