import SearchIcon from '../../assets/icons/SearchIcon';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import MapIcon from '../../assets/icons/MapIcon';
import { branches } from '../../data/branches';

export function meta() {
  return [
    { title: "Acquasuisse - Branches" },
    { name: "description", content: "Acquasuisse" },
  ];
}


const Dropdown = () => {
  return (
    <div className="flex flex-row group items-center justify-between gap-2.5">
      <span className="font-body text-right text-xl/9">ALL</span>
      <ArrowRightIcon className="h-3 fill-black rotate-90 group-hover:-rotate-90 group-focus:-rotate-90 transition-transform "/>
    </div>
  )
}


export default function Branches() {
  return (
    <section className="flex flex-col py-25 items-center">
      <div className="flex flex-col items-center px-12 lg:px-0 w-full lg:w-164">
        <h1 className="font-heading text-primary text-center text-4xl pb-6 w-fit">Locate Our Stores</h1>
        <div className="flex py-5 px-8 bg-secondary-grey w-full lg:w-164">
          <input className="w-full h-4 focus:outline-none" />
          <SearchIcon className="fill-none stroke-primary h-4" />
        </div>
        <div className="flex flex-row w-full pt-2.5 gap-5">
          <span className="font-body text-zinc-500 text-xl/9">Filter by: </span>
          <Dropdown />
        </div>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-5xl gap-6 pt-12 px-12 lg:px-0">
        {branches.map(branch => 
          <article key={branch.key} className="flex flex-col gap-2.5 border border-gray-300 p-6 font-body">
            {branch.image &&
              <figure className="h-full aspect-square bg-gray-200"></figure>
            }
            <h1 className="text-xl uppercase font-semibold">{branch.title}</h1>
            <div className="flex items-baseline gap-2">
              <MapIcon className="flex-none w-4 aspect-square pt-1" />
              <span className="shrink">{branch.desc}</span>
            </div>
          </article>
        )}
      </main>
    </section>
  )
}
