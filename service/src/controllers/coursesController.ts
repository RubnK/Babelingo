import { Request, Response } from "express";

// Simulation de données de cours
const courses = [
  {
    id: 1,
    title: 'Anglais - Débutant',
    description: 'Apprenez les bases de l\'anglais avec des leçons interactives.',
    language: 'Anglais',
    level: 'Débutant',
    duration: '4 semaines',
    lessons: 20,
    students: 1250,
    rating: 4.8,
    image: '🇬🇧',
  },
  {
    id: 2,
    title: 'Espagnol - Intermédiaire',
    description: 'Perfectionnez votre espagnol avec des conversations pratiques.',
    language: 'Espagnol',
    level: 'Intermédiaire',
    duration: '6 semaines',
    lessons: 30,
    students: 890,
    rating: 4.9,
    image: '🇪🇸',
  },
  {
    id: 3,
    title: 'Français - Avancé',
    description: 'Maîtrisez les subtilités de la langue française.',
    language: 'Français',
    level: 'Avancé',
    duration: '8 semaines',
    lessons: 40,
    students: 654,
    rating: 4.7,
    image: '🇫🇷',
  },
  {
    id: 4,
    title: 'Allemand - Débutant',
    description: 'Découvrez l\'allemand à travers des exercices ludiques.',
    language: 'Allemand',
    level: 'Débutant',
    duration: '5 semaines',
    lessons: 25,
    students: 432,
    rating: 4.6,
    image: '🇩🇪',
  },
  {
    id: 5,
    title: 'Italien - Intermédiaire',
    description: 'Explorez la culture italienne à travers sa langue.',
    language: 'Italien',
    level: 'Intermédiaire',
    duration: '6 semaines',
    lessons: 28,
    students: 567,
    rating: 4.8,
    image: '🇮🇹',
  },
  {
    id: 6,
    title: 'Japonais - Débutant',
    description: 'Initiez-vous au japonais avec les hiragana et katakana.',
    language: 'Japonais',
    level: 'Débutant',
    duration: '10 semaines',
    lessons: 50,
    students: 789,
    rating: 4.9,
    image: '🇯🇵',
  },
];

export function getAllCourses(req: Request, res: Response) {
  const lang = req.query.lang as string | undefined;
  if (lang) {
    // On filtre par code langue (ex: 'fr', 'en', 'es')
    // On suppose que le champ language dans les cours est en français, donc on mappe si besoin
    const langMap: Record<string, string> = {
      fr: 'Français',
      en: 'Anglais',
      es: 'Espagnol',
      de: 'Allemand',
      it: 'Italien',
      ja: 'Japonais',
    };
    const label = langMap[lang] || lang;
    return res.json(courses.filter(c => c.language === label));
  }
  res.json(courses);
}
