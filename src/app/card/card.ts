import { Component, Input } from "@angular/core";
import { PlaneModel } from "../plane-model";

@Component({
  selector: "app-card",
  templateUrl: "./card.html",
  styleUrl: "./card.css",
})
export class CardComponent {
  @Input() plane: PlaneModel = new PlaneModel();
}