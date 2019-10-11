import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  moviesDB: any[] =  [];
  actorsTempDB:any[] = [];

  movieTitle: string = "";
  mYear: number = 0;
  movieId: string = "";
  actorsAr: any[] = [];

  actorId: string = "";
  actorName: string = "";

  constructor(private dbService: DatabaseService, private router: Router) {}

  //Get all Movies
  onGetMovies(){
    this.dbService.getMovies().subscribe((data:any[])=>{
      this.moviesDB = data;
    })
  }
  
  onSelectActor(item){
    this.actorId = item._id;
    this.actorName = item.name;
  }
  //Update a Movie
  onSelectUpdate(item) {
    this.movieTitle = item.title;
    this.mYear = item.year;
    this.movieId = item._id;
    this.actorsAr = item.actors
  }
  onUpdateMovie(){
    if (this.actorId != ""){
      this.actorsAr.push(this.actorId)
    }
    let obj = { title: this.movieTitle, year: this.mYear, actors: this.actorsAr};

    this.dbService.updateMovie(this.movieId, obj).subscribe(result => {
      this.resetValues();
      this.onGetMovies();
    });
  }
  resetValues() {
    this.movieTitle = "";
    this.mYear = 0;
    this.movieId = "";
    this.actorId = "";
    this.actorName = "";
  }
  onGetActor(){
    this.dbService.getActors().subscribe((result:any[]) => {this.actorsTempDB = result});
  }


  ngOnInit() {
    this.onGetActor();
    this.onGetMovies();

  }

}
