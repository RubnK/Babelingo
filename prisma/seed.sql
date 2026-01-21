INSERT INTO "Level" (number, category) VALUES
  (1, 'animaux'),
  (2, 'nourriture'),
  (3, 'maison');

-- Niveau 1 : Animaux
INSERT INTO "Question" (levelId, type, language, content) VALUES
  (1, 'qcm', 'fr', '{"targetLang":"en","question":"Comment dit-on \"chien\" en anglais ?","options":["dog","cat","mouse","bird"],"answer":"dog"}'),
  (1, 'qcm', 'fr', '{"targetLang":"es","question":"Comment dit-on \"chat\" en espagnol ?","options":["gato","perro","ratón","pájaro"],"answer":"gato"}'),
  (1, 'matching', 'fr', '{
    "targetLangs": ["en","es","de"],
    "baseWords": ["chat", "chien", "oiseau"],
    "targetWords": [
      {"lang":"en","word":"cat"},
      {"lang":"es","word":"perro"},
      {"lang":"de","word":"Vogel"}
    ]
  }'),
  (1, 'qcm', 'en', '{"targetLang":"fr","question":"How do you say \"fish\" in French?","options":["poisson","chien","chat","oiseau"],"answer":"poisson"}'),
  (1, 'qcm', 'en', '{"targetLang":"de","question":"How do you say \"horse\" in German?","options":["Pferd","Hund","Katze","Vogel"],"answer":"Pferd"}'),
  (1, 'matching', 'en', '{
      "targetLangs": ["fr","de","es"],
      "baseWords": ["dog", "cat", "bird"],
      "targetWords": [
      {"lang":"fr","word":"chien"},
      {"lang":"de","word":"Katze"},
      {"lang":"es","word":"pájaro"}
      ]
  }');
  
-- Niveau 2 : Nourriture
INSERT INTO "Question" (levelId, type, language, content) VALUES
  (2, 'qcm', 'fr', '{"targetLang":"it","question":"Comment dit-on \"pomme\" en italien ?","options":["mela","pera","banana","uva"],"answer":"mela"}'),
  (2, 'qcm', 'fr', '{"targetLang":"de","question":"Comment dit-on \"pain\" en allemand ?","options":["Brot","Käse","Milch","Apfel"],"answer":"Brot"}'),
  (2, 'matching', 'fr', '{
    "targetLangs": ["it","de","es"],
    "baseWords": ["pomme", "fromage", "pain"],
    "targetWords": [
      {"lang":"it","word":"mela"},
      {"lang":"de","word":"Käse"},
      {"lang":"es","word":"pan"}
    ]
  }');

-- Niveau 3 : Maison
INSERT INTO "Question" (levelId, type, language, content) VALUES
  (3, 'qcm', 'fr', '{"targetLang":"en","question":"Comment dit-on \"maison\" en anglais ?","options":["house","car","tree","book"],"answer":"house"}'),
  (3, 'qcm', 'fr', '{"targetLang":"es","question":"Comment dit-on \"porte\" en espagnol ?","options":["puerta","ventana","silla","mesa"],"answer":"puerta"}'),
  (3, 'matching', 'fr', '{
    "targetLangs": ["en","es","de"],
    "baseWords": ["maison", "porte", "fenêtre"],
    "targetWords": [
      {"lang":"en","word":"house"},
      {"lang":"es","word":"puerta"},
      {"lang":"de","word":"Fenster"}
    ]
  }');