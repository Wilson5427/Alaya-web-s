/*
  CATÁLOGO DE ALAYA
  Los precios null son productos añadidos al catálogo cuyo precio real debe confirmar la floristería.
  Para fijar un precio, cambia null por un número (ejemplo: 3.50).
*/
const PRODUCTS = [
  { id: "ramo-rosas", name: "Ramo de rosas", description: "Un clásico para expresar lo que sientes.", price: 20, category: "ramos", emoji: "💐", image: "rosas-fucsias.jpg", color: "#f6dce7" },
  { id: "magican-pink", name: "Flores Magican Pink", description: "Un detalle delicado y lleno de color.", price: 25, category: "flores", emoji: "🌸", image: "ramo-fucsia-mixto.jpg", color: "#f9e2ed" },
  { id: "ramo-romantico", name: "Ramo romántico", description: "Una combinación especial para sorprender.", price: 12, category: "ramos", emoji: "💗", image: "rosas-vino.jpg", color: "#f8dce9" },
  { id: "ramo-silvestre", name: "Ramo silvestre", description: "Flores variadas con un estilo natural.", price: 12, category: "ramos", emoji: "💐", image: "ramo-elegante-mixto.jpg", color: "#e8f0df" },
  { id: "ramo-girasoles", name: "Ramo de girasoles", description: "Alegría y luz para cualquier ocasión.", price: 12, category: "ramos", emoji: "🌻", image: "girasoles-amarillos.jpg", color: "#fff0c9" },
  { id: "ramo-mixto", name: "Ramo multicolor", description: "Una mezcla alegre de flores de temporada.", price: 10, category: "ramos", emoji: "🌷", image: "girasoles-rosas.jpg", color: "#f8e2db" },
  { id: "rosas-individuales", name: "Rosas individuales", description: "Elige la cantidad para tu detalle.", price: 15, category: "flores", emoji: "🌹", image: "rosas-rosadas.jpg", color: "#f6dce7" },
  { id: "girasoles", name: "Girasoles", description: "Flores luminosas y llenas de energía.", price: 11, category: "flores", emoji: "🌻", image: "girasoles-amarillos.jpg", color: "#fff0c9" },
  { id: "tulipanes", name: "Tulipanes", description: "Elegancia y delicadeza en cada flor.", price: 10, category: "flores", emoji: "🌷", image: "tulipanes.jpg", color: "#f8e2db" },
  { id: "margaritas", name: "Margaritas", description: "Un toque fresco y alegre.", price: 12, category: "flores", emoji: "🌼", image: "matgaritas.jpg", color: "#f7f0d8" },
  { id: "lirios", name: "Lirios", description: "Flores elegantes para regalar.", price: 12, category: "flores", emoji: "🪷", image: "lirios-amarillos.jpg", color: "#eee3f5" },
  { id: "claveles", name: "Claveles", description: "Color y ternura para tu arreglo.", price: 12, category: "flores", emoji: "🌺", image: "claveles.jpg", color: "#f7dce2" },
  { id: "peluche-pequeno", name: "Peluche pequeño", description: "Un compañero tierno para tu ramo.", price: 13, category: "adicionales", emoji: "🧸", image: "regalos-dulces.jpg", color: "#efe4d7" },
  { id: "peluche-grande", name: "Peluche grande", description: "Un regalo para abrazar.", price: 15, category: "adicionales", emoji: "🐻", image: "peluche grnade.jpg", color: "#eadacb" },
  { id: "peluche-corazon", name: "Peluche de corazón", description: "Un detalle lleno de cariño.", price: 5.50, category: "adicionales", emoji: "💝", image: "corazon.jpg", color: "#f8dce9" },
  { id: "chocolates", name: "Chocolates", description: "Un dulce complemento para regalar.", price: 12, category: "adicionales", emoji: "🍫", image: "chocolates.jpg", color: "#eee0d7" },
  { id: "globo", name: "Globo decorativo", description: "Dale un toque festivo a tu sorpresa.", price: 12, category: "adicionales", emoji: "🎈", image: "globos.jpg", color: "#e5eafa" },
  { id: "tarjeta", name: "Tarjeta dedicatoria", description: "Agrega unas palabras especiales.", price: 10, category: "adicionales", emoji: "💌", image: "tarjetas.jpg", color: "#f7e7e5" },
  { id: "ramo-lila", name: "Ramo lila con girasol", description: "Rosas rosadas y girasol en envoltura lila.", price: 12, category: "ramos", emoji: "💐", image: "ramo-lila-girasol.jpg", color: "#f8e2ed" },
  { id: "ramo-rojo-girasoles", name: "Rosas rojas y girasoles", description: "Arreglo vibrante con rosas rojas y girasoles.", price: 11, category: "ramos", emoji: "💐", image: "rosas-rojas-girasoles.jpg", color: "#f8e2ed" },
  { id: "ramo-lirios", name: "Ramo de lirios amarillos", description: "Lirios amarillos con detalles delicados.", price: 10, category: "ramos", emoji: "💐", image: "lirios-ramo.jpg", color: "#f8e2ed" },
  { id: "ramo-girasol-pastel", name: "Girasol y rosas pastel", description: "Ramo con girasol, rosas y flores claras.", price: 12, category: "ramos", emoji: "💐", image: "girasol-pastel.jpg", color: "#f8e2ed" },
  { id: "ramo-blanco", name: "Girasoles y envoltura blanca", description: "Arreglo de girasoles con flores rosadas.", price: 14, category: "ramos", emoji: "💐", image: "girasoles-blancos.jpg", color: "#f8e2ed" },
  { id: "ramo-mixto-elegante", name: "Ramo de flores mixtas", description: "Combinación de girasol, rosas y flores variadas.", price: 13, category: "ramos", emoji: "💐", image: "ramo-elegante-mixto.jpg", color: "#f8e2ed" },
  { id: "ramo-blanco-rosa", name: "Ramo blanco y rosa", description: "Rosas claras y girasol con papel decorativo.", price: 12, category: "ramos", emoji: "💐", image: "ramo-blanco-rosa.jpg", color: "#f8e2ed" },
  { id: "ramo-corazon", name: "Ramo corazón de rosas", description: "Rosas en tonos vino y rosa para una ocasión especial.", price: 10, category: "ramos", emoji: "💐", image: "ramo-corazon-2.jpg", color: "#f8e2ed" },
  { id: "ramo-lirios-blancos", name: "Lirios blancos con rosas", description: "Ramo elegante de lirios blancos y rosas.", price: 15, category: "ramos", emoji: "💐", image: "lirios-blancos.jpg", color: "#f8e2ed" },
  { id: "ramo-pastel-girasoles", name: "Rosas pastel y girasoles", description: "Arreglo de rosas rosadas y girasoles.", price: 12, category: "ramos", emoji: "💐", image: "girasoles-pastel.jpg", color: "#f8e2ed" },
  { id: "ramo-rojas-blancas", name: "Rosas rojas y blancas", description: "Rosas intensas y flores blancas.", price: 10, category: "ramos", emoji: "💐", image: "rosas-rojas-blancas.jpg", color: "#f8e2ed" },
  { id: "ramo-rosadas", name: "Rosas rosadas", description: "Ramo de rosas en tonos suaves.", price: 10, category: "ramos", emoji: "💐", image: "rosas-rosadas.jpg", color: "#f8e2ed" },
  { id: "corona-floral", name: "Corona floral", description: "Arreglo floral especial para homenaje.", price: 6, category: "ramos", emoji: "💐", image: "corona-floral.jpg", color: "#f8e2ed" },
  { id: "regalo-dulces", name: "Arreglo con dulces y peluche", description: "Regalo con dulces, globos y peluches.", price: 5, category: "adicionales", emoji: "💐", image: "peluches y dules.jpg", color: "#f8e2ed" }
];

const FLOWERS = [
  { id: "rosa-unidad", name: "Rosa individual", price: 2, emoji: "🌹", image: "rosa-sola.png" },
  { id: "girasol", name: "Girasol", price: 2.5, emoji: "🌻", image: "girasol-solo.png" },
  { id: "tulipan", name: "Tulipán", price: 1.50, emoji: "🌷", image: "tulipan-solo.png" },
  { id: "margarita", name: "Margarita", price: 1, emoji: "🌼" },
  { id: "lirio", name: "Lirio", price: 1, emoji: "🪷", image: "lirios-amarillos.jpg" },
  { id: "clavel", name: "Clavel", price: 2, emoji: "🌺" }
];

const EXTRAS = [
  { id: "peluche", name: "Peluche", price: 3, emoji: "🧸" },
  { id: "chocolates-extra", name: "Chocolates", price: 1.50, emoji: "🍫" },
  { id: "tarjeta-extra", name: "Tarjeta con dedicatoria", price: 0.50, emoji: "💌" },
  { id: "globo-extra", name: "Globo decorativo", price: 1, emoji: "🎈" }
];
