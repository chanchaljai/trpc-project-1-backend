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
      {
        id: 13,
        name: "Renuka",
        email: "renuka@email.com",
      },
      {
        id: 14,
        name: "Archna",
        email: "archna@email.com",
      },
       {
        id: 15,
        name: "sonam",
        email: "sonam@email.com",
      },
      {
        id: 16,
        name: "sona",
        email: "sona@email.com",
      },
      {
        id: 17,
        name: "priya",
        email: "priya@email.com",
      },
       {
        id: 18,
        name: "priyanka",
        email: "priyanka@email.com",
      },
       {
        id: 19,
        name: "priyanka chopra",
        email: "priyanka_chpopra@email.com",
      },
      {
        id: 19,
        name: "priyanka verma",
        email: "priyanka_verma@email.com",
      },
      {
        id: 20,
        name: "priyanka singh",
        email: "priyanka_singh@email.com",
      },
      {
        id: 21,
        name: "Abhinav",
        email: "abhinav@email.com",
      },
      {
        id: 21,
        name: "Abhinav Bindra",
        email: "abhinav_bindra@email.com",
      },
       {
        id: 22,
        name: "Anup",
        email: "anup@email.com",
      },
      {
        id: 23,
        name: "Anup kumar",
        email: "anup_kumar@email.com",
      },
      {
        id: 24,
        name: "Anup Verma",
        email: "anup_varma@email.com",
      },
       {
        id: 25,
        name: "Anup Singh",
        email: "anup_singh@email.com",
      },
       {
        id: 26,
        name: "Subodh",
        email: "subodh@email.com",
      },
      {
        id: 27,
        name: "Sudha",
        email: "sudha@email.com",
      },
       {
        id: 28,
        name: "Sudha_Murti",
        email: "sudhamurti@email.com",
      },
       {
        id: 29,
        name: "Sudha_Kumari",
        email: "sudhakumari@email.com",
      },
       {
        id: 30,
        name: "Sudha_jaiswal",
        email: "sudhajaiswal@email.com",
      },
      {
        id: 31,
        name: "Madhu_jaiswal",
        email: "madhujaiswal@email.com",
      },
       {
        id: 31,
        name: "Madhu_singh",
        email: "madhusingh@email.com",
      },
       {
        id: 32,
        name: "Madhu_verma",
        email: "madhuverma@email.com",
      },
      {
        id: 33,
        name: "Madhu_sharma",
        email: "madhusharma@email.com",
      },
    ];
  }),
});