import React from "react";
import styles from "./Post.module.css";

function relativeTime(amt, s) {
  return `${amt} ${amt === 1 ? s : s + "s"} ago`;
}

function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;
  if (elapsed < msPerMinute) {
    return relativeTime(Math.round(elapsed / 1000), "second");
  } else if (elapsed < msPerHour) {
    return relativeTime(Math.round(elapsed / msPerMinute), "minute");
  } else if (elapsed < msPerDay) {
    return relativeTime(Math.round(elapsed / msPerHour), "hour");
  } else if (elapsed < msPerMonth) {
    return relativeTime(Math.round(elapsed / msPerDay), "day");
  } else if (elapsed < msPerYear) {
    return relativeTime(Math.round(elapsed / msPerMonth), "month");
  } else {
    return relativeTime(Math.round(elapsed / msPerYear), "year");
  }
}

function Post({ post, n }) {
  const {
    title,
    url,
    points,
    author,
    num_comments,
    objectID,
    created_at
  } = post;
  const slug = document.createElement("a");
  slug.href = url;
  const time = timeDifference(new Date(), new Date(created_at));

  return (
    <div className={styles.post}>
      <span className={styles.number}>{n + 1}. </span>
      <span className={styles.content}>
        <a
          className={styles.title}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>{" "}
        <a
          className={styles.url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {slug.hostname.substring(0, 4) === "www."
            ? `(${slug.hostname.substring(4)})`
            : `(${slug.hostname})`}
        </a>
        <span className={styles.metadata}>
          {points} points by{" "}
          <a
            href={`https://news.ycombinator.com/user?id=${author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author}
          </a>{" "}
          {time} |{" "}
          <a
            href={`https://news.ycombinator.com/item?id=${objectID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {num_comments + " comments"}
          </a>
        </span>
      </span>
    </div>
  );
}

export default Post;
