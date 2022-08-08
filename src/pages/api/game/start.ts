import { createEndpoint } from "@app/endpoint";
import { nanoid } from "nanoid";

export default createEndpoint({
    GET: async (req, res) => {
        let id = nanoid();

        res.json({ code: id });
    },
});
