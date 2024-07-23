import type { BuildingType } from './common';
import type { CrudeHutSmall } from './housing';
import type { WaterSupply, Well } from './hygiene';
import type { ArchitectsPost, Firehouse } from './infrastructure';
import type { TempleOfBast } from './religion';

interface BuildingTypesMap extends Readonly<Record<string, BuildingType>> {}

export interface BuildingTypes extends BuildingTypesMap {
  readonly '0': CrudeHutSmall;
  readonly '1': Firehouse;
  readonly '2': ArchitectsPost;
  readonly '3': WaterSupply;
  readonly '4': Well;
  readonly '5': TempleOfBast;
}
