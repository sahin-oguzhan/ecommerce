export default function ShopCards() {
  const images = [
    'images/shopcard-1.jpg',
    'images/shopcard-2.jpg',
    'images/shopcard-3.jpg',
    'images/shopcard-4.jpg',
    'images/shopcard-5.jpg',
  ];
  return (
    <div className="my-10 flex flex-col items-center gap-5 md:flex-row md:justify-center">
      {images.map((img, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${img})` }}
          className="relative h-75 w-83 bg-cover bg-center md:h-56 md:w-51"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="font-montserrat relative flex h-full flex-col items-center justify-center gap-5 font-bold text-white">
            <h5 className="text-base">CLOTHES</h5>
            <h6 className="text-sm">5 Items</h6>
          </div>
        </div>
      ))}
    </div>
  );
}
