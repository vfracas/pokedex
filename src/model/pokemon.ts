export interface Pokemon{
  id: number;
  names: Array<{
      name:string,
  }>;
  description: string;
  flavor_text_entries: Array<{
    flavor_text: string,
    language: {
      name: string,
    },
  }>;
  genera: Array<{
      genus: string;
  }>

}
