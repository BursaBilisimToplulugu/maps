'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Hamburger from './sub-components/Hamburger';

type Props = {};

const Navbar = (props: Props) => {
  const [isActive, setisActive] = useState(false);
  return (
    <motion.nav className="hidden md:flex flex-col z-10 items-center md:py-10 md:px-6 py-5 px-3">
      <button onClick={() => setisActive((prev) => !prev)}>
        <Hamburger isActive={isActive} />
      </button>
    </motion.nav>
  );
};

export default Navbar;
