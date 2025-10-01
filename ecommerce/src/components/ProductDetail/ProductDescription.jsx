import { ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function ProductDescription({ product }) {
  const { fetchState } = useSelector((state) => state.product);
  return (
    <div className="font-montserrat my-15 flex flex-col items-center gap-5 text-center font-bold">
      <div className="text-second-text-color flex gap-2 text-sm">
        <Link className="font-semibold underline">Description</Link>
        <Link>Additional Information</Link>
        <Link>
          Reviews <span className="text-success">(0)</span>
        </Link>
      </div>
      <hr className="border-light-gray-2 w-3/4 border-t-2" />
      <div className="flex flex-col items-center gap-10 md:flex-row">
        {fetchState === 'FETCHING' ? (
          <div className="flex h-67 w-80 items-center justify-center md:h-79">
            <div className="border-primary-color h-8 w-8 animate-spin rounded-full border-b-2"></div>
          </div>
        ) : (
          <img
            src={product?.images[0].url}
            alt=""
            className="h-67 w-80 rounded-md object-cover object-center md:h-79"
          />
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-text-color text-2xl">the quick fox jumps over</h3>
          <p className="text-second-text-color w-78 text-left text-sm font-normal">
            Met minim Mollie non desert Alamo est sit dolor do met sent. RELIT
            official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br />
            <br />
            Met minim Mollie non desert Alamo est sit dolor do met sent. RELIT
            official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br />
            <br /> Met minim Mollie non desert Alamo est sit dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br />
          </p>
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">the quick fox jumps over</h3>
            <div>
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div key={index} className="collapse">
                    <input type="checkbox" className="" />
                    <div className="collapse-title text-second-text-color flex justify-center !py-2 text-sm">
                      <ChevronRight size={20} /> the quick fox jumps over the
                      lazy dog
                    </div>
                    <div className="collapse-content text-second-text-color text-left text-sm font-normal md:w-100">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iusto consequatur quidem accusantium accusamus saepe odio
                      sunt placeat temporibus impedit quod blanditiis est facere
                      necessitatibus, quasi molestias fugit harum officiis
                      architecto?
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl">the quick fox jumps over</h3>
              <div>
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <div key={index} className="collapse">
                      <input type="checkbox" className="" />
                      <div className="collapse-title text-second-text-color flex items-center justify-center !py-2 text-sm">
                        <ChevronRight size={20} /> the quick fox jumps over the
                        lazy dog
                      </div>
                      <div className="collapse-content text-second-text-color text-left text-sm font-normal md:w-100">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iusto consequatur quidem accusantium accusamus
                        saepe odio sunt placeat temporibus impedit quod
                        blanditiis est facere necessitatibus, quasi molestias
                        fugit harum officiis architecto?
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
