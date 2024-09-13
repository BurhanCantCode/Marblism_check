import { theme } from 'antd'
import { Inter } from 'next/font/google'

const interFont = Inter({
  subsets: ['latin'],
})

export const Theme = {
  algorithm: theme.darkAlgorithm,
  token: {
    // Colors
    colorPrimary: '#00a1ec',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorTextBase: 'white',
    colorLink: '#00a1ec',
    colorBgBase: 'black',
    colorBgContainer: 'black',
    colorBorder: '#3f3f45',
    colorBorderSecondary: '#27272a',
    colorSplit: 'rgba(255, 255, 255, 0.07)',

    // Typography
    fontFamily: `${interFont.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    linkDecoration: 'underline',

    //Form
    controlItemBgActive: '#27272a',
    controlOutline: 'rgba(255, 255, 255, 0.15)',
    controlHeight: 36,
    controlHeightSM: 32,

    // Layout
    padding: 16,
    boxShadow:
      '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',

    borderRadius: 6,
    lineType: 'solid',
    lineWidth: 1,
    motion: false,
  },
  components: {
    Form: {
      itemMarginBottom: '22px',
    },
    Layout: {
      headerBg: 'black',
      footerBg: 'black',
      bodyBg: 'black',
      siderBg: '#141414',
    },
    Menu: {
      activeBarBorderWidth: 0,
      itemHeight: 30,
      //topbar menu items
      horizontalItemSelectedColor: 'white',
      horizontalItemSelectedBg: 'transparent',
      //leftbar menu items
      itemSelectedColor: 'white',
      itemSelectedBg: 'transparent',
      itemActiveBg: 'transparent',
      //topbar and leftbar menu items
      itemHoverColor: 'white',
      itemHoverBg: 'transparent',
      itemColor: '#909090',
      itemBg: 'transparent',
      iconMarginInlineEnd: 8,
      iconSize: 16,
    },
    Button: {
      paddingInlineSM: 11,
      colorTextLightSolid: 'black',
      primaryColor: 'black',
      fontWeight: 500,
    },
  },
}
