import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Plus, Smartphone } from 'lucide-react';
import { getAddress } from '../../redux/thunks/clientThunks';
import { setAddress } from '../../redux/actions/shoppingCartActions';

export default function AddressList({ setActiveTab, setSelectedAddress }) {
  const { addressList } = useSelector((state) => state.client);
  const { address } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const handleSelect = (selected) => {
    dispatch(setAddress(selected));
  };

  return (
    <div className="border-muted-color font-montserrat text-text-color m-2 rounded-lg border p-3 text-sm md:text-lg">
      <div className="flex justify-between">
        <h6 className="text-sm font-bold md:text-lg">Teslimat Adresi</h6>
        <div className="flex items-center gap-1">
          <input type="checkbox" id="fatura" />
          <label htmlFor="fatura" className="">
            Faturamı Aynı Adrese Gönder
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <button
          onClick={() => {
            setActiveTab('addressForm');
            setSelectedAddress(null);
          }}
          className="border-muted-color flex cursor-pointer items-center justify-center rounded-lg border bg-gray-200 py-9"
        >
          <Plus /> Yeni adres ekle
        </button>
        {addressList.map((a, i) => (
          <div key={i}>
            <button
              onClick={() => handleSelect(a)}
              className="border-muted-color flex w-full flex-col gap-2 rounded-lg border-2 p-2 text-left"
            >
              <div className="flex justify-between px-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={a.id}
                    name="address"
                    checked={address?.id === a.id}
                    onChange={() => handleSelect(a)}
                  />
                  <label
                    htmlFor={a.id}
                    className="text-primary-color font-bold"
                  >
                    {a.title}
                  </label>
                </div>
                <button
                  onClick={() => {
                    setSelectedAddress(address);
                    setActiveTab('addressForm');
                  }}
                  className="cursor-pointer underline"
                >
                  Düzenle
                </button>
              </div>
              <div className="border-muted-color focus:border-primary-color rounded-lg border p-1">
                <div className="flex justify-between">
                  <h6>
                    {a.name} {a.surname}
                  </h6>
                  <div className="flex items-center gap-2">
                    <Smartphone size={15} /> {a.phone}
                  </div>
                </div>
                <div>
                  <p>{a.address}</p>
                  <div className="flex gap-1">
                    <p>{a.neighborhood}</p>/<p>{a.district}</p>/<p>{a.city}</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
