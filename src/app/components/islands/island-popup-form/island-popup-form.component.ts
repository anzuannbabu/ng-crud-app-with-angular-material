import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Island } from 'src/app/models/island.model';

@Component({
  selector: 'app-island-popup-form',
  templateUrl: './island-popup-form.component.html',
  styleUrls: ['./island-popup-form.component.scss']
})
export class IslandPopupFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    crudMode:string,
    island: Island
  },
  public dialogRef: MatDialogRef<IslandPopupFormComponent>
  ) { }

  ngOnInit(): void {
    console.log('passed data => ', this.data);
  }

  onSaved($event) {
    console.log('data saved',$event);
    this.dialogRef.close($event);
  }
}
