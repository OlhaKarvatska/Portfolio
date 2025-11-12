import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };
export function Button({ className = '', children, ...props }: Props) {
  return (
    <button
      className={'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-white bg-black hover:opacity-90 transition ' + className}
      {...props}
    >{children}</button>
  );
}
export default Button;
