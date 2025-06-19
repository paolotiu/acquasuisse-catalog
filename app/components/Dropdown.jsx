import { useState, useRef, useEffect } from 'react';
import ArrowRightIcon from '../assets/icons/ArrowRightIcon';

export default function Dropdown ({ options, handleSelect }) {
  const [show, setShow] = useState(false);
  const [selected, setSelect ] = useState(0);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div onClick={() => setShow(!show)} ref={dropdownRef}>
      <div className="flex flex-row w-full group items-baseline justify-between cursor-pointer">
        <span className="appearance-none pe-6 font-body text-xl/9 outline-none">
          {options[selected]} 
        </span>
        <ArrowRightIcon className="h-3 -ms-3 fill-black rotate-90 group-focus:-rotate-90 transition-transform " />
      </div>
      <div className={`flex flex-col absolute bg-white border-1 border-gray-100 rounded shadow-md ${show ? "" : "hidden"}`}>
        {options.map((region, i) =>
          <button className="font-body text-base text-start px-2.5 py-1 cursor-pointer hover:bg-gray-100"
            key={i} onClick={() => { setSelect(i); handleSelect(i); }}
          >
            {region}
          </button>
        )}
      </div>
    </div>
  )
}