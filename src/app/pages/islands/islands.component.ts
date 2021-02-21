import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Island } from 'src/app/models/island.model';
import { IslandService } from 'src/app/services/island.service';
import { DatatableDataSource } from '../datatable/datatable-datasource';

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.scss']
})
export class IslandsComponent implements OnInit,AfterViewInit {

  loading:boolean = false;

  islandList: Island[] = [];

  /* datatable config */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Island>;
  dataSource: DatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','actions'];
  /* ./datatable config */

  constructor(private islandsService: IslandService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new DatatableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.fetchAllIslands();
  }

  fetchAllIslands() {
    this.loading = true;
    this.islandsService.getAll().subscribe((response: Island[]) => {
      console.log("islands response => ", response);
      this.islandList = response;
      //this.dataSource = new DatatableDataSource(response);
      this.table.dataSource = response;
      this.loading = false;
    },(error) =>{
      this.loading = false;
    })
  }

  onAddIsland() {
    this.router.navigateByUrl('/create-island');
  }

  onEdit(island:Island) {
    this.router.navigateByUrl('/edit-island/'+island.id);
  }

  ngAfterViewInit() {
   /*  this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; */
    
  }

}
