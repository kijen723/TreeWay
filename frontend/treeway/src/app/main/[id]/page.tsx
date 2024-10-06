import SideDetail from '@/app/common/Side/SideDetail';
import SideDetailItems from '../components/SideDetailItems';
import DetailBox from '../components/DetailBox';

export type propsType = {
  params: { id: string };
};

export default function ItemDetail({ params }: propsType) {
  return (
    <>
      <DetailBox params={params}></DetailBox>
    </>
  );
}
