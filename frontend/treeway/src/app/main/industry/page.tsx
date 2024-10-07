import SideList from '@/app/common/Side/SideList';
import SmallSortList from '../components/SmallSortList';
// import AnalyzeBox from '../components/AnalyzeBox';
export default function IndustryDetail() {
  return (
    <>
      <SideList items={<SmallSortList />} />
      {/* <AnalyzeBox /> */}
    </>
  );
}
