/*
 * Copyright (c) 2016, Egdar U. Joya <eujc21@gmail.com>
 *
 * License: MIT
 */

import React from "react";

export default class extends React.Component {
  render() {
    return (
      <svg {...this.props} width="29px" height="24px" viewBox="0 0 29 24">
        {/* <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch --> */}
        <title>
          Code Blocks
        </title>
        <desc>
          Created with Sketch.
        </desc>
        <defs>
          <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-2" filter="url(#filter-1)" transform="translate(-4.000000, -0.000000)">
            <g id="right-arrow" transform="translate(12.000000, 0.000000)">
              <path d="M14.7918747,12.7915118 L7.91257643,19.6705976 C7.47496996,20.1084165 6.76546609,20.1084165 6.32807207,19.6705976 C5.89064264,19.2331682 5.89064264,18.5236997 6.32807207,18.0863057 L12.415189,11.9993658 L6.32824911,5.91263839 C5.89081968,5.47503192 5.89081968,4.76563428 6.32824911,4.32820485 C6.76567854,3.89059838 7.475147,3.89059838 7.91275347,4.32820485 L14.7920517,11.2073969 C15.0107665,11.4262178 15.1199999,11.7127033 15.1199999,11.9993304 C15.1199999,12.2860991 15.010554,12.5727971 14.7918747,12.7915118 Z" id="Shape" fill="#FFFFFF"></path>
              <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
            </g>
            <g id="left-arrow">
              <path d="M6,11.9996255 C6,11.7129879 6.109448,11.4262794 6.32784828,11.2076628 L13.2073509,4.32821696 C13.6449659,3.89059435 14.3544835,3.89059435 14.7919214,4.32821696 C15.2293594,4.76566252 15.2293594,5.47505094 14.7919214,5.91270896 L8.70465096,11.9996255 L14.7914965,18.08679 C15.2289345,18.5242356 15.2289345,19.2337302 14.7914965,19.6711403 C14.3540586,20.1089754 13.6447534,20.1089754 13.2071385,19.6711403 L6.32760042,12.7918007 C6.10923555,12.5730779 6,12.2863694 6,11.9996255 Z" id="Shape" fill="#FFFFFF"></path>
              <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
