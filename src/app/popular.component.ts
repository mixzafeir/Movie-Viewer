import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core'
import { PageEvent } from '@angular/material/paginator';
import { PopularService } from './popular.service';

@Component({
    selector: 'popular',
    templateUrl: './popular.component.html'
})

export class PopularComponent implements OnInit {


    title = "List of Popular Movies";
    movies: any[] = [];
    @Output() onMovieSelect: EventEmitter<any> = new EventEmitter();
    selectedMovie: any = {};
    selectedImage: any = {};
    @Input() searchParam: string = "";

    length = 0;
    pageSize = 20;
    curPage: number = 0;

    set pageEvent(p: PageEvent) {
        this.curPage = p.pageIndex;
        this.refreshData();
    };

    constructor(private service: PopularService) {

    }

    refreshData() {
        if (this.searchParam == "") {
            this.service.discoverPopular(this.curPage).subscribe((r: any) => {
                this.length = r.total_results;
                this.movies = r.results;
                //this.selectTitle(this.movies[0])
            });
        }
        else {
            this.service.searchForMovies(this.searchParam, this.curPage).subscribe((r: any) => {
                this.length = r.total_results;
                this.movies = r.results
                //this.selectTitle(this.movies[0])
            });
        }
    }

    ngOnChanges() {
        console.log(this.searchParam);
        this.curPage = 0;
        this.refreshData();
    }

    ngOnInit() {
        this.service.discoverPopular(0).subscribe((r: any) => {
            this.movies = r.results
            this.selectTitle(this.movies[0])
        });
    };

    selectTitle(movie: any) {
        this.onMovieSelect.emit(movie);
    }
}