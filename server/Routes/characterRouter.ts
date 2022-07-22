import Router from 'express';
import characterController from '../controllers/characterController';
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

const char = new characterController();
const router = Router()

router.post('/', checkRole('admin'), upload.single('thumbnail'), char.add);
router.get('/', char.getAll);
router.get('/:shortcut', char.getOne);

router.delete('/:shortcut', char.remove);

export default router;
