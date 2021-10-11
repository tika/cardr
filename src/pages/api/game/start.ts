import { createEndpoint } from "@app/endpoint";
import { nanoid } from "nanoid";
import { isGame } from "./[code]";

export default createEndpoint({
  GET: async (req, res) => {
    let id = nanoid();

    // while (await isGame(id)) {
    //   id = nanoid();
    // }

    res.json({ code: id });
  },
});
