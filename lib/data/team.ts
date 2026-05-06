export interface TeamSection {
  title: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline?: string;
  bio: string;
  sections?: TeamSection[];
  image: string;
  email: string;
  specialization: string[];
  education: string[];
  barEnrollment: string;
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "Keshav Soni",
    role: "Founder",
    bio: "Keshav Soni is a litigation advocate, a member of the Bar Council of India and the Founder of Stratum Juris, known for his structured approach to dispute resolution and his ability to take ownership of matters at a strategic level. From early in his practice, he has been consistently involved in complex litigation across courts and forums, building a reputation for clarity in thought, precision in execution and a results-oriented mindset.\n\nHis work spans appearances and involvement in matters before the Hon'ble Supreme Court of India, High Courts, trial courts and specialised tribunals, with hands-on experience in drafting, strategy development and procedural execution. He has handled a range of disputes including high-value commercial recoveries, execution of decrees, cheque dishonour prosecutions and matters involving regulatory and financial exposure.",
    sections: [
      {
        title: "Building Stratum Juris",
        content:
          "In Keshav's words, \"Stratum Juris was established with a clear objective — to move away from passive litigation and towards a model driven by strategy, control and enforceable outcomes.\"\n\nThe firm reflects Keshav's approach to disputes: structured from the outset, aggressively pursued where required, and always aligned with a defined end-goal.",
      },
      {
        title: "Litigation Philosophy",
        content:
          "Litigation, as led by Keshav, is not reactive — it is engineered. Each matter is broken down to its fundamentals: facts, leverage, risk and procedural advantage. Strategy is built early, and execution follows with discipline, ensuring that the client's position is not merely defended, but actively advanced.",
      },
      {
        title: "Courtroom & Strategic Exposure",
        content:
          "Keshav has worked extensively on complex pleadings and superior court matters, including Special Leave Petitions, writ petitions, interlocutory applications and detailed briefing for senior counsel. His exposure spans across statutes such as the Companies Act, PMLA, SEBI regulations and allied financial laws, often in matters involving significant financial stakes and layered regulatory exposure.",
      },
      {
        title: "Execution & Enforcement Mindset",
        content:
          "A defining aspect of his practice is the emphasis on enforcement. From initiating recovery actions to driving execution proceedings, his focus remains on translating legal victories into tangible outcomes. Matters are handled with continuity and intent, ensuring that proceedings do not lose momentum at any stage.",
      },
      {
        title: "Client Strategy & Positioning",
        content:
          "Keshav works closely with clients in evaluating disputes, identifying leverage and structuring a clear course of action. His advisory is direct and commercially aligned — focused on what can be achieved, the risks involved and the most effective way forward.",
      },
      {
        title: "Role as the Founder",
        content:
          "As the Founder of Stratum Juris, he leads the firm's litigation practice and overall strategic direction. He remains directly involved in case structuring, key filings and critical stages of proceedings, ensuring that every matter handled by the firm reflects a consistent standard of precision, discipline and outcome-focused advocacy.",
      },
      {
        title: "Focus Areas",
        content:
          "Commercial Recovery & Enforcement\nRecovery actions, execution of decrees and enforcement strategy. Focused on realisation and outcome-driven litigation.\n\nCorporate & Shareholder Litigation\nShareholder disputes, governance breakdowns and commercial conflicts. Includes oppression, mismanagement and corporate disputes.\n\nPMLA & Economic Offences\nMoney laundering proceedings, attachment and adjudication. Strategy for bail, defence and financial exposure.\n\nCBI & Criminal Prosecution\nInvestigation-stage defence and trial strategy. Handling FIRs, charge-sheets and discharge proceedings.\n\nNegotiable Instruments Litigation\nCheque dishonour cases and enforcement proceedings. Handled from initiation to recovery.\n\nNCLT / NCLAT Practice\nInsolvency and restructuring under the IBC framework. Creditor-debtor disputes and tribunal litigation.\n\nDRT / DRAT Proceedings\nBanking disputes, debt recovery and secured asset enforcement. Handling matters across tribunal and appellate stages.\n\nMatrimonial & Family Proceedings\nDivorce, custody and maintenance disputes. Balanced handling with focus on legal position and outcome.\n\nRegulatory & Compliance Disputes\nStatutory exposure and multi-agency matters. Aligned with financial and operational considerations.\n\nMulti-Forum Litigation Strategy\nCoordinated proceedings across courts and tribunals. Focused on consistency, timing and control.",
      },
    ],
    image: "/team/founder.PNG",
    email: "keshav.soni@stratumjuris.com",
    specialization: [
      "Commercial Recovery & Enforcement",
      "Corporate & Shareholder Litigation",
      "PMLA & Economic Offences",
      "CBI & Criminal Prosecution",
      "Negotiable Instruments Litigation",
      "NCLT / NCLAT Practice",
      "DRT / DRAT Proceedings",
      "Matrimonial & Family Proceedings",
      "Regulatory & Compliance Disputes",
      "Multi-Forum Litigation Strategy",
    ],
    education: [],
    barEnrollment: "Advocate, Bar Council of India",
  },
  {
    id: "ravi-prakash-verma",
    name: "Ravi Prakash Verma",
    role: "Head of Compliance & Advisory",
    tagline: "Advocate, Bar Council of India",
    bio: "Ravi Prakash Verma brings over two decades of experience in regulatory, tax and commercial advisory, having built and led an established practice over the past 25 years advising businesses, institutions and individuals on complex legal and financial matters.\n\nOver the course of his practice, he has been engaged in navigating intricate regulatory frameworks, structuring transactions and managing tax and compliance exposure across sectors. His work has consistently involved matters requiring careful calibration of legal, financial and operational considerations, including direct and indirect taxation, corporate structuring, business setup and regulatory positioning.\n\nAt Stratum Juris, he serves in a strategic advisory capacity on matters involving regulatory, financial and commercial complexity — particularly where litigation intersects with tax, compliance or business structuring considerations. His involvement brings a layer of experience that informs decision-making at critical stages of disputes.",
    sections: [
      {
        title: "Advisory Focus",
        content:
          "His experience reflects long-term engagement with regulatory systems and financial frameworks, including legacy matters carrying sustained exposure and multi-layered implications. His perspective is grounded in continuity, risk assessment and measured resolution, particularly in situations requiring stability and discretion.",
      },
      {
        title: "Role at the Firm",
        content:
          "Ravi acts as a senior strategic resource in matters requiring regulatory depth and commercial insight, ensuring that dispute strategy remains aligned with broader financial, tax and business considerations.",
      },
    ],
    image: "/team/headofcompliance.JPG.jpeg",
    email: "ravi.verma@stratumjuris.com",
    specialization: ["Regulatory Advisory", "Taxation", "Corporate Structuring", "Compliance"],
    education: [],
    barEnrollment: "",
  },
  {
    id: "raagansh-kaushik",
    name: "Raagansh Kaushik",
    role: "Senior Associate — Criminal Litigation",
    bio: "Raagansh Kaushik is a litigation practitioner focused on criminal defence, with consistent involvement in courtroom advocacy and procedural strategy across stages of criminal proceedings. He regularly appears before the Hon'ble High Courts, District & Sessions Courts and Magistrate Courts, and has also been engaged in matters involving proceedings before the Hon'ble Supreme Court of India.\n\nHis work centres around criminal litigation including bail, quashing petitions, discharge applications and trial defence. He is actively involved in handling matters arising out of FIRs, complaints and charge sheets, with a clear focus on maintaining consistency in defence strategy and control over procedural developments.\n\nAt Stratum Juris, Raagansh is engaged in handling criminal defence matters, contributing to cases that require prompt response, precision in drafting and effective representation before courts.",
    sections: [
      {
        title: "Criminal Practice Focus",
        content:
          "His work is concentrated on core areas of criminal litigation, including bail strategy, quashing of proceedings, discharge and trial defence. He is regularly involved in matters requiring immediate intervention, where timing, preparation and clarity of legal position are critical.\n\nHis approach is grounded in early assessment of exposure, structured defence positioning and disciplined execution across stages of proceedings, ensuring that the client's position is clearly articulated and effectively advanced.",
      },
      {
        title: "Role at the Firm",
        content:
          "Raagansh forms part of the litigation team at Stratum Juris, with a dedicated focus on criminal defence. His role involves drafting, case analysis, briefing and court appearances, supporting the firm's approach of structured litigation and consistent execution.",
      },
    ],
    image: "",
    email: "raagansh.kaushik@stratumjuris.com",
    specialization: ["Criminal Defence", "Bail Strategy", "Quashing Petitions", "Discharge Applications", "Trial Defence"],
    education: [],
    barEnrollment: "",
  },
  {
    id: "himanshu-jaiswal",
    name: "Himanshu Jaiswal",
    role: "Senior Associate — Criminal Litigation",
    bio: "Himanshu Jaiswal is a criminal litigation practitioner with focused experience in trial defence, white-collar investigations and courtroom advocacy. His practice is centred on handling criminal matters across forums, with regular involvement before the Hon'ble Supreme Court of India, the Allahabad High Court and trial courts across Uttar Pradesh.\n\nHis work includes handling a range of criminal matters involving bail, trial defence, charge framing and cross-examination, along with matters arising out of serious allegations including offences under the IPC, cyber laws and economic offences. He has also been engaged in matters involving investigations by agencies such as the Enforcement Directorate and the Central Bureau of Investigation, contributing to defence strategy, procedural handling and courtroom representation.\n\nAt Stratum Juris, Himanshu is involved in handling criminal defence matters requiring structured strategy, timely intervention and strong courtroom execution, particularly in cases involving complex factual and procedural issues.",
    sections: [
      {
        title: "Criminal Practice Focus",
        content:
          "His practice is concentrated on criminal litigation, with significant involvement in trial proceedings, bail strategy and defence in matters involving serious allegations. He has experience in handling cases from investigation stage through trial, including drafting, evidence handling and conducting examinations.\n\nHe has also worked on matters involving white-collar offences and agency-driven investigations, requiring coordinated defence strategy and careful handling of procedural developments across forums.",
      },
      {
        title: "Role at the Firm",
        content:
          "Himanshu serves as a Senior Associate in the criminal litigation team at Stratum Juris, contributing to case strategy, drafting, trial preparation and court appearances. His role involves supporting the firm's approach of structured criminal defence, ensuring consistency in position and effective execution across stages of proceedings.",
      },
    ],
    image: "/team/himanshu.jpeg",
    email: "contact@stratumjuris.com",
    specialization: ["Criminal Defence", "Trial Defence", "Bail Strategy", "White-Collar Investigations", "CBI & ED Matters"],
    education: [],
    barEnrollment: "",
  },
];
