import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[70%] h-[50%] rounded-full blue__gradient sm:block hidden" />
    <div
      className="w-full flex justify-between items-center md:flex-row flex-col 
    sm:mb-16 mb-6 relative z-[1]"
    >
      <h2 className={styles.heading2}>
        Ce que nos clients <br className="sm:block hidden" /> disent de nous
      </h2>
    </div>

    <div
      className="flex flex-wrap sm:justify-start justify-center w-full 
    feedback-container relative z-[1] cursor-default"
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
