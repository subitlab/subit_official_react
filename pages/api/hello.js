// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import hello_data from "../../data/hello.json";

export default function handler(req, res) {
  res.status(200).json(hello_data);
}
