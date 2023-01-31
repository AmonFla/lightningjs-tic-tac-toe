import { Lightning } from '@lightningjs/sdk'
import Menu from './menu/Menu.js'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Menu: {
        x: 600,
        y: 400,
        type: Menu,
        items: [
          { label: 'Start new game', action: 'start' },
          { label: 'Continue', action: 'continue' },
          { label: 'About', action: 'about' },
          { label: 'Exit', action: 'exit' },
        ],
      },
    }
  }

  _getFocused() {
    return this.tag('Menu')
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Menu').activeItem })
  }
}
