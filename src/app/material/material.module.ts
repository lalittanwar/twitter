import { NgModule } from '@angular/core';
import {MatButtonModule, MatPaginatorModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSortModule, MatMenuModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


const Materialcomp=[
MatButtonModule,
MatTableModule,
MatPaginatorModule,
MatFormFieldModule,
MatInputModule,
MatSortModule,
MatPaginatorModule,
MatMenuModule
]

@NgModule({
  imports: [Materialcomp],
  exports: [Materialcomp]
})
export class MaterialModule { }
