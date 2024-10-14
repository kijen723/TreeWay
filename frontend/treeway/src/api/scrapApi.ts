export const scrapCheck = async (memberId: number, salesItemId: number) => {
  const response = await fetch(`https://j11b107.p.ssafy.io/api/sales/scrap/check`, {
    method: "POST",
    body: JSON.stringify({
      memberId,
      salesItemId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("스크랩 화인 실패");
  }

  const result = await response.json();
  return result;
};

export const scrap = async (memberId: number, salesItemId: number) => {
  const response = await fetch(`https://j11b107.p.ssafy.io/api/sales/scrap`, {
    method: "POST",
    body: JSON.stringify({
      salesItemId,
      memberId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("스크랩 실패");
  }

  const result = await response.json();
  return result;
};

export const scrapCancel = async (memberId: number, salesItemId: number) => {
  const response = await fetch(`https://j11b107.p.ssafy.io/api/sales/scrap`, {
    method: "DELETE",
    body: JSON.stringify({
      salesItemId,
      memberId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("스크랩 취소 실패");
  }

  const result = await response.json();
  return result;
};
