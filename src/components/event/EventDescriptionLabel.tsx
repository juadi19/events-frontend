import React, { FC } from "react";

interface EventDescriptionLabelProps {
  label: string;
  content?: any;
}

export const EventDescriptionLabel: FC<EventDescriptionLabelProps> = ({
  label,
  content,
}) => {
  return (
    <div className="my-10 flex flex-row">
      <div className="mr-2 font-bold">{label}</div>
      <div>{content}</div>
    </div>
  );
};
