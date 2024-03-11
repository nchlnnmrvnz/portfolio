import React from 'react';

interface EducationCardProps {
  schoolLogo: string;
  schoolName: string;
  schoolLocation: string;
  schoolBatch: number;
  schoolExperienceList: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({schoolLogo, schoolName, schoolLocation, schoolBatch, schoolExperienceList }) => {
  return (
    <div className="p-4 text-white text-center">
      <div className="bg-dark-gray rounded-lg shadow-lg p-5 flex flex-col items-center">
        <img src={schoolLogo} alt="School Logo" className="mx-auto my-5 h-24" />
        <h1 className="text-lg text-pink font-bold">{schoolName}</h1>
        <p className="text-base pt-5">{schoolLocation}</p>
        <p className="text-base pb-5">Batch {schoolBatch}</p>
        <ul className="px-10">
          {schoolExperienceList.map((experience, index) => (
            <li key={index} className="text-base text-justify font-semibold list-disc tracking-tighter">{experience}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

export default EducationCard;
