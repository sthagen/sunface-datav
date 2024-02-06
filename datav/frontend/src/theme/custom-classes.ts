// Copyright 2023 xobserve.io Team
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { mode } from '@chakra-ui/theme-tools'
import customColors from './colors'

export function customClasses(props) {
  return {
    '.panel-bg': {
      bg: mode('rgba(252,254,255,1)', 'rgba(255,255,255,0.02)')(props),
    },
    '.panel-bg-alpha': {
      bg: mode('rgba(251,253,254,0.3)', 'rgba(255,255,255,0.02)')(props),
    },
    '.highlight-bg': {
      background: 'brand.50',
      borderRadius: '6px',
      color: 'black',
    },
    '.hover-bg:hover': {
      background: mode('brand.50', 'rgba(30,39,50,0.5)')(props),
      borderRadius: '6px',
      color: mode('black', 'white')(props),
    },
    '.hover-text:hover': {
      color: mode('brand.500', 'brand.300')(props),
      opacity: 1,
    },
    '.hover-border:hover': {
      borderColor: mode('brand.500', 'brand.200')(props),
    },
    '.label-bg': {
      bg: mode('#f7f9fb', 'rgba(255,255,255,0.05)')(props),
    },
    '.code-bg': {
      bg: mode('rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)')(props),
      color: '#eee',
      borderWidth: '1px',
      borderColor: mode('whatsapp.500', 'whatsapp.100')(props),
      letterSpacing: '1.5px',
    },
    '.hover-bordered:hover': {
      border: `0.5px solid ${mode(
        customColors.borderColor.light,
        customColors.borderColor.dark,
      )(props)}`,
      borderRadius: '6px',
    },
    '.bordered': {
      border: `0.5px solid ${mode(
        customColors.borderColor.light,
        customColors.borderColor.dark,
      )(props)}`,
      borderRadius: '6px',
    },
    '.bordered-bottom': {
      borderBottom: `0.5px solid ${mode(
        customColors.borderColor.light,
        customColors.borderColor.dark,
      )(props)}`,
    },
    '.bordered-left': {
      borderLeft: `0.5px solid ${mode(
        customColors.borderColor.light,
        customColors.borderColor.dark,
      )(props)}`,
    },
    '.bordered-right': {
      borderRight: `0.5px solid ${mode(
        customColors.borderColor.light,
        customColors.borderColor.dark,
      )(props)}`,
    },
    '.bordered-top': {
      borderTop: `0.5px solid ${mode(
        customColors.borderColor.light,
        customColors.borderColor.dark,
      )(props)}`,
    },
    '.highlight-bordered': {
      border: `1px solid ${mode(
        props.theme.colors.brand['500'],
        props.theme.colors.brand['200'],
      )(props)} !important`,
      borderRadius: '6px',
    },
    '.shadowed': {
      boxShadow:
        'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      borderRadius: '6px',
    },
    '.tag-bg': {
      background: mode(
        'var(--chakra-colors-brand-50)',
        'var(--chakra-colors-brand-100)',
      )(props),
      color: mode(
        'var(--chakra-colors-brand-800)',
        customColors.textColor.light,
      )(props),
      borderRadius: '6px',
    },
    '.color-text': {
      color: mode(
        customColors.primaryColor.light,
        customColors.primaryColor.dark,
      )(props),
    },
    '.annotation-text': {
      color: mode('rgb(71,85,105)', 'rgb(148,163,184)')(props),
    },
    '.chakra-form__label': {
      fontSize: '.85rem !important',
      fontWeight: '550 !important',
    },
    // 定义边栏卡片的类和样式
    '.side-card': {
      borderRadius: '16px !important',
      // borderWidth: "0 !important",
      bg: mode(
        customColors.sideCardBg.light + '!important',
        customColors.sideCardBg.dark + '!important',
      )(props),
    },
    '.card-opaque': {
      borderRadius: '16px !important',
      // borderWidth: "0 !important",
      bg: mode(
        customColors.cardOpaqueBg.light + '!important',
        customColors.cardOpaqueBg.dark + '!important',
      )(props),
    },
    '.action-icon': {
      fontSize: '0.8rem',
      opacity: 0.6,
    },
    '.cursor-pointer': {
      cursor: 'pointer',
    },
    '.text-truncate': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '.error-text': {
      color: customColors.error.light,
    },
  }
}
