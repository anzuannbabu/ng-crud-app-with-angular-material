import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Island } from 'src/app/models/island.model';
import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-edit-island',
  templateUrl: './edit-island.component.html',
  styleUrls: ['./edit-island.component.scss']
})
export class EditIslandComponent implements OnInit {

  editFormData = {
    crudMode: 'edit',
    island: null
  }

  

  constructor(private route: ActivatedRoute,
    private islandsService: IslandService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((paramValues: any) => {
      console.log("passed params => ", paramValues);
      const islandId = paramValues.islandId;
      this.fetchIslandById(islandId);
    });
  }

  fetchIslandById(islandId: number) {
    //you can make http request throught island service
    this.islandsService.getById(islandId).subscribe((response: Island) => {
     
      this.editFormData = {
        ///crudMode: 'edit',
        ...this.editFormData,
        island: response
      }

    }, (error: HttpErrorResponse) => {
      console.log("error => ", error);
    })
  }

  onSaved() {
    this.goBack();
  }

  goBack() {
    this.router.navigateByUrl('/islands');
  }

}
