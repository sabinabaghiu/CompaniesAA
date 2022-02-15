import { Injectable } from '@nestjs/common';
import {Company} from './interfaces/company.interface';
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CompanyService {
    constructor(@InjectModel('Company') private readonly companyModel:Model<Company>){}

    async findAll(): Promise<Company[]> {
        return await this.companyModel.find();
    }

    async findOne(id: string): Promise<Company>{
        return await this.companyModel.findOne({_id: id});
    }

    async create(company: Company): Promise<Company> {
        const newCompany = new this.companyModel(company);
        return await newCompany.save();
    }

    async update(id: string, company: Company): Promise<Company> {
        return await this.companyModel.findByIdAndUpdate(id, company, {new: true})
    }
}
