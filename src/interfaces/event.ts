export interface Event {
  id: string;
  title: string;
  description?: null;
  note?: string;
  when: string;
  address: string;
  phoneContact: null;
  price?: null;
  type: "boda" | "XV" | "cumpleaños" | "graduación";
}
