import {TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/blocks'
import img1 from './assets/1.jpg'
import { css } from './utils'

export const model = [
  new TitleBlock( 'Заголовок первого уровня', {
    tag: 'h1',
    styles: css({
      color: '#с9с9сс9',
      'text-align': 'center',
      'margin-bottom': '1rem',
    })
    // styles: 'color: #с9с9сс9; text-align: center; margin-bottom: 1rem'
  }),
  new TextBlock ('Lorem ipsum dolor sit amet consectetur adipisicing elit.', {
    styles: 'color: #000; padding: 1rem;'
  }),
  new TextColumnsBlock ([
    '1 text',
    '2 text',
    '3 text',
    '4 text'
  ], {
    styles: 'padding: 1rem;'
  }),
  new ImageBlock(img1, {
    imageStyles: 'height: 300px; width: 600px; object-fit: cover;',
    alt: 'Alt text',
    styles: 'display: flex; justify-content: center;'
  })
]