import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'star',
    template: `
        <p style="color:rgb(0, 0, 0);font-size:20px;"><b>Rating:</b></p>
        <p style="color:rgb(0, 0, 0);font-size:18px;">
            {{rating}} out of {{votes}} votes!
        </p>
       <mat-icon [ngStyle]="rating>=1?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon>    
        <mat-icon [ngStyle]="rating>=2?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=3?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=4?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=5?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=6?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=7?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=8?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
        <mat-icon [ngStyle]="rating>=9?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon>         <mat-icon [ngStyle]="rating>=10?{'color':'orange'}:{'color':'black'}">
            star_rate_outlined
        </mat-icon> 
    `
})

export class StarComponent implements OnInit {


    @Input() rating: number = 0;
    @Input() votes: number = 0;
    constructor() {

    }

    ngOnInit() {
    };

}

