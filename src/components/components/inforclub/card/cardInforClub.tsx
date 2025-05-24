import React from 'react';
import { CardInforClubTypeProps } from '@/configs/app.config';

const CardInforClub: React.FC<CardInforClubTypeProps> = ({ data, index = 0 }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '442px',
        height: '535px',
        zIndex: index % 2 === 0 ? 10 : 0,
      }}
    >
      {/* Card Background SVG */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        width="442"
        height="460"
        viewBox="0 0 442 535"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_44_105)">
          <mask
            id={`mask0_44_105_${index}`}
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={25}
            width={434}
            height={510}
          >
            <g clipPath={`url(#clip0_44_105_${index})`}>
              <g clipPath={`url(#clip1_44_105_${index})`}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M405.509 45.4363C405.509 33.6098 395.923 24.0225 384.095 24.0225H173.438C165.529 24.0225 158.264 28.3818 154.543 35.3606L132.378 76.9259C128.657 83.9046 121.392 88.2639 113.483 88.2639H25.4138C13.5873 88.2639 4 97.8512 4 109.678L4.00001 513.864C4.00001 525.691 13.5873 535.278 25.4138 535.278H416.216C428.043 535.278 437.63 525.691 437.63 513.864V282.609C437.63 278.915 436.674 275.283 434.856 272.068L408.284 225.078C406.465 221.862 405.509 218.231 405.509 214.537V45.4363Z"
                  fill="#C2FF3F"
                />
              </g>
            </g>
          </mask>
          <g mask={`url(#mask0_44_105_${index})`}>
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

        {/* Black Inner Shape*/}
        <g transform="translate(20, 45) scale(0.92)">
          <mask
            id={`mask1_inner_${index}`}
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x={4}
            y={25}
            width={434}
            height={510}
          >
            <g clipPath={`url(#clip0_44_105_${index})`}>
              <g clipPath={`url(#clip1_44_105_${index})`}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M405.509 45.4363C405.509 33.6098 395.923 24.0225 384.095 24.0225H173.438C165.529 24.0225 158.264 28.3818 154.543 35.3606L132.378 76.9259C128.657 83.9046 121.392 88.2639 113.483 88.2639H25.4138C13.5873 88.2639 4 97.8512 4 109.678L4.00001 513.864C4.00001 525.691 13.5873 535.278 25.4138 535.278H416.216C428.043 535.278 437.63 525.691 437.63 513.864V282.609C437.63 278.915 436.674 275.283 434.856 272.068L408.284 225.078C406.465 221.862 405.509 218.231 405.509 214.537V45.4363Z"
                  fill="#C2FF3F"
                />
              </g>
            </g>
          </mask>
          <g mask={`url(#mask1_inner_${index})`}>
            <rect
              opacity="0.999992"
              x="4"
              y="25"
              width="433.62"
              height="509.3"
              fill="black"
              fillOpacity="0.7"
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
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <stop stopColor="#632CFF" />
            <stop offset="0.8" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`clip0_44_105_${index}`}>
            <rect width="433.62" height="509.3" fill="white" transform="translate(4 25)" />
          </clipPath>
          <clipPath id={`clip1_44_105_${index}`}>
            <rect width="433.63" height="511.255" fill="white" transform="translate(4 24.0225)" />
          </clipPath>
        </defs>
      </svg>

      {/* Card Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '3rem',
        }}
      >
        <div style={{ padding: '1.5rem' }}>
          <div style={{ color: 'white', marginBottom: '0.5rem' }}>
            {index !== undefined && (
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#d8b4fe',
                  border: '1px solid #8b5cf6',
                  borderRadius: '0.375rem',
                  padding: '0.25rem 0.5rem',
                }}
              >
                [{(index + 1).toString().padStart(2, '0')}]
              </span>
            )}
          </div>
          <h2
            style={{
              color: 'white',
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            {data.title}
          </h2>
          <p style={{ color: '#e5e7eb' }}>{data.desk}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInforClub;

{
  /* <h1 className="font-bold text-[2rem] w-[10vw]">{card.title}</h1>
        <p>{card.desk}</p> */
}
