import React from 'react';
import HeaderTitle from './HeaderTitle';

export default function TableHeader() {
  return (
    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
      <HeaderTitle title="Evento" first />
      <HeaderTitle title="Invitado" />
      <HeaderTitle title="Fecha del Evento" />
      <HeaderTitle title="Dirección" />
      <HeaderTitle title="Actions" />
    </div>
  )
}
