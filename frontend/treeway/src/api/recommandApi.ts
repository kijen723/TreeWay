export const recommandOverall = async (
  memberId: number,
  businessTime: number,
  region: number,
  cost: number,
  industryDetailId: number
) => {
  const response = await fetch(`https://j11b107.p.ssafy.io/api/rating`, {
    method: 'POST',
    body: JSON.stringify({
      memberId: memberId,
      businessTime: businessTime,
      region: region,
      cost: cost,
      industryDetailId: industryDetailId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('종합추천 결과를 가져오는데 실패했다.');
  }

  const result = await response.json();

  console.log(result);
  return result;
};

export const recommandRegion = async (
  business_time: number,
  industryDetail_id: number,
  cost: number
) => {
  const response = await fetch(`https://j11b107.p.ssafy.io/api/rating/region`, {
    method: 'POST',
    body: JSON.stringify({
      businessTime: business_time,
      industryItemId: industryDetail_id,
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

  // console.log(result);
  return result;
};

export const recommandIndustry = async (
  business_time: number,
  region: number,
  cost: number
) => {
  const response = await fetch(
    `https://j11b107.p.ssafy.io/api/rating/industry`,
    {
      method: 'POST',
      body: JSON.stringify({
        businessTime: business_time,
        region: region,
        cost: cost,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('업종추천 결과를 가져오는데 실패했다.');
  }

  const result = await response.json();

  return result;
};
