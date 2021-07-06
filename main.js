(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const n=function(){function n(e,o){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"toggleButtonState",(function(){r.buttonElement.disabled=!!r._checkFormValidity()})),t(this,"_checkFormValidity",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),t(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideError(e):r._showError(e)})),t(this,"_hideError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._config.inputErrorClass),t.classList.remove(r._config.errorClass),t.textContent=""})),t(this,"_showError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._config.errorClass)})),this._config=e,this._formElement=o,this._inputList=Array.from(o.querySelectorAll(this._config.inputSelector)),this.buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var o,r;return o=n,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))})),this.toggleButtonState()}}])&&e(o.prototype,r),n}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._token=n}var t,n;return t=e,(n=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._parseResponse(t)}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._parseResponse)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(){t._parseResponse}))}},{key:"getInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then(this._parseResponse)}},{key:"setInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.link})}).then(this._parseResponse)}},{key:"setAva",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._parseResponse)}},{key:"setlike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._parseResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._parseResponse)}}])&&o(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const u=function(){function e(t,n){var o=t.data,r=t.handleCardClick,i=t.currentUser,u=t.deleteButtonClick,a=t.setLike,c=t.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=o,this._name=o.name,this._link=o.link,this._id=o._id,this._likeCounter=o.likes,this._owner=o.owner._id,this._currentUser=i,this._templateSelector=n,this._handleCardClick=r,this._deleteButtonClick=u,this._setLike=a,this._deleteLike=c}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallery__item").cloneNode(!0)}},{key:"_likesNumber",value:function(e){return String(e.likes.length)}},{key:"setLike",value:function(e){this._element.querySelector(".gallery__like").classList.add("gallery__like_active"),this._element.querySelector(".gallery__like_count").textContent=this._likesNumber(e)}},{key:"deleteLike",value:function(e){this._element.querySelector(".gallery__like").classList.remove("gallery__like_active"),this._element.querySelector(".gallery__like_count").textContent=this._likesNumber(e)}},{key:"_LikedByMe",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._currentUser&&e._element.querySelector(".gallery__like").classList.add("gallery__like_active")}))}},{key:"genereteCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".gallery__img");return this._element.querySelector(".gallery__like_count").textContent=this._likeCounter.length,e.src=this._link,e.alt=this._name,this._element.querySelector(".gallery__title").textContent=this._name,this._setListener(),this._LikedByMe(),this._owner===this._currentUser&&this._element.querySelector(".gallery__trash").classList.remove("gallery__trash_hide"),this._element}},{key:"_setListener",value:function(){var e=this;this._element.querySelector(".gallery__img").addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._element.querySelector(".gallery__like").addEventListener("click",(function(){e._element.querySelector(".gallery__like").classList.contains("gallery__like_active")?e._deleteLike():e._setLike()})),this._element.querySelector(".gallery__trash").addEventListener("click",(function(t){e._deleteButtonClick()}))}},{key:"removeCard",value:function(){this._element.remove()}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),c(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),c(this,"_handleButtonClose",(function(){n.close()})),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButton=this._popup.querySelector(".popup__btn-close"),this._popup.addEventListener("mousedown",this._handleOverlayClose),this._closeButton.addEventListener("click",this._handleButtonClose)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleOverlayClose),this._closeButton.removeEventListener("click",this._handleButtonClose)}}])&&a(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(r){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t,n=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),m(y(t=i.call(this,n)),"_getInputValues",(function(){return t._inputList.forEach((function(e){t._inputValues[e.name]="".concat(e.value)})),t._inputValues})),m(y(t),"_submitForm",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),t._handleFormSubmit=o,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__name"),t._buttonSubmit=t._form.querySelector(".popup__btn"),t._inputValues={},t}return t=u,(n=[{key:"loading",value:function(e){this._buttonSubmit.textContent=e?"Cохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){p(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}},{key:"_removeEventListeners",value:function(){p(d(u.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._submitForm)}},{key:"close",value:function(){p(d(u.prototype),"close",this).call(this),this._form.reset()}}])&&f(t.prototype,n),u}(l);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(r){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__img-main"),t._popupTitle=t._popup.querySelector(".popup__img-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupTitle.textContent=t,k(E(u.prototype),"open",this).call(this)}}])&&g(t.prototype,n),u}(l);function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var O=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&L(t.prototype,n),e}();function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._aboutInfo=document.querySelector(n),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._aboutInfo.textContent=e.about,this._avatar.src=e.avatar}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._aboutInfo.textContent}}},{key:"setUserAva",value:function(e){this._avatar.src=e.avatar}}])&&q(t.prototype,n),e}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(o);if(r){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;T(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"submitDelete",value:function(e){this._handleSubmit=e}}])&&R(t.prototype,n),u}(l),A=(document.querySelector(".popup__img-title"),document.querySelector(".popup__img-main"),document.querySelector("#popup-edit-profile")),V=document.querySelector("#popup-place__form"),N=document.querySelector(".profile__btn"),F=(document.querySelector(".popup__btn-close"),document.querySelector("#closePlaceform"),document.querySelector("#popup-img__form")),D=(document.querySelector("#pop-form-edit"),document.querySelector("#popup-place__form_Add"),document.querySelector("#popup-delete")),z=document.querySelector("#popup-avatar"),M=document.querySelector(".profile__add"),J=(document.querySelector(".popup__name"),document.querySelector(".popup__name_js_first-name")),H=document.querySelector(".popup__name_js_job"),G=(document.querySelector(".popup__name_place"),document.querySelector(".popup__name_link"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile__img"),document.querySelector(".gallery")),$=(F.querySelector("#popup-img__close"),Array.from(document.querySelectorAll(".popup")),document.querySelector("#cards"),document.querySelector(".gallery__trash"),document.querySelector(".profile__pen")),K={formSelector:".popup__form",inputSelector:".popup__name",submitButtonSelector:".popup__btn",inputErrorClass:"popup__name_type_error",errorClass:"popup__name-error-active"};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var W=new n(K,A);W.enableValidation();var X=new n(K,V);X.enableValidation();var Y=new n(K,z);Y.enableValidation();var Z=new r("https://mesto.nomoreparties.co/v1/cohort-25","8da154f6-954e-43f0-bf1e-69fea5b0fb49"),ee=new j(".profile__title",".profile__subtitle",".profile__img"),te=new C(F);te.setEventListeners();var ne=new x(D);ne.setEventListeners();var oe=new O({renderer:function(e){oe.addItem(ce(e))}},G);Promise.all([Z.getInfo(),Z.getInitialCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);u=!0);}catch(e){a=!0,r=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];ae=r._id,oe.renderItems(i),ee.setUserInfo(r)})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}));var re=new v({popupSelector:V,handleFormSubmit:function(e){re.loading(!0),Z.addNewCard(e).then((function(e){oe.addItem(ce(e)),re.close()})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))})).finally((function(){re.loading(!1)}))}});re.setEventListeners();var ie=new v({popupSelector:A,handleFormSubmit:function(e){ie.loading(!0),Z.setInfo(e).then((function(e){ee.setUserInfo(e),ie.close()})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))})).finally((function(){ie.loading(!1)}))}});ie.setEventListeners();var ue=new v({popupSelector:z,handleFormSubmit:function(e){ue.loading(!0),Z.setAva(e).then((function(e){ee.setUserAva(e),ue.close()})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))})).finally((function(){ue.loading(!1)}))}});ue.setEventListeners();var ae=null,ce=function(e){var t=new u({data:e,handleCardClick:function(e,t){te.open(e,t)},currentUser:ae,deleteButtonClick:function(){ne.open(),ne.submitDelete((function(){Z.deleteCard(e._id).then((function(){t.removeCard(),ne.close()})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}))}))},setLike:function(){Z.setlike(t._data).then((function(e){t.setLike(e)})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}))},deleteLike:function(){Z.removeLike(t._data).then((function(e){t.deleteLike(e)})).catch((function(e){console.log("возникла ошибка: ".concat(e.status))}))}},"#cards");return t.genereteCard()};N.addEventListener("click",(function(){var e=ee.getUserInfo(),t=e.name,n=e.about;J.value=t,H.value=n,W.toggleButtonState(),ie.open()})),M.addEventListener("click",(function(){X.toggleButtonState(),re.open()})),$.addEventListener("click",(function(){Y.toggleButtonState(),ue.open()}))})();