const questionQuiz = [
  {
    id: 1,
    question: "Que peut-on faire avec une imprimante 3D ?",
    answers: [
      {
        type: { imageUrl: "", explication: "" },
        content: "Un hérisson"
      },

      {
        type: { imageUrl: "", explication: "" },
        content: "Un porte-clés"
      },
      {
        type: { imageUrl: "", explication: "" },
        content: "Un pot à crayon"
      }
    ]
  },
  {
    id: 2,
    question: "Quels matériaux peut-on utiliser pour imprimer en 3D ?",
    answers: [
      {
        type: { imageUrl: "", explication: "" },
        content: "Le plastique"
      },

      {
        type: { imageUrl: "", explication: "" },
        content: "Le métal"
      },
      {
        type: { imageUrl: "", explication: "" },
        content: "Le chocolat"
      }
    ]
  },
  {
    id: 3,
    question: "Dans quels secteurs d'activités peut-on imprimer en 3D ?",
    answers: [
      {
        type: {
          imageUrl: "",
          explication:
            "En médecine, on peut désormais fabriquer des prothèses au plus près des besoins du patient."
        },
        content: "Médecine"
      },

      {
        type: {
          imageUrl: "",
          explication:
            "Il est aussi possible de bâtir des maisons, même des immeubles !"
        },
        content: "Construction de batiments"
      },
      {
        type: {
          imageUrl: "",
          explication:
            "Il existe des projets de fabrications de véhicules. Comme des motos entièrement réalisées en impression 3D !"
        },
        content: "Transports"
      }
    ]
  }
];
const questionQuizLaser = [
  {
    id: 1,
    question: "Cette machine coupe bois, plexiglas, médium et grave verre et cuir grâce à ?",
    answers: [
      {
        type: { imageUrl: "", explication: "" },
        content: "Un laser"
      },

      {
        type: { imageUrl: "", explication: "" },
        content: "une température élevé"
      },
      {
        type: { imageUrl: "", explication: "" },
        content: "un gaz"
      }
    ]
  },
  {
    id: 2,
    question: "Cette machine s'utilise avec ?",
    answers: [
      {
        type: { imageUrl: "", explication: "" },
        content: "De la matière "
      },

      {
        type: { imageUrl: "", explication: "" },
        content: "Un extracteur de fumée et/ou un filtre "
      },
      {
        type: { imageUrl: "", explication: "" },
        content: "Un couvercle traité"
      }
    ]
  },
  {
    id: 3,
    question: "Quel gaz peut être ajouter a la zone de découpage pour en améliorer l'efficacité ?",
    answers: [
      {
        type: { imageUrl: "", explication: "" },
        content: "Argon"
      },

      {
        type: { imageUrl: "", explication: "" },
        content: "Azote "
      },
      {
        type: { imageUrl: "", explication: "" },
        content: "CO2"
      }
    ]
  },
];
export default (questionQuiz,questionQuizLaser);
