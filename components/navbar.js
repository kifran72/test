import dynamic from "next/dynamic";
import { loginGoogle, logout } from "./firebase.js";

const Link = dynamic(() => import("next/link"));

// Styles
import styles from "../styles/Navbar.module.css";

// Material
const Button = dynamic(() => import("@material-ui/core/Button"));

// Components

export default function Navbar(props) {
  const user = props.user;

  return (
    <div className={styles.navbar}>
      {user ? (
        <div className={styles.listeButton}>
          <Link href="/">
            <Button className={styles.button}>Home</Button>
          </Link>
          <Link href="/planning">
            <Button className={styles.button}>Planning</Button>
          </Link>
          <Link href="/notLogged">
            <Button onClick={logout} className={styles.button}>
              Logout
            </Button>
          </Link>
        </div>
      ) : (
        <Button onClick={loginGoogle} className={styles.button}>
          Login with Google
        </Button>
      )}
    </div>
  );
}
