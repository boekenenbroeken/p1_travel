import express, { Request, Response } from "express";
import { Ticket } from "../../interfaces/ticket";
import { validateEmail } from "../../helpers/validate";

const router = express.Router();

const inMemoryTickets: Ticket[] = [
  {
    id: 1,
    title: "title",
    description: "test description",
    price: 10,
    amount: 4,
    supplier: "test supplier",
    email: "test2@example.com",
  },
  {
    id: 2,
    title: "title 2",
    description: "test description 2",
    price: 10,
    amount: 4,
    supplier: "test supplier 2",
    email: "test2@example.com",
  },
];

// Get all tickets
interface GetTicketsResponse {
  data: Ticket[];
}

router.get("/", async (req: Request, res: Response<GetTicketsResponse>) => {
  res.status(200).json({
    data: inMemoryTickets,
  });
});

// Add ticket
interface PostTicketsRequest {
  ticket: Ticket;
}

interface GeneralResponse {
  message: string;
  valid?: boolean;
}

router.post(
  "/",
  async (req: Request<PostTicketsRequest>, res: Response<GeneralResponse>) => {
    try {
      const { ticket } = req.body;

      if (!ticket) {
        res.status(400).send({
          message: "ticket.cannot.be.null",
        });

        return;
      }

      if (!validateEmail(ticket.email)) {
        res.status(400).send({
          message: "ticket.email.invalid",
          valid: false,
        });

        return;
      }

      const parsedPrice = parseInt(ticket.price);
      if (isNaN(parsedPrice)) {
        res.status(400).send({
          message: "ticket.price.must.be.a.number",
          valid: false,
        });

        return;
      }
      ticket.price = parsedPrice;

      const parsedAmount = parseInt(ticket.amount);
      if (isNaN(parsedAmount)) {
        res.status(400).send({
          message: "ticket.amount.must.be.a.number",
          valid: false,
        });

        return;
      }
      ticket.amount = parsedAmount;

      ticket.id = Date.now();

      inMemoryTickets.push(ticket);

      res.status(200).json({
        message: "ticket.created",
      });
    } catch (e) {
      res.status(500).send({
        message: "Unknown.error",
      });
    }
  }
);

module.exports = router;
