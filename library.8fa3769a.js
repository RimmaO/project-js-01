var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequiref9fd;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequiref9fd=o),o("bTcpz"),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const a=window.document,l=a.querySelectorAll("a"),i=l.length,r=a.URL;for(let e=0;e<i;e++){let t=l[e].href;r.startsWith(t)&&l[e].classList.add("active")}function s(e){if(e)return e.map((({original_title:e,poster_path:t,vote_average:n,id:o,genre_names:a,release_date:l})=>{let i="";i=t?`${IMG_BASE_URL}${IMG_W400}${t}`:"https://i.ibb.co/C0LFwTh/OIF.jpg";let r="";for(let e=1;e<=5;e++){let t="fa-star-o";2*e<n?t="fa-star":2*e-1<n&&(t="fa-star-half-o"),r+=`<span class="fa star ${t}"> </span>`}return`<li class='cards-list__item hover-cursor' data-id='${o}'>\n              <img\n                class='cards-list__img'\n                src='${i}'\n                alt='${e}'\n                width\n                loading='lazy'\n                data-id='${o}'\n              />\n              <div class='cards-list__wrap'>\n                <div class='cards-list__info'>\n                  <h2 class='cards-list__title'>${e}</h2>\n                  <div class='cards-list_second_line'>\n                    <div class='cards-list__text'>\n                      <p>${a} | ${l}</p>\n                  </div>\n                </div>\n                </div>\n                <div class='star-rate'>\n                  ${r}\n                </div>     \n              </div>\n              </li>\n              `})).join("")}o("eEHR3");o("pbv47");let d=1;const c={libraryList:document.querySelector(".library-list"),loadMoreButton:document.getElementById("loadMore")};function u(){let e=function(){const e=function(){const e=JSON.parse(localStorage.getItem("b90b64a7e05f9e36894001e36eb3b3c7"))||{};return Object.values(e)}();if(!Object.keys(e))return null;const t=s(e.slice(0,9*d));c.loadMoreButton.style="display: none;",e.length>9*d&&(c.loadMoreButton.style="");return t}();e=e?`<ul class="cards__list films">${e}</ul>`:'\n    <div class=" container">\n      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don\'t have any movies at your library.</p>\n<a class="btn-library__link" onclick="window.location.href=\'catalog.html\'">Search movie</a>\n    </div>\n      ',c.libraryList.innerHTML=e}c.libraryList&&u(),c.loadMoreButton&&c.loadMoreButton.addEventListener("click",(()=>{d+=1,u()})),window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),500)};
//# sourceMappingURL=library.8fa3769a.js.map
