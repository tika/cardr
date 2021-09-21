import { createEndpoint } from "@app/endpoint";
import { NotFound } from "@app/expections";

export default createEndpoint({
  PUT: async (req, res) => {
    const user = await prisma.user.findFirst({
      where: { id: req.query.id as string },
    });

    if (!user) {
      throw new NotFound("user");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { timesPlayed: { increment: 1 } },
    });

    res.send({ success: true });
  },
});
