import Image from 'next/image'
import titleImage from 'public/1000_F_397493111.jpeg'

const HeaderImg = () => {
  return (
    <>
      <Image alt="titleImage" src={titleImage} layout="responsive" width={500} height={396} />
    </>
  );
};

export default HeaderImg;