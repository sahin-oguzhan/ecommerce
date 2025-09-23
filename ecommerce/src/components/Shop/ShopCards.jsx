import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function ShopCards() {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="my-10 flex flex-col items-center gap-5 md:flex-row md:justify-center">
      {topCategories.map((top) => {
        const [genderCode, categoryCode] = top.code.split(':');
        const gender = genderCode === 'k' ? 'kadin' : 'erkek';
        return (
          <Link
            key={top.id}
            to={`/shop/${gender}/${categoryCode}/${top.id}`}
            style={{ backgroundImage: `url(${top.img})` }}
            className="group relative h-75 w-83 bg-cover bg-center md:h-56 md:w-51"
          >
            <div className="absolute inset-0 bg-black/20 duration-300 group-hover:bg-white/5"></div>
            <div className="font-montserrat relative flex h-full flex-col items-center justify-center gap-5 font-bold text-white">
              <h5 className="text-base">
                {genderCode === 'e' ? 'Erkek' : 'Kadın'} {top.title}
              </h5>
              <h6 className="text-sm">5 Items</h6>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
