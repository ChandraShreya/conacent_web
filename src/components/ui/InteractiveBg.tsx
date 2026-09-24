

// "use client";

// import { useEffect, useRef } from "react";

// export default function InteractiveGradient() {
//   const bgRef = useRef<HTMLDivElement>(null);

//   const target = useRef({
//     x: 50,
//     y: 50,
//   });

//   const position = useRef({
//     x: 50,
//     y: 50,
//   });

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(pointer: fine)");

//     if (!mediaQuery.matches) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       target.current.x = (e.clientX / window.innerWidth) * 100;
//       target.current.y = (e.clientY / window.innerHeight) * 100;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     let frame: number;

//     const update = () => {
//       // Smooth movement
//       position.current.x +=
//         (target.current.x - position.current.x) * 0.06;

//       position.current.y +=
//         (target.current.y - position.current.y) * 0.06;

//       if (bgRef.current) {
//         bgRef.current.style.background = `
//           radial-gradient(
//             700px circle at
//             ${position.current.x}%
//             ${position.current.y}%,
//             rgba(37, 99, 235, 0.18),
//             rgba(59, 130, 246, 0.10) 25%,
//             rgba(147, 197, 253, 0.05) 45%,
//             transparent 70%
//           ),
//           linear-gradient(
//             135deg,
//             #ffffff 0%,
//             #f8fbff 45%,
//             #eef5ff 100%
//           )
//         `;
//       }

//       frame = requestAnimationFrame(update);
//     };

//     frame = requestAnimationFrame(update);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(frame);
//     };
//   }, []);

//   return (
//     <div
//       ref={bgRef}
//       className="pointer-events-none fixed inset-0 z-0"
//       aria-hidden="true"
//       style={{
//         background: `
//           radial-gradient(
//             700px circle at 50% 50%,
//             rgba(37, 99, 235, 0.18),
//             rgba(59, 130, 246, 0.10) 25%,
//             rgba(147, 197, 253, 0.05) 45%,
//             transparent 70%
//           ),
//           linear-gradient(
//             135deg,
//             #ffffff 0%,
//             #f8fbff 45%,
//             #eef5ff 100%
//           )
//         `,
//       }}
//     />
//   );
// }



// "use client";

// import { useEffect, useRef } from "react";

// type Point = {
//   x: number;
//   y: number;
//   baseX: number;
//   baseY: number;
//   vx: number;
//   vy: number;
// };

// export default function InteractiveBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const mouse = useRef({
//     x: -1000,
//     y: -1000,
//   });

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");

//     if (!ctx) return;

//     // Don't run mouse interaction on mobile/touch devices
//     const isTouch =
//       window.matchMedia("(pointer: coarse)").matches;

//     let width = 0;
//     let height = 0;
//     let animationFrame = 0;
//     let points: Point[] = [];

//     const dpr = Math.min(window.devicePixelRatio || 1, 2);

//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;

//       canvas.width = width * dpr;
//       canvas.height = height * dpr;

//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       createPoints();
//     };

//     const createPoints = () => {
//       points = [];

//       /*
//        * Distance between points.
//        * Larger number = fewer points.
//        */
//       const spacing = width > 1000 ? 95 : 70;

//       const columns = Math.ceil(width / spacing) + 2;
//       const rows = Math.ceil(height / spacing) + 2;

//       for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < columns; col++) {
//           const x = col * spacing;
//           const y = row * spacing;

//           points.push({
//             x,
//             y,
//             baseX: x,
//             baseY: y,
//             vx: 0,
//             vy: 0,
//           });
//         }
//       }
//     };

//     resize();

//     window.addEventListener("resize", resize);

//     const handleMouseMove = (event: MouseEvent) => {
//       if (isTouch) return;

//       mouse.current.x = event.clientX;
//       mouse.current.y = event.clientY;
//     };

//     const handleMouseLeave = () => {
//       mouse.current.x = -1000;
//       mouse.current.y = -1000;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     let time = 0;

