import styles from './DetailInfoBox.module.scss';
import DetailInfoTop from './DetailInfoTop';
import DetailInfoMid from './DetailInfoMid';
import DetailInfoBottom from './DetailInfoBottom';
import DetailInfoLast from './DetailInfoLast';

type propsType = {
  params: { id: string };
};

export default async function DetailInfoBox({ params }: propsType) {
  const res = await fetch(`https://j11b107.p.ssafy.io/api/sales/${params.id}`)
  const data = await res.json();
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <DetailInfoTop data={data} />
        <DetailInfoMid data={data} />
        <DetailInfoBottom data={data} />
        <DetailInfoLast data={data} />
      </div>
    </>
  );
}
