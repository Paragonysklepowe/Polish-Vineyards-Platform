import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-[#722F37] font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};