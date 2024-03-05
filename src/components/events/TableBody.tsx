import React from 'react';
import eventsDelete from '@/app/events/eventsDelete';
import BodyCard from './BodyCard';

export default function TableBody() {

  return (
    <>
      {eventsDelete.map((event, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-5 ${
            key === eventsDelete.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              {event.key}
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              {event.name}
            </p>
          </div>

          <BodyCard
          data={event.guests}
          containerStyle="flex"
          textStyle="text-black dark:text-white"
          />
          <BodyCard
          data={event.date.toDateString()}
          containerStyle="flex"
          textStyle="text-meta-3"
          />
          <BodyCard
          data={event.address}
          containerStyle="hidden sm:flex"
          textStyle="text-black dark:text-white"
          />
          <BodyCard
          data={event.note}
          containerStyle="hidden sm:flex"
          textStyle="text-meta-5"
          />
        </div>
      ))}
    </>
  )
}
