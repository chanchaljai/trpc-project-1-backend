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
    ];
  }),
});