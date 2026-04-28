import mongoose from "mongoose";
import { Lead } from "../lib/models/Lead";
import { DeletedLead } from "../lib/models/DeletedLead";


const sampleLeads = [
  { name: "Arjun Mehta", email: "arjun.mehta@gmail.com", phone: "9876543210", message: "I have a commercial dispute with a business partner regarding breach of contract. Need urgent legal advice.", source: "Commercial Dispute", tags: ["Commercial Dispute"], status: "pending", enquiryDate: "15 Apr 2026", starred: false },
  { name: "Priya Sharma", email: "priya.sharma@outlook.com", phone: "9823456701", message: "My property documents are disputed by a relative. The property is in South Delhi and we have been in conflict for 2 years.", source: "Property / Real Estate", tags: ["Property / Real Estate"], status: "contacted", enquiryDate: "14 Apr 2026", starred: true },
  { name: "Rohit Verma", email: "rohit.v@yahoo.com", phone: "9711234567", message: "I have received a notice from the Enforcement Directorate. I need immediate legal representation.", source: "Criminal Defence", tags: ["Criminal Defence"], status: "pending", enquiryDate: "13 Apr 2026", starred: true },
  { name: "Sunita Agarwal", email: "sunita.agarwal@gmail.com", phone: "8899001122", message: "Seeking legal counsel for divorce proceedings and child custody matter. The situation is sensitive and requires immediate attention.", source: "Civil Litigation", tags: ["Civil Litigation"], status: "contacted", enquiryDate: "12 Apr 2026", starred: false },
  { name: "Vikram Joshi", email: "vikram.j@business.com", phone: "9988776655", message: "Our company has a high-value arbitration dispute under SIAC rules. We need experienced arbitration lawyers.", source: "Arbitration / ADR", tags: ["Arbitration / ADR"], status: "closed", enquiryDate: "10 Apr 2026", starred: false },
  { name: "Deepa Nair", email: "deepa.nair@gmail.com", phone: "9654321098", message: "Cheque dishonour case under Section 138 NI Act. I have filed a complaint but need proper legal representation.", source: "Commercial Dispute", tags: ["Commercial Dispute"], status: "pending", enquiryDate: "09 Apr 2026", starred: false },
  { name: "Karan Malhotra", email: "karan.m@corp.in", phone: "9090909090", message: "Our company is facing an NCLT insolvency petition filed by a creditor. Need urgent representation.", source: "Corporate Litigation", tags: ["Corporate Litigation"], status: "contacted", enquiryDate: "07 Apr 2026", starred: true },
  { name: "Ananya Singh", email: "ananya.singh@hotmail.com", phone: "8765432109", message: "I need help with a property possession dispute. The builder has not handed over possession despite full payment.", source: "Property / Real Estate", tags: ["Property / Real Estate"], status: "pending", enquiryDate: "05 Apr 2026", starred: false },
];

async function seed() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI");
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB — stratumjuris");

  // Clear existing
  await Lead.deleteMany({});
  await DeletedLead.deleteMany({});

  // Insert leads
  await Lead.insertMany(sampleLeads);
  console.log(`✓ Inserted ${sampleLeads.length} leads`);

  // Create deletedleads collection with one sample entry
  await DeletedLead.create({
    name: "Test Entry",
    email: "test@example.com",
    phone: "9000000000",
    message: "This is a sample deleted entry.",
    source: "Other",
    tags: ["Other"],
    status: "closed",
    starred: false,
    notes: [],
    deletedAt: new Date(),
    originalCreatedAt: new Date("2026-04-01"),
  });
  console.log("✓ Created deletedleads collection");

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch(console.error);
