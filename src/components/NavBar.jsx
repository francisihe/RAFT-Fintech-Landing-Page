import logo from '../assets/logos/Raft-logo-small.svg'
import GetStartedSmall from './buttons/GetStartedSmall'

const NavBar = () => {
  return (
    <div className='flex m-auto justify-between content-center px-4 py-3 max-w-screen-xl border-b border-custom-border-black'>
      <div className='flex h-auto w-auto my-auto'>
        <img src={logo} alt='Raft Logo' />
        <span className='mx-2 text-black'>Logoo</span> {/* Blank, dummy text */}
      </div>

      <div className='text-white text-xs space-x-12 m-auto invisible md:visible lg:visible hover:cursor-pointer'>
        <span>Solutions</span>
        <span>Learn</span>
        <span>About</span>
      </div>

      <div className='text-white text-sm my-auto'>
        <a className='mx-2'>Login</a>
        <GetStartedSmall />
      </div>
    </div>
  )
}

export default NavBar