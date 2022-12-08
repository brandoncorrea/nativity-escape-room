export default class Navigator {
  static navigate = path => window.location.href = path
  static home = () => this.navigate('/')
  static finalChallenge = () => this.navigate('/final-challenge')
  static kingdomKeys = () => this.navigate('/kingdom-keys')
}
