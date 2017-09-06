import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-notifications',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class NotificationsComponent implements OnInit {

  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
