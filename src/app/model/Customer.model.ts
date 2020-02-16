import { CustomerAddress } from "./CustomerAddress.model";

export class Customer {
  csCustSupplrCode: Number;
  csName: string;
  csCustOf: Number;
  csCustSupplFlg: string;
  csType: string;
  csFileNo: string;
  csCreatedBy: string;
  csTsEdited: Date;
  csDeletedFlg: string;
  csEditedBy: string;
  csAccCode: string;
  csAccountNo: string;
  csPanNo: string;
  csAccountEmailId: string;
  csRemark: string;
  csCustFlg: string;
  csAadharNo: string;
  csAreaLocation: Number;
  csSource: Number;
  csContactPerson1: string;
  csContactPerson2: string;
  csEmailId: string;
  csTelNo1: string;
  csTelNo2: string;
  csTelNo3: string;
  csGstNo: string;
  csBlacklisted: string;
  customerAddress: CustomerAddress[] = [];
}
