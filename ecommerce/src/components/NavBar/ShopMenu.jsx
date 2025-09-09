export default function ShopMenu() {
  return (
    <div className="font-montserrat text-second-text-color mt-5 flex h-68 w-99 bg-white pl-5 font-bold">
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-text-color">KADIN</p>
        <div className="flex flex-col gap-5">
          <p>Bags</p>
          <p>Belts</p>
          <p>Cosmetics</p>
          <p>Bags</p>
          <p>Hats</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-text-color">ERKEK</p>
        <div className="flex flex-col gap-5">
          <p>Bags</p>
          <p>Belts</p>
          <p>Cosmetics</p>
          <p>Bags</p>
          <p>Hats</p>
        </div>
      </div>
    </div>
  );
}
