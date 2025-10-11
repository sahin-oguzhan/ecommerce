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
    formState: { errors, isSubmitting },
  } = useForm();

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
        className="flex w-max flex-col gap-5"
      >
        <input
          {...register('card_no')}
          placeholder="Card Number"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <input
          {...register('expire_month')}
          placeholder="Expire Month"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
        <input
          {...register('expire_year')}
          placeholder="Expire Year"
          className="border-muted-color focus:border-primary-color rounded-xl border-1 p-2 outline-none"
        />
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
            className="btn btn-lg bg-red-600 text-white"
          >
            Delete Address
          </button>
        )}
      </form>
    </div>
  );
}
