import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /** indexOf (string and regex) */
  indexOf = (text: string, search: string | RegExp, start: number) => {
    if (typeof search === "string")
      return text.indexOf(<string>search, start); // string
    let index = text.slice(start).search(search); // regex
    return index < 0 ? index : index + start; // return -1
  }
}
