export type Product = {
  id: string
  brand: string
  model: string
  price: number
  cpu: string
  ram: string
  storage: string
  description: string
  category: string
  accent: string
}

export const products: Product[] = [
  { id: 'aero-14', brand: 'Aurelia', model: 'Aero 14', price: 899, cpu: 'Intel Core i5-1340P', ram: '16 GB', storage: '512 GB SSD', description: 'Portátil ultraligero con 16 GB de RAM para trabajar, estudiar y viajar sin cargar de más.', category: 'Ultraligera', accent: 'from-cyan-100 to-blue-200' },
  { id: 'forge-x', brand: 'Nexon', model: 'Forge X', price: 1499, cpu: 'AMD Ryzen 7 7840HS', ram: '32 GB', storage: '1 TB SSD', description: 'Portátil gamer con 32 GB de RAM y gráfica dedicada para jugar, crear contenido y editar video.', category: 'Gamer', accent: 'from-violet-200 to-fuchsia-300' },
  { id: 'studio-16', brand: 'Lumina', model: 'Studio 16', price: 1299, cpu: 'Apple M3 Pro', ram: '18 GB', storage: '512 GB SSD', description: 'Portátil para diseño con 18 GB de RAM, pantalla amplia y potencia para proyectos creativos.', category: 'Diseño', accent: 'from-amber-100 to-orange-200' },
  { id: 'office-go', brand: 'Aurelia', model: 'Office Go', price: 549, cpu: 'Intel Core i3-N305', ram: '8 GB', storage: '256 GB SSD', description: 'Portátil económico con 8 GB de RAM para estudio, videollamadas y tareas de oficina.', category: 'Económica', accent: 'from-emerald-100 to-teal-200' },
  { id: 'zenbook-pro', brand: 'Orion', model: 'Zenbook Pro', price: 1799, cpu: 'Intel Core Ultra 9', ram: '32 GB', storage: '2 TB SSD', description: 'Equipo premium con 32 GB de RAM para profesionales que necesitan rendimiento sostenido.', category: 'Profesional', accent: 'from-slate-200 to-indigo-200' },
  { id: 'terra-15', brand: 'Terra', model: 'T15 Essential', price: 479, cpu: 'AMD Ryzen 5 7520U', ram: '8 GB', storage: '256 GB SSD', description: 'Portátil económico con 8 GB de RAM pensado para clases, navegación y trabajo diario.', category: 'Económica', accent: 'from-lime-100 to-green-200' },
  { id: 'pixelbook-air', brand: 'Pixel', model: 'Air 13', price: 999, cpu: 'Qualcomm Snapdragon X Plus', ram: '16 GB', storage: '512 GB SSD', description: 'Portátil fino con 16 GB de RAM para movilidad, reuniones y una batería que acompaña todo el día.', category: 'Ultraligera', accent: 'from-pink-100 to-rose-200' },
  { id: 'vault-14', brand: 'Nexon', model: 'Vault 14', price: 1099, cpu: 'Intel Core Ultra 7', ram: '16 GB', storage: '1 TB SSD', description: 'Portátil empresarial con 16 GB de RAM, seguridad reforzada y comodidad para jornadas largas.', category: 'Empresarial', accent: 'from-blue-100 to-sky-200' },
  { id: 'pulse-15', brand: 'Volt', model: 'Pulse 15', price: 1199, cpu: 'AMD Ryzen 7 8845HS', ram: '16 GB', storage: '1 TB SSD', description: 'Portátil gamer con 16 GB de RAM y gráfica dedicada para disfrutar tus juegos favoritos.', category: 'Gamer', accent: 'from-red-100 to-orange-200' },
  { id: 'canvas-14', brand: 'Lumina', model: 'Canvas 14', price: 1399, cpu: 'Intel Core Ultra 7', ram: '32 GB', storage: '1 TB SSD', description: 'Portátil de diseño con 32 GB de RAM para ilustración, modelado 3D y edición profesional.', category: 'Diseño', accent: 'from-purple-100 to-violet-200' },
  { id: 'workmate-16', brand: 'Orion', model: 'Workmate 16', price: 849, cpu: 'AMD Ryzen 5 8640U', ram: '16 GB', storage: '512 GB SSD', description: 'Portátil empresarial con 16 GB de RAM para multitarea, documentos y trabajo híbrido.', category: 'Empresarial', accent: 'from-gray-200 to-slate-300' },
  { id: 'mini-11', brand: 'Terra', model: 'Mini 11', price: 399, cpu: 'Intel N100', ram: '8 GB', storage: '128 GB SSD', description: 'Portátil compacto con 8 GB de RAM para estudiar, escribir y llevar tus tareas a cualquier lugar.', category: 'Económica', accent: 'from-yellow-100 to-lime-200' },
]

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}
