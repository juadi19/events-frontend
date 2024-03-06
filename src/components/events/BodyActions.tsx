import React from 'react';
import Link from 'next/link';

export default function BodyActions({ icon, route } : { icon: React.JSX.Element, route?: string | undefined } ) {
  return (
    <>
      {
        route === undefined
          ? (
            <button className="hover:text-primary rounded-full hover:bg-slate-300">
              {icon}
            </button>
          )
          : (
            <Link
              href={route}
              className="hover:text-primary rounded-full hover:bg-slate-300">
                {icon}
            </Link>
          )
      }
    </>
  )
}
