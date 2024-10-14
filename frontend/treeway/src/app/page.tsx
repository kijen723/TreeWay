import Final from "./components/Final";
import FirstBox from "./components/FirstBox";
import Footer from "./components/Footer";
import ImgBox from "./components/ImgBox";
import Intro from "./components/Intro";
import Progress from "./components/Progress";
import SecondBox from "./components/SecondBox";
import Why from "./components/Why";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Progress />
      <div className={styles.home}>
        <ImgBox />
        <Intro />
        <Why />
        <Final />
        <Footer />
        {/* <FirstBox /> */}
        {/* <SecondBox /> */}
      </div>
    </>
  );
}
