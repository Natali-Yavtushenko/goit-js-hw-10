import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as c}from"./assets/vendor-BbbuE1sJ.js";const h=document.querySelector(".input-text"),o=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");let u=null,a=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<Date.now()?(c.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(o.disabled=!1,u=e)}};f("#datetime-picker",C);o.addEventListener("click",D);function D(){h.disabled=!0,o.disabled=!0,a=setInterval(()=>{const t=Date.now(),e=u-t;if(e<=0){clearInterval(a),c.success({title:"Success",message:"Countdown finished!"});return}b(E(e))},1e3)}function E(t){const d=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:l,seconds:m}}function n(t){return String(t).padStart(2,"0")}function b({days:t,hours:e,minutes:r,seconds:s}){y.textContent=n(t),p.textContent=n(e),S.textContent=n(r),q.textContent=n(s)}
//# sourceMappingURL=1-timer.js.map
