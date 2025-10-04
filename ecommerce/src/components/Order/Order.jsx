import Address from './Address';
import CreditCard from './CreditCard';
import { Link } from 'react-router-dom';
import OrderSummary from '../../components/ShoppingCart/OrderSummary';
import { Info } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Order() {
  const { address } = useSelector((state) => state.shoppingCart);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <div className="flex">
          <button className="focus:border-primary-color border-muted-color flex h-max flex-col border focus:border-b-3">
            <div className="flex justify-between">
              <h6>Adres Bilgileri</h6>
              <Link>Değiştir</Link>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              eligendi dicta velit architecto ipsam eaque illo quas nulla cum
              quisquam, sequi, optio dolores minima, minus harum quam. Vero, et?
              Consectetur!
            </p>
          </button>
          <button className="focus:border-primary-color flex h-max flex-col focus:border-b-3">
            <div className="flex h-max justify-between">
              <h6>Ödeme Bilgileri</h6>
              <Link>Değiştir</Link>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              eligendi dicta velit architecto ipsam eaque illo quas nulla cum
              quisquam, sequi, optio dolores minima, minus harum quam. Vero, et?
              Consectetur!
            </p>
          </button>
        </div>
        <div>
          <Info />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            placeat itaque nihil delectus similique alias. Id natus blanditiis
            voluptatem perferendis ipsam, reprehenderit at praesentium! Quos at
            tenetur magnam vitae ut.
          </p>
        </div>
        <div>
          <div>
            <h6>Teslimat Adresi</h6>
            <input type="checkbox" name="fatura" />
            <label htmlFor="fatura">Faturamı aynı adrese gönder</label>
          </div>
          <div>ADRESLER</div>
        </div>
      </div>
      <OrderSummary />
      <Address />
    </div>
  );
}
