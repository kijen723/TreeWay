// base64 -> File 변환 함수
export const b64toFile = (b64Data: string, filename: string) => {
    const bstr = atob(b64Data);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n > 0) {
        n -= 1;
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: 'image/png' });
};
