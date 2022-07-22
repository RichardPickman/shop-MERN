import { Request, Response } from 'express';
import ApiError from '../Error';
import Character from '../services/Character';


class characterController {
    async add(req: Request, res: Response, next: any) {
        const body = req.body;
        const thumb = req.file as Express.MulterS3.File;

        body.thumbnail = thumb.location;
        body.shortcut = `${body.name}_${body.surname}`;

        await Character.add({ ...body });

        res.json({ message: `${body.name} ${body.surname} created!` })
    }

    async getOne(req: Request, res: Response, next: any) {
        const shortcut = req.params.shortcut;
        const findChar = await Character.getOne(shortcut);

        if (findChar.length === 0) {
            return next(ApiError.badRequest('Character not found!'));
        }

        res.json({message: 'Character found', payload: findChar});
    }

    async getAll(req: Request, res: Response, next: any) {
        const findChar = await Character.getAll();

        if (findChar.length === 0) {
            return next(ApiError.badRequest('Character not found!'));
        }

        res.json({message: 'Character found', payload: findChar});
    }

    async remove(req: Request, res: Response, next: any) {
        const id = req.params.shortcut;
        
        await Character.remove(id);
        
        res.json({ message: 'Character removed' });
    }
}

export default characterController;
