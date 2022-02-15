import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
  name: String,
  country: String,
  email: String,
  owners: { type: mongoose.Schema.Types.Array, default: [] },
});
