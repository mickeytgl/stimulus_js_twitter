import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "body", "characterCount" ]

  initialize() {
    this.update()
  }

  update() {
    var count = this.bodyTarget.value.length
    if (count == 1 )
      var message = "1 character"
    else {
      var message = `${count} characters`
    }

    this.characterCountTarget.textContent = message
  }
}