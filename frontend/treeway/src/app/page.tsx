import FirstBox from "./components/FirstBox";
import ImgBox from "./components/ImgBox";
import Progress from "./components/Progress";
import SecondBox from "./components/SecondBox";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Progress />
      <div className={styles.home}>
        <ImgBox />
        <FirstBox />
        <SecondBox />
      </div>
    </>
  );
}
