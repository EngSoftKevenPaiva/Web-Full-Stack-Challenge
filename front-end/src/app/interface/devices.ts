export interface Devices {
  data:[{
    id: number;
    color: string;
    partNumber: string;
    category: {
      id: number;
      name: string;
    };
  }]
}
