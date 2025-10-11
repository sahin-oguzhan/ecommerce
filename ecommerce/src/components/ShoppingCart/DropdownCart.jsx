import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DropdownCart() {
  const { cart } = useSelector((state) => state.shoppingCart);
  return (
    <div className="border-second-text-color flex w-100 flex-col rounded-sm border-1 bg-white p-2 shadow-2xl">
      <h1 className="font-montserrat text-text-color text-base">
        Sepetim: {cart?.length} Ürün
      </h1>
      {cart.map((c, index) => {
        return (
          <div
            key={index}
            className="border-muted-color m-2 flex items-center gap-2 border-1 text-sm"
          >
            <div className="border-muted-color m-2 flex h-28 w-28 flex-shrink-0 items-center justify-center border-1">
              <img
                src={c.product.images[0].url}
                alt=""
                className="m-5 h-25 w-25 object-cover"
              />
            </div>
            <div className="font-montserrat text-text-color text-sm">
              <div>
                <h6 className="font-bold">{c.product.name}</h6>
                <h6>{c.product.description}</h6>
              </div>
              <h6>Adet: {c.count}</h6>
              <h6 className="text-secondary-color-1">${c.product.price}</h6>
            </div>
          </div>
        );
      })}
      <div className="font-montserrat border-muted-color flex justify-around border-t-1 pt-2">
        <Link to={'/cart'} className="btn bg-primary-color w-40 text-white">
          Sepete Git
        </Link>
        <Link className="btn bg-primary-color w-40 text-white">
          Siparişi Tamamla
        </Link>
      </div>
    </div>
  );
}
