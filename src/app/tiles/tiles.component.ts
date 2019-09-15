import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TilesService } from './tiles.service';
import { Tile } from '../interfaces';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    displayedColumns = ['category', 'name', 'link', 'icon', 'priority', 'actions'];
    dataSource = new MatTableDataSource<Tile>();
    tilesSub: Subscription;

    constructor(
        private ts: TilesService
    ) { }

    ngOnInit() {
        this.ts.tiles.subscribe((tiles) => {
            this.dataSource.data = tiles;
        });
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    fetchTiles(category: string) {
        this.ts.fetchTiles(category);
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onEdit(element) {
        console.log(element);
    }

    ngOnDestroy() {
        if (this.tilesSub) {
            this.tilesSub.unsubscribe();
        }
    }

}
