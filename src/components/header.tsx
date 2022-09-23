// import Image from 'next/image'
import Link from 'next/link'
// import titleImage from 'public/1000_F_397493111.jpeg'

const Header = () => {
  return (
    <>
      <div className="items-center h-22 px-16 pt-1">
        <h1 className="text-center">
          <Link href="/">
            <a className="text-2xl font-title">
              ゆるっと学ぶ、<br />
              <span className="text-4xl">飼い主検定</span>
            </a>
          </Link>
          </h1>
      </div>
      {/* <Image alt="titleImage" src={titleImage} layout="responsive" width={500} height={396} /> */}
    </>
  );
};

export default Header;