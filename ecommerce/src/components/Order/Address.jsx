import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, getAddress } from '../../redux/thunks/shoppingCartThunks';
import { useEffect } from 'react';

export default function Address() {
  const cities = [
    'Adana',
    'Adıyaman',
    'Afyonkarahisar',
    'Ağrı',
    'Amasya',
    'Ankara',
    'Antalya',
    'Artvin',
    'Aydın',
    'Balıkesir',
    'Bilecik',
    'Bingöl',
    'Bitlis',
    'Bolu',
    'Burdur',
    'Bursa',
    'Çanakkale',
    'Çankırı',
    'Çorum',
    'Denizli',
    'Diyarbakır',
    'Edirne',
    'Elazığ',
    'Erzincan',
    'Erzurum',
    'Eskişehir',
    'Gaziantep',
    'Giresun',
    'Gümüşhane',
    'Hakkari',
    'Hatay',
    'Isparta',
    'Mersin',
    'İstanbul',
    'İzmir',
    'Kars',
    'Kastamonu',
    'Kayseri',
    'Kırklareli',
    'Kırşehir',
    'Kocaeli',
    'Konya',
    'Kütahya',
    'Malatya',
    'Manisa',
    'Kahramanmaraş',
    'Mardin',
    'Muğla',
    'Muş',
    'Nevşehir',
    'Niğde',
    'Ordu',
    'Rize',
    'Sakarya',
    'Samsun',
    'Siirt',
    'Sinop',
    'Sivas',
    'Tekirdağ',
    'Tokat',
    'Trabzon',
    'Tunceli',
    'Şanlıurfa',
    'Uşak',
    'Van',
    'Yozgat',
    'Zonguldak',
    'Aksaray',
    'Bayburt',
    'Karaman',
    'Kırıkkale',
    'Batman',
    'Şırnak',
    'Bartın',
    'Ardahan',
    'Iğdır',
    'Yalova',
    'Karabük',
    'Kilis',
    'Osmaniye',
    'Düzce',
  ];

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addAddress(data));
  };

  const { address } = useSelector((state) => state.shoppingCart);

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-max flex-col gap-5"
      >
        <input
          {...register('title')}
          placeholder="Address Title"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <input
          {...register('name')}
          placeholder="Name"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <input
          {...register('surname')}
          placeholder="Surname"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <input
          {...register('phone')}
          placeholder="Phone"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <select
          {...register('city')}
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        >
          <option value="Select your city" hidden>
            Select your city
          </option>
          {cities.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          {...register('district')}
          placeholder="District"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <input
          {...register('neighborhood')}
          placeholder="Neighborhood"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <textarea
          {...register('address')}
          placeholder="Address"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        ></textarea>
        <button
          type="submit"
          className="btn btn-lg bg-primary-color text-white"
        >
          Add address
        </button>
      </form>
      <button onClick={() => dispatch(getAddress())} className="btn">
        ADRESLERİ GETİR
      </button>
      {Object.values(address).map((a, i) => (
        <div key={i}>TITLE:{a.title}</div>
      ))}
    </div>
  );
}
