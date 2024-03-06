import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import FormInput from "@/components/Calendar/FormInput";

export default function AddCalendarEventPage() {
  return (
    <DefaultLayout>
      <div className=" m-2 flex items-center justify-center ">
        {/* <h1>Calendar Add Event Page</h1> */}
        <form className="w-150">
          <FormInput label="Nombre del evento" id="event-name" type="text" />
          <FormInput label="Fecha del evento" id="event-date" type="date" />
          <FormInput label="Hora del evento" id="event-time" type="time" />
          <FormInput
            label="Descripción del evento"
            id="event-description"
            type="textarea"
          />

          <button
            className=" m-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            type="submit"
          >
            Add Event
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
}
