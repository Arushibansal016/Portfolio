import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  implements OnInit, AfterViewInit{
  ngOnInit(): void {
 
  }

  ngAfterViewInit() {
    feather.replace();
  }
}
