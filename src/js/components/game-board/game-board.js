/**
 * The quiz-application web component module.
 *
 * @author Adam Sjöström <as223js@student.lnu.se>
 * @author Anja Willsund <aw22hs@student.lnu.se>
 * @version 1.1.0
 */

const template = document.createElement('template')
template.innerHTML = `
	<style>
    .game-board {
      display: grid;
      grid-template-columns: 200px 200px 200px;
      grid-template-rows: 200px 200px 200px;
      grid-template-areas: 
      "c1r1 c2r1 c3r1" 
      "c1r2 c2r2 c3r2"
      "c1r3 c2r3 c3r3";
    }
    .c1r1 {
      grid-area: c1r1;
      border: 1px solid black;
    }
    .c2r1 {
      grid-area: c2r1;
      border: 1px solid black;
    }
    .c3r1 {
      grid-area: c3r1;
      border: 1px solid black;
    }
    .c1r2 {
      grid-area: c1r2;
      border: 1px solid black;
    }
    .c2r2 {
      grid-area: c2r2;
      border: 1px solid black;
    }
    .c3r2 {
      grid-area: c3r2;
      border: 1px solid black;
    }
    .c1r3 {
      grid-area: c1r3;
      border: 1px solid black;
    }
    .c2r3 {
      grid-area: c2r3;
      border: 1px solid black;
    }
    .c3r3 {
      grid-area: c3r3;
      border: 1px solid black;
    }
	</style>

  <div class=game-board>
    <div class="c1r1">
      <button>1</button>
    </div>
    <div class="c2r1">
      <button>2</button>
    </div>
    <div class="c3r1">
      <button>3</button>
    </div>
    <div class="c1r2">
      <button>4</button>
    </div>
    <div class="c2r2">
      <button>5</button>
    </div>
    <div class="c3r2">
      <button>6</button>
    </div>
    <div class="c1r3">
      <button>7</button>
    </div>
    <div class="c2r3">
      <button>8</button>
    </div>
    <div class="c3r3">
      <button>9</button>
    </div>
  </div>
`

customElements.define('game-board',
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
