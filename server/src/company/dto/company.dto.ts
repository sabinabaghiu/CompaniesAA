import { Owner } from '../interfaces/company.interface';

export class CompanyDto {
  readonly name: string;
  readonly country: string;
  readonly email: string;
  readonly owners: Owner[];
}
