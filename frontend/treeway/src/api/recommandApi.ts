'use client';
export const recommandRegion = async (
  business_time: number,
  region: number,
  cost: number
) => {
  const response = await fetch(`https://j11b107.p.ssafy.io/api/rating/region`, {
    method: 'POST',
    body: JSON.stringify({
      business_time: business_time,
      region: region,
      cost: cost,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('지역추천 결과를 가져오는데 실패했다.');
  }

  const result = await response.json();

  console.log(result);
  return result;
};
