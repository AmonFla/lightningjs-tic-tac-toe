import { Lightning, Utils } from '@lightningjs/sdk'
import Splash from './Splash.js'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'pixel', url: Utils.asset('fonts/pixel.ttf'), descriptor: {} }]
  }

  static _template(): Lightning.Component.Template<Lightning.Component.TemplateSpecLoose> {
    return {
      rect: true,
      color: 0xff000000,
      w: 1920,
      h: 1080,
      Splash: {
        type: Splash,
        signals: { loaded: true },
        aplha: 0,
      },
    }
  }

  static _states(): Lightning.Component.Constructor<
    Lightning.Component<Lightning.Component.TemplateSpecLoose, Lightning.Component.TypeConfig>
  >[] {
    return []
  }
}
