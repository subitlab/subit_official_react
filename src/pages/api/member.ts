import data from "../../data/member.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>) {
    res.status(200).json(data);
}
