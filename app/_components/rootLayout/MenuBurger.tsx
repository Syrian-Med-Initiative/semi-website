import styles from "./MenuBurger.module.css";
function MenuBurger({ isActive,onMenuToggle }: { isActive: boolean ,onMenuToggle: () => void}) {
  return (
    <div className={`${styles.burger} ${isActive? styles.active: ""}`} onClick={onMenuToggle}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
}

export default MenuBurger;
