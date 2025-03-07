var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{r:()=>k});var n,o="https://js.stripe.com",r="".concat(o,"/v3"),a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,s=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},c=null,d=null,m=null,y=!1,u=function(){return n||(n=(e=null,null!==c?c:(c=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e,t=document.querySelectorAll('script[src^="'.concat(o,'"]')),n=0;n<t.length;n++){var r=t[n];if(e=r.src,a.test(e)||s.test(e))return r}return null}();if(r&&e)console.warn(i);else if(r){if(r&&null!==m&&null!==d){var c;r.removeEventListener("load",m),r.removeEventListener("error",d),null===(c=r.parentNode)||void 0===c||c.removeChild(r),r=l(e)}}else r=l(e);m=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error("Stripe.js not available"))}}(t,n),d=function(e){return function(){e(new Error("Failed to load Stripe.js"))}}(n),r.addEventListener("load",m),r.addEventListener("error",d)}catch(e){return void n(e)}else t(null)}))).catch((function(e){return c=null,Promise.reject(e)}))).catch((function(e){return n=null,Promise.reject(e)})));var e};Promise.resolve().then((function(){return u()})).catch((function(e){y||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];y=!0;var o=Date.now();return u().then((function(e){return function(e,t,n){if(null===e)return null;var o=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"5.7.0",startTime:t})}(o,n),o}(e,t,o)}))};const f={modalOverlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2147483647,backdropFilter:"blur(4px)",overflow:"auto",padding:"20px",isolation:"isolate"},modalContent:{backgroundColor:"white",padding:"0",borderRadius:"16px",width:"90%",maxWidth:"500px",maxHeight:"90vh",position:"relative",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",animation:"modalSlideIn 0.3s ease-out",margin:"auto",display:"flex",flexDirection:"column",isolation:"isolate"},modalHeader:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"1.2rem 1.5rem",backgroundColor:"var(--payment-primary-color, #0070f3)",borderRadius:"16px 16px 0 0",color:"var(--payment-secondary-color, #fff)",transition:"background-color 0.3s ease"},title:{margin:"0",fontSize:"1.5rem",color:"var(--payment-secondary-color, #fff)",fontWeight:600,letterSpacing:"-0.01em"},closeButton:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:"var(--payment-secondary-color, #fff)",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",transition:"background-color 0.2s ease, transform 0.1s ease","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.2)",transform:"scale(1.1)"},"&[disabled]":{opacity:0,visibility:"hidden",pointerEvents:"none"}},paymentElement:{padding:"2.5rem",background:"#fafafa",flex:1,overflow:"auto",minHeight:"200px"},payButton:{width:"100%",padding:"1rem 1.5rem",backgroundColor:"var(--payment-primary-color, #0070f3)",color:"var(--payment-secondary-color, #fff)",border:"none",borderRadius:"0 0 16px 16px",fontSize:"1rem",fontWeight:500,cursor:"pointer",transition:"background-color 0.2s ease, transform 0.1s ease",position:"sticky",bottom:0,borderTop:"1px solid #eee"},loader:{container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:"2rem"},spinner:{width:"40px",height:"40px",border:"3px solid #f3f3f3",borderTop:"3px solid #0070f3",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:"1rem"},text:{color:"#666",margin:"0",fontSize:"0.9rem"}},statusModal:{container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",textAlign:"center",animation:"statusSlideIn 0.6s ease-out",backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},icon:{wrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"80px",height:"80px",marginBottom:"1.5rem",borderRadius:"50%"},success:{backgroundColor:"rgba(76, 175, 80, 0.1)",color:"#4CAF50"},error:{backgroundColor:"rgba(255, 82, 82, 0.1)",color:"#FF5252"}},title:{margin:"0 0 0.5rem 0",fontSize:"1.5rem",fontWeight:"600"},titleSuccess:{color:"#4CAF50"},titleError:{color:"#FF5252"},message:{margin:"0",fontSize:"1rem",color:"#666",lineHeight:"1.5"}},animations:"\n    @keyframes modalSlideIn {\n      from {\n        opacity: 0;\n        transform: translateY(-20px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n    @keyframes spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n    @keyframes statusSlideIn {\n      from {\n        opacity: 0;\n        transform: translateY(20px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n    @keyframes iconScale {\n      0% {\n        transform: scale(0);\n      }\n      50% {\n        transform: scale(1.2);\n      }\n      100% {\n        transform: scale(1);\n      }\n    }\n    @keyframes checkmark {\n      0% {\n        stroke-dashoffset: 100;\n      }\n      100% {\n        stroke-dashoffset: 0;\n      }\n    }\n    .success-checkmark {\n      animation: iconScale 0.5s ease-out, checkmark 0.8s ease-out 0.5s forwards;\n      stroke-dasharray: 100;\n      stroke-dashoffset: 100;\n    }\n  ",paymentDetails:{display:"flex",flexDirection:"column",gap:"0.25rem"},companyName:{fontSize:"1.25rem",fontWeight:"600",letterSpacing:"-0.02em",margin:0,flex:1,color:"var(--payment-secondary-color, #fff)"},headerTopRow:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},headerBottomRow:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",opacity:.9,color:"var(--payment-secondary-color, #fff)"},paymentInfo:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9rem",flexDirection:"row",color:"var(--payment-secondary-color, #fff)"},orderId:{fontWeight:"500",color:"var(--payment-secondary-color, #fff)"},amountDivider:{color:"var(--payment-secondary-color, #fff)",opacity:.5},amount:{fontWeight:"600",color:"var(--payment-secondary-color, #fff)"}};function h(e,t){const n=document.getElementById("payment-element"),o="64px",r=`\n    <div class="status-modal">\n      <div class="status-icon success">\n        <svg viewBox="0 0 52 52" width="${o}" height="${o}">\n          <circle class="success-circle" cx="26" cy="26" r="25" fill="none" stroke="#4CAF50" stroke-width="2"/>\n          <path class="success-checkmark" fill="none" stroke="#4CAF50" stroke-width="3" \n            d="M14.1 27.2l7.1 7.2 16.7-16.8"\n          />\n        </svg>\n      </div>\n      <h3>Payment Successful!</h3>\n      <p>${t||"Your payment has been processed successfully."}</p>\n    </div>\n  `,a=`\n    <div class="status-modal">\n      <div class="status-icon error">\n        <svg viewBox="0 0 52 52" width="${o}" height="${o}">\n          <circle cx="26" cy="26" r="25" fill="none" stroke="#FF5252" stroke-width="2"/>\n          <path stroke="#FF5252" stroke-width="3" \n            d="M16 16 L36 36 M36 16 L16 36"\n          />\n        </svg>\n      </div>\n      <h3>Payment Failed</h3>\n      <p>${t||"There was an error processing your payment."}</p>\n    </div>\n  `;if(!document.getElementById("payment-animations")){const e=document.createElement("style");e.id="payment-animations",e.textContent=f.animations,document.head.appendChild(e)}n.innerHTML="success"===e?r:a;const s=n.querySelector(".status-modal"),i=n.querySelector(".status-icon"),l=n.querySelector("h3"),c=n.querySelector("p");Object.assign(s.style,f.statusModal.container),Object.assign(i.style,f.statusModal.icon.wrapper),Object.assign(i.style,"success"===e?f.statusModal.icon.success:f.statusModal.icon.error),Object.assign(l.style,f.statusModal.title),Object.assign(l.style,"success"===e?f.statusModal.titleSuccess:f.statusModal.titleError),Object.assign(c.style,f.statusModal.message)}function g(){const e=document.getElementById("payment-container");e&&e.remove();const t=document.getElementById("pay-now");t&&t.remove()}async function v(e,{amount:t,currency:n,metadata:o}){try{const n={amount:t,externalUserId:o.externalUserId||"CUST_TEST",metadata:{redirectUrl:e.redirectUrl,...o}},r=await fetch("http://localhost:3000/v1/payments/orders",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":e.apiKey},body:JSON.stringify(n)});if(!r.ok){const t=await r.json(),n=t.message||"Server error occurred";console.error("❌ Payment Intent Creation Failed:",t),e.lastError={message:n},h("error",n);const o=document.getElementById("payment-container");return o&&o.failedPayment(),null}const a=await r.json();if(!a.data?.provider_data?.client_secret){h("error",a.error?.message||"Invalid payment intent response");const e=document.getElementById("payment-container");return e&&e.failedPayment(),null}return e.currentOrderId=n.metadata.orderId,a.data.provider_data.client_secret}catch(e){h("error",e.message);const t=document.getElementById("payment-container");return t&&t.failedPayment(),null}}var b,w,x,S,C=function(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)};class k{constructor({apiKey:e,theme:t={},metadata:n={},redirectUrl:o,companyName:r,...a}){if(b.add(this),w.set(this,void 0),!e)throw new Error("apiKey is required");C(this,b,"m",x).call(this),this.apiKey=e,this.stripePublicKey="pk_test_51QrGovFoGtrsxr3crRfECTiOzMnpW8EStI91saYvWBOJ43PEybeVxht0AAMLO5fql9p4yUlIlM25U4e38TkNh2Y500gRDudMBy",this.stripeSecretKey="sk_test_51QrGovFoGtrsxr3cRUkXClgA8gDeWxyG6KzoYcGpntEGDjaBBtytfpjeBLhHrHjLabQ3Ny3cx0capfm6NG0MW4w600M50wIkvW",this.companyName=r||"Cygnus",this.redirectUrl=o,this.theme={primaryColor:t.primaryColor||"#0070f4",backgroundColor:t.backgroundColor||"#f5f5f5",fontColor:t.fontColor||"#222",buttonText:t.buttonText||"Proceed to Payment",buttonTextColor:t.buttonTextColor||"#fff",secondaryColor:t.secondaryColor||"#fff",zIndex:t.zIndex||"10000"},this.stripe=null,this.elements=null,this.paymentIntent=null,this.eventListeners={},this.metadata=n}async _getAuthHeaders(){return{Authorization:`Bearer ${C(this,b,"m",S).call(this,C(this,w,"f"))}`,"X-api-key":this.apiKey}}async initializeStripe(){this.stripe||(this.stripe=await p(this.stripePublicKey))}applyTheme(){document.body.style.backgroundColor=this.theme.backgroundColor,document.body.style.color=this.theme.fontColor;const e=document.getElementById("pay-now");e&&(e.style.backgroundColor=this.theme.primaryColor,e.style.color=this.theme.buttonTextColor,e.innerText=this.theme.buttonText,e.style.width="100%",e.style.padding="15px",e.style.fontSize="18px",e.style.border="none",e.style.cursor="pointer")}startPayment(e){return async function(e,{amount:t,externalUserId:n,currency:o="usd",metadata:r={}}){try{if(await async function(e){e.stripe||(e.stripe=await p(e.stripePublicKey))}(e),e.applyTheme(),g(),function(e,t){g();const n=new Intl.NumberFormat("en-US",{style:"currency",currency:t.currency||"USD"}).format(t.amount),o=function(e,t,{orderId:n,amount:o}){const r=document.documentElement;r.style.setProperty("--payment-primary-color",e.theme?.primaryColor||"#0070f3"),r.style.setProperty("--payment-secondary-color",e.theme?.secondaryColor||"#fff"),window.getComputedStyle(document.body);const a=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${a}px`,document.body.style.width="100%",document.body.style.overflowY="hidden";const s=document.createElement("div");s.id="payment-container",s.style.position="fixed",s.style.inset="0",s.style.zIndex="2147483647";const i=`\n    <div class="payment-modal-overlay">\n      <div class="payment-modal-content">\n        <div class="payment-modal-header">\n          <div class="header-top-row">\n            <div class="company-name">${e.companyName||"Merchant"}</div>\n            <button class="payment-modal-close" aria-label="Close">×</button>\n          </div>\n          <div class="payment-info">\n            <div class="amount">Amount: ${o}</div>\n          </div>\n        </div>\n        <div id="payment-element">\n          <div id="payment-loader">\n            <div class="loader"></div>\n            <p>Initializing payment...</p>\n          </div>\n        </div>\n        <button id="pay-now" disabled>Processing...</button>\n      </div>\n    </div>\n  `;s.innerHTML=i;const l=s.querySelector(".payment-modal-overlay"),c=s.querySelector(".payment-modal-content"),d=s.querySelector(".payment-modal-header"),m=s.querySelector(".header-top-row"),y=s.querySelector(".payment-modal-close"),u=s.querySelector(".company-name"),p=s.querySelector(".amount"),h=s.querySelector("#payment-element"),g=s.querySelector("#payment-loader"),v=s.querySelector("#pay-now");Object.assign(l.style,f.modalOverlay),Object.assign(c.style,f.modalContent),Object.assign(d.style,f.modalHeader),Object.assign(m.style,f.headerTopRow),Object.assign(y.style,f.closeButton),Object.assign(u.style,f.companyName),Object.assign(p.style,f.amount),Object.assign(h.style,f.paymentElement),Object.assign(g.style,f.loader.container),Object.assign(g.querySelector(".loader").style,f.loader.spinner),Object.assign(g.querySelector("p").style,f.loader.text),Object.assign(v.style,f.payButton);const b=document.createElement("style");b.textContent=f.animations,document.head.appendChild(b);const w=()=>{document.removeEventListener("keydown",C,!0),y.removeEventListener("click",x,!0),l.removeEventListener("click",S,!0),document.body.style.position="",document.body.style.top="",document.body.style.width="",document.body.style.overflowY="",window.scrollTo(0,a),s.remove();const n=document.querySelector("style[data-modal-styles]");n&&n.remove(),e&&"function"==typeof e.triggerEvent&&e.triggerEvent("modalClosed"),"function"==typeof t&&t()},x=e=>{e.stopPropagation(),w()},S=e=>{e.target===l&&(e.stopPropagation(),w())},C=e=>{"Escape"===e.key&&(e.stopPropagation(),w())};return y.addEventListener("click",x,!0),l.addEventListener("click",S,!0),document.addEventListener("keydown",C,!0),s.enableCloseButton=()=>{const e=s.querySelector(".payment-modal-close"),t=s.querySelector(".payment-modal-overlay");e.disabled=!1,e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto",t.style.pointerEvents="auto",document.addEventListener("keydown",C,!0)},s.disableCloseButton=()=>{const e=s.querySelector(".payment-modal-close"),t=s.querySelector(".payment-modal-overlay");e.disabled=!0,e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none",t.style.pointerEvents="none",document.removeEventListener("keydown",C,!0)},v.disabled=!0,v.innerText="Processing...",v.onclick=()=>e.confirmPayment(),s.enablePayButton=()=>{v.disabled=!1,v.innerText="Pay Now",s.enableCloseButton()},s.disablePayButton=()=>{v.disabled=!0,v.innerText="Processing...",s.disableCloseButton()},s.failedPayment=e=>{v.disabled=!1,v.innerText="Go Back",v.style.backgroundColor="#ff4444",v.style.color="#fff";const t=s.querySelector(".payment-modal-header"),n=s.querySelector(".company-name"),o=s.querySelector(".amount");t.style.backgroundColor="#ff4444",t.style.color="#fff",n.style.color="#fff",o.style.color="#fff",v.onclick=()=>{e?window.location.href=e:w()},s.enableCloseButton()},s.successPayment=e=>{v.disabled=!1,v.innerText="Redirecting...",v.style.backgroundColor="#4CAF50",v.style.color="#fff";const t=s.querySelector(".payment-modal-header"),n=s.querySelector(".company-name"),o=s.querySelector(".amount");t.style.backgroundColor="#4CAF50",t.style.color="#fff",n.style.color="#fff",o.style.color="#fff",v.onclick=()=>{e?window.location.href=e:w()},s.enableCloseButton()},s.closeModal=()=>{w()},s}(e,null,{orderId:t.orderId||e.currentOrderId||"N/A",amount:n});document.body.appendChild(o)}(e,{...r,amount:t,currency:o}),console.log("🔍 Metadata:",r),e.paymentIntent=await v(e,{amount:t,currency:o,metadata:r}),console.log("🔍 Received PaymentIntent Response:",e.paymentIntent),!e.paymentIntent){const t=e.lastError?.message||"Internal server error";return e.triggerEvent("paymentFailed",{error:t}),void h("error",t)}e.elements=e.stripe.elements({clientSecret:e.paymentIntent});const n=e.elements.create("payment");n.mount("#payment-element"),n.on("ready",(()=>{document.getElementById("payment-container").enablePayButton()}))}catch(t){console.error("❌ Payment Initialization Failed:",t),e.triggerEvent("paymentFailed",{error:t.message}),h("error",t.message);const n=document.getElementById("payment-container");n&&n.failedPayment()}}(this,e)}confirmPayment(){return async function(e){if(!e.elements)return void console.error("Stripe Elements not initialized properly");const t=document.getElementById("payment-container");t.disablePayButton(),t.disableCloseButton(),console.log("⏳ Confirming Payment...");const n=await e.stripe.confirmPayment({elements:e.elements,confirmParams:{},redirect:"if_required"});n.error?(console.error("❌ Payment Failed:",n.error.message),e.triggerEvent("paymentFailed",{error:n.error.message}),h("error",n.error.message),t.failedPayment(),t.enableCloseButton()):"succeeded"===n.paymentIntent?.status?(console.log("✅ Payment Successful:",n.paymentIntent),e.triggerEvent("paymentSuccess",n.paymentIntent),h("success"),t.successPayment(),setTimeout((()=>{e.redirectUrl?(window.open(e.redirectUrl,"_blank"),t.closeModal()):t.closeModal()}),2e3)):(console.warn("⚠️ Payment not completed. Status:",n.paymentIntent?.status),h("error","Payment not completed. Please try again."),t.enablePayButton(),t.enableCloseButton())}(this)}async processCryptoPurchase(e){return async function(e,t){console.log("⏳ Simulating Crypto Purchase...");const n=document.getElementById("payment-container");setTimeout((()=>{if(Math.random()>.1){const o={paymentIntentId:t.id,cryptoAmount:.95,conversionRate:.95,transactionHash:"0xmockhash123",status:"completed"};console.log("✅ Crypto Mocked Successfully!",o),h("cryptoSuccess",o),n.successPayment(),e.triggerEvent("cryptoDeposited",o)}else console.error("❌ Crypto Purchase Failed (Mock)"),h("error","Failed to process crypto purchase"),e.triggerEvent("cryptoFailed",{error:"Mock crypto failure"}),n.failedPayment()}),2e3)}(this,e)}async createPaymentIntent({amount:e,currency:t,metadata:n}){return v(this,{amount:e,currency:t,metadata:n})}on(e,t){this.eventListeners[e]||(this.eventListeners[e]=[]),this.eventListeners[e].push(t)}triggerEvent(e,t){this.eventListeners[e]&&this.eventListeners[e].forEach((e=>e(t)))}}w=new WeakMap,b=new WeakSet,x=function(){!function(e,t,n,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===o?r.call(e,n):r?r.value=n:t.set(e,n)}(this,w,[115,101,99,114,101,116,95,99,121,103,110,117,115,95,49,50,51].reduce(((e,t)=>e+String.fromCharCode(1^t)),""),"f")},S=function(e){if(!e)return null;const t=(new TextEncoder).encode(C(this,w,"f")),n=new Uint8Array(e).map(((e,n)=>e^t[n%t.length]));return(new TextDecoder).decode(n)};var E=t.r;export{E as MerchantSDK};