import { EnquiryDetails } from "./EnquiryDetails.model";
export class Enquiry {
  custName: string;
  custEmail: string;
  area: Number;
  source: Number;
  remarks: string;
  tel1: string;
  tel2: string;
  contactPerson: string;
  enquiryDetails: EnquiryDetails[];
  deletedFlag: string;
}
