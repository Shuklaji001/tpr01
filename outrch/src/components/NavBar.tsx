import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import userLogo from "../../public/userLogo.png";
import dropIcon from "../../public/dropIcon.png";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Image className={styles.Logo} src={Logo} alt="logo-image"></Image>

      <div className={styles.userDetails}>
        <Image
          className={styles.userLogo}
          src={userLogo}
          alt="user-logo-image"
        ></Image>
        <div>
          <p className={styles.userName}>obhishek</p>
          <p className={styles.userEmail}>sachiv@phulera.com</p>
        </div>
        <Image
          className={styles.dropIcon}
          src={dropIcon}
          alt="drop-image"
        ></Image>
      </div>
    </div>
  );
};

export default NavBar;
