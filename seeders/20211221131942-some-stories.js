"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "All fun days at codaisseur",
          content: "Every day we enjoyed at Codaisseur.",
          imageUrl:
            "https://cdn.discordapp.com/attachments/907924148876099616/921419813824389120/IMG_20211217_161300.jpg",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "What I learn at codaisseur",
          content:
            "I learn evrything which I needed to work as a web developer.",
          imageUrl:
            "https://media-exp1.licdn.com/dms/image/C4E22AQHygDABz-Lp4w/feedshare-shrink_800/0/1637834655012?e=1643241600&v=beta&t=zTUeFx2F2lUAZbYgQiJnzjaRImvjHm49EJC7GGFpSWM",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My inspiration for life",
          content:
            "My inspiration in life is a person who has shown me this world. My mother; she is my inspiration since the time when I turned into the prime phase of life.",
          imageUrl: null,
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Why web Developer?",
          content:
            "Web development gives you the opportunity to express yourself creatively on the internet. ... Fortunately, the high demand, easy-to-learn, fun-to-experience life of a web developer is always a great choice for someone ready to have an exciting career in code.",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSK2-Px8aKgSyfk2ZBaVuXYkvMXjhfBjerw&usqp=CAU",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
