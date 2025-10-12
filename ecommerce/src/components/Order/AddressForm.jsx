import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAddress,
  updateAddress,
  deleteAddress,
} from '../../redux/thunks/clientThunks';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

export default function AddressForm({ setActiveTab, selectedAddress = null }) {
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

  const [isSuccess, setIsSuccess] = useState();
  const isEditMode = !!selectedAddress;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: selectedAddress || {} });

  const onSubmit = async (data) => {
    let result;

    if (isEditMode) {
      result = await dispatch(updateAddress({ ...selectedAddress, ...data }));
    } else {
      result = await dispatch(addAddress(data));
    }

    if (result) {
      setIsSuccess(true);
    }
  };

  const handleDelete = async () => {
    if (!selectedAddress?.id) return;

    const confirmed = window.confirm('Bu adresi silmek istediğine emin misin?');
    if (!confirmed) return;

    const result = await dispatch(deleteAddress(selectedAddress.id));
    if (result) {
      setActiveTab('address');
    }
  };

  if (isSuccess) {
    return (
      <div className="font-montserrat text-secondary-color-1 flex flex-col items-center justify-center gap-5 text-3xl font-bold">
        <div className="flex items-center gap-3">
          <FaCheck size={30} />
          Adres başarıyla kaydedildi!
        </div>
        <button
          onClick={() => setActiveTab('address')}
          className="btn btn-xl bg-primary-color w-60 text-white"
        >
          Devam Et
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-10">
        <h1 className="text-text-color font-bold">Add New Address</h1>
        <button
          onClick={() => setActiveTab('address')}
          className="cursor-pointer"
        >
          <MdCancel size={30} fill="red" />
        </button>
      </div>

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
          {isEditMode ? 'Update Address' : 'Add Address'}
        </button>
        {isEditMode && (
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-lg bg-red-600 text-white"
          >
            Delete Address
          </button>
        )}
      </form>
    </div>
  );
}
