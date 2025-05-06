const CardInforClub: React.FC = () => {
  return (
    <svg
      width="442"
      height="535"
      viewBox="0 0 442 535"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_44_105)">
        <mask
          id="mask0_44_105"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x={4}
          y={25}
          width={434}
          height={510}
        >
          <g clip-path="url(#clip0_44_105)">
            <g clip-path="url(#clip1_44_105)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M405.509 45.4363C405.509 33.6098 395.923 24.0225 384.095 24.0225H173.438C165.529 24.0225 158.264 28.3818 154.543 35.3606L132.378 76.9259C128.657 83.9046 121.392 88.2639 113.483 88.2639H25.4138C13.5873 88.2639 4 97.8512 4 109.678L4.00001 513.864C4.00001 525.691 13.5873 535.278 25.4138 535.278H416.216C428.043 535.278 437.63 525.691 437.63 513.864V282.609C437.63 278.915 436.674 275.283 434.856 272.068L408.284 225.078C406.465 221.862 405.509 218.231 405.509 214.537V45.4363Z"
                fill="#C2FF3F"
              />
            </g>
          </g>
        </mask>
        <g mask="url(#mask0_44_105)">
          <rect
            opacity="0.999992"
            x="4"
            y="25"
            width="433.62"
            height="509.3"
            fill="url(#paint0_linear_44_105)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_44_105"
          x="0"
          y="0"
          width="441.62"
          height="534.3"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-21" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_105" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_44_105"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_44_105"
          x1="220.81"
          y1="25"
          x2="220.81"
          y2="534.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#632CFF" />
          <stop offset="0.8" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_44_105">
          <rect width="433.62" height="509.3" fill="white" transform="translate(4 25)" />
        </clipPath>
        <clipPath id="clip1_44_105">
          <rect width="433.63" height="511.255" fill="white" transform="translate(4 24.0225)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CardInforClub;
