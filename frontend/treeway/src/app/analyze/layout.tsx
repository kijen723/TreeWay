import SideDetail from '../common/Side/SideDetail';
import styles from './layout.module.scss';
import AnalyzeList from './components/AnalyzeList';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.background}>
      <SideDetail items={<AnalyzeList />}></SideDetail>
      {children}
    </div>
  );
}
