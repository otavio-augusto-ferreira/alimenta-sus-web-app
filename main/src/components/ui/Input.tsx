import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  const base = "w-full px-4 py-3 md:px-5 md:py-4 rounded-full border border-occa-brown/30 bg-[#fff6ea] placeholder:italic placeholder:occa-brown text-occa-brown text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-occa-green/15 focus:border-occa-green transition-shadow shadow-sm";
  return <input {...props} className={`${base} ${className}`.trim()} />;
}

export default Input;
