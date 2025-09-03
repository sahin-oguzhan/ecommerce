export default function BestSeller() {
  return (
    <div className="flex h-screen flex-col">
      <div className="text-center">
        <p>Featured Products</p>
        <h1>BESTSELLER PRODUCTS</h1>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="m-auto grid grid-cols-3 gap-10 px-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <div className="h-[430px] w-[240px] bg-[url('images/bestseller-1.jpg')]"></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
