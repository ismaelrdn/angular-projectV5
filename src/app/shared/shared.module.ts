import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';



@NgModule({
  declarations: [
    FormComponent,
    FilterPipe,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ], 
  exports: [
    FormComponent,
    FilterPipe,
    PaginatePipe,
  ]
})
export class SharedModule { }
