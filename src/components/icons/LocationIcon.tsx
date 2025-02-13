export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = '20px',
  height = '20px',
  viewBox = '0 0 24 24',
  fill = 'none',
  xmlns = 'http://www.w3.org/2000/svg',
  ...restProps
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    xmlns={xmlns}
    {...restProps}
  >
    <path
      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
      stroke="#6b7280"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
