export interface Event {
  id: string;
  title: string;
  description?: null;
  note?: string;
  when: string;
  address: string;
  phoneContact: string;
  price?: null;
  type: "boda" | "XV" | "cumpleaños" | "graduación";

}
