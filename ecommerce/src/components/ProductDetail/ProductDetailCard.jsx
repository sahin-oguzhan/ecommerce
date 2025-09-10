import ProductDetailSlider from './ProductDetailSlider';
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react';

export default function ProductDetailCard() {
  return (
    <div className="my-5 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-30">
      <ProductDetailSlider />
      <div className="font-montserrat flex flex-col gap-5 font-bold">
        <h4 className="text-text-color text-xl font-normal">Floating Phone</h4>
        <div className="flex items-center gap-2">
          <div className="flex">
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            <Star size={20} className="text-yellow-400" />
          </div>
          <h6 className="text-sm">10 Reviews</h6>
        </div>
        <h3 className="text-text-color text-2xl">$1,139.33</h3>
        <div className="flex gap-2 text-sm">
          <h6 className="text-second-text-color">Availibilty :</h6>
          <h6 className="text-primary-color">In Stock</h6>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-second-text-color text-sm font-normal">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{' '}
            <br /> met sent. RELIT official consequent <br /> door ENIM RELIT
            Mollie. Excitation <br /> venial consequent sent nostrum met.{' '}
          </p>
          <hr className="text-second-text-color" />
        </div>

        <div className="flex gap-2">
          <button className="bg-primary-color btn btn-circle btn-sm"></button>
          <button className="bg-secondary-color-1 btn btn-circle btn-sm"></button>
          <button className="bg-alert-color btn btn-circle btn-sm"></button>
          <button className="bg-dark-background-color btn btn-circle btn-sm"></button>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-lg bg-primary-color text-sm text-white">
            Select Options
          </button>
          <button className="btn btn-circle btn-l">
            <Heart />
          </button>
          <button className="btn btn-circle btn-lg">
            <ShoppingCart />
          </button>
          <button className="btn btn-circle btn-lg">
            <Eye className="fill-black text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
