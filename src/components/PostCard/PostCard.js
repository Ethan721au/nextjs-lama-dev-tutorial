import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/Spag.jpg" alt="" fill className={styles.img} />
        </div>
        <div className={styles.date}>PostDate</div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>PostTitle</h1>
        <p className={styles.desc}>
          six mighty lunch if twenty waste cattle indicate cloud wind how eye
          constantly discuss subject breath thrown former coming have knew nose
          glass numberbFaYbArsfdgf
        </p>
        <Link href="/blog/post" className={styles.link}>
          Read Me
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
