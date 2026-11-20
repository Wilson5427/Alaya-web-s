const $ = (selector) => document.querySelector(selector);
const money = (value) => `$${Number(value).toFixed(2)}`;
let cart = JSON.parse(localStorage.getItem("alaya-cart") || "[]");
let activeFilter = "todos";

function saveCart(){ localStorage.setItem("alaya-cart", JSON.stringify(cart)); renderCart(); }
function showToast(message){ const toast=$("#toast"); toast.textContent=message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),2300); }
function priceLabel(price){return price===null||price===undefined?"Precio por confirmar":money(price);}

function renderProducts(){
  const grid=$("#productGrid");
  const items=PRODUCTS.filter(p=>activeFilter==="todos" || p.category===activeFilter);
  grid.innerHTML=items.map(p=>`
    <article class="product-card">
      <div class="product-visual" style="--visual:${p.color}">${p.image ? `<img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy">` : `<span class="product-emoji">${p.emoji}</span>`}</div>
      <div class="product-info"><h3>${p.name}</h3><p>${p.description}</p>
        <div class="product-bottom"><span class="price">${priceLabel(p.price)}</span><button class="add-btn" data-add="${p.id}">Agregar +</button></div>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addProduct(btn.dataset.add)));
}
function renderChoices(){
  $("#flowerChoices").innerHTML=FLOWERS.map(item=>choiceMarkup(item,"flower")).join("");
  $("#extraChoices").innerHTML=EXTRAS.map(item=>choiceMarkup(item,"extra")).join("");
  document.querySelectorAll(".choice-row input").forEach(input=>input.addEventListener("change",()=>{updateBuilderButton();updateBouquetPreview();}));
}
function choiceMarkup(item,type){
  return `<div class="choice-row">
    <label><input type="checkbox" data-type="${type}" data-id="${item.id}"> ${item.image ? `<img class="choice-image" src="${item.image}" alt="" loading="lazy">` : `<span class="choice-emoji">${item.emoji||"✿"}</span>`}${item.name}</label>
    <span class="choice-price">${priceLabel(item.price)}</span>
  </div>`;
}
function addProduct(id){
  const product=PRODUCTS.find(p=>p.id===id); if(!product)return;
  const existing=cart.find(i=>i.id===id && !i.custom);
  if(existing)existing.qty++; else cart.push({id:product.id,name:product.name,price:product.price,qty:1,custom:false});
  saveCart();showToast(`${product.name} agregado al carrito`);
}
function updateBuilderButton(){
  const selected=document.querySelectorAll('#flowerChoices input:checked, #extraChoices input:checked');
  $("#addCustom").disabled=selected.length===0;
}
function updateBouquetPreview(){
  const selected=[...document.querySelectorAll('#flowerChoices input:checked')];
  const blooms=$("#previewBlooms");
  const chosen=selected.map(input=>FLOWERS.find(f=>f.id===input.dataset.id)).filter(Boolean);
  blooms.innerHTML=chosen.length ? chosen.map((flower,i)=>`<div class="preview-flower-tile" style="--delay:${i*.05}s">${flower.image ? `<img src="${flower.image}" alt="${flower.name}">` : `<span>${flower.emoji}</span>`}<small>${flower.name}</small></div>`).join("") : '<span class="preview-empty">Selecciona flores para ver tu diseño ✿</span>';
  const extraCount=document.querySelectorAll('#extraChoices input:checked').length;
  $("#previewCaption").textContent=chosen.length?`${chosen.length} variedad(es) distinta(s) · ${extraCount} complemento(s). Cada flor se muestra una sola vez y sin superponerse.`:"Tu ramo personalizado aparecerá aquí.";
}
function addCustomBouquet(){
  const selected=[...document.querySelectorAll('#flowerChoices input:checked, #extraChoices input:checked')];
  if(!selected.length)return;
  const entries=selected.map(input=>{
    const list=input.dataset.type==="flower"?FLOWERS:EXTRAS;
    return list.find(x=>x.id===input.dataset.id);
  }).filter(Boolean);
  const names=entries.map(x=>x.name);
  const allPriced=entries.every(x=>x.price!==null && x.price!==undefined);
  const price=allPriced?entries.reduce((sum,x)=>sum+x.price,0):null;
  const dedication=$("#dedication").value.trim();
  const details=names.join(", ")+(dedication?` · Dedicatoria: ${dedication}`:"");
  cart.push({id:"custom-"+Date.now(),name:"Ramo personalizado",details,price,qty:1,custom:true});
  saveCart();selected.forEach(x=>x.checked=false);$("#dedication").value="";updateBuilderButton();updateBouquetPreview();
  showToast("Tu diseño se agregó al carrito");
}
function renderCart(){
  $("#cartCount").textContent=cart.reduce((sum,item)=>sum+item.qty,0);
  const container=$("#cartItems");
  if(!cart.length){container.innerHTML='<div class="empty-cart">Tu carrito está esperando flores. ✿</div>';}
  else{
    container.innerHTML=cart.map(item=>`
      <div class="cart-item">
        <div><h4>${item.name}</h4><p>${item.details||""}</p><div class="cart-controls">
          <button data-minus="${item.id}" aria-label="Restar">−</button><span>${item.qty}</span><button data-plus="${item.id}" aria-label="Sumar">+</button>
          <button class="remove-item" data-remove="${item.id}" aria-label="Eliminar">×</button></div></div>
        <strong>${item.price===null||item.price===undefined?"Por confirmar":money(item.price*item.qty)}</strong>
      </div>`).join("");
    container.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>changeQty(b.dataset.minus,-1));
    container.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>changeQty(b.dataset.plus,1));
    container.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x.id!==b.dataset.remove);saveCart();});
  }
  const total=cart.reduce((sum,item)=>sum+(item.price===null||item.price===undefined?0:item.price*item.qty),0);
  const pending=cart.some(item=>item.price===null||item.price===undefined);
  $("#cartTotal").textContent=money(total)+(pending?" + por confirmar":"");
}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();}
function openCart(){ $("#cartDrawer").classList.add("open");$("#cartOverlay").classList.add("show");$("#cartDrawer").setAttribute("aria-hidden","false"); }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartOverlay").classList.remove("show");$("#cartDrawer").setAttribute("aria-hidden","true"); }
function checkout(){
  if(!cart.length){showToast("Agrega algún producto antes de enviar el pedido.");return;}
  const lines=cart.map(item=>`• ${item.name} x${item.qty}${item.details?" ("+item.details+")":""} — ${item.price===null||item.price===undefined?"precio por confirmar":money(item.price*item.qty)}`);
  const total=cart.reduce((sum,item)=>sum+(item.price===null||item.price===undefined?0:item.price*item.qty),0);
  const pending=cart.some(item=>item.price===null||item.price===undefined);
  const message=`¡Hola ALAYA! Quisiera realizar este pedido:\n\n${lines.join("\n")}\n\nTOTAL DE PRECIOS CONFIRMADOS: ${money(total)}${pending?"\nHay productos cuyo precio está por confirmar.":""}\n\n¿Me ayudan a coordinar mi pedido?`;
  window.open(`https://wa.me/593986849646?text=${encodeURIComponent(message)}`,"_blank","noopener");
}
function showOccasion(occasion){
  const occasionNames={"cumpleanos":"Cumpleaños","graduacion":"Graduaciones","madres-padres":"Día de la Madre y del Padre","san-valentin":"San Valentín"};
  const title=occasionNames[occasion]||"Ocasiones especiales";
  $("#catalogo").scrollIntoView({behavior:"smooth"});
  showToast(`Elige un arreglo para ${title} y agrégalo al carrito`);
  document.querySelectorAll("#filters .filter").forEach(x=>x.classList.remove("active"));
  $("#filters .filter[data-filter='ramos']").classList.add("active");
  activeFilter="ramos";renderProducts();
}
document.querySelectorAll("#filters .filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll("#filters .filter").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");activeFilter=btn.dataset.filter;renderProducts();
}));
document.querySelectorAll("[data-occasion]").forEach(btn=>btn.addEventListener("click",()=>showOccasion(btn.dataset.occasion)));
$("#menuToggle").addEventListener("click",()=>{const nav=$("#mainNav");nav.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",nav.classList.contains("open"));});
$("#mainNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#cartOverlay").addEventListener("click",closeCart);
$("#addCustom").addEventListener("click",addCustomBouquet);$("#checkout").addEventListener("click",checkout);
$("#clearCart").addEventListener("click",()=>{cart=[];saveCart();showToast("Carrito vacío");});
$("#year").textContent=new Date().getFullYear();
renderProducts();renderChoices();renderCart();updateBouquetPreview();
