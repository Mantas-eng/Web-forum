import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../Forum-List/styles.module.css';
import portraitsImg from '../Assets/800px-marmot-edit1-50x38.jpg';
import portraitsImg1 from '../Assets/Dominik-Steinmann-40x50.jpg';
import portraitsImg2 from '../Assets/hasty-dev.png';
import portraitsImg3 from '../Assets/m5uhNsEh_400x400-150x150.jpg';

// Define the type for a comment
interface Comment {
  user: string;
  timestamp: string;
  text: string;
}

const classNames = `${styles.subforumColumn}`;
const classNamesDesc = `${styles.subforumdescription} ${styles.subforumColumn} ${styles.center}}`;
const classNamesStats = `${styles.subforumstats} ${styles.subforumColumn} ${styles.center}`;
const classNamesStarts = `${styles.subforumstarts} ${styles.subforumColumn} ${styles.center}`;
const ForumList = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    setComments([
      ...comments,
      {
        user: 'Mantas',
        timestamp: new Date().toLocaleString(),
        text: comment,
      },
    ]);
    setComment('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.subforum}>
        <h1>
          <a href="">how do i deploy my react js website in a server</a>
        </h1>
        <div className={styles.subforum_row}>
          <div className={classNames}>
            <Image className={styles.logo_portraits} src={portraitsImg} alt='bGImg' />
          </div>
          <div className={`${styles.subforumdescription} ${styles.subforumColumn} ${styles.center}`}>
            <p>
              I use Azure DevOpsRelease pipeline that creates automatically and deploys a webjob using the Azure app
              Service deploy
            </p>
          </div>
          <div className={`${styles.subforumstats} ${styles.subforumColumn} ${styles.center}`}>
            <span>24 Posts | 15 Topics</span>
          </div>
          <div className={`${styles.subforumstarts} ${styles.subforumColumn} ${styles.center}`}>
            <b>
              <a href=""></a>
            </b> Last Post by <a href="">JustAUser</a> on <small>22 Desc 2021</small>
          </div>
          <div className={styles.subforumColumn}>
            <textarea
              className={styles.textarea}
              value={comment}
              onChange={handleCommentChange}
              placeholder='Type your comment here'
            ></textarea>
            <button className={styles.btncom} onClick={handleAddComment}>
              Add Comment
            </button>
            <div className={styles.comments}>
              {comments.map((comment, index) => (
                <div key={index} className={styles.logcommand}>
                  <p className={styles.user}>{comment.user}</p>
                  <p className={styles.comment_ts}>{comment.timestamp}</p>
                  <div className={styles.comment_content}>{comment.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumList;
