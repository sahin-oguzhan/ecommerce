import BreadCrumb from '../BreadCrumb';
import InnerBreadCrumb from '../InnerBreadCrumb';

export default function TeamHero({}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="font-montserrat flex flex-col items-center gap-5 text-center font-bold">
        <h5 className="text-second-text-color text-base">WHAT WE DO</h5>
        <h1 className="text-text-color text-4xl">
          Innovation <br className="md:hidden" /> tailored for you
        </h1>
        <InnerBreadCrumb to={'/'} text={'Home'} tab={'Team'} />
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
        <div>
          <img
            src="images/teamhero-1.jpg"
            alt=""
            className="h-132 w-103 object-cover object-center md:h-132 md:w-175"
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div>
              <img
                src="images/teamhero-2.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
            <div>
              <img
                src="images/teamhero-3.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <img
                src="images/teamhero-4.jpg"
                alt=""
                className="h-65 w-51 object-cover md:h-65 md:w-90"
              />
            </div>
            <div>
              <img
                src="images/teamhero-5.jpg"
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
