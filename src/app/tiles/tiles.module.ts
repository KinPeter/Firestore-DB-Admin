import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './tiles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { TilesRoutingModule } from './tiles-routing.module';


@NgModule({
    declarations: [TilesComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        TilesRoutingModule,
        MaterialModule
    ]
})
export class TilesModule { }
