import styles from './Gallery.module.css'; // CSS Module for styling
import coffeevideo from '../public/coffeevideo.mp4';
import photo1 from '../public/middlesectionphoto.jpeg';
import photo2 from '../public/aestheticphoto.jfif';
import photo3 from '../public/passionphoto.jpeg';

const Gallery = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <img src={photo1} alt="Middle Section" className={styles.image} />
        </div>
        <div className={styles.gridItem}>
          <img src={photo2} alt="Aesthetic" className={styles.image} />
        </div>
        <div className={styles.gridItem}>
          <img src={photo3} alt="Passion" className={styles.image} />
        </div>
        <div className={styles.gridItem}>
          <video src={coffeevideo} controls className={styles.video}></video>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
