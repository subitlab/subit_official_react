import data from "../../data/member.json";

export default function handler(req, res) {
    res.status(200).json(data);
}
