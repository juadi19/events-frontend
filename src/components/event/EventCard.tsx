import React from "react";
import { EventDescriptionLabel } from "./index.js";

interface EventProps {
  id: string;
  title: string;
  description?: null;
  note?: string;
  when?: string;
  address?: string;
  phoneContact?: null;
  price?: null;
  type?: string;
}

export default function EventCard({ event }: { event: EventProps }) {
  const formatDate = (date: any) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <div className="row flex-row p-8">
      <div className=" m-6 text-center text-2xl font-bold">{event.title}</div>
      <EventDescriptionLabel label="Fecha:" content={formatDate(event.when)} />
      <EventDescriptionLabel label="Tipo:" content={event.type} />
      <EventDescriptionLabel label="Dirección:" content={event.address} />
      <EventDescriptionLabel label="Descripción:" content={event.description} />
      <EventDescriptionLabel label="Precio:" content={event.price} />
      <EventDescriptionLabel label="Contacto:" content={event.phoneContact} />
      <EventDescriptionLabel label="Nota:" content={event.note} />
    </div>
  );
}
