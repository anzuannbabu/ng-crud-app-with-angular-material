import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IslandPopupFormComponent } from 'src/app/components/islands/island-popup-form/island-popup-form.component';
import { Island } from 'src/app/models/island.model';
import { IslandEntityService } from 'src/app/services/island-entity.service';
import { IslandService } from 'src/app/services/island.service';
import { DatatableDataSource } from '../datatable/datatable-datasource';

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.scss']
})
export class IslandsComponent implements OnInit, AfterViewInit {

  loading: boolean = false;

  islandList: Island[] = [];

  /* datatable config */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Island>;
  dataSource: MatTableDataSource<Island>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'actions'];
  /* ./datatable config */

  constructor(private islandsService: IslandService,
    private router: Router,
    private matDialog: MatDialog,
    private islandEntityService: IslandEntityService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    //this.fetchAllIslands();

    this.islandEntityService.getAll();//send req to server

    const islands$ = this.islandEntityService.entities$; //get collection list observable

    islands$.subscribe(res => {
      this.dataSource.data = res;//update table data
    });

  }

  fetchAllIslands() {
    this.loading = true;
    this.islandsService.getAll().subscribe((response: Island[]) => {
      console.log("islands response => ", response);
      this.islandList = response;
      this.dataSource.data = response;
      this.loading = false;
    }, (error) => {
      this.loading = false;
    })
  }

  onAddIsland() {
    //this.router.navigateByUrl('/create-island');

    const options = {
      data: {
        crudMode: 'create',
        island: null
      },
      width: '45%'
    };

    const dialogRef = this.matDialog.open(IslandPopupFormComponent, options);

    dialogRef.afterClosed().subscribe(res => {
      console.log('dialog closed', res);
      if(res!==undefined) {
          //this.fetchAllIslands();//update list manually
      }
    })
  }

  onEdit(island: Island) {
    //this.router.navigateByUrl('/edit-island/' + island.id);

    const options = {
      data: {
        crudMode: 'edit',
        island: island
      },
      width: '45%'
    };

    const dialogRef = this.matDialog.open(IslandPopupFormComponent, options);

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
