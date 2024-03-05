import React from 'react';

export default function BodyCard({ data, containerStyle, textStyle } : { data: string, containerStyle: string, textStyle: string }) {
  return (
    <div className={`items-center justify-center p-2.5 xl:p-5 ${ containerStyle }`}>
      <p className={textStyle}>{ data }</p>
    </div>
  )
}
