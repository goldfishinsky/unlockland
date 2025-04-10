import { extendTheme } from '@mui/joy/styles';

// 将颜色字符串转换为rgb格式
const rgbStringToRgb = (colorStr: string) => `rgb(${colorStr})`;

// 定义完整的颜色系统以便在Tailwind中使用
export const colorSystem = {
  primary: {
    "0": 'rgb(250 252 255)',
    "50": 'rgb(243 247 255)',
    "100": 'rgb(232 240 255)',
    "200": 'rgb(211 226 255)',
    "300": 'rgb(180 205 251)',
    "400": 'rgb(131 167 234)',
    "500": 'rgb(84 122 192)',
    "600": 'rgb(35 64 117)',
    "700": 'rgb(18 45 96)',
    "800": 'rgb(7 29 68)',
    "900": 'rgb(2 17 43)',
    "950": 'rgb(1 9 25)'
  },
  // 其他完整的颜色定义...
};

// 仅使用MUI Joy支持的调色板
export const metonTheme = extendTheme({
  cssVarPrefix: 'meton',
  colorSchemes: {
    light: {
      palette: {
        // MUI Joy 支持这些标准调色板
        primary: {
          "50": rgbStringToRgb('243 247 255'),
          "100": rgbStringToRgb('232 240 255'),
          "200": rgbStringToRgb('211 226 255'),
          "300": rgbStringToRgb('180 205 251'),
          "400": rgbStringToRgb('131 167 234'),
          "500": rgbStringToRgb('84 122 192'),
          "600": rgbStringToRgb('35 64 117'),
          "700": rgbStringToRgb('18 45 96'),
          "800": rgbStringToRgb('7 29 68'),
          "900": rgbStringToRgb('2 17 43'),
          solidBg: rgbStringToRgb('84 122 192'),
          solidHoverBg: rgbStringToRgb('35 64 117'),
          solidActiveBg: rgbStringToRgb('18 45 96')
        },
        neutral: {
          "50": rgbStringToRgb('246 246 246'),
          "100": rgbStringToRgb('242 241 241'),
          "200": rgbStringToRgb('230 230 230'),
          "300": rgbStringToRgb('212 212 212'),
          "400": rgbStringToRgb('163 163 163'),
          "500": rgbStringToRgb('140 140 140'),
          "600": rgbStringToRgb('115 115 115'),
          "700": rgbStringToRgb('82 82 82'),
          "800": rgbStringToRgb('64 64 64'),
          "900": rgbStringToRgb('38 38 39')
        },
        danger: { // 使用 danger 替代 error
          "50": rgbStringToRgb('254 226 226'),
          "100": rgbStringToRgb('254 202 202'),
          "200": rgbStringToRgb('252 165 165'),
          "300": rgbStringToRgb('248 113 113'),
          "400": rgbStringToRgb('239 68 68'),
          "500": rgbStringToRgb('230 53 53'),
          "600": rgbStringToRgb('220 38 38'),
          "700": rgbStringToRgb('185 28 28'),
          "800": rgbStringToRgb('153 27 27'),
          "900": rgbStringToRgb('127 29 29')
        },
        success: {
          "50": rgbStringToRgb('202 255 232'),
          "100": rgbStringToRgb('162 241 192'),
          "200": rgbStringToRgb('132 211 162'),
          "300": rgbStringToRgb('102 181 132'),
          "400": rgbStringToRgb('72 151 102'),
          "500": rgbStringToRgb('52 131 82'),
          "600": rgbStringToRgb('42 121 72'),
          "700": rgbStringToRgb('32 111 62'),
          "800": rgbStringToRgb('22 101 52'),
          "900": rgbStringToRgb('20 83 45')
        },
        warning: {
          "50": rgbStringToRgb('255 244 236'),
          "100": rgbStringToRgb('255 231 213'),
          "200": rgbStringToRgb('254 205 170'),
          "300": rgbStringToRgb('253 173 116'),
          "400": rgbStringToRgb('251 149 75'),
          "500": rgbStringToRgb('231 120 40'),
          "600": rgbStringToRgb('215 108 31'),
          "700": rgbStringToRgb('180 90 26'),
          "800": rgbStringToRgb('130 68 23'),
          "900": rgbStringToRgb('108 56 19')
        },
        // 设置默认的背景颜色
        background: {
          body: rgbStringToRgb('255 255 255'),
          surface: rgbStringToRgb('242 241 241'),
          level1: rgbStringToRgb('246 246 246'),
          level2: rgbStringToRgb('237 237 237'),
          level3: rgbStringToRgb('230 230 231'),
          tooltip: rgbStringToRgb('55 55 55'),
          backdrop: 'rgba(38, 38, 39, 0.5)'
        },
        // 定义主要文本颜色
        text: {
          primary: rgbStringToRgb('38 38 39'),
          secondary: rgbStringToRgb('82 82 82'),
          tertiary: rgbStringToRgb('115 115 115'),
          icon: rgbStringToRgb('140 140 140')
        }
      }
    },
    dark: {
      palette: {
        primary: {
          "50": rgbStringToRgb('241 246 255'),
          "100": rgbStringToRgb('216 230 255'),
          "200": rgbStringToRgb('193 215 255'),
          "300": rgbStringToRgb('163 194 251'),
          "400": rgbStringToRgb('132 170 241'),
          "500": rgbStringToRgb('86 125 197'),
          "600": rgbStringToRgb('33 70 137'),
          "700": rgbStringToRgb('14 43 96'),
          "800": rgbStringToRgb('6 28 68'),
          "900": rgbStringToRgb('2 14 36')
        },
        // 其他颜色也需要定义...
      }
    }
  },
  fontFamily: {
    body: 'Roboto, sans-serif',
    display: 'Roboto, sans-serif',
    code: 'monospace',
  },
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  }
});