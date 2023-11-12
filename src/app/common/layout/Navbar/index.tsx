'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Hamburger from './sub-components/Hamburger';

type Props = {};

const Navbar = (props: Props) => {
  const [isActive, setisActive] = useState(false);
  return (
    <motion.nav className="flex flex-col z-10 items-center py-10 px-6">
      <button onClick={() => setisActive((prev) => !prev)}>
        <Hamburger isActive={isActive} />
      </button>
    </motion.nav>
  );
};

export default Navbar;
