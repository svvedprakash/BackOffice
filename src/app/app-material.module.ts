import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [ CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, 
    MatCheckboxModule, MatSelectModule, MatButtonModule ],
  exports: [ MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatCheckboxModule ,
    MatSelectModule, MatButtonModule ]
})
export class AppMaterialModule { }
