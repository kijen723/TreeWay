const apiUrl: string = 'https://openapi.naver.com/v1/datalab/search';

interface KeywordGroup {
  groupName: string;
  keywords: string[];
}

interface RequestBody {
  startDate: string;
  endDate: string;
  timeUnit: string;
  keywordGroups: KeywordGroup[];
  device?: string;
  ages?: string[];
  gender?: string;
}

const requestBody: RequestBody = {
  startDate: "2023-01-01",
  endDate: "2024-04-30",
  timeUnit: "month",
  keywordGroups: [
    {
      groupName: "안성",
      keywords: ["안성 창업", "", "맛집", "유행", ""]
    }
  ],
};

export default async function fetchNaverData() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'X-Naver-Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID as string,
        'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_SECRET as string,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}