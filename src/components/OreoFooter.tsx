import styles from "@/components/oreofooter.module.css";

export default function OreoFooter() {
  return (
    <div className={styles.group}>
      <div className={styles.rectangle}>
      <div className={styles["overlap-group-wrapper"]}>
        <p className={styles["text-wrapper-2"]}>OREO.CO</p>

        <p className={styles["element-all-rights"]}>
          OREO.co © 2025, All Rights Reserved
        </p>
      </div>
      </div>
    </div>
  );
}
