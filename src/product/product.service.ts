import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    return this.productModel.create(dto);
  }

  async findById(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  async deleteById(id: string): Promise<Product | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async updateById(id: string, dto: CreateProductDto): Promise<Product | null> {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async findProductsWithReviews(dto: FindProductDto) {
    return this.productModel
      .aggregate([
        {
          $match: {
            categories: dto.category,
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
        {
          $limit: dto.limit,
        },
        { $addFields: { reviewId: { $toObjectId: '$productId' } } },
        {
          $lookup: {
            //searching collection name
            from: 'reviews',
            //setting variable [searchId] where your string converted to ObjectId
            let: { searchId: { $toObjectId: '$productId' } },
            //search query with our [searchId] value
            pipeline: [
              //searching [searchId] value equals your field [_id]
              { $match: { $expr: [{ _id: '$$searchId' }] } },
              //projecting only fields you reaaly need, otherwise you will store all - huge data loads
              // { $project: { _id: 1 } },
            ],
            as: 'reviews',
          },
        },
        {
          $addFields: {
            reviewCount: { $size: '$reviews' },
            reviewAvgRating: { $avg: '$reviews.rating' },

            //! This sort by createdAt work MongoDB 4.4 or higher version,
            //! free M0, or shared M2 and M5 clusters (these do not support server side JavaScript)
            // reviews: {
            // 	$function: {
            // 		body: `function (reviews) {
            // 			reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            // 			return reviews;
            // 		}`,
            // 		args: ['reviews'],
            // 		lang: 'js',
            // 	},
            // },
          },
        },
      ])
      .exec();
  }
}
