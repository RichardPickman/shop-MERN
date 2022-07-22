import productModel from "../model/schemes/Product";


class ProductService {
    async create(data: { [k: string]: string | number }) {
        const createdProduct = await new productModel(({ ...data }))
        .save()
        .then((result) => this.find({ _id: result.id }));

        return createdProduct;
    }

    async remove(id: string) {
        return productModel.deleteOne({ _id: id }).then(() => console.log('removed ' + id));
    }

    async update(data: { [k: string]: string }) {
        const updatedProduct = await new productModel(({ ...data }))
        .save()
        .then((result) => this.find({ _id: result.id }));

        return updatedProduct;
    }

    async find(id: unknown) {
        const user = await productModel.findById(id);

        return user;
    }

    async findAll() {
        const user = await productModel.find({});

        return user;
    }
}

const Product = new ProductService();

export default Product;
