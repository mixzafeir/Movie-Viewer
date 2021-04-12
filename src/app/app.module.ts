import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularComponent } from './popular.component';
import { PopularService } from './popular.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { MovieComponent } from './movie.component';
import { MatDividerModule } from '@angular/material/divider';
import { TopbarComponent } from './topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatInputModule } from '@angular/material/input';
import { StarComponent } from './star.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    TopbarComponent,
    MovieComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  providers: [
    PopularService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
