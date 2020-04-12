import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//material modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProgressComponent } from './progress/progress.component';
@NgModule({
  declarations: [AppComponent, NavBarComponent, ProgressComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSidenavModule, LayoutModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
