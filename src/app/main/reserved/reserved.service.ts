import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ReservedService {

    constructor(private fb: FormBuilder) {
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
}
