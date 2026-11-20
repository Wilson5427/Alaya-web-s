# ALAYA Floristería — sitio web

## Cómo abrir el proyecto
1. Descarga y descomprime `alaya-floristeria.zip`.
2. Abre Visual Studio Code.
3. Selecciona **Archivo > Abrir carpeta** y elige `alaya-floristeria`.
4. Abre `index.html` en tu navegador. También puedes instalar la extensión **Live Server** y pulsar "Go Live".

## Archivos
- `index.html`: estructura y contenido.
- `css/styles.css`: estilos y diseño adaptable a celular.
- `js/catalog.js`: catálogo y precios editables.
- `js/app.js`: carrito, filtros, personalizador y envío de pedido a WhatsApp.

## Importante: actualizar precios
En `js/catalog.js`:
- Los precios confirmados están cargados: ramo de rosas $20 y flores Magican Pink $25.
- Los precios de flores individuales, peluches y adornos están como `null` porque todavía no se proporcionaron. Cuando tengas el precio, cambia `price: null` por un número, por ejemplo `price: 2.50`.
- Puedes agregar productos nuevos copiando un objeto dentro de `PRODUCTS`, `FLOWERS` o `EXTRAS`.

## Datos del negocio
El teléfono de WhatsApp está configurado como `593986849646` (código de Ecuador + número sin el cero inicial).
Dirección: calle Bolívar Mejía, San Gabriel, Montúfar, Carchi, Ecuador.
Horario mostrado: lunes a viernes 08:00–17:30 y sábados 08:00–15:00. Se dejó domingo como cerrado por confirmar.

## Alcance
Esta es una primera versión funcional de tienda en el navegador. El carrito se guarda en el navegador del cliente y el botón de pedido abre WhatsApp con el resumen. No incluye pagos en línea, cuentas reales, base de datos ni panel administrativo.

Actualización: el personalizador permite seleccionar flores y complementos aunque sus precios estén pendientes, muestra una vista previa ilustrada del ramo y los añade al carrito. Los productos sin precio se muestran como 'Por confirmar' y no se suman al total hasta configurar su precio. Las tarjetas de ocasiones llevan al catálogo de ramos. La dirección abre una búsqueda de Google Maps para Calle Bolívar Mejía, San Gabriel, Montúfar, Carchi.

IMÁGENES EN LUGAR DE EMOJIS
El catálogo y el personalizador usan ilustraciones SVG locales en assets/img, que funcionan sin internet.
Para usar FOTOGRAFÍAS reales: copia tus JPG/PNG a assets/img y cambia el campo image del producto en js/catalog.js (ejemplo: assets/img/rosas.jpg).
No se han inventado fotografías de productos reales de la tienda.

FOTOS REALES: Las fotografías se guardan en assets/fotos. No se incluyó la foto con información bancaria. Los productos nuevos tienen precio por confirmar.
