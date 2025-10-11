import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import {
  addCard,
  deleteCard,
  updateCard,
} from '../../redux/thunks/clientThunks';

export default function CreditCardForm({ setActiveTab, selectedCard }) {
  const [isSuccess, setIsSuccess] = useState();
  const isEditMode = !!selectedCard;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: selectedCard || {},
  });

  const onSubmit = async (data) => {
    let result;

    if (isEditMode) {
      result = await dispatch(updateCard({ ...selectedCard, ...data }));
    } else {
      result = await dispatch(addCard(data));
    }

    if (result) {
      setIsSuccess(true);
      setActiveTab('creditCard');
    }
  };

  const handleDelete = async () => {
    if (!selectedCard?.id) return;

    const confirmed = window.confirm('Bu kartı silmek istediğine emin misin?');
    if (!confirmed) return;

    const result = await dispatch(deleteCard(selectedCard.id));
    if (result) {
      setIsSuccess(true);
      setActiveTab('creditCard');
    }
  };

  console.log(selectedCard);
  if (isSuccess) {
    return (
      <div className="font-montserrat text-secondary-color-1 flex flex-col items-center justify-center gap-5 text-3xl font-bold">
        <div className="flex items-center gap-3">
          <FaCheck size={30} />
          Kart başarıyla kaydedildi!
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
        <h1 className="text-text-color font-bold">Add New Card</h1>
        <button
          onClick={() => setActiveTab('creditCard')}
          className="cursor-pointer"
        >
          <MdCancel size={30} fill="red" />
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-70 flex-col gap-5 md:w-120"
      >
        <input
          {...register('card_no', {
            required: 'Kart numarası zorunludur.',
            pattern: {
              value: /^[0-9]{16}$/,
              message: 'Kart numarası 16 haneli olmalıdır.',
            },
          })}
          placeholder="Card Number"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        {errors.card_no && (
          <p className="text-red-500">{errors.card_no.message}</p>
        )}
        <p className="text-base">Son Kullanma tarihi</p>
        <div className="flex justify-between">
          <div className="flex">
            <div>
              <select
                {...register('expire_month', {
                  required: 'Ay seçimi zorunludur.',
                })}
              >
                <option hidden>Month</option>
                {[...Array(12)].map((_, i) => {
                  return (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <select
                {...register('expire_year', {
                  required: 'Yıl seçimi zorunludur.',
                })}
              >
                <option hidden>Year</option>
                {[...Array(10)].map((_, i) => {
                  const year = new Date().getFullYear() + i;
                  return (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
              {errors.expire_year && (
                <p className="text-red-500">{errors.expire_year.message}</p>
              )}
            </div>
          </div>
          <div>
            <input type="number" className="w-15" placeholder="CVV" />
          </div>
        </div>
        <input
          {...register('name_on_card')}
          placeholder="Name On Card"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <button
          type="submit"
          className="btn btn-lg bg-primary-color text-white"
        >
          {isEditMode ? 'Update Card' : 'Add Card'}
        </button>
        {isEditMode && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isSubmitting}
            className="btn btn-lg bg-red-600 text-white"
          >
            Delete Card
          </button>
        )}
      </form>
    </div>
  );
}
