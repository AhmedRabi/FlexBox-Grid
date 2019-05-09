import { Component, OnInit } from "@angular/core";
import "owl.carousel";
import "jquery";
declare var $: any;
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-join-us",
  templateUrl: "./join-us.component.html",
  styleUrls: ["./join-us.component.scss"]
})
export class JoinUsComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;

  images = [
    "../../assets/one.jpg",
    "../../assets/two.jpg",
    "../../assets/three.jpg",
    "../../assets/four.jpg",
    "../../assets/one.jpg",
    "../../assets/two.jpg",
    "../../assets/three.jpg",
    "../../assets/four.jpg",
    "../../assets/one.jpg",
    "../../assets/two.jpg",
    "../../assets/three.jpg",
    "../../assets/four.jpg"
  ];
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $(".owl-theme").owlCarousel({
        items: 4,
        navigationText: [
          '<fa-icon [icon]="faChevronCircleLeft" ></fa-icon>',
          '<fa-icon [icon]="faChevronCircleRight" ></fa-icon>'
        ],
        nav: true,
        loop: true
      });

      var shiftLeft = function(arr) {
        var newarr = [];
        for (let i = 1; i < arr.length; i++) {
          newarr[i - 1] = arr[i];
        }
        newarr.push(arr[0]);
        return newarr;
      };
      var shiftRight = function(arr) {
        var newarr = [];
        newarr[0] = arr[arr.length - 1];
        for (let i = 0; i < arr.length - 1; i++) {
          newarr[i + 1] = arr[i];
        }
        return newarr;
      };

      var getImages = function() {
        var imgs = [];
        for (let i = 1; i <= 6; i++) {
          imgs.push("img:nth-child(" + i + ")");
        }
        return imgs;
      };
      var imgs = getImages();
      $("#left").click(function() {
        for (let i = 0; i < imgs.length; i++) {
          $(imgs[i]).animate({ right: "105%" }, 1000);
        }
        imgs = shiftLeft(imgs);
      });
      $("#right").click(function() {
        for (let i = 0; i < imgs.length; i++) {
          $(imgs[i]).animate({ left: "105%" }, 1000);
        }
        imgs = shiftRight(imgs);
      });
    });
  }
}
