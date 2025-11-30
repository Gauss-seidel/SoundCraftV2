//Interfaces
import type { DJ } from '../../../types/eventsTypes/interfaces';
//Avatares
import AvatarHernan from '../../EventAssets/avatars/avatarHernan.png'
import AvatarRodas from '../../EventAssets/avatars/avatarRodas.png'
import AvatarMati from '../../EventAssets/avatars/avatarMati.png'
import AvatarOsvaldo from '../../EventAssets/avatars/avatarOsvaldo.png'
//Performances - presentaciones
import Show1 from '../../EventAssets/performance/hernan/show1.png'
import Show2 from '../../EventAssets/performance/hernan/show2.png'
import Show3 from '../../EventAssets/performance/hernan/show3.png'
import Show4 from '../../EventAssets/performance/hernan/show4.png'


export const djsData: DJ[] = [
    {
        id: 1,
        name: " DJ Hernan Dominguez",
        specialty: "House / Techno",
        experience: "15 años",
        image: AvatarHernan,
        bio: "Especialista en música electrónica con experiencia en discotecas principales de la ciudad.",
        genres: ["House", "Techno", "Deep House", "Progressive"],
        events: 250,
        rating: 4.8,
        gallery: [Show1, Show2, Show3, Show4]
      },
      {
        id: 2,
        name: "Rodas DJ",
        specialty: "Reggaeton / Trap",
        experience: "6 años",
        image: AvatarRodas,
        bio: "Experta en géneros urbanos y urbano-latinos con un toque moderno y dinámico.",
        genres: ["Reggaeton", "Trap", "Hip-Hop", "Urbano"],
        events: 180,
        rating: 4.9,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 3,
        name: "Falcon DJ",
        specialty: "Variado / Pop",
        experience: "3 años",
        image: AvatarMati,
        bio: "DJ versátil con experiencia en bodas, eventos corporativos y fiestas privadas.",
        genres: ["Pop", "Bachata", "Merengue", "Variado"],
        events: 400,
        rating: 4.7,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 4,
        name: "DJ Osvaldo",
        specialty: "Cumbia / Folclore",
        experience: "5 años",
        image: AvatarOsvaldo,
        bio: "Especializado en música latina tradicional y folclórica con fusión moderna.",
        genres: ["Cumbia", "Folclore", "Salsa", "Tropical"],
        events: 150,
        rating: 5.0,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 5,
        name: "DJ Miguel",
        specialty: "EDM / Electrónica",
        experience: "7 años",
        image: "🎙️",
        bio: "Productor y DJ especializado en música electrónica de alta energía para festivales.",
        genres: ["EDM", "Electrónica", "Drum & Bass", "Dubstep"],
        events: 200,
        rating: 4.6,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 6,
        name: "DJ Valentina",
        specialty: "Disco / Funk",
        experience: "9 años",
        image: "🎼",
        bio: "Maestra en los clásicos del disco y funk con mezclas retro-modernas.",
        genres: ["Disco", "Funk", "Soul", "Groove"],
        events: 280,
        rating: 4.9,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 7,
        name: "DJ Andrés",
        specialty: "Rock / Alternativo",
        experience: "10 años",
        image: "🎸",
        bio: "Especialista en rock alternativo y clásico con sets dinámicos y cautivadores.",
        genres: ["Rock", "Alternativo", "Indie", "Clásicos"],
        events: 320,
        rating: 4.8,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 8,
        name: "DJ Lucia",
        specialty: "Reggae / Ska",
        experience: "6 años",
        image: "🥁",
        bio: "Amante del reggae y ska con vibes relajados y ritmos contagiosos.",
        genres: ["Reggae", "Ska", "Reggaeton", "Dancehall"],
        events: 170,
        rating: 4.7,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 9,
        name: "DJ Javier",
        specialty: "Jazz / Soul",
        experience: "11 años",
        image: "🎷",
        bio: "Culto en jazz y soul, perfecto para eventos sofisticados y cócteles elegantes.",
        genres: ["Jazz", "Soul", "Blues", "Bossa Nova"],
        events: 350,
        rating: 5.0,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      },
      {
        id: 10,
        name: "DJ Catalina",
        specialty: "Latina / Salsa",
        experience: "8 años",
        image: "🎺",
        bio: "Experta en ritmos latinos con dominio total de salsa, merengue y champeta.",
        genres: ["Salsa", "Merengue", "Champeta", "Timba"],
        events: 260,
        rating: 4.9,
        gallery: ["🎵", "🎶", "🎤", "🎸"]
      }
];