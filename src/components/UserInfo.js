export class UserInfo {
  constructor(nameSelector, subSelector) {
    this._UserName = document.querySelector(nameSelector);
    this._aboutInfo = document.querySelector(subSelector);
  }

  setUserInfo(data) {
    this._UserName.textContent = data.name;
    this._aboutInfo.textContent = data.link;
  }

  getUserInfo() {
   return {
     name: this._UserName.textContent,
     about: this._aboutInfo.textContent}
  }
}