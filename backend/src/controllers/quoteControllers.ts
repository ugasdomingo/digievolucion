//Import tools
import { Request, Response } from 'express';
import { QuoteModel, IQuote } from '../models/QuoteModel';

// Get All Quotes --> Line 16
// Get One Quote --> Line 32
// Create  Quote --> Line 48
// Update  Quote --> Line 71
// Delete  Quote --> Line 94

// Get All Quotes
export const getAllQuotes = async (req: Request, res: Response) => {
    try {
        const quotes: IQuote[] = await QuoteModel.find();

        return res.status(200).json({ quotes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get Quote
export const getOneQuote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const quote: IQuote | null = await QuoteModel.findById(id);

        if (!quote) {
            return res.status(404).json({ message: 'Quote not found' });
        }

        return res.status(200).json({ quote });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Create Quote
export const createQuote = async (req: Request, res: Response) => {
    try {
        const uid = req.uid;
        const {
            services,
            enterprise,
            enterpriseURL,
            dateTime,
            message,
            politiquesAccepted,
        } = req.body;

        const quote: IQuote = new QuoteModel({
            uid,
            services,
            enterprise,
            enterpriseURL,
            dateTime,
            message,
            politiquesAccepted,
        });
        await quote.save();

        return res.status(201).json({ quote });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Update Quote
export const updateQuote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const quote: IQuote | null = await QuoteModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!quote) {
            return res.status(404).json({ message: 'Quote not found' });
        }

        return res.status(200).json({ quote });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Delete Quote
export const deleteQuote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const quote: IQuote | null = await QuoteModel.findByIdAndDelete(id);

        if (!quote) {
            return res.status(404).json({ message: 'Quote not found' });
        }

        return res.status(200).json({ quote });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
