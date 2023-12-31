import React from 'react';

interface HeaderProps {
  textProp: string | string[];
}

const Header: React.FC<HeaderProps> = ({ textProp }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center text-xl font-bold font-poppins">
          {Array.isArray(textProp) ? (
               textProp.map((text, index) => <h1 key={index}>{text}</h1>)
          ) : (
               <h1>{textProp}</h1>
          )}
    </main>
  );
};

export default Header;