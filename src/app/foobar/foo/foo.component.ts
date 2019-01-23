import { Component, OnInit } from '@angular/core';
import { FooBarService, Data} from '../../service/foo-bar.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  public data: Data;

  constructor(private fooBarService: FooBarService) { }

  ngOnInit() {
    this.fooBarService.fetchData();
    this.fooBarService.data.subscribe(d => this.data = d);
  }
}
