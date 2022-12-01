// The coordinates for each prefecture polygon
export type Coordinates = [number, number][];

// The starting position of the map
export type MapCenter = [number, number];

export type Properties = {
  nam: string;
  man_ja: string;
  id: number;
};
export type Geometry = {
  type: string;
  coordinates: Coordinates[];
};

export type Features = {
  type: string;
  propteries: Properties;
  geometry: Geometry;
};

export interface japanDataType {
  type: string;
  features: Features[];
}
