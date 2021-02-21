import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  title: string = "this is home component";

  user = {
    name: "abdul",
    department: "ICT"
  }

  date = new Date();
  price:number = 245890;

  

  //dependency injection
  constructor(private testService: TestService) { }

  ngAfterViewInit(): void {
    console.log("html view after init");
  }

  ngOnDestroy(): void {
    console.log("home destroyed");
  }

  ngOnInit(): void {
    console.log("service value => ", this.testService.name);
  }



}
