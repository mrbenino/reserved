import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ReservedService} from "./reserved.service";

interface IHall{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {
  reserved!: FormGroup;
  halls: Array<IHall> = [
    {value: '1', viewValue: 'Серая'},
    {value: '2', viewValue: 'Жолтая'},
    {value: '3', viewValue: 'Интерстелар'},
  ];
  selected!: Date | null;

  constructor(private reservedServed: ReservedService) {}

  ngOnInit(): void {
    this.reserved = this.reservedServed.initForm()
  }

  formSubmit(): void {

  }

}
