import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/cat.dto';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>){}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    console.log(createdCat)
    return createdCat.save();

  }
  async findAll(): Promise<Cat[]> {
    let r = await this.catModel.find().exec()
    console.log(r)
    return r;
  }
}
