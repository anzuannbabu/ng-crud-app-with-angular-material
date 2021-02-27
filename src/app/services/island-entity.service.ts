import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Island } from '../models/island.model';

@Injectable({
  providedIn: 'root'
})
export class IslandEntityService extends EntityCollectionServiceBase<Island> {

  constructor(private serviceElementaryFactory: EntityCollectionServiceElementsFactory) {
    super('Island', serviceElementaryFactory)
  }
  
}
