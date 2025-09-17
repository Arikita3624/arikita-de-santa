import React, { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  vy: number;
  a: number;
  tw: number;
};
type Comet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  len: number;
};

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let stars: Star[] = [];
    // eslint-disable-next-line prefer-const
    let comets: Comet[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const initStars = (count = 220) => {
      stars = Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.8 + 0.2,
        vy: Math.random() * 0.3 + 0.15,
        a: Math.random() * 0.6 + 0.4,
        tw: Math.random() * 0.02 + 0.005,
      }));
    };

    const spawnComet = () => {
      if (Math.random() < 0.006) {
        const angle = (20 + Math.random() * 20) * (Math.PI / 180);
        const speed = 6 + Math.random() * 5;
        comets.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight * 0.35),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          len: 60 + Math.random() * 80,
        });
      }
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // nền gradient
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#060913");
      g.addColorStop(1, "#0a0e1a");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // sao
      stars.forEach((s) => {
        s.y += s.vy;
        if (s.y > h) s.y = 0;
        s.a += s.tw * (Math.random() > 0.5 ? 1 : -1);
        if (s.a < 0.2) s.a = 0.2;
        if (s.a > 1) s.a = 1;

        ctx.globalAlpha = s.a;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // sao băng
      spawnComet();
      comets.forEach((c, i) => {
        c.x += c.vx;
        c.y += c.vy;
        c.life -= 0.01;

        const grad = ctx.createLinearGradient(
          c.x,
          c.y,
          c.x - c.len,
          c.y - c.len
        );
        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.len, c.y - c.len);
        ctx.stroke();

        if (c.life <= 0 || c.x > w + 100 || c.y > h + 100) comets.splice(i, 1);
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default StarField;
