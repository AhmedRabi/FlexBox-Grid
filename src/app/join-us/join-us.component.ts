import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
  images=["../../assets/one.jpg","../../assets/two.jpg","../../assets/three.jpg","../../assets/four.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
