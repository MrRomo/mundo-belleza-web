// Base de datos de productos
export const products = [
  // Productos Faciales
  {
    id: 1,
    brand: 'Mary Kay',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop',
    title: 'Crema Facial Hidratante',
    description: 'Hidratación profunda por 24 horas para todo tipo de piel',
    category: 'Facial'
  },
  {
    id: 2,
    brand: 'Kaba',
    image: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?q=80&w=400&auto=format&fit=crop',
    title: 'Limpiador Facial',
    description: 'Limpia profundamente la piel eliminando impurezas y maquillaje',
    category: 'Facial'
  },
  {
    id: 3,
    brand: 'Anyeluz',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=400&auto=format&fit=crop',
    title: 'Esponja Facial',
    description: 'Exfolia suavemente la piel para un rostro más radiante',
    category: 'Facial'
  },
  
  // Productos Capilares
  {
    id: 4,
    brand: 'Magic Hair',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=400&auto=format&fit=crop',
    title: 'Shampoo Reparador',
    description: 'Repara el cabello dañado y le devuelve su brillo natural',
    category: 'Capilar'
  },
  {
    id: 5,
    brand: 'Anyeluz',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=400&auto=format&fit=crop',
    title: 'Aceite Capilar',
    description: 'Nutre y fortalece el cabello desde la raíz hasta las puntas',
    category: 'Capilar'
  },
  {
    id: 6,
    brand: 'Kaba',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=400&auto=format&fit=crop',
    title: 'Acondicionador Intensivo',
    description: 'Tratamiento profundo para cabello muy maltratado',
    category: 'Capilar'
  },
  
  // Productos Corporales
  {
    id: 7,
    brand: 'Anyeluz',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop',
    title: 'Protector Solar',
    description: 'Protección SPF 50 contra rayos UVA y UVB',
    category: 'Corporal'
  },
  {
    id: 8,
    brand: 'Poción',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=400&auto=format&fit=crop',
    title: 'Exfoliante Corporal',
    description: 'Elimina células muertas dejando la piel suave y renovada',
    category: 'Corporal'
  },
  {
    id: 9,
    brand: 'Mary Kay',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=400&auto=format&fit=crop',
    title: 'Loción Hidratante',
    description: 'Hidratación intensa para piel seca y agrietada',
    category: 'Corporal'
  },
  
  // Productos de Maquillaje
  {
    id: 10,
    brand: 'Milagros',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?q=80&w=400&auto=format&fit=crop',
    title: 'Máscara de Pestañas',
    description: 'Volumen y longitud extraordinarios para tus pestañas',
    category: 'Maquillaje'
  },
  {
    id: 11,
    brand: 'Magic Hair',
    image: 'https://images.unsplash.com/photo-1599733458142-ae8ee4eda8b3?q=80&w=400&auto=format&fit=crop',
    title: 'Labial Mate',
    description: 'Color intenso y duradero para tus labios',
    category: 'Maquillaje'
  },
  {
    id: 12,
    brand: 'Mary Kay',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop',
    title: 'Base Líquida',
    description: 'Cobertura media a alta con acabado natural',
    category: 'Maquillaje'
  },
  
  // Accesorios
  {
    id: 13,
    brand: 'Milagros',
    image: 'https://images.unsplash.com/photo-1596135811516-65d1967aef19?q=80&w=400&auto=format&fit=crop',
    title: 'Cepillo de Pelo',
    description: 'Desenreda sin dañar ni quebrar el cabello',
    category: 'Accesorios'
  },
  {
    id: 14,
    brand: 'Anyeluz',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=400&auto=format&fit=crop',
    title: 'Esponjas de Maquillaje',
    description: 'Set de esponjas para una aplicación perfecta',
    category: 'Accesorios'
  },
  {
    id: 15,
    brand: 'Kaba',
    image: 'https://images.unsplash.com/photo-1625093742435-5a7d3865d335?q=80&w=400&auto=format&fit=crop',
    title: 'Pinzas para Cejas',
    description: 'Precisión y agarre perfecto para dar forma a tus cejas',
    category: 'Accesorios'
  }
];

// Obtener todas las categorías únicas
export const categories = [...new Set(products.map(product => product.category))];
