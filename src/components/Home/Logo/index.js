import { useRef, useEffect } from 'react';
import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
const Logo = () => {
  const logoContainerRef = useRef(null);
  const solidLogoRef = useRef(null);
  const outlineLogoRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoContainerRef.current;
    const solidLogo = solidLogoRef.current;
    const outlineLogo = outlineLogoRef.current;

    setTimeout(() => {
      logoContainer.classList.add('show');
    }, 1000);

    const drawAnimation = () => {
      const logoPath = outlineLogo.querySelectorAll('.svg-container path');
      logoPath.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.animation = 'drawStroke 2s 1s forwards';
      });
    };

    const fadeSolidLogo = () => {
      solidLogo.style.animation = 'fadeSolidLogo 1s 4s forwards';
    };

    logoContainer.addEventListener('animationend', () => {
      drawAnimation();
      fadeSolidLogo();
    });

    return () => {
      logoContainer.removeEventListener('animationend', () => {
        drawAnimation();
        fadeSolidLogo();
      });
    };
  }, []);

  return (
    <div className="logo-container" ref={logoContainerRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript Developer"
      />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="324.000000pt"
        height="378.000000pt"
        viewBox="0 0 324.000000 378.000000"
        preserveAspectRatio="xMidYMid meet"
        ref={outlineLogoRef}
      >
        <g className="svg-container" transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)" fill="none">
          <path
            d="M197 3773 c-4 -3 -7 -51 -7 -105 l0 -98 -58 0 c-32 0 -63 -5 -70 -12 -16 -16 -18 -3558 -2 -3558 7 0 10 598 10 1775 l0 1775 70 0 70 0 0 -1710 0 -1710 968 0 c611 0 1009 4 1078 11 149 14 286 43 402 84 l97 34 -35 -30 c-118 -102 -365 -190 -610 -218 l-75 -8 83 -2 c192 -3 453 86 617 209 33 25 83 58 110 74 176 103 287 240 363 449 25 69 26 81 30 333 3 216 1 272 -13 325 -23 92 -106 254 -168 329 -91 111 -254 220 -424 286 l-71 27 57 42 c31 23 77 65 101 92 25 28 74 73 109 99 82 61 141 137 196 249 59 123 77 210 77 370 0 361 -142 604 -440 754 -97 49 -256 99 -387 121 -112 19 -161 20 -1094 20 -538 0 -981 -3 -984 -7z m1548 -332 c158 -57 247 -184 286 -407 16 -93 7 -369 -16 -464 -34 -144 -103 -262 -181 -310 -19 -12 -37 -20 -39 -18 -2 2 6 37 19 78 52 163 59 429 17 593 -63 243 -208 347 -483 347 l-78 0 0 106 0 106 208 -4 c181 -4 215 -8 267 -27z m-296 -211 c116 -12 179 -39 244 -105 57 -57 91 -120 119 -223 17 -64 21 -107 21 -247 0 -178 -15 -286 -53 -371 -15 -36 -23 -43 -66 -54 -27 -7 -133 -15 -236 -18 l-188 -5 0 517 0 516 33 0 c17 0 74 -5 126 -10z m1261 -1037 c-42 -48 -137 -128 -176 -149 -28 -15 -35 -15 -115 3 l-84 20 60 17 c92 26 235 83 290 115 28 17 52 30 54 30 1 1 -11 -16 -29 -36z m-1012 -319 c318 -65 477 -346 459 -809 -9 -221 -59 -371 -157 -474 -43 -45 -127 -107 -135 -99 -2 2 12 35 31 73 60 124 69 175 69 405 0 179 -3 216 -23 295 -59 235 -185 378 -377 429 -33 9 -113 19 -177 23 l-118 6 0 84 0 83 175 0 c121 0 200 -5 253 -16z m-149 -200 c86 -19 154 -58 221 -124 115 -115 168 -275 177 -530 3 -95 1 -183 -6 -229 -16 -103 -58 -222 -92 -264 -42 -51 -122 -67 -366 -74 l-193 -6 0 627 0 628 98 -7 c53 -4 126 -13 161 -21z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
