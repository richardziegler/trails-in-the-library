import {useState, useEffect, useRef} from 'react'
import { ReactReader, ReactReaderStyle, type IReactReaderStyle } from 'react-reader'
import { type Rendition } from 'epubjs'
import { useStore } from '@nanostores/react';
import { $currentTheme } from '../../stores/themeStore';

export default function Reader() {
  const theme = useStore($currentTheme)
  type ITheme = 'light' | 'dark'

  function updateTheme(rendition: Rendition, theme: ITheme) {
    const themes = rendition.themes
    switch (theme) {
      case 'dark': {
        themes.override('color', '#ebebeb')
        themes.override('background', '#141521')
        break
      }
      case 'light': {
        themes.override('color', '#2C2C2C')
        themes.override('background', '#f4f1ed')
        break
      }
    }
  }

  const lightReaderTheme: IReactReaderStyle = {
    ...ReactReaderStyle,
    readerArea: {
      ...ReactReaderStyle.readerArea,
      backgroundColor: '#f4f1ed',
      transition: undefined,
    },
    tocArea: {
      ...ReactReaderStyle.tocArea,
      color: '#f4f1ed',
    },
    arrow: {
      ...ReactReaderStyle.arrow,
      color: '#94886B',
    },
    titleArea: {
      ...ReactReaderStyle.titleArea,
      color: '#94886B',
    },
  }
  
  const darkReaderTheme: IReactReaderStyle = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: 'white',
    },
    arrowHover: {
      ...ReactReaderStyle.arrowHover,
      color: '#ccc',
    },
    readerArea: {
      ...ReactReaderStyle.readerArea,
      backgroundColor: '#000',
      transition: undefined,
    },
    titleArea: {
      ...ReactReaderStyle.titleArea,
      color: '#ccc',
    },
    tocArea: {
      ...ReactReaderStyle.tocArea,
      background: '#111',
    },
    tocButtonExpanded: {
      ...ReactReaderStyle.tocButtonExpanded,
      background: '#222',
    },
    tocButtonBar: {
      ...ReactReaderStyle.tocButtonBar,
      background: '#fff',
    },
    tocButton: {
      ...ReactReaderStyle.tocButton,
      color: 'white',
    },
  }

  const [location, setLocation] = useState<string | number>(0)
  const rendition = useRef<Rendition | undefined>(undefined)

  useEffect(() => {
    if (rendition.current) {
      updateTheme(rendition.current, theme)
    }
  }, [theme])

  return (
    // <div className='' style={{ height: '70vh', width: '90vw' }}>
    <div className='h-lvh w-lvw md:h-[60em] md:w-[70em] md:mt-12'>
      <ReactReader
        title="test"
        url="/books/trails.epub"
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        readerStyles={theme === 'dark' ? darkReaderTheme : lightReaderTheme}
        getRendition={(_rendition) => {
          updateTheme(_rendition, theme)
          rendition.current = _rendition
        }}
        epubOptions = {{
          allowPopups: true,
          allowScriptedContent: true
        }}
      />
    </div>
  )
}
