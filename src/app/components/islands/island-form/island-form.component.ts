import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Island } from 'src/app/models/island.model';

import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-island-form',
  templateUrl: './island-form.component.html',
  styleUrls: ['./island-form.component.scss']
})
export class IslandFormComponent implements OnInit, OnChanges {

  @Input() formData: {
    crudMode: string,//edit or create
    island: Island
  }

  @Output() saved: EventEmitter<any> = new EventEmitter<any>(null);

  submitForm: FormGroup;

  constructor(private islandService: IslandService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed data => ', this.formData);

    if (this.formData.crudMode === 'edit') {
      if (this.formData.island !== null && this.formData.island !== undefined) {
        Object.keys(this.formData.island).forEach(key => {
          if (this.submitForm.value.hasOwnProperty(key)) {
            this.submitForm.get(key).setValue(this.formData.island[key]);
          }
        });
      }
    }
  }


  ngOnInit(): void {
    console.log('passed details from parent ', this.formData);
    this.configureSubmitForm();
  }

  configureSubmitForm() {
    this.submitForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  onSave() {
    let values = this.submitForm.value;
    console.log('islands form values => ', values);

    if (this.formData.crudMode === 'create') {
      this.islandService.add(values).subscribe(
        (response: any) => {
          console.log("create island response =>", response);
          //this.router.navigateByUrl('/islands');
          this.saved.emit();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
    } else if (this.formData.crudMode === 'edit') {

      // values['id'] = this.formData.island.id;

      values = {
        ...values,
         id: this.formData.island.id
      }

      this.islandService.update(values).subscribe(
        (response: any) => {
          console.log("update island response =>", response);
          //this.router.navigateByUrl('/islands');
          this.saved.emit();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
    }

  }

}
