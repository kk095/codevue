import styles from "../styles/testimonialpage.module.css";
import { Testimonials } from "../components";
import useResize from "../hooks/resize";
function TestimonialPage(props) {
  const [width, height] = useResize();
  return (
    <div className={styles.testimonial} ref={props.childref}>
      <Testimonials width={width} height={height} />
    </div>
  );
}

export default TestimonialPage;
