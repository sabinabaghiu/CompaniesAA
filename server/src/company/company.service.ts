import { Injectable } from '@nestjs/common';
import { Company } from './interfaces/company.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyModel.find();
  }

  async findOne(id: string): Promise<Company> {
    return this.companyModel.findOne({ _id: id });
  }

  async create(company: Company): Promise<Company> {
    const newCompany = new this.companyModel(company);
    return newCompany.save();
  }

  async update(id: string, company: Company): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(id, company, { new: true });
  }
}
