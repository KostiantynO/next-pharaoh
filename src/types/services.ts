interface ServicesForHouseEvolve {
  road: true;
  waterSupply: true;
  entertainment: true;
  pottery: true;
  physician: true;
  beer: true;
  courthouse: true;
  scribeSchool: true;
  dentist: true;
  linen: true;
  mortician: true;
  library: true;
  senetHouse: true;

  water: number;
  typesOfFood: number;
  accessToGods: number;
  typesOfLuxuryGoods: number;
}

export interface Services extends Partial<ServicesForHouseEvolve> {}

export interface CrudeHutNeeds {
  road: true;
}
export interface SturdyHutNeeds extends CrudeHutNeeds {
  water: 1; // equivalent of a Well nearby
}
export interface MeagerShantyNeeds extends SturdyHutNeeds {
  typesOfFood: 1;
}
export interface CommonShantyNeeds extends MeagerShantyNeeds {
  accessToGods: 1;
}
export interface RoughCottageNeeds extends CommonShantyNeeds {
  waterSupply: true;
}
export interface OrdinaryCottageNeeds extends RoughCottageNeeds {
  entertainment: true;
}
export interface ModestHomesteadNeeds extends OrdinaryCottageNeeds {
  pottery: true;
}
export interface SpaciousHomesteadNeeds extends ModestHomesteadNeeds {
  physician: true;
}
export interface ModestApartmentNeeds extends SpaciousHomesteadNeeds {
  beer: true;
}
export interface SpaciousApartmentNeeds extends ModestApartmentNeeds {
  courthouse: true;
}
export interface CommonResidenceNeeds extends SpaciousApartmentNeeds {
  scribeSchool: true;
}
export interface SpaciousResidenceNeeds extends Services {
  road: CommonResidenceNeeds['road'];
  waterSupply: CommonResidenceNeeds['waterSupply'];
  entertainment: CommonResidenceNeeds['entertainment'];
  pottery: CommonResidenceNeeds['pottery'];
  physician: CommonResidenceNeeds['physician'];
  beer: CommonResidenceNeeds['beer'];
  courthouse: CommonResidenceNeeds['courthouse'];
  scribeSchool: CommonResidenceNeeds['scribeSchool'];
  dentist: true;

  water: CommonResidenceNeeds['water'];
  typesOfFood: 2;
  accessToGods: CommonResidenceNeeds['accessToGods'];
}
export interface ElegantResidenceNeeds extends SpaciousResidenceNeeds {
  linen: true;
}
export interface FancyResidenceNeeds extends Services {
  road: ElegantResidenceNeeds['road'];
  waterSupply: ElegantResidenceNeeds['waterSupply'];
  entertainment: ElegantResidenceNeeds['entertainment'];
  pottery: ElegantResidenceNeeds['pottery'];
  physician: ElegantResidenceNeeds['physician'];
  beer: ElegantResidenceNeeds['beer'];
  courthouse: ElegantResidenceNeeds['courthouse'];
  scribeSchool: ElegantResidenceNeeds['scribeSchool'];
  dentist: ElegantResidenceNeeds['dentist'];
  linen: ElegantResidenceNeeds['linen'];

  water: ElegantResidenceNeeds['water'];
  typesOfFood: ElegantResidenceNeeds['typesOfFood'];
  accessToGods: 2;
}
export interface CommonManorNeeds extends FancyResidenceNeeds {
  typesOfLuxuryGoods: 1;
}
export interface SpaciousManorNeeds extends CommonManorNeeds {
  mortician: true;
}
export interface ElegantManorNeeds extends Services {
  road: SpaciousManorNeeds['road'];
  waterSupply: SpaciousManorNeeds['waterSupply'];
  entertainment: SpaciousManorNeeds['entertainment'];
  pottery: SpaciousManorNeeds['pottery'];
  physician: SpaciousManorNeeds['physician'];
  beer: SpaciousManorNeeds['beer'];
  courthouse: SpaciousManorNeeds['courthouse'];
  scribeSchool: SpaciousManorNeeds['scribeSchool'];
  dentist: SpaciousManorNeeds['dentist'];
  linen: SpaciousManorNeeds['linen'];
  mortician: SpaciousManorNeeds['mortician'];
  library: true;

  water: SpaciousManorNeeds['water'];
  typesOfFood: SpaciousManorNeeds['typesOfFood'];
  accessToGods: 3;
  typesOfLuxuryGoods: SpaciousManorNeeds['typesOfLuxuryGoods'];
}
export interface StatelyManorNeeds extends ElegantManorNeeds {}
export interface ModestEstateNeeds extends Services {
  road: StatelyManorNeeds['road'];
  waterSupply: StatelyManorNeeds['waterSupply'];
  entertainment: StatelyManorNeeds['entertainment'];
  pottery: StatelyManorNeeds['pottery'];
  physician: StatelyManorNeeds['physician'];
  beer: StatelyManorNeeds['beer'];
  courthouse: StatelyManorNeeds['courthouse'];
  scribeSchool: StatelyManorNeeds['scribeSchool'];
  dentist: StatelyManorNeeds['dentist'];
  linen: StatelyManorNeeds['linen'];
  mortician: StatelyManorNeeds['mortician'];
  library: StatelyManorNeeds['library'];
  senetHouse: true;

  water: StatelyManorNeeds['water'];
  typesOfFood: StatelyManorNeeds['typesOfFood'];
  accessToGods: StatelyManorNeeds['accessToGods'];
  typesOfLuxuryGoods: 2;
}
export interface PalatialEstateNeeds extends Services {
  road: ModestEstateNeeds['road'];
  waterSupply: ModestEstateNeeds['waterSupply'];
  entertainment: ModestEstateNeeds['entertainment'];
  pottery: ModestEstateNeeds['pottery'];
  physician: ModestEstateNeeds['physician'];
  beer: ModestEstateNeeds['beer'];
  courthouse: ModestEstateNeeds['courthouse'];
  scribeSchool: ModestEstateNeeds['scribeSchool'];
  dentist: ModestEstateNeeds['dentist'];
  linen: ModestEstateNeeds['linen'];
  mortician: ModestEstateNeeds['mortician'];
  library: ModestEstateNeeds['library'];
  senetHouse: ModestEstateNeeds['senetHouse'];

  water: ModestEstateNeeds['water'];
  typesOfFood: 3;
  accessToGods: ModestEstateNeeds['accessToGods'];
  typesOfLuxuryGoods: ModestEstateNeeds['typesOfLuxuryGoods'];
}
