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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "What I learn at codaisseur",
          content:
            "I learn evrything which I needed to work as a web developer.",
          imageUrl:
            "https://media-exp1.licdn.com/dms/image/C4E22AQHygDABz-Lp4w/feedshare-shrink_800/0/1637834655012?e=1643241600&v=beta&t=zTUeFx2F2lUAZbYgQiJnzjaRImvjHm49EJC7GGFpSWM",
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
