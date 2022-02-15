export interface Company {
  id?: string;
  name: string;
  country: string;
  email?: string;
  owners: Owner[];
}

export interface Owner {
  name: string;
  socialNumber: string;
}
