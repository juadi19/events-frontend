export default interface Event {
  id: number;
  title: string;
  description?: string;
  note: string;
  when: string;
  address: string;
  price?: number;
  type: "undefined" | "boda" | "cumpleaños" | "XV" | "Reunion" | "otro";
}