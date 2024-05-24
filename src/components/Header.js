import Logo from '../images/pngwing.png';

export function Header() {
  return (
    <div>
      <nav className='navbar'>
        <img src={Logo} alt='' className='navbar_icon'/>
      </nav>
    </div>
  );
}
