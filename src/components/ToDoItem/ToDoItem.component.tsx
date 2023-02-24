import React from "react";
import { MouseEventHandler } from "react";

interface TodoProps {
  value?: string;
  complete?: boolean;
}

export const TodoItem = ({ value, complete }: TodoProps) => {
  return (
    <li>
      <label>
        {value}
        <input type="checkbox" checked={complete} />
      </label>
    </li>
  );
};