//     const animate = () => {
//       time += 0.006;

//       /*
//        * Background
//        */
//       const background = ctx.createLinearGradient(
//         0,
//         0,
//         width,
//         height
//       );

//       background.addColorStop(0, "#ffffff");
//       background.addColorStop(0.5, "#f9fcff");
//       background.addColorStop(1, "#f2f8ff");

//       ctx.fillStyle = background;
//       ctx.fillRect(0, 0, width, height);

//       /*
//        * Update points
//        */
//       points.forEach((point) => {
//         /*
//          * Very slow natural movement.
//          * This creates the living mesh effect.
//          */
//         const ambientX =
//           Math.sin(
//             point.baseY * 0.008 +
//               time
//           ) * 8;

//         const ambientY =
//           Math.sin(
//             point.baseX * 0.006 +
//               time * 0.8
//           ) * 8;

//         /*
//          * Mouse interaction
//          */
//         const dx = point.x - mouse.current.x;
//         const dy = point.y - mouse.current.y;

//         const distance = Math.sqrt(
//           dx * dx + dy * dy
//         );

//         const interactionRadius = 320;

//         if (distance < interactionRadius) {
//           const strength =
//             1 - distance / interactionRadius;

//           /*
//            * Gentle repulsion.
//            *
//            * Change 18 to a larger number
//            * if you want stronger interaction.
//            */
//           const force = strength * 40;

//           if (distance > 0) {
//             point.vx +=
//               (dx / distance) * force * 0.015;

//             point.vy +=
//               (dy / distance) * force * 0.015;
//           }
//         }

//         /*
//          * Spring back toward original position
//          */
//         point.vx +=
//           (point.baseX + ambientX - point.x) *
//           0.008;

//         point.vy +=
//           (point.baseY + ambientY - point.y) *
//           0.008;

//         /*
//          * Damping
//          */
//         point.vx *= 0.92;
//         point.vy *= 0.92;

//         point.x += point.vx;
//         point.y += point.vy;
//       });

//       /*
//        * Draw connections
//        */
//       const connectionDistance = 125;

//       for (let i = 0; i < points.length; i++) {
//         const pointA = points[i];

//         for (
//           let j = i + 1;
//           j < points.length;
//           j++
//         ) {
//           const pointB = points[j];

//           const dx = pointA.x - pointB.x;
//           const dy = pointA.y - pointB.y;

//           const distance = Math.sqrt(
//             dx * dx + dy * dy
//           );

//           if (distance < connectionDistance) {
//             const opacity =
//               (1 - distance / connectionDistance) *
//               0.48;

//             ctx.beginPath();

//             ctx.moveTo(
//               pointA.x,
//               pointA.y
//             );

//             ctx.lineTo(
//               pointB.x,
//               pointB.y
//             );

//             ctx.strokeStyle = `rgba(
//               37,
//               99,
//               235,
//               ${opacity}
//             )`;

//             ctx.lineWidth = 0.5;

//             ctx.stroke();
//           }
//         }
//       }

//       /*
//        * Draw points
//        */
//       points.forEach((point) => {
//         const dx =
//           point.x - mouse.current.x;

//         const dy =
//           point.y - mouse.current.y;

//         const distance = Math.sqrt(
//           dx * dx + dy * dy
//         );

//         /*
//          * Points near mouse become
//          * slightly more visible.
//          */
//         const nearby =
//           Math.max(
//             0,
//             1 - distance / 220
//           );

//         const radius =
//           1.2 + nearby * 1.2;

//         ctx.beginPath();

//         ctx.arc(
//           point.x,
//           point.y,
//           radius,
//           0,
//           Math.PI * 2
//         );

//         ctx.fillStyle = `rgba(
//   37,
//   99,
//   235,
//   ${0.40 + nearby * 0.35}
// )`;

//         ctx.fill();
//       });

//       animationFrame =
//         requestAnimationFrame(animate);
//     };

