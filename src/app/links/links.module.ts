import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { LinksRoutingModule } from './links-routing.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [LinksComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        LinksRoutingModule,
        MaterialModule
    ]
})
export class LinksModule { }
