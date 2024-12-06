import styles from './Blog2.module.css';
import coffeevideo from '../public/coffeevideo.mp4'
import photo0 from '../public/blog2image0.jpg'
import photo1 from '../public/blog2image1.jpg';
import photo2 from '../public/blog2image2.jpg';
import photo3 from '../public/blog2image3.jpg';
import photo4 from '../public/blog2image4.jpg';

export const Blog2 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Behind the Scenes: Making of ‘Wake Up Your Best’ for Bellarom Instant Coffee</h1>
            <video className={styles.video} src={coffeevideo} controls></video>
            <div className={styles.section}>
                <p className={styles.text}>
                    While heading in to direct and write the product demo video of Bellarom Instant Coffee, my aim was to
                    touch the hearts of students and night owls by making them know that coffee is not just a beverage
                    but a person’s best friend during untold stresses and interminable harvests. As such, I gained
                    first-hand experience of the pressure and time emphasis required to come up with a decent
                    advertisement for a product or company at a professional level.
                </p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Concept Development</h2>
                <p className={styles.text}>
                    A significant and powerful source of inspiration for the creation of "Wake Up Your Best" was the
                    advertising Nescafé Gold – Make Your World. This ad had the right proportions of emotions and
                    motivation, which are the core points in my understanding about the aims of Bellarom in motivating
                    people to work harder.
                </p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>My Contribution</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Crafting the Script</li>
                    <li className={styles.listItem}>Guiding the Visual Style</li>
                    <li className={styles.listItem}>Editing the Final Cut</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Production Process and Challenges</h2>
                <p className={styles.text}>
                    <strong>Pre-Production:</strong> We started with a detailed script and storyboard. It was important
                    to align the visual flow with the brand’s identity and ensure all the essential elements were
                    included—like the graphical overlay and brand logo at the end.
                </p>
                <p className={styles.text}>
                    <strong>Filming Challenges:</strong> Capturing the late-night atmosphere was tricky. We used warm
                    desk lamp lighting to create a cozy yet focused environment, balancing it with the surrounding
                    dimness. Maintaining the steam rising from the coffee mug for the close-up shots was surprisingly
                    harder than expected!
                </p>
                <p className={styles.text}>
                    <strong>Post-Production:</strong> Editing was where everything truly came together. The 124-second
                    film required meticulous trimming to balance pacing and emotional impact.
                </p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Final Reflections</h2>
                <p className={styles.text}>
                    This project pushed me to think creatively under constraints while honing my technical and
                    storytelling skills. Bellarom Instant Coffee became more than just a product; it was a symbol of
                    resilience, creativity, and drive.
                </p>
            </div>
            <img src={photo0} alt="Behind the Scenes 1" className={styles.image} />
            <img src={photo1} alt="Behind the Scenes 1" className={styles.image} />
            <img src={photo2} alt="Behind the Scenes 2" className={styles.image} />
            <img src={photo3} alt="Behind the Scenes 2" className={styles.image} />
            <img src={photo4} alt="Behind the Scenes 2" className={styles.image} />
        </div>
    );
};
