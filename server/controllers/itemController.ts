import { Request, Response } from 'express';
import Product from '../services/Product';
import ApiError from '../Error';


class itemController {
    async add(req: Request, res: Response, next: any) {
        const body = req.body;
        const { thumbnail, gallery } = req.files as { [fieldname: string]: Express.MulterS3.File[] };
        const setLocations = gallery.map(img => img.location);
        
        body.gallery = setLocations;
        body.thumbnail = thumbnail[0].location;

        await Product.create({ ...body });

        res.json({ message: 'Item created successfully' });
    }

    async getOne(req: Request, res: Response, next: any) {
        const body = req.body;
        const getItem = await Product.find(body._id);
        
        res.json({ message: 'return item', payload: getItem });
    }

    async getAll(req: Request, res: Response, next: any) {
        const getItem = await Product.findAll();
        
        res.json({ message: 'return item', payload: getItem });
    }

    async remove(req: Request, res: Response, next: any) {
        const id = req.params.id;
        const removeItem = await Product.remove(id);
        
        res.json({ message: 'item removed' });
    }
}

export default itemController;
