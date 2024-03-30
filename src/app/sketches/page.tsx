"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddTable from "@/components/canvas/AddTable";
import CanvasComponent from "@/components/canvas/CanvasComponent";
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

export default function page() {
  const [tables, setTables] = useState<Table[]>([]);

  return (
    <DefaultLayout>
      <div>
        <h1>Locales</h1>
        <div className="flex flex-row">
          <CanvasComponent
            width={600}
            height={600}
            tables={tables}
          ></CanvasComponent>

          <AddTable setTables={setTables} tables={tables} />
        </div>
      </div>
    </DefaultLayout>
  );
}
