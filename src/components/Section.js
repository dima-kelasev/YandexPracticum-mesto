export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector
  }

  renderItems(arr) {
    arr.forEach(item => this._renderer(item));
  }

  addItem(item) {
    this._container.prepend(item);
  }

}