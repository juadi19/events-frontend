"use client";
import React from 'react'
import DefaultLayout from '../../../components/Layouts/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import DatePickerOne from '@/components/FormElements/DatePicker/DatePickerOne';
import DatePickerTwo from '@/components/FormElements/DatePicker/DatePickerTwo';
import { TextInput } from '@/components/FormElements/TextInput';
import { Option } from "@/interfaces";

const dropdownOptions: Option[] = [
  {
    value: 1,
    title: "Boda"
  },
  {
    value: 2,
    title: "XV"
  },
  {
    value: 3,
    title: "Cumpleaños"
  },
  {
    value: 3,
    title: "Graduación"
  },
]

export default function EventsCreate() {
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
          <form action="#">
            <div className="p-6.5 grid grid-cols-2 grid-flow-row gap-6">
              <TextInput title="Nombre" placeholder="Escribe el nombre del evento" mandatory />

              <TextInput title="Descripción" placeholder="Escribe una descripción" />

              <TextInput title="Dirección" placeholder="Escribe la dirección del evento" mandatory />

              <TextInput title="Telefono" placeholder="333-333-3333" type="number" />

              <TextInput title="Precio" placeholder="140" type="text" />

              <SelectGroupOne options={dropdownOptions} />

              <DatePickerOne />

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Nota
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your message"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <button className="col-start-1 col-end-3 w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  )
}
