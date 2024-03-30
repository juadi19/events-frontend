"use client";
import React, { useState } from 'react'
import DefaultLayout from '../../../components/Layouts/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import DatePickerOne from '@/components/FormElements/DatePicker/DatePickerOne';
import { TextInput } from '@/components/FormElements/TextInput';
import { Option } from "@/interfaces";
import { eventNames } from "process";

const dropdownOptions: Option[] = [
  {
    value: 1,
    title: "boda"
  },
  {
    value: 2,
    title: "XV"
  },
  {
    value: 3,
    title: "cumpleaños"
  },
  {
    value: 3,
    title: "graduación"
  },
]

export default function EventsCreate() {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventPhone, setEventPhone] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventNote, setEventNote] = useState("");

  const handleEventName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };
  const handleEventDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventDescription(e.target.value);
  };
  const handleEventAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventAddress(e.target.value);
  };
  const handleEventPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventPhone(e.target.value);
  };
  const handleEventPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventPrice(e.target.value);
  };
  const handleEventDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventDate(e.target.value);
  };
  const handleEventNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEventNote(e.target.value);
  };

  const selectedOptionTitle = dropdownOptions
    .find((option) => option.value === parseInt(selectedOption))
    ?.title.toLocaleLowerCase();

  console.log({
    eventName,
    eventDescription,
    eventNote,
    eventDate,
    eventAddress,
    eventPhone,
    eventPrice,
    selectedOptionTitle,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("JWT"),
        },
        body: JSON.stringify({
          title: eventName,
          description: eventDescription,
          note: eventNote,
          when: eventDate,
          address: eventAddress,
          phoneContact: eventPhone,
          price: eventPrice,
          type: selectedOptionTitle,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        window.location.href = "/events";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Crear Evento" />

      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Información del evento
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-flow-row grid-cols-2 gap-6 p-6.5">
              <TextInput
                title="Nombre"
                placeholder="Escribe el nombre del evento"
                mandatory
                value={eventName}
                onChange={handleEventName}
              />

              <TextInput
                title="Descripción"
                placeholder="Escribe una descripción"
                value={eventDescription}
                onChange={handleEventDescription}
              />

              <TextInput
                title="Dirección"
                placeholder="Escribe la dirección del evento"
                mandatory
                value={eventAddress}
                onChange={handleEventAddress}
              />

              <TextInput
                title="Teléfono de contacto"
                placeholder="333-333-3333"
                type="tel"
                value={eventPhone}
                onChange={handleEventPhone}
              />

              <TextInput
                title="Precio"
                placeholder="140"
                type="number"
                value={eventPrice}
                onChange={handleEventPrice}
              />

              <SelectGroupOne
                options={dropdownOptions}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />

              <DatePickerOne
                eventDate={eventDate}
                setEventDate={setEventDate}
              />

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Nota
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your message"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={eventNote}
                  onChange={handleEventNote}
                ></textarea>
              </div>


              <button
                type="submit"
                className="col-start-1 col-end-3 w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Crear Evento
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
