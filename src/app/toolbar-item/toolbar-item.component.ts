import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.css']
})
export class ToolbarItemComponent implements OnInit {
  @Input() faBtnIcon: any;
  constructor() { }

  ngOnInit() {
  }

}
