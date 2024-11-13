import React,{ useState }  from 'react'
import { Link } from 'react-router-dom'
import { nave } from '../data/Data'


function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <nav className="w-1/5 h-screen fixed  bg-slate-500 top-0 z-10">
        <ul className="flex flex-col">
          {nave.map((item, index) => (
            <li
            key={index}
            className={`h-12 flex items-center pl-10 ${
              index === activeIndex ? "bg-blue-500" : ""
            }`}           
            >
              <Link
                to={item.path}
                className="w-full h-full flex items-center px-4 text-white"
               // onClick={() => handleLinkClick(index)}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
     </>
  );
}

export default SideBar;