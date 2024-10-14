export const chatGptApi = async (prompt: string) => {
  try {
    const response = await fetch('@/api/chatGptApi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    console.log('Text Analysis:', data); // API 응답 데이터 확인
  } catch (error) {
    console.error('Error occurred during API call:', error);
  }
};
