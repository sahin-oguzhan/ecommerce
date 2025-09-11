import BreadCrumb from '../BreadCrumb';

export default function TeamHero({ to, text, tab }) {
  return (
    <div className="flex flex-col gap-10">
      <BreadCrumb to={to} text={text} tab={tab} />
      <div className="font-montserrat flex flex-col items-center gap-5 text-center font-bold">
        <h5 className="text-second-text-color text-base">WHAT WE DO</h5>
        <h1 className="text-text-color text-4xl">
          Innovation <br className="md:hidden" /> tailored for you
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
        <div>
          <img
            src="images/team-1.jpg"
            alt=""
            className="h-132 w-103 object-cover object-center md:h-132 md:w-175"
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div>
              <img
                src="images/team-2.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
            <div>
              <img
                src="images/team-3.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <img
                src="images/team-4.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
            <div>
              <img
                src="images/team-5.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
