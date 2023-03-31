import googleImage from "../../public/SignInWithGoogle.png";
import Image from "next/image";
import styles from "@/styles/LoginForm.module.css";
import cancelIcon from "../../public/cancelIcon.png";
const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm}>
        <p className={styles.signUpLink}>
          Don't have a profile ? <a href="#">Sign up</a>
        </p>
        <h1>Log In</h1>
        <button className={styles.imageButton}>
          <Image
            className={styles.googleImage}
            src={googleImage}
            alt="google-signin-image"
          ></Image>
        </button>
        <br />
        <div className={styles.circleText}>
          <p>Or</p>
        </div>
        <p>Login with your email address...</p>
        <br />
        <label>EMAIL ADDRESS</label>
        <div className={styles.inputWrapper}>
          <input
            className={styles.formInput}
            type="email"
            placeholder="Enter your email address"
          />
          <Image
            className={styles.cancelIcon}
            src={cancelIcon}
            alt="cancel-icon-image"
          ></Image>
        </div>
        <p className={styles.validEmail}> Hello</p>
        <br />
        <label>PASSWORD</label>
        <div className={styles.inputWrapper}>
          <input
            className={styles.formInput}
            type="password"
            placeholder="Enter password"
          />
          <Image
            className={styles.cancelIcon}
            src={cancelIcon}
            alt="cancel-icon-image"
          ></Image>
        </div>
        <p className={styles.validPassword}> Hello</p>
        <button className={styles.loginButton}>
          <span>Login with email</span>
        </button>
        <br />
        <a className={styles.cantLogin} href="#">
          Can't Login?
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
