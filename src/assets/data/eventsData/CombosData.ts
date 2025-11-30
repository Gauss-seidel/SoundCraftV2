//Interfaces
import type { Combo } from '../../../types/eventsTypes/interfaces';
//Imagenes de ilustracion
import StartedPack from '../../EventAssets/combos/startedPack.png'
import ProfessionalSet from '../../EventAssets/combos/professionalSet.png'
import VipDeluxe from '../../EventAssets/combos/vipDeluxe.png'
import PremiumClub from '../../EventAssets/combos/premiumClub.png'
//Galleria de combo StartedPack
import Started1 from '../../EventAssets/combos/galeria/started1.png'
import Started2 from '../../EventAssets/combos/galeria/started2.png'
import Started3 from '../../EventAssets/combos/galeria/started3.png'
import Started4 from '../../EventAssets/combos/galeria/started4.png'

export const combosData: Combo[] = [
  {
    id: 1,
    name: "Starter Pack",
    price: 450000,
    capacity: "50-100",
    image: StartedPack,
    description: "Combo básico para eventos pequeños",
    equipment: ["2x Parlantes 15\"", "1x Mezclador", "2x Micrófonos", "Cables y soportes"],
    fullDescription: "Perfecto para eventos íntimos con excelente relación precio-calidad. Ideal para reuniones, cumpleaños y eventos pequeños.",
    wattage: "1000W",
    gallery: [Started1, Started2, Started3, Started4],
    features: ["Fácil instalación", "Sonido cristalino", "Ideal para reuniones"]
  },
  {
    id: 2,
    name: "Professional Set",
    price: 950000,
    capacity: "100-300",
    image: ProfessionalSet,
    description: "Combo profesional para discotecas medianas",
    equipment: ["4x Parlantes 18\"", "Mezclador avanzado", "Sistema de iluminación LED", "3x Micrófonos inalámbricos", "Subwoofer potente"],
    fullDescription: "Sistema profesional con luces y sonido de alta calidad. Perfecto para discotecas medianas y eventos corporativos.",
    wattage: "3500W",
    gallery: [Started1, Started2, Started3, Started4],
    features: ["Luces sincronizadas", "Control remoto", "Sonido envolvente"]
  },
  {
    id: 3,
    name: "Premium Club",
    price: 2500000,
    capacity: "300-500",
    image: PremiumClub,
    description: "Sistema premium para grandes discotecas",
    equipment: ["6x Parlantes 18\"", "2x Subwoofers", "Mezclador digital", "Luces laser y LED", "4x Micrófonos profesionales"],
    fullDescription: "Equipamiento de nivel internacional para los eventos más exigentes. Ideal para grandes discotecas y festivales.",
    wattage: "6000W",
    gallery: [Started1, Started2, Started3, Started4],
    features: ["Tecnología laser", "Control dmx", "Efectos visuales"]
  },
  {
    id: 4,
    name: "VIP Deluxe",
    price: 5500000,
    capacity: "500+",
    image: VipDeluxe,
    description: "Sistema VIP completo con efectos especiales",
    equipment: ["8x Parlantes profesionales", "3x Subwoofers", "Sistema haze", "Proyector", "Luces moving head", "5x Micrófonos"],
    fullDescription: "Experiencia premium con todos los efectos especiales incluidos. Sistema completo para eventos de gran envergadura.",
    wattage: "8500W",
    gallery: [Started1, Started2, Started3, Started4],
    features: ["Sistema completo", "Proyección 4K", "Efectos haze", "Sonido 7.1"]
  }
];