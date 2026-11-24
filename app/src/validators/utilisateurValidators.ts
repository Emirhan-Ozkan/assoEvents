import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateForm = [
    body('name').isString().notEmpty().withMessage('Le nom est requis'),
    body('email').isEmail().withMessage('Email invalide'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    },
];