import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useSelector } from 'react-redux';
import AddressList from './AddressList';
import { useState } from 'react';
import OrderSummary from './OrderSummary';
import CreditCardForm from './CreditCardForm';
import AddressForm from './AddressForm';
import CreditCardList from './CreditCardList';

export default function Order() {
  const { address } = useSelector((state) => state.shoppingCart);
  const [activeTab, setActiveTab] = useState('address');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(activeTab);
  return (
    <div className="font-montserrat flex flex-col items-center gap-5 text-sm md:flex-row md:p-5 md:text-lg">
      <div className="flex flex-col gap-5 max-md:items-center">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 p-2 md:grid md:grid-cols-2 md:flex-row">
            <button
              onClick={() => setActiveTab('address')}
              className={`flex h-full flex-col rounded-lg border p-2 ${activeTab === 'address' ? 'border-primary-color border-b-3' : 'border-muted-color'}`}
            >
              <div className="flex justify-between">
                <h6 className="text-primary-color font-bold">
                  Adres Bilgileri
                </h6>
                <Link className="text-secondary-color-1 font-bold underline">
                  Değiştir
                </Link>
              </div>
              <div className="text-left">
                <p>{address.title}</p>
                <p>{address.address}</p>
                <p>
                  {address.neighborhood} / {address.district} / {address.city}
                </p>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('creditCard')}
              className={`flex h-full flex-col rounded-lg border p-2 ${activeTab === 'creditCard' ? 'border-primary-color border-b-3' : 'border-muted-color'}`}
            >
              <div className="flex h-max justify-between">
                <h6 className="text-primary-color font-bold">
                  Ödeme Bilgileri
                </h6>
                <Link className="text-secondary-color-1 font-bold underline">
                  Değiştir
                </Link>
              </div>
              <p>
                Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
                yapabilirsiniz.
              </p>
            </button>
          </div>
          {activeTab === 'address' && (
            <div className="p-2">
              <div className="border-muted-color flex gap-2 rounded-lg border">
                <Info size={60} className="fill-alert-color text-white" />
                <p>
                  Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
                  Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı
                  Kurumsal Fatura adersinizi seçin.
                </p>
              </div>
            </div>
          )}
          {activeTab === 'creditCard' && (
            <div className="border-muted-color m-2 flex gap-2 rounded-lg border p-2">
              <div className="flex gap-5 p-2">
                <input type="radio" defaultChecked={true} />
                <label htmlFor="" className="flex flex-col">
                  <p className="text-2xl font-bold">Kart ile Öde</p>
                  <p className="font-bold">
                    Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak
                    ödemenizi güvenle yapabilirsiniz.
                  </p>
                </label>
              </div>
            </div>
          )}
        </div>
        {activeTab === 'address' && (
          <AddressList
            setActiveTab={setActiveTab}
            setSelectedAddress={setSelectedAddress}
          />
        )}
        {activeTab === 'creditCard' && (
          <CreditCardList
            setActiveTab={setActiveTab}
            setSelectedCard={setSelectedCard}
          />
        )}
        {activeTab === 'addressForm' && (
          <AddressForm
            setActiveTab={setActiveTab}
            selectedAddress={selectedAddress}
          />
        )}
        {activeTab === 'creditCardForm' && (
          <CreditCardForm
            setActiveTab={setActiveTab}
            selectedCard={selectedCard}
          />
        )}
      </div>
      {activeTab === 'address' && <OrderSummary setActiveTab={setActiveTab} />}
    </div>
  );
}
