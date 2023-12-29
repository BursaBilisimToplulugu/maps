'use client';
import { Place } from '@/app/(routes)/dashboard/profile/types/user';
import Card from '@/app/common/components/Card';
import Divider from '@/app/common/components/Divider';
import Input from '@/app/common/components/Input';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useDebounce, useWindowSize } from '@uidotdev/usehooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import Hamburger from '../../Navbar/sub-components/Hamburger';
import { searchAction } from '../actions/search.action';

type Props = {};

const ClientHeader = (props: Props) => {
  const [searchValue, setsearchValue] = useState<string>('');
  const [isActive, setisActive] = useState(false);
  const [foundPlaces, setfoundPlaces] = useState<Place[] | null>(null);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { width } = useWindowSize();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
    placement: width && width > 768 ? 'bottom-start' : 'bottom-end',
  });
  const debouncedSearchTerm = useDebounce(searchValue, 300);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const handleSearch = async () => {
      const data = await searchAction(debouncedSearchTerm);
      setfoundPlaces(data);
    };
    if (debouncedSearchTerm.length > 3) handleSearch();
    else setfoundPlaces(null);
  }, [debouncedSearchTerm]);

  return (
    <>
      <button
        onClick={() => setisActive((prev) => !prev)}
        className="block md:hidden bg-white rounded-full backdrop-filter backdrop-blur-sm bg-opacity-50 p-1"
      >
        <Hamburger isActive={isActive} />
      </button>
      <div ref={setReferenceElement}>
        <Input.Search
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          className="md:w-[311px] w-full"
          clearAble
          places={foundPlaces}
          onClear={() => {
            setsearchValue('');
            setfoundPlaces(null);
          }}
        />
      </div>
      <AnimatePresence>
        {foundPlaces && foundPlaces.length && (
          <div
            className="w-full"
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <motion.ul
              ref={parent}
              initial={{ opacity: 0, marginTop: 10 }}
              animate={{ opacity: 1, marginTop: 0 }}
              exit={{ opacity: 0, marginTop: 10 }}
              className="bg-white text-black p-4 rounded-2xl md:max-w-[70%] md:ml-2"
            >
              {foundPlaces.map((place, index) => (
                <li key={place.id}>
                  <button>
                    <Card.Place place={place} />
                  </button>
                  {index !== foundPlaces.length - 1 && (
                    <Divider className="bg-neutrals-navyWhite my-4 h-[1px]" />
                  )}
                </li>
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClientHeader;
