import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData{
  action:string;
  msg:string
}
@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css'],
})
export class MatDialogComponent implements OnInit {
  action: string = '';
  constructor(
     public dialogRef: MatDialogRef<MatDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dataReceived: DialogData
  ) {
    this.action = this.dataReceived.action;
  }

  ngOnInit(): void {
    console.log(this.dataReceived);
  }
}
