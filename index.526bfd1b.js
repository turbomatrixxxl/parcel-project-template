!function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=function(){e.classList.toggle("is-open")};t.addEventListener("click",r),n.addEventListener("click",r)})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(e){for(var t=function(e){if(!1===(t=this.parentElement).classList.contains("card-carousel"))var t=t.parentElement;var n=parseInt(t.dataset.rotateInt||0);this.classList.contains("counterclockwise")?n+=1:this.classList.contains("clockwise")&&(n-=1),t.dataset.rotateInt=n,d(t)},n=0;n<e.length;n++){var r=e[n],a=r.querySelector(".inner-carousel"),o=r.querySelectorAll(".inner-carousel > div").length,c=a.clientWidth,s=1.7*Math.round(c/2/Math.tan(Math.PI/o));a.style.transform="rotateY(0deg) translateZ(-"+s+"px)";var l=r.querySelector(".button-spin.counterclockwise");null!==l&&l.addEventListener("click",t,!1);var i=r.querySelector(".button-spin.clockwise");null!==i&&i.addEventListener("click",t,!1),d(r)}function d(e){var n=parseInt(e.dataset.rotateInt||0),r=e.querySelector(".inner-carousel"),a=e.querySelectorAll(".inner-carousel > div"),o=a.length,c=r.clientWidth,s=1.7*Math.round(c/2/Math.tan(Math.PI/o)),l=360/o;for(var i=0;i<o;i++){var d=n*l+i*l,u=a[i];u.style.transform="rotateY("+d+"deg) translateZ("+s+"px) rotateY("+(-d).toString()+"deg)",u.classList.remove("clockwise"),u.classList.remove("front"),u.classList.remove("counterclockwise"),u.removeEventListener("click",t,!1);var m=d%360;0===m?u.classList.add("front"):m===l||m===-360+l?(u.classList.add("clockwise"),u.addEventListener("click",t,!1)):m!==360-l&&m!==0-l||(u.classList.add("counterclockwise"),u.addEventListener("click",t,!1))}}}(document.querySelectorAll(".card-carousel"));var e=document.querySelector(".wrapper"),t=document.querySelector(".container"),n=(e.querySelectorAll(".child"),document.querySelector(".left-arrow"),document.querySelector(".right-arrow"),0),r=0;t.addEventListener("click",(function(t){e.style.transition=".5ms ease all",t.target.classList.contains("left-arrow")&&(r=-1,n+=20,e.style.transform="translateX(".concat(n,"%)")),t.target.classList.contains("right-arrow")&&(r=1,n-=20,e.style.transform="translateX(".concat(n,"%)"))}));e.addEventListener("transitionend",(function(){e.style.transition="none",n=0,1===r&&(e.appendChild(e.firstElementChild),e.style.transform="translateX(0%)"),-1===r&&(e.style.transform="translateX(0%)",e.prepend(e.lastElementChild))}))}();
//# sourceMappingURL=index.526bfd1b.js.map
