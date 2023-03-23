import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme()
const  customColors = {
    borderColor: {
        light: theme.colors.gray['200'], 
        dark: theme.colors.whiteAlpha['300']
    },
    hoverBg: {
        light: theme.colors.gray['100'], 
        dark: theme.colors.whiteAlpha['200']
    },
    // 侧边栏的卡片背景色
    sideCardBg: {
        light: "rgba(247,249,249,0.5)",
        dark: "rgba(30,39,50,0.2)"
    },
    cardOpaqueBg: {
        light: "rgba(247,249,249,0.7)",
        dark: "rgba(30,39,50,0.3)"
    },
    textColor: {
        light: 'var(--chakra-colors-gray-800)',
        dark: 'var(--chakra-colors-whiteAlpha-900)'
    },
    // used in where var() is not supported
    textColorRGB: {
        light: `#1A202C`,
        dark: `rgba(255,255,255,0.92)`,
    }
}

export default customColors