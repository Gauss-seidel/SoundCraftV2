//Interfaces
import type { Course } from "../../../types/academyTypes/interfaces";

export const courses: Course[] = [
    {
      id: 1,
      nombre: "DJ Principiante",
      nivel: "Básico",
      duracion: "4 meses",
      precio: "₲150k/m",
      imagen: "🎵",
      descripcion:
        "Aprende los fundamentos del DJ, técnicas básicas de mezcla y equipamiento esencial.",
    },
    {
      id: 2,
      nombre: "Producción Musical",
      nivel: "Intermedio",
      duracion: "6 meses",
      precio: "₲200k/m",
      imagen: "🎧",
      descripcion:
        "Domina la producción de música con software profesional y técnicas avanzadas.",
    },
    {
      id: 3,
      nombre: "Mezcla Avanzada",
      nivel: "Avanzado",
      duracion: "8 meses",
      precio: "₲250k/m",
      imagen: "🎚️",
      descripcion:
        "Perfecciona tus habilidades de mezcla con técnicas profesionales de estudio.",
    },
    {
      id: 4,
      nombre: "Vinilo",
      nivel: "Intermedio",
      duracion: "5 meses",
      precio: "₲180k/m",
      imagen: "🪩",
      descripcion:
        "Crea beats originales y aprende la teoría musical aplicada al beatmaking.",
    },
  ];
