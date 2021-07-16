import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Recebu evento")

  return res.status(200).json({ message: "ok" });

}