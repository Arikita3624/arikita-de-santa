import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  speed = 90,
  backSpeed = 50,
  hold = 1000
) {
  const [index, setIndex] = useState(0); // từ hiện tại
  const [sub, setSub] = useState(0); // số ký tự đang hiển thị
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index % words.length];
    let t = 0;

    if (!deleting && sub < current.length) {
      t = window.setTimeout(() => setSub(sub + 1), speed);
    } else if (!deleting && sub === current.length) {
      t = window.setTimeout(() => setDeleting(true), hold);
    } else if (deleting && sub > 0) {
      t = window.setTimeout(() => setSub(sub - 1), backSpeed);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    setText(current.slice(0, sub));
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, speed, backSpeed, hold]);

  return text;
}
