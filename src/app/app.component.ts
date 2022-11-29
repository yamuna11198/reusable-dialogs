import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'reusable-dialogs';
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
  }

  OpenDialog(button_action: string) {
    if (button_action == 'FormControl') {
      const formDialog = this.dialog.open(MatDialogComponent, {

        width: '500px',
        height: '450px',
        data: { action:'FormControl' },
      });
      formDialog.afterClosed().subscribe({
        next:(result)=>{
          console.log(result)
        }
      })
    }
    if (button_action == 'Success') {
      const dialogRef = this.dialog.open(MatDialogComponent, {
        width: '500px',
        height: '195px',
        position: { top: '10px' },
        data:
         { action: 'AlertMsg', msg: 'Success Message Button is Clicked' },
      });
    }
      if (button_action == 'Error') {
        const dialogRef = this.dialog.open(MatDialogComponent, {
          width: '500px',
          height: '195px',
          position: { top: '10px' },
          data: { action: 'AlertMsg', msg: 'Error Message Button is Clicked' },
        });
      }

  }
}
