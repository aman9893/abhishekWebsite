import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { InvestmentAddComponent } from '../investment-add/investment-add.component';

@Component({
  selector: 'app-tpye-features',
  templateUrl: './tpye-features.component.html',
  styleUrls: ['./tpye-features.component.css']
})
export class TpyeFeaturesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(InvestmentAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
   
  }
}