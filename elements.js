/*
Task 1
*/
const templateAvatar = document.createElement('template');
templateAvatar.innerHTML = `
  <style>
	.user-avatar img {
		width: 100px;
    border-radius: 50%;
	}
  </style>
  <div class="user-avatar">
    <img />
  </div>
`;
class userAvatar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(templateAvatar.content.cloneNode(true));
		this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
	}
}
window.customElements.define('user-avatar', userAvatar);

/*
Task 2
*/
class TimeFormatted extends HTMLElement {
	render() { // (1)
		let date = new Date(this.getAttribute('datetime') || Date.now());
		this.innerHTML = new Intl.DateTimeFormat("default", {
			year: this.getAttribute('year') || undefined,
			month: this.getAttribute('month') || undefined,
			day: this.getAttribute('day') || undefined,
			hour: this.getAttribute('hour') || undefined,
			minute: this.getAttribute('minute') || undefined,
			second: this.getAttribute('second') || undefined,
			timeZoneName: this.getAttribute('time-zone-name') || undefined,
		}).format(date);
	}
	connectedCallback() { // (2)
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}
	static get observedAttributes() { // (3)
		return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
	}
	attributeChangedCallback(name, oldValue, newValue) { // (4)
		this.render();
	}
}
setInterval(() => clockTimer.setAttribute('datetime', new Date()), 1000); // (5)

customElements.define("time-formatted", TimeFormatted);

/*
Task 3
*/
const templateCountWords = document.createElement('template');
templateCountWords.innerHTML = `
  <style>
	.word-counter p {
		border-style: solid;
    border-width: 1px;
	}
  textarea {
    width: 25%;
    aspect-ratio: 11/2;
  }
  </style>
  <div class="word-counter">
    <textarea placeholder="write something here"></textarea>
    <button id="count-words-button">Count words</button>
  </div>
`;
class countWords extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(templateCountWords.content.cloneNode(true));
	}

	buttonGetCount() {
		let numberOfWords = this.shadowRoot.querySelector('textarea').value.split(" ").length;
		alert(`Textul contine ${numberOfWords} cuvinte.`);
	}

	connectedCallback() {
		this.shadowRoot.querySelector('#count-words-button').addEventListener('click', () => this.buttonGetCount());
	}

	disconnectedCallback() {

	}
}

customElements.define("word-counter", countWords);