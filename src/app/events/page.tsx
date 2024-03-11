"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ButtonComponent from '@/app/ui/ButtonComponent';
import EventsTable from '@/components/events/EventsTable';

const icon: React.JSX.Element = (
  <svg
    className="fill-current"
    width="18"
    height="18"
    viewBox="0 0 448 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        fill=""
      />
  </svg>
);

export default function EventsPage() {
  return (
    <DefaultLayout>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <ButtonComponent value='Agregar Evento' width='w-50' icon={icon} />
      </div>  

      <EventsTable />
    </DefaultLayout>
  )
}
