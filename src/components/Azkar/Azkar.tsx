import styles from "./Azkar.module.css";
const Azkar = () => {
  return (
    <div className={styles.azkar}>
      <h2 className={styles["azkar-title"]}>أذكار الصباح و المساء</h2>
      <div className={styles["azkar-nav"]}>
        <button>أذكار الصباح</button>
        <span> | </span>
        <button>أذكار المساء</button>
      </div>
    </div>
  );
};

export default Azkar;
