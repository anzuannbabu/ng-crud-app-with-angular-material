import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
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

  constructor(private router: Router) { }

  ngOnInit(): void {
   }

  viewUser(data:any) {
    console.log("user details",data);
  }

  onCreateUser() {
    //this.router.navigateByUrl('/create-user');
    this.router.navigate(['/create-user']);
  }

}
