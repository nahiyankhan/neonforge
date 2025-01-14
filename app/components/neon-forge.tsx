"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const getRelativeCoordinates = (
  event: { pageX: any; pageY: any },
  referenceElement: {
    offsetLeft: any;
    offsetTop: any;
    clientWidth: any;
    clientHeight: any;
    offsetParent: any;
  }
) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    centerOffset: position.x - offset.width * 0.26,
  };
};

export const NeonForge = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
    width: number;
    centerOffset: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    centerOffset: 0,
  });
  const neonForge = useRef();
  const handleMouseMove = (e: { pageX: any; pageY: any }) => {
    if (neonForge.current) {
      setMousePosition(getRelativeCoordinates(e, neonForge.current));
    }
  };

  const centerOffset = useMotionValue(0);

  useEffect(() => {
    centerOffset.set(mousePosition.centerOffset);
  }, [mousePosition]);

  const x = useTransform(centerOffset, (value) => value / 8);

  return (
    <motion.div
      ref={neonForge}
      className="w-full text-transparent relative animated-border [&_svg]:stroke-[1px] [&_svg_path]:animate-[dash_1.5s_cubic-bezier(0.55,0,1,0.45)_0.5s_forwards] [&_svg_path]:[stroke-dasharray:2000] [&_svg_path]:[stroke-dashoffset:2000]"
    >
      <svg
        width="100%"
        viewBox="0 0 1920 571"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="neon-forge">
          <g id="forge">
            <path
              id="f"
              d="M372.816 291L41.737 291H0V419.337L57.1852 419.337C58.2898 419.337 59.1852 420.232 59.1852 421.337V571H127.05L243.431 439.17H182.86C181.756 439.17 180.86 438.275 180.86 437.17V421.337C180.86 420.232 181.756 419.337 182.86 419.337H260.597L372.816 291Z"
              fill="currentColor"
            />
            <path
              id="o"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M433.979 291C413.846 291 387.446 291 387.446 291L294.856 396.312C294.856 396.312 294.856 416.948 294.856 431C294.856 520.88 344.662 571 433.979 571H467.369C556.686 571 606.492 520.88 606.492 431C606.492 383.42 606.492 291 606.492 291C606.492 291 509.403 291 467.369 291H433.979ZM446.202 391.8C422.278 391.8 408.937 405.332 408.937 429.6C408.937 453.868 422.278 467.4 446.202 467.4H455.146C479.07 467.4 492.411 453.868 492.411 429.6C492.411 405.332 479.07 391.8 455.146 391.8H446.202Z"
              fill="currentColor"
            />
            <path
              id="r"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M923.693 405.8C923.693 326 854.296 291 786.112 291H617.622V571L755.506 571V549.855C755.506 544.637 761.974 542.255 765.321 546.241L786.112 571L923.693 571L874.67 508.718C904.329 489.756 923.693 457.934 923.693 405.8ZM804.639 421.195C801.263 424.535 796.607 426.528 791.662 426.751H759.555C756.482 426.751 753.99 424.244 753.99 421.151V397.4C753.99 394.307 756.482 391.8 759.555 391.8H791.662C796.496 391.906 801.094 393.751 804.472 396.941C807.849 400.131 809.74 404.412 809.738 408.87C809.844 413.434 808.015 417.856 804.639 421.195Z"
              fill="currentColor"
            />
            <path
              id="g"
              d="M1047.69 431.049C1047.69 404.4 1057.43 391.8 1090.82 391.8C1117.25 391.8 1122.81 400.2 1132.55 415.6L1209.46 328.745C1186.34 306.551 1148.08 291 1086.64 291C1001.78 291 982.299 313.4 964.213 333C946.127 352.6 933.606 373.6 933.606 433.8C933.606 485.6 954.474 516.4 954.474 516.4C994.778 570.943 1041.87 570.966 1109.89 571L1110.1 571C1149.25 569.6 1168.72 564 1197.94 544.4L1218.81 571H1245.24V431.049H1110.29L1125.6 452C1118.64 461.8 1113.07 467.4 1090.82 467.4C1065.77 467.4 1047.69 460.4 1047.69 431.049Z"
              fill="currentColor"
            />
            <path
              id="e"
              d="M1540.97 291H1257.15V571L1540.97 571V479.885L1413.71 479.885C1412.61 479.885 1411.71 478.99 1411.71 477.885V466.782C1411.71 465.678 1412.61 464.782 1413.71 464.782L1485.63 464.782V394.244L1413.71 394.244C1412.61 394.244 1411.71 393.349 1411.71 392.244V382.011C1411.71 380.906 1412.61 380.011 1413.71 380.011L1540.97 380.011V291Z"
              fill="currentColor"
            />
          </g>
          <g id="neon">
            <path
              id="e_2"
              d="M608.558 1H322.729V281L606.541 281V189.885L479.286 189.885C478.181 189.885 477.286 188.99 477.286 187.885V176.782C477.286 175.678 478.181 174.782 479.286 174.782L551.203 174.782V104.244L479.286 104.244C478.181 104.244 477.286 103.349 477.286 102.244V92.011C477.286 90.9064 478.181 90.011 479.286 90.011L608.558 90.011V1Z"
              fill="currentColor"
            />
            <path
              id="n"
              d="M140.192 247.557C138.903 246.41 136.863 247.325 136.863 249.051V281L0 281L0.0117497 1H121.342L161.803 34.6392C163.106 35.7225 165.082 34.7959 165.082 33.1013V1H311.821V281H177.781L140.192 247.557Z"
              fill="currentColor"
            />
            <path
              id="n_2"
              d="M1077.62 247.554C1076.33 246.407 1074.29 247.323 1074.29 249.049V281L937.32 281L937.332 1H1058.76L1099.26 34.6419C1100.56 35.7245 1102.54 34.7977 1102.54 33.1035V1H1249.4V281H1115.25L1077.62 247.554Z"
              fill="currentColor"
            />
            <path
              id="o_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M747.379 0.99707C668.634 0.99707 616.045 53.9171 616.045 133.157V148.837C616.045 228.077 668.634 280.997 747.379 280.997H795.961C874.706 280.997 927.295 228.077 927.295 148.837V133.157C927.295 53.9171 874.706 0.99707 795.961 0.99707H747.379ZM765.061 102.906C743.636 102.906 729.328 117.305 729.328 138.864V143.131C729.328 164.69 743.636 179.089 765.061 179.089H778.279C799.704 179.089 814.012 164.69 814.012 143.131V138.864C814.012 117.305 799.704 102.906 778.279 102.906H765.061Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};
