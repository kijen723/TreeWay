export const analyzeTotalResullt = async (memberId: number) => {
  const response = await fetch(
    `https://j11b107.p.ssafy.io/api/member/analyze/${memberId}`,
    {
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error('분석이력 결과를 가져오는데 실패했다.');
  }

  const result = await response.json();

  console.log(result);
  return result || {};
};

export const analyzeDetailResullt = async (
  regionId: number,
  industryDetailId: number
) => {
  const response = await fetch(
    `https://j11b107.p.ssafy.io/api/analysis?regionId=${regionId}&industryDetailId=${industryDetailId}`,
    {
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error('상세 분석이력 결과를 가져오는데 실패했다.');
  }

  const result = await response.json();

  console.log(result);
  return result || {};
};
