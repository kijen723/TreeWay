import styles from '../page.module.scss';

interface PostProps {
    post: {
      title: string;
      author: string;
      date: string;
      viewCnt: number;
      imgSrc: string;
    };
  }
  
  export default function Post({ post }: PostProps) {
    return (
      <div className={styles.post}>
        <div className={styles.postSummary}>
            <h2>{post.title}</h2>
            <div className={styles.postInfo}>
                <p>Author: {post.author}</p>
                <p>Date: {post.date}</p>
                <p>Views: {post.viewCnt}</p>
            </div>
        </div>
        <img className={styles.postImg} src={post.imgSrc} alt={post.title} />
      </div>
    );
  }