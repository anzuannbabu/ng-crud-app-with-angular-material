import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';

const entityMetadata: EntityMetadataMap = {
  Island: {},
  User: {}
};

const pluralNames = {
  Island: 'Island'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};

export const customDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl,
  //timeout: 3000, // request timeout
}
