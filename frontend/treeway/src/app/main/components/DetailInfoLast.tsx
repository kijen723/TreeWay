import styles from "./DetailInfoBox.module.scss";

export default function DetailInfoLast() {
  return (
    <div className={styles.Last}>
      <div className={styles.shopDescriptTitle}>
        <span>매물 설명</span>
      </div>
      <div className={styles.description}>
      이 글을 쓰게 된 이유는 간단합니다. vscode에서 빌드를 하기 위해서는 tasks.json 작성해야 하는데, 복붙해서 쓰기는 싫고 검색해도 정보가 잘 안나와서 vscode를 안쓰고 계셨던 저같은 분들을 위해서입니다. 다만 저도 이제 vscode를 사용해보기 시작하는 단계이므로 부족하거나 이상한 내용이 있을 수 있습니다. 코멘트 달아주시면 찾아보고 추가 및 수정 하겠습니다.
      </div>
    </div>
  );
}
