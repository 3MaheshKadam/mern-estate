import {useSelector} from 'react-redux';

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user);
  return (
    <div className= 'rounded-lg shadow-lg mt-20 border-x-green-200 mx-auto p-4 max-w-lg'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Profile
      </h1>
      <form className='flex flex-col gap-4 '>
        <img src={currentUser.avatar} alt="profile" 
                className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 my-7' />
        <input type="text" className='border p-4 rouded-lg  'placeholder='text'id='username'/>
        <input type="email" className='border p-4 rouded-lg  'placeholder='email'id='email'/>
        <input type="password" className='border  p-4 rouded-lg 'placeholder='password'id='password'/>
        <button className='rounded-lg uppercase hover:opacity-95 p-3 text-white bg-primary'>Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-500 cursor-pointer'>Delete account</span>
        <span className='text-red-500 cursor-pointer'>Sign out</span>

      </div>
    </div>
  )
}

export default Profile