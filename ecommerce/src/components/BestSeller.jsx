import ProductCard from './ProductCard';

export default function BestSeller({ images }) {
  return (
    <div className="my-20 flex flex-col gap-10 max-md:h-auto">
      <div className="font-montserrat text-center font-bold">
        <p className="text-second-text-color text-xl">Featured Products</p>
        <h1 className="text-text-color text-2xl font-bold">
          BESTSELLER <br className="md:hidden" /> PRODUCTS
        </h1>

        <p className="text-second-text-color text-sm">
          Problems trying to resolve the <br className="md:hidden" />
          conflict between
        </p>
      </div>
      <div className="m-auto grid grid-cols-4 gap-10 max-md:flex max-md:flex-col">
        {images.map((image, index) => (
          <div key={index}>
            <ProductCard image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
