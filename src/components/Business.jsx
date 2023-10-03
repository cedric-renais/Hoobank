import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Vous vous occupez des affaires, <br className="sm:block hidden" />
        nous nous occupons de l'argent.
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Avec la bonne carte de crédit, vous pouvez améliorer votre vie
        financière en développant votre crédit, en gagnant des récompenses et en
        économisant de l'argent. Mais il existe des centaines de cartes de
        crédit sur le marché.
      </p>
      <Button styles="mt-10" />
    </div>
  </section>
);
export default Business;
