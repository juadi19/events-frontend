import Link from 'next/link';
import React from 'react'

interface Button {
  value: string;
  width: string;
  icon?: undefined | React.JSX.Element ;
}

export default function ButtonComponent( props: Button ) {

  const { value, icon, width } = props;

  return (
    <Link
      className={`${width} gap-x-5 flex justify-center items-center cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90`}
      href='/events/create'
      type="submit"
    >
      {value}

      { 
        icon === undefined
          ?  false
          : icon
      }

    </Link>
  )
}
