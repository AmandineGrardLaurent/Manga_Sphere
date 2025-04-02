CREATE TABLE IF NOT EXISTS role (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(250) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS serie (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  author VARCHAR(150) NOT NULL,
  picture VARCHAR(250),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS comment (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment TEXT NOT NULL,
  rating VARCHAR(100) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  serie_id INT NOT NULL,
  FOREIGN KEY (serie_id) REFERENCES serie(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS user_serie (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  serie_id INT NOT NULL,
  FOREIGN KEY (serie_id) REFERENCES serie(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS volume (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(200) NOT NULL,
  number INT,
  serie_id INT NOT NULL,
  FOREIGN KEY (serie_id) REFERENCES serie(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS manga_character (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  picture VARCHAR(250),
  serie_id INT NOT NULL,
  FOREIGN KEY (serie_id) REFERENCES serie(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS season (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(200) NOT NULL,
  number INT,
  year INT,
  serie_id INT NOT NULL,
  FOREIGN KEY (serie_id) REFERENCES serie(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS serie_category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  serie_id INT NOT NULL,
  FOREIGN KEY (serie_id) REFERENCES serie(id),
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO role(id, label) VALUES (1, "admin"), (2, "user_waiting"), (3, "user_accepted");



INSERT INTO serie (title, synopsis, author, picture) VALUES
('One Piece', 'Créé par Eiichirō Oda, One Piece suit les aventures de Monkey D. Luffy, un jeune pirate dont le rêve est de devenir le Roi des Pirates. Luffy cherche le trésor légendaire, le One Piece, et pour cela, il forme un équipage hétéroclite de pirates, chacun avec des pouvoirs uniques. Le manga explore des thèmes d\'amitié, de liberté et de justice tout en offrant une multitude de combats et d\'aventures.', 'Eiichirō Oda', 'https://m.media-amazon.com/images/I/81rEhhwbubL.jpg'),

('Demon Slayer', 'Écrit par Koyoharu Gotouge, ce manga raconte l\'histoire de Tanjiro Kamado, un jeune garçon dont la famille est tuée par des démons, et sa sœur Nezuko est transformée en démon. Tanjiro devient un tueur de démons pour venger sa famille et sauver sa sœur, cherchant à la guérir de sa malédiction. Le manga est célèbre pour ses scènes d\'action épiques et ses magnifiques illustrations.', 'Koyoharu Gotouge', 'https://fr.web.img5.acsta.net/c_310_420/pictures/19/09/18/13/46/0198270.jpg'),

('Slam Dunk', 'Takehiko Inoue raconte l\'histoire de Hanamichi Sakuragi, un jeune homme impulsif et un mauvais élève qui découvre le basket-ball après avoir été rejeté par une fille. Bien qu\'il soit au début un novice dans ce sport, son énergie et sa persévérance le mènent à exceller et à aider son équipe à atteindre de nouveaux sommets. Ce manga mélange sport, humour et drama.', 'Takehiko Inoue', 'https://i.pinimg.com/736x/6c/b0/97/6cb097f36fb8438fca2a5ad3c456687c.jpg'),

('Detective Conan', 'Shinichi Kudo, un détective adolescent exceptionnellement doué, se retrouve empoisonné par une organisation criminelle secrète. L\'empoisonnement ne le tue pas, mais le transforme en un jeune garçon de 7 ans. Sous son nouveau nom, Conan Edogawa, il continue de résoudre des enquêtes et des mystères tout en cherchant à démasquer l\'organisation responsable de sa transformation. Aidé de ses amis et de l\'inspecteur Kogoro Mouri, Conan utilise son intelligence pour résoudre de nombreux cas complexes, tout en cherchant un moyen de retrouver son vrai corps.', 'Gosho Aoyama', 'https://m.media-amazon.com/images/I/81p+8xivWbL._AC_UF1000,1000_QL80_.jpg'),

('Dragon Ball', 'Créé par Akira Toriyama, Dragon Ball suit Son Goku, un jeune garçon aux pouvoirs exceptionnels, alors qu\'il cherche les sept boules de cristal, qui exaucent les vœux. Ce manga a révolutionné le genre action et aventure, introduisant des personnages mémorables et des combats spectaculaires. Il se poursuit avec des arcs épiques qui font évoluer les personnages et les enjeux.', 'Akira Toriyama', 'https://fr.web.img2.acsta.net/pictures/22/11/22/14/02/3642167.jpg'),

('Attack on Titan', 'Écrit par Hajime Isayama, Attack on Titan raconte l\'histoire d\'Eren Yeager et de ses amis, qui vivent dans un monde assiégé par des titans géants qui dévorent les humains. L\'humanité vit à l\'intérieur de murs gigantesques pour se protéger des attaques. Le manga suit les personnages alors qu\'ils combattent pour la survie de l\'humanité et cherchent à découvrir la vérité sur les titans.', 'Hajime Isayama', 'https://episodehive.com/image/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg'),

('Naruto', 'Masashi Kishimoto nous plonge dans l\'histoire de Naruto Uzumaki, un jeune ninja qui rêve de devenir le plus grand des ninjas et d\'obtenir le titre de Hokage, le chef de son village. Malgré un passé difficile et le démon renard à neuf queues scellé en lui, Naruto surmonte de nombreux obstacles, forge des amitiés solides et se bat contre des ennemis puissants.', 'Masashi Kishimoto', 'https://www.manga-news.com/public/images/dvd/.naruto-visuel-anime_large.webp'),

('Haikyu!!', 'Écrit par Haruichi Furudate, Haikyu!! suit Shoyo Hinata, un passionné de volley-ball, qui rêve de jouer dans l\'équipe nationale après avoir été inspiré par un joueur élite. Après un échec dans sa première compétition, il rejoint l\'équipe du lycée Karasuno, où il forme une équipe avec des personnages aux talents variés pour se mesurer à des adversaires redoutables.', 'Haruichi Furudate', 'https://images.justwatch.com/poster/267833078/s718/haikyu.jpg'),

('Fullmetal Alchemist', 'Créé par Hiromu Arakawa, ce manga suit les frères Edward et Alphonse Elric, qui utilisent l\'alchimie pour chercher la Pierre Philosophale, un artefact qui pourrait restaurer leurs corps après une expérience alchimique ratée. Ce manga explore des thèmes profonds comme le sacrifice, la moralité et la quête de rédemption.', 'Hiromu Arakawa', 'https://fr.web.img4.acsta.net/pictures/19/07/30/12/08/0075575.jpg'),

('JoJo\'s Bizarre Adventure', 'Écrit par Hirohiko Araki, JoJo’s Bizarre Adventure suit les aventures de la famille Joestar à travers plusieurs générations, chacune avec des pouvoirs uniques et des ennemis redoutables. Le manga est connu pour ses personnages excentriques, ses combats stratégiques et son style artistique distinctif.', 'Hirohiko Araki', 'https://excelsiorcomics.com.br/loja/wp-content/uploads/2024/04/jojos-bizarre-adventure-parte-6-stone-ocean-1.jpeg'),

('Hunter x Hunter', 'Créé par Yoshihiro Togashi, Hunter x Hunter suit Gon Freecss, un jeune garçon qui découvre que son père, qu\'il croyait mort, est en réalité un chasseur de renommée mondiale. Gon décide de suivre ses traces en devenant un chasseur lui-même et part en quête pour retrouver son père tout en affrontant de nombreux défis et ennemis.', 'Yoshihiro Togashi', 'https://www.reference-gaming.com/assets/media/product/106441/hunter-x-hunter-running-poster-61x915cm-5f1695cde5c1c.jpg?format=product-cover-large&k=1595315661');

INSERT INTO user (lastname, firstname, email, password, role_id) VALUES ("Blanc", "Michel", "michel@gmail.com", "123123", 2), ("Balasko", "Josiane", "josiane@gmail.com", "123123", 2), ("Lhermite", "Thierry", "thierry@gmail.com", "123123", 3), ("Jugnot", "Gérard", "gerard@gmail.com", "123123", 2) ;
INSERT INTO season (title, year, number, serie_id) VALUES ("one piece", 1992, 1, 1) ;

INSERT INTO volume (title, number, serie_id) VALUES ("Romance Dawn", 1, 1), ("Buggy the Clown", 2, 1)
