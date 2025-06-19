import SearchIcon from '../../assets/icons/SearchIcon';
import MapIcon from '../../assets/icons/MapIcon';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';
import { branches, filter } from '../../data/branches';

export function meta() {
  return [
    { title: "Acquasuisse - Branches" },
    { name: "description", content: "Acquasuisse" },
  ];
}

export default function Branches() {
  const [selected, setSelected] = useState(0);
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const updateFilter = (i) => {
    setSelected(i);
  }

  const filterBranches = (area) => {
    if (filter[selected] == "All") return true;
    else if (area == filter[selected]) return true;
    else return false;
  }

  const searchName = (branchName) => {
    return branchName.toLowerCase().indexOf(inputText) > -1;
  }

  
  return (
    <section className="flex flex-col py-25 items-center">
      <div className="flex flex-col items-center px-12 lg:px-0 w-full lg:w-164">
        <h1 className="font-heading text-primary text-center text-4xl pb-6 w-fit">Locate Our Stores</h1>
        <div className="flex py-5 px-8 bg-secondary-grey w-full lg:w-164">
          <input className="w-full h-4 focus:outline-none" onChange={inputHandler} />
          <SearchIcon className="fill-none stroke-primary h-4" />
        </div>
        <div className="flex flex-row w-full pt-2.5 gap-5">
          <span className="font-body text-zinc-500 text-xl/9">Filter by: </span>
          <Dropdown options={filter} handleSelect={updateFilter} />
        </div>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-5xl gap-6 pt-12 px-12 lg:px-0">
        {branches.filter((branch) => filterBranches(branch.area)).filter((branch) => searchName(branch.title)).map(branch => 
          <article key={branch.key} className="flex flex-col gap-2.5 border border-gray-300 p-6 font-body">
            {branch.image &&
              <figure className="h-full aspect-square bg-gray-200"></figure>
            }
            <h1 className="text-xl uppercase font-semibold">{branch.title}</h1>
            <div className="flex items-baseline gap-2">
              <MapIcon className="flex-none w-4 aspect-square pt-1" />
              <span className="shrink">{branch.desc}</span>
            </div>
            <input type="hidden" value={branch.area} />
          </article>
        )}
      </main>
    </section>
  )
}
