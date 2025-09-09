import ProductCard from '../ProductCard';

export default function ProductList() {
  return (
    <div>
      {Array.from({ length: 12 }).map((_, index) => (
        <div>
          <ProductCard />
        </div>
      ))}
    </div>
  );
}
