import Link from "next/link";
import React, { useState } from "react";

interface Table {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  id: number;
  capacity: number;
  name: string;
}

export default function AddTable({
  setTables,
  tables,
}: {
  setTables: any;
  tables: Table[];
}) {
  const [name, setName] = useState<string>("");
  const [capacity, setCapacity] = useState<number>(0);

  const addTable = () => {
    if (name === "" || capacity === 0) {
      return;
    }
    const newTable: Table = {
      x: Math.floor(Math.random() * 200),
      y: Math.floor(Math.random() * 200),
      width: 50,
      height: 50,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      id: tables.length,
      capacity: capacity,
      name: name,
    };
    setTables([...tables, newTable]);
    setName("");
    setCapacity(0);
  };
  return (
    <div>
      <form>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div className="flex flex-col">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Nombre de la mesa
            </label>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              type="text"
              placeholder="Nombre de la mesa"
              name="table_name"
              id="table_name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Capacidad
            </label>
            <input
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              type="number"
              placeholder="Capacidad"
              name="capacity"
              id="capacity"
              required
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value))}
            ></input>
          </div>
          <div>
            <button
              className="inline-flex items-center justify-center rounded-full bg-black px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              onClick={addTable}
            >
              Agregar mesa
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
