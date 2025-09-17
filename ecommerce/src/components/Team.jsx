import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

export default function Team({ images }) {
  return (
    <div className="my-10 flex flex-col items-center gap-10 text-center">
      <div>
        <h2 className="text-text-color text-4xl font-bold">
          Meet Our <br className="md:hidden" /> Team
        </h2>
      </div>
      <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-20">
        {images.map((image, index) => {
          return (
            <div key={index} className="flex flex-col gap-5">
              <img src={image} alt="" className="h-58 w-79" />
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col gap-1 text-center font-bold">
                  <h5 className="text-text-color text-base">Username</h5>
                  <h6 className="text-second-text-color text-sm">Profession</h6>
                </div>
                <div className="text-primary-color mb-2 flex gap-2">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
