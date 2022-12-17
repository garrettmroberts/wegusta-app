import React from 'react';
import Colors from './Colors';

const Fonts = {
  displayBold: {
    fontFamily: 'Avenir',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '900'
  } as const,
  h1Bold: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32
  } as const,
  h1Reg: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32
  } as const,
  h2Bold: {
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 24
  } as const,
  h2Reg: {
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24
  } as const,
  bodyBold: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 24
  } as const,
  bodyReg: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24
  } as const,
  buttonReg: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24
  } as const,

  buttonSmall: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 24
  } as const,
  inputLabel: {
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 16
  } as const,
  inputValue: {
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24
  } as const,
  metaBold: {
    fontFamily: 'Avenir',
    fontSize: 10,
    fontWeight: '900',
    lineHeight: 16
  } as const,
  metaReg: {
    fontFamily: 'Avenir',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16
  } as const,
  textDark: {
    color: Colors.black
  } as const,
  textGreyDark: {
    color: Colors.greyDark
  } as const,
  textLight: {
    color: Colors.white
  } as const
} as const;

export default Fonts;
