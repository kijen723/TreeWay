import SideList from '@/app/common/Side/SideList';
import SmallSortList from '../components/SmallSortList';

export default function RegionDetail() {
  return (
    <>
      <SideList items={<SmallSortList />} />
    </>
  );
}
