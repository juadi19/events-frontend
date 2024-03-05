import Link from "next/link";
import React from "react";

export default function AddEvent() {
  return (
    <div className="my-5">
      <Link
        href="/calendar/add-event"
        className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Agregar Evento
      </Link>
    </div>
  );
}
