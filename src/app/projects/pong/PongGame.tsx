import { useEffect, useRef } from "react";

const PADDLE_WIDTH = 15;
const PADDLE_HEIGHT = 90;
const PADDLE_MARGIN = 20;
const BALL_RADIUS = 10;
const PADDLE_COLOR = "#fff";
const BALL_COLOR = "#0ff";
const AI_COLOR = "#f00";
const NET_COLOR = "#888";
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export default function PongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const leftPaddle = useRef({
    x: PADDLE_MARGIN,
    y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color: PADDLE_COLOR,
  });
  const rightPaddle = useRef({
    x: CANVAS_WIDTH - PADDLE_MARGIN - PADDLE_WIDTH,
    y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color: AI_COLOR,
  });
  const ball = useRef({
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2,
    vx: 6 * (Math.random() > 0.5 ? 1 : -1),
    vy: 3 * (Math.random() > 0.5 ? 1 : -1),
    radius: BALL_RADIUS,
    color: BALL_COLOR,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    function resetBall() {
      ball.current.x = CANVAS_WIDTH / 2;
      ball.current.y = CANVAS_HEIGHT / 2;
      ball.current.vx = 6 * (Math.random() > 0.5 ? 1 : -1);
      ball.current.vy = 3 * (Math.random() > 0.5 ? 1 : -1);
    }

    function moveAIPaddle() {
      const center = rightPaddle.current.y + rightPaddle.current.height / 2;
      if (ball.current.y < center - 10) {
        rightPaddle.current.y -= 4;
      } else if (ball.current.y > center + 10) {
        rightPaddle.current.y += 4;
      }
      rightPaddle.current.y = clamp(
        rightPaddle.current.y,
        0,
        CANVAS_HEIGHT - rightPaddle.current.height
      );
    }

    function collide(ball: { x: number; y: number; vx?: number; vy?: number; radius: number; color?: string; }, paddle: { x: number; y: number; width: number; height: number; color?: string; }) {
      return (
        ball.x + ball.radius > paddle.x &&
        ball.x - ball.radius < paddle.x + paddle.width &&
        ball.y + ball.radius > paddle.y &&
        ball.y - ball.radius < paddle.y + paddle.height
      );
    }

    function drawNet() {
      if (!ctx) return;
      const segmentLen = 20,
        gap = 15;
      for (let y = 0; y < CANVAS_HEIGHT; y += segmentLen + gap) {
        ctx.fillStyle = NET_COLOR;
        ctx.fillRect(CANVAS_WIDTH / 2 - 2, y, 4, segmentLen);
      }
    }

    function drawPaddle(paddle: { x: number; y: number; width: number; height: number; color: string; }) {
      if (!ctx) return;
      ctx.fillStyle = paddle.color;
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    function drawBall(b: { x: number; y: number; vx?: number; vy?: number; radius: number; color: string; }) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
      ctx.closePath();
    }

    function update() {
      // Move ball
      ball.current.x += ball.current.vx;
      ball.current.y += ball.current.vy;

      // Wall collision (top/bottom)
      if (
        ball.current.y - ball.current.radius <= 0 ||
        ball.current.y + ball.current.radius >= CANVAS_HEIGHT
      ) {
        ball.current.vy *= -1;
      }

      // Paddle collision
      if (collide(ball.current, leftPaddle.current)) {
        ball.current.x = leftPaddle.current.x + leftPaddle.current.width + ball.current.radius;
        ball.current.vx *= -1;
        const impact =
          (ball.current.y - (leftPaddle.current.y + leftPaddle.current.height / 2)) /
          (leftPaddle.current.height / 2);
        ball.current.vy += impact * 3;
      }
      if (collide(ball.current, rightPaddle.current)) {
        ball.current.x = rightPaddle.current.x - ball.current.radius;
        ball.current.vx *= -1;
        const impact =
          (ball.current.y - (rightPaddle.current.y + rightPaddle.current.height / 2)) /
          (rightPaddle.current.height / 2);
        ball.current.vy += impact * 3;
      }

      // Score check: if ball goes out of bounds
      if (
        ball.current.x - ball.current.radius <= 0 ||
        ball.current.x + ball.current.radius >= CANVAS_WIDTH
      ) {
        resetBall();
      }

      // AI movement
      moveAIPaddle();
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawNet();
      drawPaddle(leftPaddle.current);
      drawPaddle(rightPaddle.current);
      drawBall(ball.current);
    }

    function gameLoop() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(gameLoop);
    }

    gameLoop();

    // Mouse movement for player paddle
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas?.getBoundingClientRect();
      const mouseY = rect ? e.clientY - rect.top : e.clientY;
      leftPaddle.current.y = mouseY - leftPaddle.current.height / 2;
      leftPaddle.current.y = clamp(
        leftPaddle.current.y,
        0,
        CANVAS_HEIGHT - leftPaddle.current.height
      );
    }
    canvas?.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        id="pongCanvas"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ background: "#222", display: "block", margin: "0 auto" }}
      />
    </div>
  );
}
