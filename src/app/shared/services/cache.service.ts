import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() {
  }

  setCache(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getCache(key: string): any {
    return JSON.parse(<string>localStorage.getItem(key));
  }

  removeCache(key: string): void {
    localStorage.removeItem(key);
  }
}