//     animationFrame =
//       requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener(
//         "resize",
//         resize
//       );

//       window.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );

//       window.removeEventListener(
//         "mouseleave",
//         handleMouseLeave
//       );

//       cancelAnimationFrame(
//         animationFrame
//       );
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       aria-hidden="true"
//       className="
//         pointer-events-none
//         fixed
//         inset-0
//         z-0
//         h-screen
//         w-screen
//       "
//     />
//   );
// }



"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;

  baseX: number;
  baseY: number;

  vx: number;
  vy: number;

  offsetX: number;
  offsetY: number;
};

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    /*
     * Disable animation on touch devices
     */
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      return;
    }

    /*
     * Respect reduced motion preference
     */
    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrame = 0;

    let time = 0;

    let points: Point[] = [];

    /*
     * Limit DPR for performance
     */
    const dpr = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    /*
     * ------------------------------------------------
     * CREATE POINTS
     * ------------------------------------------------
     *
     * Important:
     *
     * We intentionally DON'T create a perfect grid.
     *
     * Every point gets a small random offset
     * and a wave-based offset.
     *
     * This gives the mesh an organic appearance.
     */
    const createPoints = () => {
      points = [];

      const spacing =
        width > 1000 ? 90 : 70;

      const columns =
        Math.ceil(width / spacing) + 2;

      const rows =
        Math.ceil(height / spacing) + 2;

      for (let row = 0; row < rows; row++) {
        for (
          let column = 0;
          column < columns;
          column++
        ) {
          /*
           * Organic horizontal movement
           */
          const waveX =
            Math.sin(
              column * 0.7 +
                row * 0.45
            ) * 18;

          /*
           * Organic vertical movement
           */
          const waveY =
            Math.cos(
              column * 0.45 +
                row * 0.65
            ) * 14;

          /*
           * Small randomness
           */
          const randomX =
            (Math.random() - 0.5) * 22;

          const randomY =
            (Math.random() - 0.5) * 18;

          const x =
            column * spacing +
            waveX +
            randomX;

          const y =
            row * spacing +
            waveY +
            randomY;

          points.push({
            x,
            y,

            baseX: x,
            baseY: y,

            vx: 0,
            vy: 0,

            /*
             * Individual movement offsets
             */
            offsetX:
              Math.random() * Math.PI * 2,

            offsetY:
              Math.random() * Math.PI * 2,
          });
        }
      }
    };

    /*
     * ------------------------------------------------
     * RESIZE CANVAS
     * ------------------------------------------------
     */
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createPoints();
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    /*
     * ------------------------------------------------
     * MOUSE MOVE
     * ------------------------------------------------
     */
    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouse.current.x =
        event.clientX;

      mouse.current.y =
        event.clientY;
    };

    /*
     * When mouse leaves the browser
     */
    const handleMouseLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    /*
     * ------------------------------------------------
     * ANIMATION
     * ------------------------------------------------
     */
    const animate = () => {
      time += 0.004;

      /*
       * ------------------------------------------------
       * BACKGROUND
       * ------------------------------------------------
       */
      const background =
        ctx.createLinearGradient(
          0,
          0,
          width,
          height
        );

      background.addColorStop(
        0,
        "#ffffff"
      );

      background.addColorStop(
        0.5,
        "#f9fcff"
      );

      background.addColorStop(
        1,
        "#f3f8ff"
      );

      ctx.fillStyle = background;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * ------------------------------------------------
       * UPDATE POINTS
       * ------------------------------------------------
       */
      points.forEach((point) => {
        /*
         * Slow natural movement
         *
         * This makes the network feel alive
         * even when the mouse isn't moving.
         */
        const ambientX =
          Math.sin(
            point.baseY * 0.006 +
              time +
              point.offsetX
          ) * 7;

        const ambientY =
          Math.cos(
            point.baseX * 0.005 +
              time * 0.8 +
              point.offsetY
          ) * 7;

        /*
         * ------------------------------------------------
         * MOUSE INTERACTION
         * ------------------------------------------------
         */
        const dx =
          point.x -
          mouse.current.x;

        const dy =
          point.y -
          mouse.current.y;

        const distance =
          Math.sqrt(
            dx * dx +
              dy * dy
          );

        /*
         * Mouse influence area
         */
        const interactionRadius = 320;

        if (
          distance <
          interactionRadius
        ) {
          const strength =
            1 -
            distance /
              interactionRadius;

          /*
           * Gentle repulsion
           */
          const force =
            strength * 40;

          if (distance > 0) {
            point.vx +=
              (dx / distance) *
              force *
              0.015;

            point.vy +=
              (dy / distance) *
              force *
              0.015;
          }
        }

        /*
         * ------------------------------------------------
         * SPRING
         * ------------------------------------------------
         *
         * Points slowly return to their
         * natural position.
         */
        point.vx +=
          (
            point.baseX +
            ambientX -
            point.x
          ) * 0.008;

        point.vy +=
          (
            point.baseY +
            ambientY -
            point.y
          ) * 0.008;

        /*
         * Damping
         */
        point.vx *= 0.92;

        point.vy *= 0.92;

        /*
         * Apply movement
         */
        point.x += point.vx;

        point.y += point.vy;
      });

      /*
       * ------------------------------------------------
       * DRAW CONNECTIONS
       * ------------------------------------------------
       */

      const connectionDistance = 105;

      for (
        let i = 0;
        i < points.length;
        i++
      ) {
        const pointA =
          points[i];

        for (
          let j = i + 1;
          j < points.length;
          j++
        ) {
          const pointB =
            points[j];

          const dx =
            pointA.x -
            pointB.x;

          const dy =
            pointA.y -
            pointB.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          /*
           * Only connect nearby points
           */
          if (
            distance <
            connectionDistance
          ) {
            /*
             * Distance based opacity
             */
            const distanceOpacity =
              1 -
              distance /
                connectionDistance;

            /*
             * Vertical fade
             *
             * The upper portion of the page
             * stays cleaner.
             */
            const verticalFade =
              Math.max(
                0,
                Math.min(
                  1,
                  (
                    pointA.y /
                      height -
                    0.15
                  ) / 0.65
                )
              );

            /*
             * Final line opacity
             */
            const opacity =
              distanceOpacity *
              0.42 *
              verticalFade;

            ctx.beginPath();

            ctx.moveTo(
              pointA.x,
              pointA.y
            );

            ctx.lineTo(
              pointB.x,
              pointB.y
            );

            ctx.strokeStyle = `rgba(
              37,
              99,
              235,
              ${opacity}
            )`;

            /*
             * Very thin lines
             */
            ctx.lineWidth = 1;

            ctx.stroke();
          }
        }
      }

      /*
       * ------------------------------------------------
       * DRAW POINTS
       * ------------------------------------------------
       */
      points.forEach((point) => {
        const dx =
          point.x -
          mouse.current.x;

        const dy =
          point.y -
          mouse.current.y;

        const distance =
          Math.sqrt(
            dx * dx +
              dy * dy
          );

        /*
         * Mouse proximity
         */
        const nearby =
          Math.max(
            0,
            1 -
              distance /
                280
          );

        /*
         * Normal points are small.
         *
         * Points near the mouse
         * become slightly larger.
         */
        const radius =
          0.8 +
          nearby * 1.2;

        ctx.beginPath();

        ctx.arc(
          point.x,
          point.y,
          radius,
          0,
          Math.PI * 2
        );

        /*
         * Blue points
         */
        ctx.fillStyle = `rgba(
          37,
          99,
          235,
          ${0.48 + nearby * 0.40}
        )`;

        ctx.fill();
      });

      /*
       * Continue animation
       */
      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    /*
     * ------------------------------------------------
     * CLEANUP
     * ------------------------------------------------
     */
    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        h-screen
        w-screen
      "
    />
  );
}