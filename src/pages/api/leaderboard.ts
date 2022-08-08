import { createEndpoint } from "@app/endpoint";
import { santiseMany } from "@app/santise";
import { prisma } from "@app/prisma";

export default createEndpoint({
    GET: async (req, res) => {
        res.json({
            leaderboard: santiseMany(
                await prisma.user.findMany({
                    orderBy: { timesWon: "desc" },
                    take: 5,
                })
            ),
        });
    },
});
