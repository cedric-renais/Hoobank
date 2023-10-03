import styles from '../style';
import { discount, robot } from '../assets';

const Hero = () => {
  return (
    <header
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> de réduction pendant{' '}
            <span className="text-white">1 Mois</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            La nouvelle <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Génération</span>{' '}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          de paiement.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Notre équipe d'experts utilise une méthodologie pour identifier les
          cartes de crédit les plus susceptibles de répondre à vos besoins. Nous
          examinons les taux annuels en pourcentage et les frais annuels.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="Une main robotique qui tient des cartes de crédit"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </header>
  );
};

export default Hero;
