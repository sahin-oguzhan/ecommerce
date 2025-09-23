import { useForm } from 'react-hook-form';
import { loginUser } from '../../redux/thunks/clientThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = async (data) => {
    const { email, password, remember } = data;
    const result = await dispatch(loginUser(email, password, remember));

    if (result.success) {
      toast.success('Login successful!');
      navigate(-1, { replace: true });
    } else {
      toast.error(result.message || 'Login failed');
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <form
          className="font-montserrat flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="border-muted-color focus:border-primary-color w-60 rounded-md border px-2 py-2 outline-none"
          />
          <div className="flex gap-2">
            <input
              id="remember"
              type="checkbox"
              {...register('remember')}
              className=""
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button
            type="submit"
            className="btn bg-primary-color btn-lg text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
