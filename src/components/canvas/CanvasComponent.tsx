"use client";
import { eventNames } from "process";
import React, { useEffect, useRef } from "react";
import { start } from "repl";

interface CanvasProps {
  width: number;
  height: number;
  tables: Table[];
}

interface Table {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  id: number;
}

export default function CanvasComponent({
  width,
  height,
  tables,
}: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let current_table_index: number | null = null;
  let is_mouse_down = false;
  let startX = 0;
  let startY = 0;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.style.border = "1px solid #000";
      canvas.style.borderRadius = "5px";

      const draw = () => {
        if (context) {
          context.clearRect(0, 0, width, height);
          tables.forEach((table) => {
            context.fillStyle = table.color;
            context.fillRect(table.x, table.y, table.width, table.height);
          });
        }
      };

      const is_mouse_inside_shape = (x: number, y: number, table: Table) => {
        let x1 = table.x;
        let x2 = table.x + table.width;
        let y1 = table.y;
        let y2 = table.y + table.height;
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
          return true;
        }
        return false;
      };

      const mouseDown = (e: MouseEvent) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        let index = 0;
        for (let table of tables) {
          if (is_mouse_inside_shape(startX, startY, table)) {
            current_table_index = index;
            is_mouse_down = true;
            console.log(`Table id: ${table.id}`);
            return;
          }
          index++;
        }
      };

      const mouseUp = (e: MouseEvent) => {
        if (!is_mouse_down) {
          return;
        }
        e.preventDefault();
        is_mouse_down = false;
      };

      const mouseOut = (e: MouseEvent) => {
        if (!is_mouse_down) {
          return;
        }
        e.preventDefault();
        is_mouse_down = false;
      };

      const mouseMove = (e: MouseEvent) => {
        if (!is_mouse_down) {
          return;
        } else {
          e.preventDefault();
          const rect = canvas.getBoundingClientRect();
          let mouseX = e.clientX - rect.left;
          let mouseY = e.clientY - rect.top;

          let dx = mouseX - startX;
          let dy = mouseY - startY;

          let current_table = tables[current_table_index!];
          current_table.x += dx;
          current_table.y += dy;

          draw();

          startX = mouseX;
          startY = mouseY;
        }
      };

      canvas.onmousedown = mouseDown;
      canvas.onmouseup = mouseUp;
      canvas.onmouseout = mouseOut;
      canvas.onmousemove = mouseMove;

      if (context) {
        draw();
      }
      console.log(tables);
    }
  }, [tables, width, height]);

  return <canvas ref={canvasRef} height={height} width={width}></canvas>;
}
