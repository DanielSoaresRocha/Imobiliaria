export class HouseFilter {
  minValue: number;
  maxValue: number;
  minMeters: number;
  maxMeters: number;
  qtdBedrooms: number;
  qtdBathrooms: number;
  qtdGarage: number;

  constructor() {
    this.minValue = 0;
    this.maxValue = 0;
    this.minMeters = 0;
    this.maxMeters = 0;
    this.qtdBathrooms = 0;
    this.qtdBedrooms = 0;
    this.qtdGarage = 0;
  }
}