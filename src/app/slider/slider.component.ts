import { Component, OnInit } from '@angular/core';
import { InvestmentAddComponent } from '../investment-add/investment-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(InvestmentAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
