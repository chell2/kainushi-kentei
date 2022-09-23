import Link from 'next/link'

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
    </>
  );
};

export default Header;