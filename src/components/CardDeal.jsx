import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const FeedbackCard = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Trouvez la meilleure offre
        <br className="sm:block hidden" /> en quelques étapes.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Avec notre large selection de cartes, vous trouverez la carte qui
        repondra le mieux à vos besoins.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="Services de cartes" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default FeedbackCard;
