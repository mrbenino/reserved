import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ReservedService} from "./reserved.service";
import {IReserved} from "../../shared/interfaces/reserved";

interface IHall{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss']
})
export class ReservedComponent implements OnInit {
  reserved!: FormGroup;
  halls: Array<IHall> = [
    {value: '1', viewValue: 'Серая'},
    {value: '2', viewValue: 'Жолтая'},
    {value: '3', viewValue: 'Интерстелар'},
  ];
  selected: any;
  records: Array<IReserved> = [];

  constructor(private reservedServed: ReservedService) {}

  ngOnInit(): void {
    this.reserved = this.reservedServed.initForm()
    this.reservedServed.getRecords().subscribe(result => {
      this.records = result
    })
  }

  formSubmit(): void {
    const date: IReserved = {
      hall: this.reserved.value.hall,
      name: this.reserved.value.name,
      date: this.selected
    }
    this.reservedServed.createdReserved(date).subscribe(result => {
      this.records.push(result as IReserved)
    })
  }

}
