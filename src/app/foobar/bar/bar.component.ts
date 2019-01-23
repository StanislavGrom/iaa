import { Component, OnInit } from '@angular/core';
import { FooBarService, Data } from '../../service/foo-bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public data: Data;

  constructor(private fooBarService: FooBarService) { }

  ngOnInit() {
    this.fooBarService.data.subscribe(d => this.data = d);
  }

}
