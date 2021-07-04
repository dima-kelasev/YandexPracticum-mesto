export class UserInfo {
  constructor(nameSelector, subSelector, avatar) {
    this._UserName = document.querySelector(nameSelector);
    this._aboutInfo = document.querySelector(subSelector);
    this._avatar = document.querySelector(avatar);
  }

  setUserInfo(data) {
    this._UserName.textContent = data.name;
    this._aboutInfo.textContent = data.about;
  }

  getUserInfo() {
   return {
     name: this._UserName.textContent,
     about: this._aboutInfo.textContent}
  }

  setUserAva(data) {
    this._avatar.src = data.avatar
  }

  getId() {
    return {
      user: this.element.textContent
    }
  }
}