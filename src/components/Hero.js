import hero from "../images/hero.png";

export function Hero() {
  return (
    <div className='hero-div'>
      <img src={hero} alt='' className='hero-img' />
      <h1 className='h1'>Online Experiences</h1>
      <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </div>
  );
}
