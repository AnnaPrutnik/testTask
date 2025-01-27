'use client';
import { ChangeEvent } from 'react';

interface DropDownProps<T> {
  data: T[];
  idKey: keyof T;
  nameKey: keyof T;
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultPlaceholder: string;
  name: string;
}

export const DropDown = <T extends Record<string, string | number>>({
  data,
  idKey,
  nameKey,
  value,
  onChangeValue,
  defaultPlaceholder,
  name,
}: DropDownProps<T>) => {
  return (
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChangeValue}
      className="px-4 py-2 border border-blue-500 rounded-md outline-none hover:border-purple-400"
    >
      <option value="">{defaultPlaceholder}</option>
      {data.map((item) => (
        <option value={item[idKey]} key={item[idKey]}>
          {item[nameKey]}
        </option>
      ))}
    </select>
  );
};
