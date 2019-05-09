import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    var href = $(location).attr("href");
    $(document).ready(function() {
      $(".navbar-toggler").click(function() {
        $("#collapsibleNavId").toggleClass("bg-color");
      });
      function changeNavBarColor() {
        href = $(location).attr("href");
        if (href.search("home") != -1 || href.search("expertise") != -1) {
          $("nav")
            .addClass("bg-transparent")
            .removeClass("bg-color");
        } else {
          $("nav")
            .addClass("bg-color")
            .removeClass("bg-transparent");
        }
      }
      setInterval(function() {
        changeNavBarColor();
      }, 1);
    });
  }
}
