import "./global.css";
import Keyboard from "./Keyboard";
import styles from "../sasha/global.module.css";

function SashasWork() {
  return (
    <div className={styles.App}>
      <div className={styles.corp}>
        <Keyboard />
      </div>
    </div>
  );
}

export default SashasWork;
