import SidebarItem from "./sidebarItem";
import { AddButton } from "../Buttons";
import styles from "./Sidebar.module.scss";
import svg from "../../../assets/btnIcons/sprite.svg";

function Sidebar({ item = "init item", children = `No ${item}s added` }) {
  const title = `Show ${item}s`;

  return (
    <div className={styles.sidebar__wrapper}>
      <a href="" className={styles.sidebar__goBackLink}>
        <svg className={styles.sidebar__goBackArrow}>
          <use href={`${svg}#arrowback`} />
        </svg>
        {title}
      </a>
      <ul
        className={`${styles.sidebar__list}  ${
          item === "project" ? styles.colorizing : ""
        }`}
      >
        {children}
      </ul>
      <div className={styles.sidebar__footer}>
        <AddButton className={styles.sidebar__AddBtn} variant="item" />
        <p className={styles.sidebar__subscription}>Create a {item}</p>
      </div>
    </div>
  );
}

export default Sidebar;
