import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
