import { Link } from 'react-router';

export default function ProductCard({ product, fetchState }) {
  return (
    <div className="font-montserrat flex flex-col items-center gap-5 font-bold">
      <Link to={'/detail'}>
        <img
          src={product.images[0].url}
          alt=""
          className="h-[430px] w-[240px] border object-cover object-center max-md:w-[350px]"
        />
      </Link>

      <div className="flex flex-col gap-2 text-center">
        <div>
          <h2 className="text-text-color">{product.name}</h2>
          <p className="text-second-text-color">{product.description}</p>
        </div>
        <div className="flex justify-center gap-2">
          <p className="text-muted-color"></p>
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
  );
}
