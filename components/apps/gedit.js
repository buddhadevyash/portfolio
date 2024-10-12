import React from 'react';

const ContactMe = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open('mailto:yash.buddhadev@djsce.edu.in', '_blank');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleClick}
        className="
          flex items-center justify-center
          px-6 py-3
          text-white text-lg font-semibold
          bg-blue-600 hover:bg-blue-700
          rounded-lg
          shadow-lg hover:shadow-xl
          transform hover:-translate-y-0.5 transition duration-200
          border-b-4 border-blue-800 hover:border-blue-900
        "
      >
        <span className="mr-2 text-2xl">📥</span>
        <span>Email Me</span>
      </button>
    </div>
  );
};

export default ContactMe;

export const displayContactMe = () => {
  return <ContactMe />;
};