import React from 'react';

const NavItem = ({ href, label }) => {
  return (
    <li>
      <a href={href} className="hover:text-indigo-600 transition text-sm text-white font-medium">
        {label}
      </a>
    </li>
  );
};

export default NavItem;
