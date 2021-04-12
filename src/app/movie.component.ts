import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { PopularService } from "./popular.service";


@Component({
    selector: 'movie',
    templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit, OnChanges {

    genres: any[] = [];
    @Input() details: any = {};
    selectedImage: any = "";

    ngOnInit() {
        this.service.getGenres().subscribe((r: any) => {
            this.genres = r.genres;
            console.log(r.genres)
        });
    };

    constructor(private service: PopularService) {

    }

    getGenreName(id: number) {
        return this.genres.find((r: any) => {
            return r.id == id
        })?.name;
    }

    ngOnChanges(): void {
        this.selectedImage = "https://image.tmdb.org/t/p/w500/" + this.details.poster_path;
    }



    // selectDetails(movie:any){
    //     this.=movie;
    //     this.selectedImage="https://image.tmdb.org/t/p/w500/"+this.selectedMovie.poster_path;
    //     console.log(this.selectedImage);
    // }
}