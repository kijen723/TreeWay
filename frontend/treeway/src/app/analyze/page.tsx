import SideList from '@/app/common/Side/SideList';
import SmallSortList from '../main/components/SmallSortList';

export default function Analyze() {
  return (
    <div>
      <SideList items={<SmallSortList />} />
    </div>
  );
}
