import classNames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  isActive?: boolean;
  onClick?: (isActive: boolean) => void;
}

const Switch = ({ isActive = false, onClick }: Props) => {
  return (
    <motion.button
      type="button"
      className={classNames(
        'w-[64px] h-[32px] rounded-full transition-colors duration-300 border ',
        isActive
          ? 'bg-primary-green border-primary-green'
          : 'bg-neutrals-white border-neutrals-navyWhite'
      )}
      onClick={() => {
        onClick?.(!isActive);
      }}
    >
      <motion.div
        className={classNames(
          'rounded-full w-5 h-5 mx-2 transition-colors duration-300',
          isActive ? 'bg-white' : 'bg-neutrals-navyGrey'
        )}
        animate={{
          marginLeft: isActive ? '90%' : '10%',
          translateX: isActive ? '-100%' : '0%',
        }}
      />
    </motion.button>
  );
};

export default Switch;
