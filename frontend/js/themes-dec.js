const themes = {
  japon: [
    {
      title: "Japon",
      img: "/frontend/images/japon/presentationjap.jpg",
      text: "Bienvenue au Japon, terre d’harmonie et de contrastes. Sous la délicatesse d’un cerisier en fleurs, laissez-vous envoûter par la justesse d’une cuisine millénaire, entre raffinement et simplicité. Des effluves de miso aux notes iodées du sushi, chaque bouchée est un haïku dédié à l’équilibre.Ce soir, le soleil se lève à votre table.",
    },
    {
      title: "Menu",
      menu: [
        {
          type: "Entrée froide – Trilogie de Sashimi",
          description:
            "Thon rouge, saumon d'Écosse et daurade royale, servis avec soja vieilli, wasabi frais et fleurs comestibles Tranché à la main, servi avec élégance, un hommage à la mer nippone.",
        },
        {
          type: "Plat principal – Bento du Chef",
          description:
            "Filet de bar vapeur au saké, riz parfumé au shiso, légumes marinés, tempura de crevette Une assiette raffinée aux multiples textures et arômes.",
        },
        {
          type: "Dessert",
          description:
            "Perle de coco revisitée au cœur de litchi et gelée de yuzu ou Une parenthèse fraîche et subtile avant la douceur finale.",
        },
        {
          prix: "Prix : 89 € par personne",
        },
      ],
      img: "/frontend/images/japon/repasjap.jpg",
    },
    {
      title: "Tradition",
      img: "/frontend/images/japon/tradjap.jpg",
      text: "La tradition japonaise est riche et variée, marquée par des pratiques anciennes comme la cérémonie du thé, les festivals saisonniers et l'art du kintsugi. Elle valorise l'harmonie, le respect de la nature et la beauté dans la simplicité. Ces coutumes, transmises de génération en génération, continuent de jouer un rôle central dans la vie quotidienne des Japonais.",
    },
  ],

  italie: [
    {
      title: "Italie",
      img: "/frontend/images/italie/presentationit.jpg",
      text: "Bienvenue en Italie, terre de passion et de saveurs. Sous la lumière dorée des collines toscanes, laissez-vous emporter par la richesse d’une cuisine ancestrale, où chaque plat raconte une histoire d’authenticité et de simplicité. Des arômes d’ail et d’huile d’olive aux parfums envoûtants de basilic, chaque bouchée est une mélodie dédiée à la convivialité. Ce soir, l’Italie danse à votre table.",
    },
    {
      title: "Menu",
      menu: [
        {
          type: "Entrée - Carpaccio di Manzo con Rucola e Parmigiano",
          description:
            "Fines tranches de bœuf mariné, nappées d’huile d’olive extra vierge, garnies de roquette fraîche et de copeaux de parmesan, un délice simple mais raffiné qui évoque la chaleur de l’Italie.",
        },
        {
          type: "Plat principal – Risotto ai Funghi Porcini e Tartufo",
          description:
            "Un risotto crémeux et parfumé, aux champignons porcini et une touche subtile de truffe, cuisiné avec soin pour révéler l’essence des terres italiennes, dans une parfaite harmonie de saveurs.",
        },
        {
          type: "Dessert - Tiramisu Classico",
          description:
            "Le dessert italien par excellence : une délicate couche de mascarpone crémeux, imbibée de café et saupoudrée de cacao, une douceur réconfortante qui conclut le repas sur une note sucrée et élégante.",
        },
        {
          prix: "Prix : 89 € par personne",
        },
      ],
      img: "/frontend/images/italie/repasit.jpg",
    },
    {
      title: "Tradition",
      img: "/frontend/images/italie/tradit.jpg",
      text: "La tradition italienne est célèbre pour sa richesse culturelle, notamment à travers sa cuisine, ses fêtes et ses arts. Le repas, souvent partagé en famille, occupe une place centrale, avec des spécialités régionales comme les pâtes et la pizza. L'Italie est également le berceau de nombreuses formes d'art et de musique, comme l'opéra et la Renaissance. Les Italiens accordent une grande importance à la convivialité et à la famille, et ces valeurs se retrouvent dans leurs traditions quotidiennes.",
    },
  ],

  maroc: [
    {
      title: "Maroc",
      img: "/frontend/images/maroc/presentationmar.jpg",
      text: "Le Maroc est un pays aux mille couleurs, où traditions et modernité se rencontrent dans une harmonie unique. Entre médinas animées, dunes dorées et montagnes majestueuses, il offre un voyage riche en émotions. Sa culture, marquée par l’hospitalité, l’artisanat et une cuisine généreuse, reflète un héritage berbère, arabe et andalou. Le Maroc, c’est une invitation à la découverte, au rythme du thé à la menthe et des parfums d’épices.",
    },
    {
      title: "Menu",
      menu: [
        {
          type: "Entrée froide – Briouates aux légumes et aux épices douces",
          description:
            "Petits triangles croustillants de pâte fine, farcis de légumes savoureux relevés par un subtil mélange d’épices marocaines. Une mise en bouche croquante et parfumée qui annonce un voyage sensoriel.",
        },
        {
          type: "Plat principal – Tajine de poulet au citron confit et olives",
          description:
            "Un plat emblématique du Maroc, mijoté lentement pour révéler toutes ses saveurs : le fondant du poulet, l’acidité du citron confit, et la touche salée des olives, le tout sublimé par des épices chaleureuses.",
        },
        {
          type: "Dessert - Corne de gazelle et thé à la menthe fraîche",
          description:
            "Une pâtisserie fine à la pâte d’amande parfumée à la fleur d’oranger, accompagnée d’un thé vert à la menthe, servi brûlant et sucré. Une finale douce et envoûtante, fidèle à l’hospitalité marocaine.",
        },
        {
          prix: "Prix : 89 € par personne",
        },
      ],
      img: "/frontend/images/maroc/menumar.jpg",
    },
    {
      title: "Tradition",
      img: "/frontend/images/maroc/tradmar.jpg",
      text: "La tradition marocaine, riche et vivante, se reflète dans l’hospitalité, les fêtes, la cuisine épicée et les vêtements comme la djellaba. Transmise de génération en génération, elle unit les familles autour de valeurs de partage et de respect.",
    },
  ],
};

