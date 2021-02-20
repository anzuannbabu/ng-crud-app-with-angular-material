import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-island',
  templateUrl: './edit-island.component.html',
  styleUrls: ['./edit-island.component.scss']
})
export class EditIslandComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramValues:any) => {
      console.log("passed params => ", paramValues);
      const islandId = paramValues.islandId;
      this.fetchIslandById(islandId);
    });
  }

  fetchIslandById(islandId: number) {
    //you can make http request throught island service
  }
  
}
