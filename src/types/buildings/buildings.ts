import type { BuildingType } from './common';
import type {
  CommonResidence,
  CommonShantyBig,
  CommonShantySmall,
  CrudeHutBig,
  CrudeHutSmall,
  ElegantResidence,
  MeagerShantyBig,
  MeagerShantySmall,
  ModestApartmentBig,
  ModestApartmentSmall,
  ModestHomesteadBig,
  ModestHomesteadSmall,
  OrdinaryCottageBig,
  OrdinaryCottageSmall,
  RoughCottageBig,
  RoughCottageSmall,
  SpaciousApartmentBig,
  SpaciousApartmentSmall,
  SpaciousHomesteadBig,
  SpaciousHomesteadSmall,
  SpaciousResidence,
  SturdyHutBig,
  SturdyHutSmall,
} from './housing';
import type { WaterSupply, Well } from './hygiene';
import type { ArchitectsPost, Firehouse } from './infrastructure';
import type {
  TempleOfBast,
  TempleOfOsiris,
  TempleOfPtah,
  TempleOfRa,
  TempleOfSeth,
} from './religion';

interface BuildingTypesMap extends Readonly<Record<string, BuildingType>> {}

export interface BuildingTypes extends BuildingTypesMap {
  readonly '0': CrudeHutSmall;
  readonly '1': CrudeHutBig;
  readonly '2': SturdyHutSmall;
  readonly '3': SturdyHutBig;
  readonly '4': MeagerShantySmall;
  readonly '5': MeagerShantyBig;
  readonly '6': CommonShantySmall;
  readonly '7': CommonShantyBig;
  readonly '8': RoughCottageSmall;
  readonly '9': RoughCottageBig;
  readonly '10': OrdinaryCottageSmall;
  readonly '11': OrdinaryCottageBig;
  readonly '12': ModestHomesteadSmall;
  readonly '13': ModestHomesteadBig;
  readonly '14': SpaciousHomesteadSmall;
  readonly '15': SpaciousHomesteadBig;
  readonly '16': ModestApartmentSmall;
  readonly '17': ModestApartmentBig;
  readonly '18': SpaciousApartmentSmall;
  readonly '19': SpaciousApartmentBig;
  readonly '20': CommonResidence;
  readonly '21': SpaciousResidence;
  readonly '22': ElegantResidence;

  // TODO: update
  readonly '23': ElegantResidence;
  readonly '24': ElegantResidence;
  readonly '25': ElegantResidence;
  readonly '26': ElegantResidence;
  readonly '27': ElegantResidence;
  readonly '28': ElegantResidence;
  readonly '29': ElegantResidence;

  readonly '30': Firehouse;
  readonly '31': ArchitectsPost;
  readonly '32': Well;
  readonly '33': WaterSupply;
  readonly '34': TempleOfBast;
  readonly '35': TempleOfRa;
  readonly '36': TempleOfOsiris;
  readonly '37': TempleOfSeth;
  readonly '38': TempleOfPtah;
}
