import React from 'react';

interface websiteSection {
  sectionTitle: string | string[];
}

const Header: React.FC<websiteSection> = ({ sectionTitle: sections }) => {
  return (
    <div className="flex flex-col items-center justify-between uppercase text-center text-xl font-bold font-poppins p-5">
      <h1>{sections}</h1>
    </div>
  );
};

export default Header;