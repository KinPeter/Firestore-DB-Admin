import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, CollectionReference } from '@angular/fire/firestore';
import { Tile } from '../interfaces';
import { Subject } from 'rxjs';

@Injectable()
export class TilesService {

    public categories = ['top', 'coding', 'google', 'fun', 'others'];
    public tilesCollection = this.db.collection<Tile>('tiles');
    public tiles = new Subject<Tile[]>();

    constructor(
        private db: AngularFirestore
    ) { }

    fetchTiles(category: string): void {
        const query = (ref: CollectionReference) => ref.where('category', '==', category).orderBy('priority', 'asc');
        this.db.collection('tiles', query).get().subscribe((snapshot: QuerySnapshot<any>) => {
            const fetchedTiles: Tile[] = [];
            let tile: Tile;
            let data: any;
            snapshot.docs.forEach((doc) => {
                data = doc.data();
                tile = {
                    id: doc.id,
                    name: data.name,
                    category: data.category,
                    link: data.link,
                    icon: data.icon,
                    priority: data.priority
                };
                fetchedTiles.push(tile);
            });
            this.tiles.next(fetchedTiles);
        }, (error: any) => {
            this.tiles.error(new Error(error));
        });
    }
}
