import { ChevronDown, LayoutGrid, ListChecks } from 'lucide-react';

export default function FilterRow() {
  return (
    <div className="font-montserrat text-second-text-color flex flex-col items-center gap-5 font-bold md:flex-row md:justify-center md:gap-60">
      <div>
        <h6>Showing all 12 results</h6>
      </div>
      <div className="flex items-center gap-5">
        <h6>Views:</h6>
        <div className="flex gap-5">
          <button className="btn btn-sm bg-light-gray-2 h-12">
            <LayoutGrid className="" />
          </button>
          <button className="btn btn-sm bg-light-gray-2 h-12">
            <ListChecks className="" />
          </button>
        </div>
      </div>
      <div className="flex gap-5">
        <button className="btn btn-lg bg-[#DDDDDD] font-normal">
          Popularity <ChevronDown />
        </button>
        <button className="btn btn-lg bg-primary-color text-white">
          Filter
        </button>
      </div>
    </div>
  );
}
