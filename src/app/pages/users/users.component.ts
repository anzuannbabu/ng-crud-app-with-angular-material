import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserFormComponent } from 'src/app/components/users/user-form/user-form.component';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  cardTitle = "Users";
  users = [
    {
      name: "abdul",
      department: "ICT",
      active: true
    },
    {
      name: "juma",
      department: "ICT",
      active: false
    },
    {
      name: "Asha",
      department: "ICT",
      active: true
    },
  ]

  constructor(private router: Router,private dialog: MatDialog,private testService: TestService) { }

  ngOnInit(): void {
    console.log('service value in user list comp => ', this.testService.name);
    this.testService.name = "jina jengine";
   }

  viewUser(data:any) {
    console.log("user details",data);
  }

  onCreateUser() {
    //this.router.navigateByUrl('/create-user');
    //this.router.navigate(['/create-user']);
    const options = {
      data: {
        //pass data to dalog component
        crudMode: 'create',
        user: null
      },
      width: '40%',
      disableClose: true
    }
   const dialigRef =  this.dialog.open(UserFormComponent,options);

   dialigRef.afterClosed().subscribe(result => {
     console.log("closed => ", result);
   })

  }

  editUser(user) {
    const options = {
      data: {
        //pass data to dalog component
        crudMode: 'edit',
        user: user
      },
      width: '40%',
      disableClose: true
    }
   const dialigRef =  this.dialog.open(UserFormComponent,options);

   dialigRef.afterClosed().subscribe(result => {
     console.log("closed => ", result);
   })
  }

}
