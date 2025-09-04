export default function BestSeller() {
  return (
    <div className="flex flex-col gap-10 pt-5 max-md:h-auto">
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
      <div className="m-auto grid grid-cols-4 gap-10 px-10 max-md:flex max-md:flex-col">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="font-montserrat flex flex-col gap-5 font-bold"
          >
            <div className="h-[430px] w-[240px] bg-[url('images/bestseller-1.jpg')] max-md:w-[350px]"></div>
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
        ))}
      </div>
    </div>
  );
}
