ModestApartment

Table 1

```txt
Modest Apartment	1×1	18	21	20	20	19	18	Beer	50	50	50	55	60	2	3	3	3	4	0	0	0	0	0	0
2×2	72	30	25	20	18	16	86	129	129	129	172
```

Table 2

```txt
Modest Apartment	21	20	20	19	18	30	24	20	17	4	20	20	15	12	1	10	0	-10	-20	-130	10	0	-10	-20	-130
19	18	18	17	16	27	21	15	12	0
```

====

Please see review.

```ts
type DesirabilityNeutral = readonly [D1: 0, D2: 0, D3: 0, D4: 0, D5: 0, D6: 0];

/* ============================================================= */
interface ModestApartment extends Hut {
  readonly type: 'Modest Apartment'; // +
  readonly needDesirability: readonly [VH: 18, H: 21, N: 20, E: 20, VE: 19]; // need 21	20	20	19	18
  readonly needEntertainment: readonly [VH: 20, H: 20, N: 20, E: 15, VE: 12]; // need 30	25	20	18	16
  readonly needServices: ModestApartmentNeeds;

  readonly prosperity: readonly [VH: 50, H: 50, N: 50, E: 55, VE: 60]; // +
  readonly taxRateMultiplier: readonly [VH: 2, H: 3, N: 3, E: 3, VE: 4]; // +
  readonly desirability: readonly [0, 0, 0, 0, 0, 0]; // please add TS annotations and use custom type DesirabilityNeutral = readonly [D1: 0, D2: 0, D3: 0, D4: 0, D5: 0, D6: 0];

  readonly devolveDesirability: readonly [VH: 19, H: 18, N: 18, E: 17, VE: 16]; // +
  readonly riskOfFire: readonly [VH: 30, H: 24, N: 20, E: 17, VE: 4]; // +
  readonly riskOfCrimeBase: readonly [VH: 20, H: 20, N: 15, E: 12, VE: 1]; // +
  readonly riskOfCrimeIncrement: readonly [VH: 27, H: 21, N: 15, E: 12, VE: 0]; // +
  readonly riskOfDisease: readonly [VH: 10, H: 0, N: -10, E: -20, VE: -130]; // +
  readonly riskOfMalaria: readonly [VH: 10, H: 0, N: -10, E: -20, VE: -130]; // +
}

export interface ModestApartmentSmall extends ModestApartment, HutVariant {
  readonly typeId: '16'; // +
  readonly pop: 18; // +
  readonly size: SizeSmallHouse; // +
  readonly images: readonly [
    '/house/modest-apartment-1x1a.webp',
    '/house/modest-apartment-1x1b.webp',
  ]; // +
}

export interface ModestApartmentBig extends ModestApartment, HutVariant {
  readonly typeId: '17'; // +
  readonly pop: 72; // +
  readonly size: SizeBigHouse; // +
  readonly images: readonly ['/house/modest-apartment-2x2.webp']; // +
}
```
