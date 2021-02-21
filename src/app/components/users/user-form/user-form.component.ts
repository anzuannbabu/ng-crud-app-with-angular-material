import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: {crudMode:string,user:any},
  public dialogRef: MatDialogRef<UserFormComponent>
  ) { }

  ngOnInit(): void {
    console.log('passed data => ', this.data);
  }

  onClose() {
    this.dialogRef.close('dialog has been closed');
  }
}
