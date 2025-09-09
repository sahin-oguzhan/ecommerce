export default function ProductCard() {
  return (
    <div className="font-montserrat flex flex-col gap-5 font-bold">
      <div className="h-[430px] w-[240px] bg-[url('/images/productcard.jpg')] max-md:w-[350px]"></div>
      <div className="flex flex-col gap-2 text-center">
        <div>
          <h2 className="text-text-color">Graphic Design</h2>
          <p className="text-second-text-color">English Department</p>
        </div>
        <div className="flex justify-center gap-2">
          <p className="text-muted-color">$16.48</p>
          <p className="text-secondary-color-1">$6.48</p>
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
