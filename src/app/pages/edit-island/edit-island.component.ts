import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-edit-island',
  templateUrl: './edit-island.component.html',
  styleUrls: ['./edit-island.component.scss']
})
export class EditIslandComponent implements OnInit {
  submitForm: FormGroup;

  editFormData = {
    crudMode: 'edit',
    island: null
  }

  

  constructor(private route: ActivatedRoute,
    private islandsService: IslandService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.configureSubmitForm();

    this.route.params.subscribe((paramValues: any) => {
      console.log("passed params => ", paramValues);
      const islandId = paramValues.islandId;
      this.fetchIslandById(islandId);
    });
  }

  configureSubmitForm() {
    this.submitForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required])
    });


    /*  const user = {id:1,name: 'salim'}
    const objectKeys =  Object.keys(this.submitForm.value);
    console.log('form values => ', this.submitForm.value)
    console.log('object keys => ', objectKeys); */
  }

  fetchIslandById(islandId: number) {
    //you can make http request throught island service
    this.islandsService.getById(islandId).subscribe((response: any) => {
      //console.log("get by id response => ",response);
      /*  this.submitForm.get('id').setValue(response.id);
       this.submitForm.get('name').setValue(response.name); */

    /*   Object.keys(response).forEach(key => {
        if (this.submitForm.value.hasOwnProperty(key)) {
          this.submitForm.get(key).setValue(response[key]);
        }
      }) */
      this.editFormData = {
        ///crudMode: 'edit',
        ...this.editFormData,
        island: response
      }

    }, (error: HttpErrorResponse) => {
      console.log("error => ", error);
    })
  }

  onSave() {
    const values = this.submitForm.value;

    this.islandsService.update(values).subscribe((response) => {
      //show success message
      this.router.navigateByUrl('/islands');
    });

  }

}
