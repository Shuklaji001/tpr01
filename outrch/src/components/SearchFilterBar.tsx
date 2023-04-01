import styles from "@/styles/SearchFilterBar.module.css";
import Image from "next/image";
import cancelIcon from "../../public/cancelIcon.png";
import cancelIcon2 from "../../public/cancelIcon2.png";
import searchIcon from "../../public/searchIcon.png";

const SearchFilterBar = () => {
  return (
    <div className={styles.SearchFilterBar}>
      <h1>All Outreach Circles</h1>
      <p>You are an admin for 2 OutreachCircles</p>
      <div className={styles.SearchFilterBox}>
        <input type="text" className={styles.searchBox} placeholder="Search" />
      </div>
      <div className={styles.searchOptions}>
        <div className={styles.optionHead}>
          <Image
            className={styles.searchIcon}
            src={searchIcon}
            alt="search-icon-image"
          ></Image>
          <p>Search by the following</p>
          <Image
            className={styles.cancelIcon2}
            src={cancelIcon2}
            alt="cancel-image"
          ></Image>
        </div>

        <div className={styles.optionBottom}>
          <div className={styles.searchInput}>
            <label>OutreachCircle Name</label> <br />
            <input type="text" />
            <Image
              className={styles.cancelIcon}
              src={cancelIcon}
              alt="cancel-image"
            ></Image>
          </div>

          <div className={styles.searchInput}>
            <label>Admin First Name</label>
            <br />
            <input type="text" />
            <Image
              className={styles.cancelIcon}
              src={cancelIcon}
              alt="cancel-image"
            ></Image>
          </div>

          <div className={styles.searchInput}>
            <label>Admin Last Name</label>
            <br />
            <input type="text" />
            <Image
              className={styles.cancelIcon}
              src={cancelIcon}
              alt="cancel-image"
            ></Image>
          </div>

          <button className={styles.applyButton}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
