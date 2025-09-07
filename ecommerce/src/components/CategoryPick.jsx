export default function CategoryPick() {
  return (
    <div className="flex h-screen w-screen flex-col gap-30 bg-white max-md:h-auto max-md:pb-10">
      <div className="font-montserrat flex flex-col gap-5 pt-15 text-center">
        <h1 className="text-text-color text-2xl font-bold">EDITOR'S PICK</h1>
        <p className="text-second-text-color text-sm font-normal">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex justify-center gap-10 max-md:m-auto max-md:flex-col">
        <div className="h-[500px] w-[510px] bg-[url('/images/category-pick-1.jpg')] bg-cover max-md:w-[323px]">
          <button className="">MEN</button>
        </div>
        <div className="h-[500px] w-[240px] bg-[url('/images/category-pick-2.jpg')] bg-cover max-md:w-[323px]">
          <p>WOMEN</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="h-[240px] w-[240px] bg-[url('/images/category-pick-3.jpg')] bg-cover max-md:w-[323px]">
            <p>ACCESSORIES</p>
          </div>
          <div className="h-[240px] w-[240px] bg-[url('/images/category-pick-4.jpg')] bg-cover max-md:w-[323px]">
            <p>KIDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
