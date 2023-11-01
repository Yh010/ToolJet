import React from 'react';

const Underline = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 10 12" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.77067 1.33301C2.77067 1.09138 2.5748 0.895508 2.33317 0.895508C2.09155 0.895508 1.89567 1.09138 1.89567 1.33301V5.41634C1.89567 7.2688 3.39738 8.77051 5.24984 8.77051C7.10229 8.77051 8.604 7.2688 8.604 5.41634V1.33301C8.604 1.09138 8.40813 0.895508 8.1665 0.895508C7.92488 0.895508 7.729 1.09138 7.729 1.33301V5.41634C7.729 6.78555 6.61904 7.89551 5.24984 7.89551C3.88063 7.89551 2.77067 6.78555 2.77067 5.41634V1.33301ZM1.1665 10.2288C0.924879 10.2288 0.729004 10.4247 0.729004 10.6663C0.729004 10.908 0.924879 11.1038 1.1665 11.1038H9.33317C9.57479 11.1038 9.77067 10.908 9.77067 10.6663C9.77067 10.4247 9.57479 10.2288 9.33317 10.2288H1.1665Z"
      fill={fill}
    />
  </svg>
);

export default Underline;
