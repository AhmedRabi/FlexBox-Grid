import { Component, OnInit } from '@angular/core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faChevronDown= faChevronDown;
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      var scroll = function(){
        $('a.scroll').animate({bottom:'30'},2000,function(){

          $('a.scroll').animate({bottom:"60"},1500,function(){
            scroll();
          })
      })
      }
      scroll();
    });
  }

}
