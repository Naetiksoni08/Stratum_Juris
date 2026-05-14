export interface TeamSection {
  title: string;
  label?: string;
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
        title: "Focus Areas",
        content:
          "Commercial Recovery & Enforcement\nRecovery actions, execution of decrees and enforcement strategy. Focused on realisation and outcome-driven litigation.\n\nCorporate & Shareholder Litigation\nShareholder disputes, governance breakdowns and commercial conflicts. Includes oppression, mismanagement and corporate disputes.\n\nPMLA & Economic Offences\nMoney laundering proceedings, attachment and adjudication. Strategy for bail, defence and financial exposure.\n\nCBI & Criminal Prosecution\nInvestigation-stage defence and trial strategy. Handling FIRs, charge-sheets and discharge proceedings.\n\nNegotiable Instruments Litigation\nCheque dishonour cases and enforcement proceedings. Handled from initiation to recovery.\n\nNCLT / NCLAT Practice\nInsolvency and restructuring under the IBC framework. Creditor-debtor disputes and tribunal litigation.\n\nDRT / DRAT Proceedings\nBanking disputes, debt recovery and secured asset enforcement. Handling matters across tribunal and appellate stages.\n\nMatrimonial & Family Proceedings\nDivorce, custody and maintenance disputes. Balanced handling with focus on legal position and outcome.\n\nRegulatory & Compliance Disputes\nStatutory exposure and multi-agency matters. Aligned with financial and operational considerations.\n\nMulti-Forum Litigation Strategy\nCoordinated proceedings across courts and tribunals. Focused on consistency, timing and control.",
      },

      {
        title: "Building Stratum Juris",
        label: "Our Vision & Genesis",
        content:
          "In Keshav's words, \"Stratum Juris was established with a clear objective — to move away from passive litigation and towards a model driven by strategy, control and enforceable outcomes.\"\n\nThe firm reflects Keshav's approach to disputes: structured from the outset, aggressively pursued where required, and always aligned with a defined end-goal.",
      },

      {
        title: "Litigation Philosophy",
        label: "⁠Engineered Advocacy",
        content:
          "Litigation, as led by Keshav, is not reactive — it is engineered. Each matter is broken down to its fundamentals: facts, leverage, risk and procedural advantage. Strategy is built early, and execution follows with discipline, ensuring that the client's position is not merely defended, but actively advanced.",
      },

      {
        title: "Courtroom & Strategic Exposure",
        label: "⁠Experience in Practice",
        content:
          "Keshav has worked extensively on complex pleadings and superior court matters, including Special Leave Petitions, writ petitions, interlocutory applications and detailed briefing for senior counsel. His exposure spans across statutes such as the Companies Act, PMLA, SEBI regulations and allied financial laws, often in matters involving significant financial stakes and layered regulatory exposure.",
      },

      {
        title: "Execution & Enforcement Mindset",
        label: "⁠Driving Tangible Results",
        content:
          "A defining aspect of his practice is the emphasis on enforcement. From initiating recovery actions to driving execution proceedings, his focus remains on translating legal victories into tangible outcomes. Matters are handled with continuity and intent, ensuring that proceedings do not lose momentum at any stage.",
      },

      {
        title: "Client Strategy & Positioning",
        label: "⁠Advisory Service",
        content:
          "Keshav works closely with clients in evaluating disputes, identifying leverage and structuring a clear course of action. His advisory is direct and commercially aligned — focused on what can be achieved, the risks involved and the most effective way forward.",
      },

      {
        title: "Role as the Founder",
        label: "⁠Leadership & Direction",
        content:
          "As the Founder of Stratum Juris, he leads the firm's litigation practice and overall strategic direction. He remains directly involved in case structuring, key filings and critical stages of proceedings, ensuring that every matter handled by the firm reflects a consistent standard of precision, discipline and outcome-focused advocacy.",
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
    image: "/team/ragansh.png",
    email: "raagansh.kaushik@stratumjuris.com",
    specialization: ["Criminal Defence", "Bail Strategy", "Quashing Petitions", "Discharge Applications", "Trial Defence"],
    education: [],
    barEnrollment: "",
  },
  {
    id: "himanshu-jaiswal",
    name: "Himanshu Jaiswal",
    role: "Senior Associate — White-Collar Crimes",
    bio: "Himanshu Jaiswal is a litigation practitioner with focused experience in white-collar criminal defence, economic offences and agency-driven investigations. His practice is centred on handling complex criminal proceedings involving financial irregularities, regulatory exposure and prosecution initiated by specialised investigative agencies, with regular appearances before the Hon’ble Supreme Court of India, the Allahabad High Court and trial courts across Uttar Pradesh.\n\nHis work includes matters involving allegations of financial fraud, cheating, criminal breach of trust, cyber offences and corporate misconduct, along with proceedings arising under special statutes and regulatory frameworks. He has been actively involved in matters concerning investigations conducted by agencies such as the Enforcement Directorate, Central Bureau of Investigation and Economic Offences Wing, contributing to defence strategy, procedural challenges, anticipatory reliefs, bail proceedings and courtroom representation.\n\nAt Stratum Juris, Himanshu is engaged in handling white-collar criminal matters requiring strategic defence planning, procedural precision and coordinated litigation strategy, particularly in cases involving financial exposure, parallel proceedings and high-stakes investigation frameworks.",
    sections: [
      {
        title: "WHITE-COLLAR PRACTICE FOCUS",
        content:
          "His practice is concentrated on white-collar criminal litigation, with significant involvement in matters relating to economic offences, agency investigations and financial crime defence. He regularly handles proceedings involving bail, investigation-stage intervention, trial strategy and procedural challenges in matters carrying substantial reputational and regulatory implications.\n\nHe has also worked extensively on cases involving multi-agency investigations and complex factual matrices, requiring coordinated defence strategy, detailed document analysis and careful management of proceedings across criminal courts, investigative authorities and allied forums.",
      },
      {
        title: "Role at the Firm",
        content:
          "Himanshu serves as a Senior Associate – White-Collar Crimes at Stratum Juris, contributing to investigation strategy, criminal defence structuring, drafting and courtroom representation in complex economic offence matters. His role involves supporting the firm’s white-collar defence practice through focused handling of agency-driven proceedings, ensuring strategic consistency and effective execution at every stage of litigation.",
      },
    ],
    image: "/team/himanshu.jpeg",
    email: "contact@stratumjuris.com",
    specialization: ["Criminal Defence", "Trial Defence", "Bail Strategy", "White-Collar Investigations", "CBI & ED Matters"],
    education: [],
    barEnrollment: "",
  },
];
