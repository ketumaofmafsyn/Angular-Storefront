import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';

import { FormsModule } from '@angular/forms';
import { CatalogRoutingModule } from '../catalog-routing/catalog-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule {}
