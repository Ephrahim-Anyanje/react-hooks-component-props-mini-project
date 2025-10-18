import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: minutes to read logic
  let emoji = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
