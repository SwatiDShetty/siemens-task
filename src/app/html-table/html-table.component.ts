import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.css']
})


export class HtmlTableComponent implements OnInit {
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  employee: string [];

  //constructor() { }

  ngOnInit () {
    this.httpService.get('./assets/employee.json').subscribe(
      data => {
        this.employee = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
