import { ChevronDown, LayoutGrid, ListChecks } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions/productActions';

export default function FilterRow({ sort, setSort }) {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.product);
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
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="btn btn-lg bg-[#DDDDDD] font-normal"
        >
          <option hidden selected>
            Sort by
          </option>
          <option value="price:asc">Price asc</option>
          <option value="price:desc">Price desc</option>
          <option value="rating:asc">Rating asc</option>
          <option value="rating:desc">Rating desc</option>
        </select>
        <input
          type="text"
          placeholder="Filter products"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </div>
    </div>
  );
}
