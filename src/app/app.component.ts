import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  selectedMovie:any={};
  searchParam:string="";

  public constructor(private titleService: Title) { }

  public setTitle() {
    this.titleService.setTitle("Movie Viewer");
  }

  ngOnInit(){
    this.setTitle();
  }

  setParam(param:string){
    this.searchParam=param;
  }

  movieSelected(movie:any){
    this.selectedMovie=movie;
  }

}
