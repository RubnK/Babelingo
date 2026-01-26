import { Request, Response } from "express";

// Simulation de données de langues
const languages = [
  {
    id: 1,
    name: 'Anglais',
    flag: '🇬🇧',
    nativeName: 'English',
    speakers: '1.5 milliard',
    difficulty: 'Facile',
    category: 'Germanique',
    popularity: 95,
    courses: 15,
    description: 'La langue la plus parlée au monde, essentielle pour les affaires internationales.'
  },
  {
    id: 2,
    name: 'Espagnol',
    flag: '🇪🇸',
    nativeName: 'Español',
    speakers: '500 millions',
    difficulty: 'Facile',
    category: 'Romane',
    popularity: 88,
    courses: 12,
    description: 'Deuxième langue la plus parlée, ouvre les portes de l\'Amérique latine.'
  },
  {
    id: 3,
    name: 'Français',
    flag: '🇫🇷',
    nativeName: 'Français',
    speakers: '280 millions',
    difficulty: 'Moyen',
    category: 'Romane',
    popularity: 75,
    courses: 10,
    description: 'Langue de la diplomatie et de la culture, parlée sur 5 continents.'
  },
  {
    id: 4,
    name: 'Allemand',
    flag: '🇩🇪',
    nativeName: 'Deutsch',
    speakers: '100 millions',
    difficulty: 'Difficile',
    category: 'Germanique',
    popularity: 68,
    courses: 8,
    description: 'Langue économique majeure en Europe, importante pour les sciences.'
  },
  {
    id: 5,
    name: 'Italien',
    flag: '🇮🇹',
    nativeName: 'Italiano',
    speakers: '65 millions',
    difficulty: 'Moyen',
    category: 'Romane',
    popularity: 62,
    courses: 7,
    description: 'Langue de l\'art, de la mode et de la gastronomie italienne.'
  },
  {
    id: 6,
    name: 'Japonais',
    flag: '🇯🇵',
    nativeName: '日本語',
    speakers: '125 millions',
    difficulty: 'Très difficile',
    category: 'Japonique',
    popularity: 78,
    courses: 9,
    description: 'Langue de la technologie et de la culture pop mondiale.'
  },
  {
    id: 7,
    name: 'Chinois',
    flag: '🇨🇳',
    nativeName: '中文',
    speakers: '1.1 milliard',
    difficulty: 'Très difficile',
    category: 'Sino-tibétaine',
    popularity: 82,
    courses: 11,
    description: 'Première langue mondiale par le nombre de locuteurs natifs.'
  },
  {
    id: 8,
    name: 'Portugais',
    flag: '🇵🇹',
    nativeName: 'Português',
    speakers: '260 millions',
    difficulty: 'Moyen',
    category: 'Romane',
    popularity: 58,
    courses: 6,
    description: 'Langue officielle du Brésil et de plusieurs pays africains.'
  },
  {
    id: 9,
    name: 'Russe',
    flag: '🇷🇺',
    nativeName: 'Русский',
    speakers: '150 millions',
    difficulty: 'Difficile',
    category: 'Slave',
    popularity: 55,
    courses: 5,
    description: 'Langue de l\'espace et des sciences, parlée en Europe de l\'Est.'
  }
];

export function getAllLanguages(_req: Request, res: Response) {
  res.json(languages);
}
