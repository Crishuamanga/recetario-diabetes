import type { Dish } from "./components/ui/dish-orbit-carousel"

export const CHECKOUT_URL = "https://go.hotmart.com/I107704288V?ap=3e40"
export const CTA_TEXT = "Quiero adquirir mi recetario"
export const SUPPORT_MAIL = "recetasgourmet4@gmail.com"
export const WHATSAPP = "https://wa.link/7tntu9"

export const dishes: Dish[] = [
  { title: "Omelette de", subtitle: "Espinaca y hongos", image: "/img/orbit/desayuno.webp", category: "Desayuno", accent: "#E8A33D",
    description: "Huevos esponjosos rellenos de espinaca, champiñones y queso, con tomates cherry al lado. Listo en 18 minutos.",
    ingredients: ["2 huevos", "Espinaca", "Champiñones", "Tomates cherry", "Aceite de oliva", "Queso rallado ligero"] },
  { title: "Salmón al limón", subtitle: "Con quinoa", image: "/img/orbit/almuerzo.webp", category: "Almuerzo", accent: "#1F8A4C",
    description: "Salmón a la plancha con limón y eneldo, quinoa con hierbas y espárragos. Un almuerzo completo y sin complicaciones.",
    ingredients: ["Salmón", "Limón", "Quinoa", "Espárragos", "Eneldo"] },
  { title: "Curry de garbanzos", subtitle: "Y espinaca", image: "/img/orbit/cena.webp", category: "Cena", accent: "#3F8F9B",
    description: "Una cena cremosa y reconfortante, con garbanzos, espinaca y un toque de yogur. Ligera para cerrar el día.",
    ingredients: ["Garbanzos", "Espinaca", "Yogur", "Cilantro", "Especias"] },
  { title: "Mousse de aguacate", subtitle: "Y cacao", image: "/img/orbit/postre.webp", category: "Postre", accent: "#C0587A",
    description: "Un postre cremoso de chocolate con frambuesas, para el antojo dulce sin salirte de tu plan.",
    ingredients: ["Aguacate", "Cacao", "Frambuesas"] },
]

export const wheel = [
  { img: "desayuno-omelette", name: "Omelette de espinaca y hongos", cat: "Desayuno" },
  { img: "desayuno-avena", name: "Avena nocturna con frutos rojos", cat: "Desayuno" },
  { img: "desayuno-panqueques", name: "Panqueques de trigo sarraceno", cat: "Desayuno" },
  { img: "almuerzo-salmon", name: "Salmón al limón con quinoa", cat: "Almuerzo" },
  { img: "almuerzo-pollo-relleno", name: "Pollo relleno de espinaca y hongos", cat: "Almuerzo" },
  { img: "almuerzo-chili", name: "Chili de pavo y frijoles", cat: "Almuerzo" },
  { img: "cena-merluza", name: "Merluza en papillote con vegetales", cat: "Cena" },
  { img: "cena-curry", name: "Curry de garbanzos y espinaca", cat: "Cena" },
  { img: "postre-mousse", name: "Mousse de aguacate y cacao", cat: "Postre" },
  { img: "postre-cheesecake", name: "Cheesecake en vaso con fresas", cat: "Postre" },
]

export const chapters = [
  { n: 1, img: "cap1-desayunos", title: "Desayunos", more: "entre huevos, avenas, yogures y panqueques",
    recipes: ["Omelette de espinaca y hongos", "Avena nocturna con frutos rojos", "Panqueques de trigo sarraceno", "Shakshuka de desayuno con garbanzos", "Pudín de chía, avena y frambuesa"] },
  { n: 2, img: "cap2-almuerzos", title: "Almuerzos", more: "entre pescados, aves, carnes y platos vegetarianos",
    recipes: ["Salmón al limón con quinoa", "Pollo relleno de espinaca y hongos", "Chili de pavo y frijoles", "Lasaña de calabacín y carne", "Ensalada de lentejas y vegetales asados"] },
  { n: 3, img: "cap3-cenas", title: "Cenas ligeras", more: "pensadas para no acostarte pesado",
    recipes: ["Merluza en papillote con vegetales", "Pechuga rellena de espinaca y ricotta", "Curry de garbanzos y espinaca", "Calabacines rellenos de lentejas", "Sopa ligera de pescado y verduras"] },
  { n: 4, img: "cap4-postres", title: "Postres y snacks", more: "para el antojo dulce sin salirte de tu plan",
    recipes: ["Mousse de aguacate y cacao", "Brownie de frijoles negros y cacao", "Cheesecake en vaso con fresas", "Paletas de yogur y frutos rojos", "Galletas de avena y almendras"] },
]

export const bonos = [
  { img: "bono1-jugoterapia", t: "Plan de Jugoterapia", d: "Jugos naturales con ingredientes frescos, para acompañar tu día a día." },
  { img: "bono2-panes", t: "Panes sin gluten ni azúcar", d: "Panes caseros con harinas alternativas, para no renunciar al pan." },
  { img: "bono3-alimentacion", t: "Guía de alimentación inteligente", d: "Cómo armar el plato, qué cambiar por qué y cómo leer una etiqueta." },
  { img: "bono4-15-dias", t: "15 días sin dietas crueles", d: "Plan de dos semanas con comidas ligeras y saciantes, sin pasar hambre." },
  { img: "bono5-30-comidas", t: "30 comidas saludables", d: "Treinta preparaciones extra para sumar variedad a tu semana." },
]

export const faqs = [
  { q: "¿Cómo recibo el acceso después de pagar?", a: "Te llegan dos correos: uno de Hotmart (confirmación y factura) y otro de MemberApp (enlace, usuario y contraseña). Si no llega, busca “MemberApp” y revisa Spam, Promociones y Notificaciones." },
  { q: "¿Es un PDF para descargar o una aplicación?", a: "Es un área de miembros privada: entras desde el navegador con tu correo y contraseña. No tienes que instalar nada." },
  { q: "¿Sirven para diabetes tipo 1 y tipo 2?", a: "Son recetas de cocina para quienes cuidan su alimentación, con los valores nutricionales a la vista para ajustarlas a cada caso. Es material educativo y culinario: no sustituye la indicación de tu médico o nutricionista, y conviene ajustar las porciones con ellos." },
  { q: "¿Los ingredientes son fáciles de conseguir?", a: "Sí: huevos, avena, pollo, pescado, verduras, legumbres, yogur y frutas. Sin suplementos caros ni productos importados." },
  { q: "¿Cuánto tiempo tengo el acceso?", a: "El acceso no vence. Es un pago único. Guarda el correo de MemberApp." },
  { q: "¿Cómo funciona la garantía de 7 días?", a: "Solicitas el reembolso por escrito dentro de los 7 días y recibes el 100% a través de Hotmart." },
  { q: "¿Y si tengo un problema para entrar?", a: "Escribe a " + SUPPORT_MAIL + " con el nombre y el correo que usaste en la compra." },
]
