import { createEndpoint } from "@app/endpoint";

export default createEndpoint({
  GET: async (req, res) => {
    res.json({
      leaderboard: prisma.user.findMany({
        orderBy: { timesWon: "desc" },
        take: 5,
      }),
    });
  },
});
