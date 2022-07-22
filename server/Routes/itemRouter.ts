import Router from 'express';
import itemController from '../controllers/itemController';
import checkRole from '../middleware/Role';
import multer from 'multer';
import multerS3 from 'multer-s3';
import client from '../middleware/S3Client';


const storage = multerS3({
    acl: "public-read",
    s3: client,
    bucket: 'pickman',
    key: function (req, file, cb) {
        const [filename, _] = file.originalname.split('.');

        cb(null, filename + Date.now());
    },
});

const upload = multer({ storage: storage });

const fields = upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 8 }
]);

const item = new itemController();
const router = Router();


router.post('/', checkRole('admin'), fields, item.add);
router.post('/:id/edit', fields, item.add);

router.delete('/:id', checkRole('admin'), item.remove);

router.get('/', item.getAll);
router.get('/:id', item.getOne);

export default router;
