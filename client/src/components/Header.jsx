import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-primary shadow-md'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='text-accent font-bold text-sm sm:text-xl flex flex-wrap'>
            <span >Kadam-</span>
            <span >Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 hover:cursor-zoom-in'
            
          />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:text-accent'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-white hover:text-accent'>
              About
            </li>
          </Link>
          <Link to='/signin'>
            <li className=' text-white hover:text-accent'> Sign in</li>
          </Link>

        </ul>
      </div>
    </header>
  );
}