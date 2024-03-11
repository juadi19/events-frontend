"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Event } from "@/interfaces/index";
import EventCard from "@/components/event/EventCard";
import Link from "next/link";

interface EventPageProps {
  params: {
    id: string;
  };
}

const EventPage: React.FC<EventPageProps> = ({ params }) => {
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const getEvent = async (id: string) => {
      try {
        const res = await fetch(`http://localhost:3000/events/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + localStorage.getItem("JWT"),
          },
          cache: "force-cache",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch event data");
        }

        const eventData: Event = await res.json();
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    getEvent(params.id);
  }, [params.id]);

  return (
    <DefaultLayout>
      <div className="flex justify-end">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-full bg-black px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Registrar invitados
        </Link>
      </div>

      {event ? <EventCard event={event} /> : <p>Loading...</p>}
    </DefaultLayout>
  );
};

export default EventPage;
