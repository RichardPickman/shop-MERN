import charModel from '../model/schemes/Character';

class characterController {
    async add(data: { [k: string]: string | number }) {
        const create = new charModel({ ...data }).save();

        return create;
    }

    async getOne(shortcut: string) {
        const find = await charModel.find({ shortcut: shortcut });

        return find;
    }

    async getAll() {
        const find = await charModel.find();

        return find;
    }

    async remove(shortcut: string) {
        
        return charModel.deleteOne({ shortcut }).then(() => console.log('removed ' + shortcut));
    }
}

const character = new characterController();

export default character;
