import React from 'react';

export default function HeaderTitle({ title, first }: { title: string; first?: boolean }) {
  return (
    <>
      <div
        className={`p-2.5 xl:p-5 ${
          first
            ? ""
            : "text-center"
        }`}
      >
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          {title}
        </h5>
      </div>
    </>
  )
}
