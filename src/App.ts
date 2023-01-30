import { Lightning, Utils } from '@lightningjs/sdk'

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
    }
  }

  static _states(): Lightning.Component.Constructor<
    Lightning.Component<Lightning.Component.TemplateSpecLoose, Lightning.Component.TypeConfig>
  >[] {
    return []
  }
}
