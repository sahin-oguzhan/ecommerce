import { Link } from 'react-router-dom';
import slugify from '../slugify';

export default function ProductCard({ product, fetchState, category }) {
  return (
    <div className="font-montserrat my-10 flex h-110 w-87 flex-col items-center justify-between gap-5 font-bold md:h-122 md:w-60">
      {fetchState === 'FETCHING' ? (
        <div className="flex h-75 w-60 items-center justify-center max-md:w-[350px]">
          <div className="border-primary-color h-8 w-8 animate-spin rounded-full border-b-2"></div>
        </div>
      ) : (
        <Link
          to={`/shop/${category?.gender === 'k' ? 'kadin' : 'erkek'}/${category?.title.toLowerCase()}/${category?.id}/${slugify(product?.name)}/${product?.id}`}
          className="object-cover object-center"
        >
          <img
            src={product.images[0].url}
            alt=""
            className="h-75 w-60 object-cover object-center max-md:w-[350px]"
          />
        </Link>
      )}
      <div className="flex flex-col gap-2 text-center">
        <div>
          <h2 className="text-text-color text-base">{product.name}</h2>
          <p className="text-second-text-color text-sm">
            {product.description}
          </p>
        </div>
        <div className="flex-col gap-2">
          <div className="flex justify-center gap-2">
            <p className="text-secondary-color-1">${product.price}</p>
          </div>
          <div className="flex justify-center gap-2">
            <button className="bg-primary-color h-4 w-4 rounded-full"></button>
            <button className="bg-secondary-color-1 h-4 w-4 rounded-full"></button>
            <button className="bg-alert-color h-4 w-4 rounded-full"></button>
            <button className="bg-dark-background-color h-4 w-4 rounded-full"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
