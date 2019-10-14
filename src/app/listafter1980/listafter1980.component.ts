import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-listafter1980',
  templateUrl: './listafter1980.component.html',
  styleUrls: ['./listafter1980.component.css']
})
export class Listafter1980Component implements OnInit {
  private actorsDB: any[] = [];

  constructor(private dbService: DatabaseService) {}

  ngOnInit() {
    console.log("Hi From ListActors ngIOnit");

    this.dbService.getActorsAfter1980().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
}
