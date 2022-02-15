import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';
import { Company } from './interfaces/company.interface';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Company> {
    return this.companyService.findOne(id);
  }

  @Post()
  create(@Body() createCompany: CompanyDto): Promise<Company> {
    return this.companyService.create(createCompany);
  }

  @Put(':id')
  update(
    @Body() updateCompanyDto: CompanyDto,
    @Param('id') id,
  ): Promise<Company> {
    return this.companyService.update(id, updateCompanyDto);
  }
}
