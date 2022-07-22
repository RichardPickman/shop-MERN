import ApiError from "../Error";
import userModel from "../model/schemes/User";


class UserService {
    async create({ user, email, password, role }: { [k: string]: string }) {
        const create = await new userModel(({ user, email, role, password })).save();
        const createdUser = await this.find({ email });

        return createdUser;
    }

    async delete({ email }: { [k: string]: unknown }) {
        const create = new userModel();

        create.deleteOne({ email });
    }

    async update({ user, email, password }: { [k: string]: string }) {
        const createUser = new userModel({ user, email, password });

        createUser.save(() => ApiError.forbidden('Something went wrong'))
    }

    async find({ email }: { [k: string]: string }) {
        const user = userModel.findOne({ email });

        return user;
    }
}

const User = new UserService();

export default User;
