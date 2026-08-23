import { router, publicProcedure } from "../trpc.js";

export const userRouter = router({
  getAll: publicProcedure.query(() => {
    return [
      {
        id: 1,
        name: "Chanchal",
        email: "chanchal@email.com",
      },
      {
        id: 2,
        name: "Rahul",
        email: "rahul@email.com",
      },
      {
        id: 3,
        name: "Rohit",
        email: "rohit@email.com",
      },
      {
        id: 4,
        name: "Rohit",
        email: "rohit@email.com",
      },
       {
        id: 5,
        name: "Rohit",
        email: "rohit@email.com",
      },
      {
        id: 6,
        name: "Aman",
        email: "aman@email.com",
      },
       {
        id: 7,
        name: "Sonu",
        email: "sonu@email.com",
      },
       {
        id: 8,
        name: "Monu",
        email: "monu@email.com",
      },
      {
        id: 9,
        name: "Ronit",
        email: "ronit@email.com",
      },
       {
        id: 9,
        name: "Rachit",
        email: "rachit@email.com",
      },
      {
        id: 10,
        name: "Rachita",
        email: "rachita@email.com",
      },
       {
        id: 11,
        name: "Richa",
        email: "riha@email.com",
      },
      {
        id: 12,
        name: "Renu",
        email: "renu@email.com",
      },
    ];
  }),
});