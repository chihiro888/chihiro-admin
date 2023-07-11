declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      trackBg: string
      tooltipBg: string
      darkPaperBg: string
      lightPaperBg: string
      tableHeaderBg: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      trackBg?: string
      tooltipBg: string
      darkPaperBg?: string
      lightPaperBg?: string
      tableHeaderBg?: string
    }
  }
}

export {}
