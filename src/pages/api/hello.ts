// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import hello_data from "../../data/hello.json";
import type { NextApiRequest, NextApiResponse } from "next";

type helloData = {
  hello: string
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<helloData>) {
  res.status(200).json(hello_data);
}
