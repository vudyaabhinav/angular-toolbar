import { Component, OnInit } from '@angular/core';
import { faCoffee, faGamepad, faAdjust, faBold, faAmbulance, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-space',
  templateUrl: './test-space.component.html',
  styleUrls: ['./test-space.component.css']
})
export class TestSpaceComponent implements OnInit {
  showThisDiv: Boolean = false;
  boldText: Boolean = false;
  showSearchBox: Boolean = false;
  coffeeIcon: any = faCoffee;
  gamepadIcon: any = faGamepad;
  adjustIcon: any = faAdjust;
  boldIcon: any = faBold;
  ambulanceIcon: any = faAmbulance;
  searchIcon: any = faSearch;

  gameClick(): void {
    window.location.href = 'https://www.gamestop.com/';
  }

  coffeeClick(): void {
    window.location.href = 'https://www.starbucks.com/';
  }

  ambulanceClick(): void {
    alert('You called for an ambulance');
  }
  constructor() { }

  ngOnInit() {
  }

}
