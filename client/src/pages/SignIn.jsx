import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import {useDispatch} from 'react-redux';
// import { signInStart ,signInSuccess ,signInFailure  } from '../redux/user/userSlice';

const SignIn = () => {
  // const [formData, setFormData] = useState({});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const disapatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  
  return (
    <div className=" mx-auto max-w-lg my-20  border rounded-xl  bg-gray-100 p-4  shadow-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Sign-in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-accent text-white p-3 rounded-lg uppercase hover:text-secondary">
          Sign-In
        </button>
      </form>
      <div className="flex gap-2 text-sm mt-3">
        <span className="text-gray-500">Have an Account?</span>
        <Link to="/signup" className="text-sm text-blue-500">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
