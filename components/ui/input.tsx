import React from 'react';

export type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel';
};

export default function Input({ id, name, placeholder = '', type = 'text' }: InputProps): JSX.Element {
  return (
    <input id={id} name={name} type={type} placeholder={placeholder} className="w-full border p-2 rounded" />
  );
}
