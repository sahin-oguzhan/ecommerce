import { AlarmClock, ChartArea, ChevronRight } from 'lucide-react';

export default function ContentCard({ image }) {
  return (
    <div className="relative flex h-[606px] w-[350px] flex-col shadow-xl max-md:w-[330px]">
      <div className="flex flex-col gap-2">
        <h6 className="font-montserrat text-light-text-color absolute top-5 left-5 rounded-sm bg-red-600 p-1 text-sm font-bold">
          NEW
        </h6>
        <div className="h-[300px] w-[330px]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="font-montserrat flex gap-2 px-5">
          <small className="text-disabled-element">Google</small>
          <small className="text-second-text-color">Trending</small>
          <small className="text-second-text-color">New</small>
        </div>
      </div>
      <div className="font-montserrat flex flex-1 flex-col justify-around px-5">
        <h5 className="text-text-color text-xl font-normal">
          Loudest à la Madison #1 <br /> (L'integral)
        </h5>
        <p className="text-second-text-color text-sm">
          We focus on ergonomics and meeting <br /> you where you work. It's
          only a <br />
          keystroke away.
        </p>
        <div className="flex justify-between text-xs">
          <div className="flex items-center gap-2">
            <AlarmClock className="text-primary-color w-4" />
            <p className="text-second-text-color">22 April 2021</p>
          </div>

          <div className="flex items-center gap-2">
            <ChartArea className="text-secondary-color-1 w-4" />
            <p className="text-second-text-color">10 comments</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-second-text-color text-sm font-bold">Learn More</p>
          <ChevronRight className="text-primary-color" />
        </div>
      </div>
    </div>
  );
}
