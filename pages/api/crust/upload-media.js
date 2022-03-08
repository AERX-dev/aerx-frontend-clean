// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { upload } from "./crust";
import nextConnect from "next-connect";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// 1 mb
const byteSize = 1000000;

// multer instance ##upload middleware
const save = multer({
  limits: { fileSize: byteSize * 5 }, // limits upload size to 5mb
  storage: multer.memoryStorage(), // store files in memory
});

const handler = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `failed! ${error.message}` });
  },
  // disallow non POST requests
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    res.status(405).send({ error: `Method '${req.method}' Not Allowed` });
  },
});

// middleware to upload single files
handler.use(save.single("temp")); // change to save.array() for multiple.

// handle POST requests
handler.post(async (req, res) => {
  try {
    const { hash, uri } = await upload(req.file.buffer);
    res.status(200).json({ cid: hash, uri: uri });
  } catch (err) {
    res.status(500).json({ msg: "upload failed", error: err.message });
  }
});

export default handler;
