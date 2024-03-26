import Image from 'next/image'
import logo from "../../public/logo (4).svg"
import hamburger from "../../public/hamburger.svg"
import background from "../../public/background.svg"

export default function Home() {
  return (
    <div className="main-wrapper">
      <header className='container'>
        <Image className='bg-image' src={background} alt='' />
        <Image src={logo} alt='' />
        <Image src={hamburger} alt='' />
      </header>
      <div className="content-wrapper container">
        <h1>The easiest way to manage team projects & tasks</h1>
        <p>Take a tour of work management platform to see how you can do more of your best work.</p>
        <button className='button'>KNOW MORE</button>
      </div>
    </div>
  );
}
