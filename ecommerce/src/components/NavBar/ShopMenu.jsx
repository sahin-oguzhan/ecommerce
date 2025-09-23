import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/thunks/productThunks';
import api from '../../api';
import { Link } from 'react-router';

export default function ShopMenu() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const erkek = categories.filter((cat) => cat.gender === 'e');
  const kadin = categories.filter((cat) => cat.gender === 'k');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="font-montserrat text-second-text-color mt-5 flex h-max w-max gap-x-10 bg-white px-5 font-bold max-md:text-xl">
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-text-color">KADIN</p>
        <div className="flex flex-col gap-5">
          {kadin.map((k) => {
            const [genderCode, categoryCode] = k.code.split(':');
            const gender = genderCode === 'k' ? 'kadin' : 'erkek';
            return (
              <Link key={k.id} to={`/shop/${gender}/${categoryCode}/${k.id}`}>
                {k.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-text-color">ERKEK</p>
        <div className="flex flex-col gap-5">
          {erkek.map((e) => {
            const [genderCode, categoryCode] = e.code.split(':');
            const gender = genderCode === 'k' ? 'kadin' : 'erkek';
            return (
              <Link key={e.id} to={`/shop/${gender}/${categoryCode}/${e.id}`}>
                {e.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
