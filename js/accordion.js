const accordion=document.querySelector(".accordion");class ItcAccordion{constructor(e,c){this._el="string"==typeof e?document.querySelector(e):e;this._config=Object.assign({alwaysOpen:!0},c),this.addEventListener()}addEventListener(){this._el.addEventListener("click",(e=>{const c=e.target.closest(".accordion__header");if(c){if(!this._config.alwaysOpen){const e=this._el.querySelector(".accordion__item--show");e&&e!==c.parentElement&&e.classList.toggle("accordion__item--show")}c.parentElement.classList.toggle("accordion__item--show")}}))}}accordion&&new ItcAccordion(".accordion",{alwaysOpen:!1});