import { ChangeEventHandler } from "react";

interface ToDoInputProps {
  onChange?: ChangeEventHandler;
  value?: string;
}

export const ToDoInput = ({ onChange, value }: ToDoInputProps) => {
  return <input placeholder="new task" type="text" onChange={onChange} value={value}></input>;
};
