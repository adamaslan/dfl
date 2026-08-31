"use client";
import { useState } from "react";
import styles from "../styles/Awards.module.css";

/**
 * Bottle image with a graceful fallback.
 *
 * Many source image URLs point at hosts that hotlink-block or no longer serve
 * the asset; without this a card renders a broken-image icon.
 */
function BottleImage({ src, alt }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return <div className={styles.bottleFallback}>🥃</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={styles.bottle}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function WinnerCard({ category, winner, image, runnersUp = [], note, highlightNote }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageFrame}>
        <BottleImage src={image} alt={winner} />
      </div>
      <h3 className={styles.category}>{category}</h3>
      <p className={styles.winner}>🏆 {winner}</p>
      {runnersUp.length > 0 && (
        <div className={styles.runnersUp}>
          <span className={styles.runnersUpLabel}>Also tasted: </span>
          <span>{runnersUp.join(" • ")}</span>
        </div>
      )}
      {note && (
        <p className={highlightNote ? styles.noteHighlight : styles.note}>
          {highlightNote ? "✨" : "📌"} {note}
        </p>
      )}
    </div>
  );
}

export function AwardSection({ title, data, highlightNotes = false }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {data.map((item) => (
          <WinnerCard key={item.category} {...item} highlightNote={highlightNotes} />
        ))}
      </div>
    </section>
  );
}
