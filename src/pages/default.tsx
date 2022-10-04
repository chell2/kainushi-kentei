import Image from 'next/image'
import titleImage from 'public/card_default.png'

const Default = () => {
  return (
    <Image alt="titleImage" src={titleImage} layout="responsive" width={500} height={396} />
  );
};

export default Default;