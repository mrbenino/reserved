import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {ApiService} from "../../core/services/api.service";
import {API_URL} from "../../core/constansts/url.constants";
import {IReserved} from "../../shared/interfaces/reserved";

@Injectable({
  providedIn: 'root'
})
export class ReservedService {
  
  constructor(private fb: FormBuilder,
              private apiService: ApiService) {
  }
  
  initForm(): FormGroup {
    return this.fb.group({
      hall: ['', [
        Validators.required,
      ]],
      date: ['', [
        Validators.required,
      ]],
      name: ['', [
        Validators.required,
      ]]
    })
  }
  
  getRecords(): Observable<any> {
    return this.apiService.get(API_URL.records.get);
  }
  
  createdReserved(body: IReserved): Observable<any> {
    return this.apiService.post(API_URL.records.post, body);
  }
}
