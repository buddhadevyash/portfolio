import React from 'react';

const ContactMe = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open('mailto:yash.buddhadev@djsce.edu.in', '_blank');
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="w-full block cursor-pointer py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5 text-white"
    >
      <span className="ml-5">📥</span> <span className="ml-2">Email Me</span>
    </a>
  );
};

export default ContactMe;

export const displayContactMe = () => {
  return <ContactMe />;
};