import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private testService: TestService, private userService: UserService) { }

  ngOnInit(): void {
    /* console.log('test service value in user management =>', this.testService.name);
    this.testService.name = 'new name'; */


    this.userService.getById(1).subscribe(res => {
      console.log('user details => ', res);
    })
  }

}
