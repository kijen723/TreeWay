import styles from "../page.module.scss";
import Post from "./Post";

export default function PostList() {
    const postList = [
        {
            title: "title1",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
        },
        {
            title: "title2",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
        },
        {
            title: "title3",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
        },
        {
            title: "title4",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
        },
    ]

    return (
        <div className={styles.postList}>
            {postList.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
        </div>
    );
}