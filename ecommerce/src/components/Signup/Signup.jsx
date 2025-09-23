import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../../redux/thunks/clientThunks';

export default function Signup() {
  const [showPassword, setShowPasword] = useState(false);
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);

  const togglePassword = (event) => {
    event.preventDefault();
    setShowPasword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' });

  const password = watch('password');
  const selectedRole = watch('role_id');

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  useEffect(() => {
    if (roles.length > 0) {
      const selectedRole = roles.find((role) => role.code === 'customer');
      if (selectedRole) {
        setValue('role_id', selectedRole.id);
      }
    }
  }, [roles, setValue]);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      delete data.retypepassword;
      const response = await axios.post(
        'https://workintech-fe-ecommerce.onrender.com/signup',
        data,
      );
      if (response.status === 201) {
        toast.warning(response.data.message);
        navigate(-1);
      }
    } catch (error) {
      const message = error.response.data.error;
      console.error(error);
      toast.error(message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="font-montserrat my-10 flex w-max flex-col items-center gap-10 text-center">
        <h1 className="text-text-color text-4xl">Sign up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex flex-col items-center">
            <input
              type="text"
              {...register('name', {
                required: 'Names is required!',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters!',
                },
              })}
              placeholder="Name"
              className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required!',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address!',
                },
              })}
              className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create Password"
                {...register('password', {
                  required: 'Password is required!',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      'Password needs to be min 8 character including numbers, lower case, upper case and special chars',
                  },
                })}
                className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 pr-7 outline-none"
              />
              <button
                onClick={togglePassword}
                className="absolute top-1/2 right-2 -translate-y-1/2"
              >
                {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Retype Password"
              {...register('retypepassword', {
                required: 'Please retype password!',
                validate: (value) =>
                  value === password || 'Passwords do not match!',
              })}
              className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 pr-7 outline-none"
            />
            {errors.retypepassword && (
              <span className="text-sm text-red-500">
                {errors.retypepassword.message}
              </span>
            )}
          </div>
          <div>
            <select
              {...register('role_id')}
              className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2"
            >
              {roles.map((role) => {
                return (
                  <option
                    key={role.id}
                    value={role.id}
                    className="font-montserrat text-sm"
                  >
                    {role.name}
                  </option>
                );
              })}
            </select>
          </div>
          {selectedRole === '2' && (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Store Name"
                  {...register('store.name', {
                    required: 'Store Name is required!',
                    minLength: {
                      value: 3,
                      message: 'Store Name must be at least 3 charachters!',
                    },
                  })}
                  className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
                />
                {errors.store?.name && (
                  <span className="text-sm text-red-500">
                    {errors.store.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Store Phone"
                  {...register('store.phone', {
                    required: 'Store Phone is required!',
                    pattern: {
                      value: /^(?:\+90|0)(5\d{9})$/,
                      message:
                        'The phone number must be a valid number in Türkiye',
                    },
                  })}
                  className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
                />
                {errors.store?.phone && (
                  <span className="text-sm text-red-500">
                    {errors.store.phone.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Store Tax ID"
                  {...register('store.tax_no', {
                    required: 'Tax ID is required!',
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: 'Tax ID must match TXXXXVXXXXXX format',
                    },
                  })}
                  className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
                />
                {errors.store?.tax_no && (
                  <span className="text-sm text-red-500">
                    {errors.store.tax_no.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Store Bank Account"
                  {...register('store.bank_account', {
                    required: 'Bank account is required!',
                    pattern: {
                      value: /^TR\d{2}\d{18,22}$/,
                      message: 'Bank Account must be a valid Turkish IBAN',
                    },
                  })}
                  className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
                />
                {errors.store?.bank_account && (
                  <span className="text-sm text-red-500">
                    {errors.store.bank_account.message}
                  </span>
                )}
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-color btn btn-lg w-60 text-white"
          >
            {isSubmitting ? <BeatLoader color="#ffffff" /> : 'Sign up'}
          </button>
          <h6 className="text-second-text-color text-sm">
            Already have an account?
            <Link className="text-primary-color">Log in</Link>
          </h6>
        </form>
      </div>
    </div>
  );
}
