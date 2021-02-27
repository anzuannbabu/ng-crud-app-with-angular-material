import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Island } from 'src/app/models/island.model';
import { IslandEntityService } from 'src/app/services/island-entity.service';

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

  constructor(private islandService: IslandService,
    private islandEntityService: IslandEntityService) { }



  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed data => ', this.formData);

    if (this.formData.crudMode === 'edit') {
      if (this.formData.island !== null && this.formData.island !== undefined) {

        console.log('form data => ', this.formData);

        Object.keys(this.formData.island).forEach(key => {
          if (this.submitForm !== undefined && this.submitForm.value.hasOwnProperty(key)) {
            this.submitForm.get(key).setValue(this.formData.island[key]);
          }
        });

      }
    }
  }




  ngOnInit(): void {
    console.log('passed details from parent ', this.formData);
    this.configureSubmitForm();
    if (this.formData.island) {

      Object.keys(this.formData.island).forEach(key => {
        if (this.submitForm.value.hasOwnProperty(key)) {
          this.submitForm.get(key).setValue(this.formData.island[key]);
        }
      });
    }
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
      this.islandEntityService.add(values,{tag: 'your msg'}).subscribe(
        (response: any) => {
          //alert('island saved successfulll');
          console.log("create island response =>", response);
          //this.router.navigateByUrl('/islands');
          this.saved.emit(response);
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

      this.islandEntityService.update(values).subscribe(
        (response: any) => {
          //alert('island updated successfulll');
          console.log("update island response =>", response);
          //this.router.navigateByUrl('/islands');
          this.saved.emit(response);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
    }

  }

}
