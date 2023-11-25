import React, { ReactNode } from "react";

type ButtonProp = {
  text: ReactNode;
  onClick?: () => void;
  styles: string;
};

const Button = ({ styles, text, onClick }: ButtonProp): JSX.Element => (
  <button
    onClick={onClick}
    type="button"
    className={`p-2 font-poppins transition ease-in-out  hover:scale-105  duration-300   hover:opacity-80   outline-none ${styles} whitespace-nowrap rounded-md`}
  >
    {text}
  </button>
);

export default Button;
