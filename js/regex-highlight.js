class RegexHighlight extends HTMLElement {
  constructor() {
    super();
    this.state = {
      pattern: "",
      flags: "gi",
      rendering: false,
      output: document.createElement("div")
    };
    this.render = this.render.bind(this);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.state.output);
    var style = document.createElement("style");
    this.shadowRoot.appendChild(style);
    style.innerHTML = `
      .highlight { background: yellow }
    `;
    this.scheduleRender();
  }
  
  static get observedAttributes() {
    return [
      "pattern",
      "flags"
    ]
  }
  
  get pattern() {
    return this.state.pattern;
  }
  
  set pattern(value) {
    if (this.state.pattern != value) {
      this.state.pattern = value;
      this.scheduleRender();
      this.setAttribute("pattern", value);
    }
  }
  
  get flags() {
    return this.state.flags;
  }
  
  set flags(value) {
    if (this.state.flags != value) {
      this.state.flags = value;
      this.scheduleRender();
      this.setAttribute("flags", value);
    }
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value;
  }
  
  scheduleRender() {
    if (this.state.rendering === false) this.state.rendering = requestAnimationFrame(this.render);
  }
  
  getTextContent() {
    return this.innerHTML
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/&/g, "&amp;");
  }
  
  render() {
    this.state.rendering = false;
    var text = this.getTextContent();
    var { pattern, flags } = this.state;
    this.valid = true;
    this.matched = false;
    try {
      var re = new RegExp(pattern, flags);
    } catch (err) {
      return this.valid = false; 
    }
    var out = "";
    var count = 0;
    var result = re.exec(text);
    var end = 0;
    if (result) do {
      if (count++ > 100) return;
      var match = result[0];
      if (!match) break;
      out += text.slice(end, result.index);
      out += `<span class="highlight">${match}</span>`;
      end = result.index + match.length;
      if (!re.global) break;
    } while (result = re.exec(text, end));
    out += text.slice(end);
    this.state.output.innerHTML = out;
    this.matched = true;
  }
  
}

customElements.define("regex-highlight", RegexHighlight);