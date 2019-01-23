import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

export interface Data {
  message: number;
}

@Injectable({
  providedIn: 'root'
})
export class FooBarService {

  private dataSource = new BehaviorSubject<Data>({message: 0});
  public data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  public fetchData(): void {
    this.http.get<Data>('http://localhost:3000')
        .subscribe((data: Data) => this.dataSource.next(data));
  }
}
