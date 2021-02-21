import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-create-island',
  templateUrl: './create-island.component.html',
  styleUrls: ['./create-island.component.scss']
})
export class CreateIslandComponent implements OnInit {

  createFormData = {
    crudMode: 'create',
    island: null
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onSaved() {
    this.goBack();
  }

  goBack() {
    this.router.navigateByUrl('/islands');
  }
}
