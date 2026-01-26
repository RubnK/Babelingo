
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Ces données de seed ont été générées par IA afin de tester l'application durant le développement.
  // Elles ne sont pas destinées à être utilisées en production.
  
  console.log('Vérification des niveaux existants...');
  const existingLevels = await prisma.level.findMany();
  
  if (existingLevels.length > 0) {
    console.log(`${existingLevels.length} niveaux trouvés dans la base de données. Seed ignoré.`);
    return;
  }
  
  console.log('Création des niveaux...');
  const animaux = await prisma.level.create({
    data: {
      number: 1,
      category: 'animaux',
      questions: {
        create: [
          {
            type: 'qcm',
            language: 'fr',
            content: {
              targetLang: 'en',
              question: 'Comment dit-on "chien" en anglais ?',
              options: ['dog', 'cat', 'mouse', 'bird'],
              answer: 'dog',
            },
          },
          {
            type: 'qcm',
            language: 'fr',
            content: {
              targetLang: 'es',
              question: 'Comment dit-on "chat" en espagnol ?',
              options: ['gato', 'perro', 'ratón', 'pájaro'],
              answer: 'gato',
            },
          },
          {
            type: 'matching',
            language: 'fr',
            content: {
              targetLangs: ['en', 'es', 'de'],
              baseWords: ['chat', 'chien', 'oiseau'],
              targetWords: [
                { lang: 'en', word: 'cat' },
                { lang: 'es', word: 'perro' },
                { lang: 'de', word: 'Vogel' },
              ],
            },
          },
          {
            type: 'qcm',
            language: 'en',
            content: {
              targetLang: 'fr',
              question: 'How do you say "fish" in French?',
              options: ['poisson', 'chien', 'chat', 'oiseau'],
              answer: 'poisson',
            },
          },
          {
            type: 'qcm',
            language: 'en',
            content: {
              targetLang: 'de',
              question: 'How do you say "horse" in German?',
              options: ['Pferd', 'Hund', 'Katze', 'Vogel'],
              answer: 'Pferd',
            },
          },
          {
            type: 'matching',
            language: 'en',
            content: {
              targetLangs: ['fr', 'de', 'es'],
              baseWords: ['dog', 'cat', 'bird'],
              targetWords: [
                { lang: 'fr', word: 'chien' },
                { lang: 'de', word: 'Katze' },
                { lang: 'es', word: 'pájaro' },
              ],
            },
          },
        ],
      },
    },
  });

  const nourriture = await prisma.level.create({
    data: {
      number: 2,
      category: 'nourriture',
      questions: {
        create: [
          {
            type: 'qcm',
            language: 'fr',
            content: {
              targetLang: 'it',
              question: 'Comment dit-on "pomme" en italien ?',
              options: ['mela', 'pera', 'banana', 'uva'],
              answer: 'mela',
            },
          },
          {
            type: 'qcm',
            language: 'fr',
            content: {
              targetLang: 'de',
              question: 'Comment dit-on "pain" en allemand ?',
              options: ['Brot', 'Käse', 'Milch', 'Apfel'],
              answer: 'Brot',
            },
          },
          {
            type: 'matching',
            language: 'fr',
            content: {
              targetLangs: ['it', 'de', 'es'],
              baseWords: ['pomme', 'fromage', 'pain'],
              targetWords: [
                { lang: 'it', word: 'mela' },
                { lang: 'de', word: 'Käse' },
                { lang: 'es', word: 'pan' },
              ],
            },
          },
        ],
      },
    },
  });

  const maison = await prisma.level.create({
    data: {
      number: 3,
      category: 'maison',
      questions: {
        create: [
          {
            type: 'qcm',
            language: 'fr',
            content: {
              targetLang: 'en',
              question: 'Comment dit-on "maison" en anglais ?',
              options: ['house', 'car', 'tree', 'book'],
              answer: 'house',
            },
          },
          {
            type: 'qcm',
            language: 'fr',
            content: {
              targetLang: 'es',
              question: 'Comment dit-on "porte" en espagnol ?',
              options: ['puerta', 'ventana', 'silla', 'mesa'],
              answer: 'puerta',
            },
          },
          {
            type: 'matching',
            language: 'fr',
            content: {
              targetLangs: ['en', 'es', 'de'],
              baseWords: ['maison', 'porte', 'fenêtre'],
              targetWords: [
                { lang: 'en', word: 'house' },
                { lang: 'es', word: 'puerta' },
                { lang: 'de', word: 'Fenster' },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('Seed terminé');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
