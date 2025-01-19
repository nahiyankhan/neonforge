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
        viewBox="0 0 1920 1011"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="neon-forge-works">
          <g id="neon">
            <path
              id="n"
              d="M189.407 286.599C187.046 283.645 182.283 285.315 182.283 289.097V326.524C182.283 328.734 180.492 330.524 178.283 330.524L4.00018 330.524C1.79097 330.524 7.68923e-05 328.733 0.000171741 326.524L0.0139963 4.52423C0.0140911 2.31516 1.80492 0.524414 4.014 0.524414H150.256C151.479 0.524414 152.634 1.0835 153.393 2.04216L186.892 44.372C189.245 47.3453 194.028 45.6815 194.028 41.8898V4.52442C194.028 2.31528 195.819 0.524414 198.028 0.524414H372C374.209 0.524414 376 2.31528 376 4.52441V326.524C376 328.733 374.209 330.524 372 330.524L226.443 330.524C225.227 330.524 224.077 329.972 223.318 329.022L189.407 286.599Z"
              fill="currentColor"
            />
            <path
              id="e"
              d="M758 0.524414H390C387.791 0.524414 386 2.31527 386 4.52441V326.524C386 328.734 387.791 330.524 390 330.524H758C760.209 330.524 762 328.734 762 326.524V224.958C762 222.751 760.213 220.961 758.006 220.958L593.309 220.724C591.102 220.721 589.315 218.931 589.315 216.724V206.919C589.315 204.71 591.106 202.919 593.315 202.919L682.551 202.919C684.76 202.919 686.551 201.128 686.551 198.919V133.374C686.551 131.165 684.76 129.374 682.551 129.374L593.315 129.374C591.106 129.374 589.315 127.583 589.315 125.374V115.481C589.315 113.272 591.106 111.481 593.315 111.481L758 111.481C760.209 111.481 762 109.69 762 107.481V4.52441C762 2.31528 760.209 0.524414 758 0.524414Z"
              fill="currentColor"
            />
            <path
              id="o"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1148 4.52441C1148 2.31527 1146.21 0.524414 1144 0.524414H776C773.791 0.524414 772 2.31527 772 4.52441V326.524C772 328.734 773.791 330.524 776 330.524H1144C1146.21 330.524 1148 328.734 1148 326.524V4.52441ZM1002.6 133.351C1002.6 131.141 1000.8 129.351 998.595 129.351H921.405C919.195 129.351 917.405 131.141 917.405 133.351V198.909C917.405 201.118 919.195 202.909 921.405 202.909H998.595C1000.8 202.909 1002.6 201.118 1002.6 198.909V133.351Z"
              fill="currentColor"
            />
            <path
              id="n_2"
              d="M1347.41 286.599C1345.05 283.645 1340.28 285.315 1340.28 289.097V326.524C1340.28 328.734 1338.49 330.524 1336.28 330.524L1162 330.524C1159.79 330.524 1158 328.733 1158 326.524L1158.01 4.52423C1158.01 2.31516 1159.8 0.524414 1162.01 0.524414H1308.26C1309.48 0.524414 1310.63 1.0835 1311.39 2.04216L1344.89 44.372C1347.24 47.3453 1352.03 45.6815 1352.03 41.8898V4.52442C1352.03 2.31528 1353.82 0.524414 1356.03 0.524414H1530C1532.21 0.524414 1534 2.31528 1534 4.52441V326.524C1534 328.733 1532.21 330.524 1530 330.524L1384.44 330.524C1383.23 330.524 1382.08 329.972 1381.32 329.022L1347.41 286.599Z"
              fill="currentColor"
            />
          </g>
          <g id="forge">
            <path
              id="f"
              d="M372 340.604L42.0935 340.604H4C1.79086 340.604 0 342.394 0 344.604V468.043V666.604C0 668.813 1.79087 670.604 4.00001 670.604H180.465C181.69 670.604 182.848 670.042 183.606 669.08L307.562 511.856C309.63 509.233 307.761 505.38 304.421 505.38H186.405C184.196 505.38 182.405 503.589 182.405 501.38V472.043C182.405 469.833 184.196 468.043 186.405 468.043H372C374.209 468.043 376 466.252 376 464.043V344.604C376 342.395 374.209 340.604 372 340.604Z"
              fill="currentColor"
            />
            <path
              id="o_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M762 344.604C762 342.394 760.209 340.604 758 340.604H390C387.791 340.604 386 342.394 386 344.604V666.604C386 668.813 387.791 670.604 390 670.604H758C760.209 670.604 762 668.813 762 666.604V344.604ZM616.595 473.43C616.595 471.221 614.805 469.43 612.595 469.43H535.405C533.195 469.43 531.405 471.221 531.405 473.43V538.988C531.405 541.197 533.195 542.988 535.405 542.988H612.595C614.805 542.988 616.595 541.197 616.595 538.988V473.43Z"
              fill="currentColor"
            />
            <path
              id="r"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1147.2 506.062C1147.72 505.37 1148 504.527 1148 503.661V344.604C1148 342.394 1146.23 340.604 1144.02 340.604C1134.12 340.604 1099.56 340.604 978.985 340.604H776C773.791 340.604 772 342.394 772 344.604V666.603C772 668.813 773.791 670.603 776 670.603L918.576 670.604H956.175L1139.86 670.603C1143.18 670.603 1145.06 666.789 1143.03 664.159L1086.84 591.372C1085.74 589.948 1085.73 587.966 1086.81 586.527L1147.2 506.062ZM962.415 541.054C961.657 542.039 960.489 542.617 959.246 542.617C953.213 542.617 934.588 542.617 921.474 542.617C919.265 542.617 917.481 540.826 917.481 538.617V473.127C917.481 470.918 919.25 469.127 921.459 469.127C939.08 469.127 980.604 469.127 998.225 469.127C1000.43 469.127 1002.2 470.918 1002.2 473.127V487.89C1002.2 488.772 1001.91 489.628 1001.38 490.327L962.415 541.054Z"
              fill="currentColor"
            />
            <path
              id="g"
              d="M1303.06 539.038V473.455C1303.06 471.246 1304.85 469.455 1307.06 469.455H1530C1532.21 469.455 1534 467.664 1534 465.455V344.603C1534 342.393 1532.28 340.603 1530.07 340.603H1342.64H1161.98C1159.77 340.603 1158 342.358 1158 344.568V508.901V666.646C1158 668.855 1159.72 670.602 1161.93 670.601C1183.45 670.595 1288.73 670.565 1362.21 670.6L1405.3 670.603L1443.1 670.6H1530C1532.21 670.6 1534 668.809 1534 666.6V510.518C1534 508.309 1532.21 506.518 1530 506.518H1376.71C1375.5 506.518 1374.35 507.067 1373.59 508.011L1346.61 541.546C1345.85 542.489 1344.71 543.038 1343.5 543.038H1307.06C1304.85 543.038 1303.06 541.247 1303.06 539.038Z"
              fill="currentColor"
            />
            <path
              id="e_2"
              d="M1916 340.604H1548C1545.79 340.604 1544 342.394 1544 344.604V666.604C1544 668.813 1545.79 670.604 1548 670.604H1916C1918.21 670.604 1920 668.813 1920 666.603V565.037C1920 562.83 1918.21 561.04 1916.01 561.037L1751.31 560.803C1749.1 560.8 1747.32 559.01 1747.32 556.803V546.998C1747.32 544.789 1749.11 542.998 1751.32 542.998L1840.55 542.998C1842.76 542.998 1844.55 541.207 1844.55 538.998V473.453C1844.55 471.244 1842.76 469.453 1840.55 469.453L1751.32 469.453C1749.11 469.453 1747.32 467.662 1747.32 465.453V455.56C1747.32 453.351 1749.11 451.56 1751.32 451.56L1916 451.56C1918.21 451.56 1920 449.769 1920 447.56V344.604C1920 342.394 1918.21 340.604 1916 340.604Z"
              fill="currentColor"
            />
          </g>
          <g id="works">
            <path
              id="w"
              d="M231.868 680.525C229.659 680.525 227.868 682.315 227.868 684.525V721.217C227.868 725.039 223.02 726.684 220.694 723.651L190.775 684.634C189.181 682.555 186.052 682.544 184.443 684.612L153.951 723.807C151.613 726.813 146.794 725.159 146.794 721.351V684.524C146.794 682.315 145.003 680.524 142.794 680.524L4.00013 680.524C1.79094 680.524 6.30499e-05 682.315 0.000140824 684.525L0.0114768 1006.52C0.0115545 1008.73 1.80239 1010.52 4.01148 1010.52H144.771C146.004 1010.52 147.169 1009.95 147.927 1008.98L184.878 961.522C186.479 959.465 189.589 959.465 191.19 961.522L228.141 1008.98C228.899 1009.95 230.064 1010.52 231.298 1010.52L371.989 1010.52C374.198 1010.52 375.989 1008.73 375.989 1006.52L376 684.525C376 682.316 374.209 680.525 372 680.525H231.868Z"
              fill="currentColor"
            />
            <path
              id="o_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M762 684.524C762 682.315 760.209 680.524 758 680.524H390C387.791 680.524 386 682.315 386 684.524V1006.52C386 1008.73 387.791 1010.52 390 1010.52H758C760.209 1010.52 762 1008.73 762 1006.52V684.524ZM616.595 813.351C616.595 811.141 614.805 809.351 612.595 809.351H535.405C533.195 809.351 531.405 811.141 531.405 813.351V878.909C531.405 881.118 533.195 882.909 535.405 882.909H612.595C614.805 882.909 616.595 881.118 616.595 878.909V813.351Z"
              fill="currentColor"
            />
            <path
              id="r_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1147.2 845.983C1147.72 845.291 1148 844.448 1148 843.582V684.524C1148 682.315 1146.23 680.524 1144.02 680.524C1134.12 680.524 1099.56 680.524 978.985 680.524H776C773.791 680.524 772 682.315 772 684.524V1006.52C772 1008.73 773.791 1010.52 776 1010.52L918.576 1010.52H956.175L1139.86 1010.52C1143.18 1010.52 1145.06 1006.71 1143.03 1004.08L1086.84 931.293C1085.74 929.869 1085.73 927.887 1086.81 926.448L1147.2 845.983ZM962.415 880.975C961.657 881.96 960.489 882.538 959.246 882.538C953.213 882.538 934.588 882.538 921.474 882.538C919.265 882.538 917.481 880.747 917.481 878.538V813.048C917.481 810.839 919.25 809.048 921.459 809.048C939.08 809.048 980.604 809.048 998.225 809.048C1000.43 809.048 1002.2 810.839 1002.2 813.048V827.811C1002.2 828.692 1001.91 829.549 1001.38 830.248L962.415 880.975Z"
              fill="currentColor"
            />
            <path
              id="k"
              d="M1158 684.524C1158 682.315 1159.79 680.524 1162 680.524H1299.62C1301.83 680.524 1303.62 682.315 1303.62 684.524V804.511C1303.62 806.721 1305.41 808.511 1307.62 808.511H1351.71C1352.96 808.511 1354.14 807.926 1354.9 806.928L1449.54 682.108C1450.3 681.11 1451.48 680.524 1452.73 680.524H1530C1532.21 680.524 1534 682.315 1534 684.524V843.493C1534 844.368 1533.71 845.218 1533.18 845.913L1472.37 925.945C1471.28 927.385 1471.29 929.38 1472.39 930.811L1529.02 1004.08C1531.05 1006.71 1529.18 1010.52 1525.85 1010.52H1361.43L1303.62 1010.52L1162 1010.52C1159.79 1010.52 1158 1008.73 1158 1006.52V684.524Z"
              fill="currentColor"
            />
            <path
              id="s"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1640.91 680.524H1911.92C1915.23 680.524 1917.11 684.317 1915.1 686.95L1859.34 760.062C1858.25 761.485 1858.24 763.455 1859.32 764.887L1919.2 844.795C1919.72 845.488 1920 846.329 1920 847.194V1006.52C1920 1008.73 1918.21 1010.52 1916 1010.52H1837.22H1551.97C1548.68 1010.52 1546.8 1006.77 1548.77 1004.13L1602.48 932.102C1603.53 930.705 1603.54 928.794 1602.53 927.378L1544.75 846.907C1544.26 846.227 1544 845.411 1544 844.574V684.524C1544 682.315 1545.79 680.524 1548 680.524H1640.91Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};