let currentTheme = "japon";
let currentIndex = 0;

const imgElement = document.getElementById("img-decouvert");
const titleElement = document.querySelector(".pres-themes h6");
const paragraphElement = document.querySelector(".pres-themes p");
const nextBtn = document.getElementById("btn-swip-themes");
const switchThemeBtn = document.getElementById("theme-decouvrir");

const entreeText = document.querySelector(".entree");
const platText = document.querySelector(".plat");
const dessertText = document.querySelector(".dessert");
const prixText = document.querySelector(".prix");

// flèche retour à créer dynamiquement
const backBtn = document.createElement("button");
backBtn.innerHTML = '<img src="/frontend/images/circle-arrow-left.png">';
backBtn.style.position = "absolute";
backBtn.style.bottom = "20px";
backBtn.style.left = "10px";
backBtn.style.width = "70px";
backBtn.style.background = "transparent";
backBtn.style.border = "none";
backBtn.style.cursor = "pointer";
backBtn.style.display = "none"; // cachée au départ
document.querySelector(".decouvert-themes").appendChild(backBtn);

const introText = document.querySelector(".intro-text");
const menuTable = document.querySelector(".menu-table");

function updateSlide() {
  const slide = themes[currentTheme][currentIndex];

  // Mise à jour du titre et de l'image
  titleElement.textContent = slide.title;
  imgElement.src = slide.img;

  if (slide.menu) {
    // Si c'est le menu, on affiche le tableau et masque l'intro
    introText.style.display = "none";
    menuTable.style.display = "flex";

    entreeText.innerHTML = slide.menu[0]
      ? `<h6 class type>${slide.menu[0].type}</h6><br>${slide.menu[0].description}`
      : "";
    platText.innerHTML = slide.menu[1]
      ? `<h6 class type>${slide.menu[1].type}</h6><br>${slide.menu[1].description}`
      : "";
    dessertText.innerHTML = slide.menu[2]
      ? `<h6 class type>${slide.menu[2].type}</h6><br>${slide.menu[2].description}`
      : "";
    prixText.textContent = slide.menu[3].prix;
  } else {
    // Si c'est une présentation ou une tradition, on affiche le texte
    menuTable.style.display = "none";
    introText.style.display = "block";
    introText.textContent = slide.text;
  }

  // Gérer la flèche retour
  backBtn.style.display = currentIndex > 0 ? "block" : "none";
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < themes[currentTheme].length - 1) {
    currentIndex++;
    updateSlide();
  }
});

backBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

switchThemeBtn.addEventListener("click", () => {
  // Met à jour le thème sélectionné
  currentTheme =
    currentTheme === "japon"
      ? "italie"
      : currentTheme === "italie"
      ? "maroc"
      : "japon";

  // Remet l'index du slide à 0
  currentIndex = 0;

  // Met à jour l'affichage
  updateSlide();
});

// init
updateSlide();

document.querySelectorAll(".dropdown-list li").forEach((item) => {
  item.addEventListener("click", () => {
    // Récupère le pays choisi
    currentTheme = item.getAttribute("data-theme");

    // Réinitialise l'index du slide
    currentIndex = 0;

    // Met à jour l'affichage du slide pour ce pays
    updateSlide();
  });
});
