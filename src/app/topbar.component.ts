import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { PopularService } from './popular.service';


@Component({
    selector: 'topbar',
    templateUrl: './topbar.component.html'
})

export class TopbarComponent {
    title = "Movie Viewer!";

    @Output() searchParam: EventEmitter<any> = new EventEmitter();

    somethingChanged(e: any) {
        console.log(e.srcElement.value);
        this.searchParam.emit(e.srcElement.value);
    }

    constructor() {

    }

    selectName() {
        return this.title;
    }

}

