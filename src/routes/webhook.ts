import * as express from "express";
import { log } from "../utils";
import { authMiddlewareForWebhook } from "../middleware/auth";

const router = express.Router();

router.post("/webhook/checkout-request", authMiddlewareForWebhook, async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method Not Allowed" });
      return;
    }

    const payload = req.body;

    /** 
	  @dev Do something with the payload
	  @todo receive checkout confirmation and process USDC transfer via processTransferAsset()
	*/
    console.log("Webhook received:", payload);

    // Return a response (optional)
    res.status(200).json({ message: "Webhook received successfully!" });
  } catch (err) {
    log.warn(
      {
        func: "/webhook/checkout-request",
        err
      },
      "failed to process webhook"
    );

    res.status(400).send({
      message: err.message || "Error"
    });
  }
});

export = router;
