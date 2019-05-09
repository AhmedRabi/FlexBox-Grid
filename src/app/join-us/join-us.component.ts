import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-join-us",
  templateUrl: "./join-us.component.html",
  styleUrls: ["./join-us.component.scss"]
})
export class JoinUsComponent implements OnInit {
  images = [
    "../../assets/four.jpg",
    "../../assets/one.jpg",
    "../../assets/two.jpg",
    "../../assets/three.jpg",
    "../../assets/four.jpg",
    "../../assets/one.jpg"
  ];
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {});
  }
}
