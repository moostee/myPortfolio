import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() { }

  ngOnInit() : void {
    this.getYear();
  }

  getYear() {    
    let today = new Date();
    let yyyy = today.getFullYear();
    this.year = yyyy;
  }
}
