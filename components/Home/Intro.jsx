import Image from 'next/image';
import { InitialSlide } from '@components/Animation';
function Intro({
  mainTitle = '',
  mainDesc = '',
  buyTitle = '',
  rentTitle = '',
  buyDesc = '',
  rentDesc = ''
}) {
  return (
    <div className='home__intro divider-lg'>
      <div className="home__intro__left">
        <Image
          src={'/assets/images/home/home_left.png'}
          alt="Buildings"
          width={310}
          height={700}
        />
      </div>
      <div className="home__intro__middle">
        <InitialSlide>
          <div className="home__intro__title__wrap">
            <div className="sub-title intro__title">{mainTitle}</div>
            <div className="intro__sub__title">{mainDesc}</div>
          </div>
          <div className="home__intro__feat__wrap">
            <div className="intro__feat">
              <div className="intro__feat__title">{buyTitle}</div>
              <div className="intro__feat__desc normal-text">{buyDesc}</div>
            </div>
            <div className="intro__feat">
              <div className="intro__feat__title">{rentTitle}</div>
              <div className="intro__feat__desc normal-text">{rentDesc}</div>
            </div>
          </div>
        </InitialSlide>
      </div>
      <div className="home__intro__right">
        <Image
          src={'/assets/images/home/home_right.png'}
          alt="Buildings"
          width={360}
          height={670}
        />
      </div>
    </div>
  )
}

export default Intro;