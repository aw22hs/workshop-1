/**
 * The quiz-application web component module.
 *
 * @author Adam Sjöström <as223js@student.lnu.se>
 * @author Anja Willsund <aw22hs@student.lnu.se>
 * @version 1.1.0
 */

import '../game-board/game-board.js'

const template = document.createElement('template')
template.innerHTML = `
	<style>
	</style>

	<div>
		<game-board></game-board>
	</div>
`

customElements.define('tic-tac-toe-application',
/**
 *
 */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  })
