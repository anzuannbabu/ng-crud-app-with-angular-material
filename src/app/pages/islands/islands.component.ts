import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.scss']
})
export class IslandsComponent implements OnInit {

  islandList: any[] = [];

  constructor(private islandsService: IslandService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllIslands();
  }

  fetchAllIslands() {
    this.islandsService.getAll().subscribe((response: any[]) => {
      console.log("islands response => ", response);
      this.islandList = response;
    })
  }

  onAddIsland() {
    this.router.navigateByUrl('/create-island');
  }

  onEdit(island:any) {
    this.router.navigateByUrl('/edit-island/'+island.id);
  }

}
