import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  size?: 'small' | 'medium' | 'large';
  isActive: boolean;
  onClick?: (isActive: boolean) => void;
}

const Switch = ({ size, isActive, onClick }: Props) => {
  return (
    <motion.button
      type="button"
      className={classNames(
        'w-[64px] h-[32px] rounded-full  relative',
        isActive ? 'bg-primary-green' : 'bg-neutrals-white'
      )}
      animate={{
        backgroundColor: isActive ? '#58C27D' : '#F4F5F6',
      }}
      onClick={() => {
        onClick?.(!isActive);
      }}
    >
      <motion.div
        className=" absolute top-1/2 w-6 h-6 flex items-center justify-center"
        animate={{
          left: isActive ? '100%' : '0%',
          translateX: isActive ? '-100%' : '0%',
          translateY: '-50%',
        }}
      >
        <div className={classNames('bg-white rounded-full w-5 h-5 px-2')}></div>
      </motion.div>
    </motion.button>
  );
};

export default Switch;
