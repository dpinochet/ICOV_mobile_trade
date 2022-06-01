import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // items: any;
  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }

  filterItems(searchTerm, items) {
    let all_items = items
    // console.log(all_items.length);

    return items.filter((item) => {
      return item.title.toLowerCase().
        indexOf(searchTerm.toLowerCase()) > -1
    });
  }
}
