export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  intro: string;
  fullDescription: string;
  icon: string;
  keyPoints: string[];
  natureOfMatters?: { intro: string; items: string[] };
  scopeOfWork: string[];
  legalFramework?: { statute: string; scope: string }[];
  howHandled: string;
  howHandledSteps?: string[];
  howHandledOutro?: string;
  strategicFocus: string[];
  enforcementNote?: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "civil-commercial-litigation",
    title: "Civil & Commercial Litigation",
    shortDescription: "Recovery, contracts and commercial disputes.",
    intro:
      "Civil and commercial disputes are handled with a clear focus on enforceability, recovery and protection of legal rights. Stratum Juris represents clients in contractual disputes, recovery actions, property-related litigation and cheque dishonour proceedings under the Negotiable Instruments Act, 1881, within the framework of the Code of Civil Procedure, 1908 and allied commercial laws.\n\nRepresentation extends across trial courts, commercial courts and appellate forums, with matters conducted through a structured litigation strategy aligned with the client's commercial objective.",
    fullDescription:
      "Civil and commercial disputes are handled with a clear focus on enforceability, recovery and protection of legal rights. Stratum Juris represents clients in contractual disputes, recovery actions, property-related litigation and cheque dishonour proceedings under the Negotiable Instruments Act, 1881, within the framework of the Code of Civil Procedure, 1908 and allied commercial laws.",
    icon: "Scale",
    keyPoints: [
      "Breach of contract and specific performance",
      "Recovery suits and summary suits",
      "Cheque dishonour matters under Section 138, NI Act",
      "Injunctions and interim reliefs",
      "Execution and enforcement proceedings",
    ],
    natureOfMatters: {
      intro: "The practice covers a range of civil and commercial disputes, including:",
      items: [
        "Breach of contract and specific performance",
        "Recovery suits and summary suits under Order XXXVII, CPC",
        "Cheque dishonour matters under Section 138, NI Act",
        "Injunctions relating to property and commercial rights",
        "Partnership and business disputes",
        "Execution proceedings for enforcement of decrees and awards",
      ],
    },
    scopeOfWork: [
      "Breach of contract and specific performance",
      "Recovery suits and summary suits under Order XXXVII, CPC",
      "Cheque dishonour matters under Section 138, NI Act",
      "Injunctions relating to property and commercial rights",
      "Partnership and business disputes",
      "Execution proceedings for enforcement of decrees and awards",
    ],
    legalFramework: [
      { statute: "Code of Civil Procedure, 1908", scope: "Suits, interim reliefs and execution" },
      { statute: "Negotiable Instruments Act, 1881", scope: "Cheque dishonour proceedings" },
      { statute: "Indian Contract Act, 1872", scope: "Contractual obligations and breach" },
      { statute: "Specific Relief Act, 1963", scope: "Injunctions and specific performance" },
      { statute: "Commercial Courts Act, 2015", scope: "Commercial dispute resolution" },
    ],
    howHandled:
      "Every matter begins with a clear assessment of facts, documentation and available remedies. The immediate focus is on:",
    howHandledSteps: [
      "Identifying the appropriate legal action",
      "Securing interim protection where required",
      "Initiating proceedings without delay",
    ],
    howHandledOutro:
      "As the matter progresses, emphasis remains on maintaining consistency in pleadings and ensuring procedural compliance, while keeping the end objective — recovery, enforcement or defence — clearly in focus.",
    strategicFocus: [
      "Early identification of recovery and enforcement mechanisms",
      "Use of interim injunctions and stay orders to secure position",
      "Effective handling of summary proceedings where applicable",
      "Maintaining procedural discipline across all stages",
      "Ensuring decree enforceability through execution",
    ],
    enforcementNote:
      "Litigation does not conclude with obtaining an order or decree. Focus remains on ensuring that outcomes are effectively enforced through execution proceedings, attachment or other legal mechanisms available under law.",
  },
  {
    id: "criminal-defence",
    title: "Criminal Defence",
    shortDescription: "Bail, trial and defence strategy.",
    intro:
      "Criminal defence at Stratum Juris is structured around immediate response, procedural control and sustained defence positioning. Representation spans offences under the Bharatiya Nyaya Sanhita, 2023, with proceedings governed by the Bharatiya Nagarik Suraksha Sanhita, 2023 and allied criminal laws.\n\nFrom the stage of complaint or FIR through investigation, bail and trial, each step is handled with a clear understanding of legal exposure, evidentiary implications and procedural timelines.",
    fullDescription:
      "Criminal defence at Stratum Juris is structured around immediate response, procedural control and sustained defence positioning. Representation spans offences under the Bharatiya Nyaya Sanhita, 2023, with proceedings governed by the Bharatiya Nagarik Suraksha Sanhita, 2023 and allied criminal laws.",
    icon: "Shield",
    keyPoints: [
      "Bail and anticipatory bail proceedings",
      "Trial representation before criminal courts",
      "Complaint cases and private prosecutions",
      "Defence under BNS 2023 and allied laws",
      "Appellate and revision proceedings",
    ],
    natureOfMatters: {
      intro: "The practice includes representation in:",
      items: [
        "FIR registration and pre-FIR advisory",
        "Bail matters — anticipatory and regular",
        "Heinous and grave offences",
        "Criminal breach of trust, cheating and fraud",
        "Offences involving forgery and document misuse",
        "Complaint cases and private prosecutions",
      ],
    },
    scopeOfWork: [
      "Bail and anticipatory bail proceedings",
      "Trial representation before criminal courts",
      "Complaint cases and private prosecutions",
      "Defence in offences under the Bharatiya Nyaya Sanhita, 2023 and allied laws",
      "Appellate and revision proceedings",
      "Quashing petitions and allied remedies",
    ],
    legalFramework: [
      { statute: "Bharatiya Nyaya Sanhita, 2023", scope: "Substantive offences" },
      { statute: "Bharatiya Nagarik Suraksha Sanhita, 2023", scope: "Investigation, arrest, bail and trial procedure" },
      { statute: "Bharatiya Sakshya Adhiniyam, 2023", scope: "Admissibility and evidentiary standards" },
    ],
    howHandled:
      "Every matter is taken up with immediate clarity on the nexus of law, facts and procedure. The focus remains on securing early protection — whether through anticipatory bail, interim relief or procedural safeguards — while building a defence that remains consistent throughout the proceedings.",
    howHandledSteps: [
      "Pre-arrest stage: Assessment of exposure and filing of anticipatory bail where required",
      "Post-arrest stage: Regular bail, remand strategy and custody-related proceedings",
      "Investigation phase: Responding to notices, protecting against coercive action",
      "Trial stage: Framing of charges, cross-examination and defence evidence",
      "Appellate stage: Challenges to adverse orders and conviction, where applicable",
    ],
    howHandledOutro:
      "Attention is given to how statements, documents and actions at early stages impact the outcome at trial, ensuring that the defence is not compromised at any point.",
    strategicFocus: [
      "Immediate assessment of legal exposure and risk",
      "Securing anticipatory or regular bail at the earliest stage",
      "Managing procedural developments during investigation",
      "Maintaining consistency in defence from FIR to trial",
      "Preparedness for appellate remedies and escalation",
    ],
    enforcementNote:
      "The objective remains to protect the client against coercive action, adverse findings and long-term legal consequences. Strategy is aligned with minimising exposure, challenging weak prosecution and maintaining procedural advantage throughout.",
  },
  {
    id: "white-collar-economic-offences",
    title: "White Collar Crimes & Economic Offences",
    shortDescription: "PMLA, FEMA, ED, CBI matters.",
    intro:
      "Financial and regulatory prosecutions are handled as complex, multi-layered matters involving parallel exposure across criminal law and regulatory frameworks. Stratum Juris represents clients in proceedings under the Prevention of Money Laundering Act, 2002, Foreign Exchange Management Act, 1999, Customs Act, 1962, Prevention of Corruption Act, 1988 and relevant provisions of the Companies Act, 2013.\n\nMatters involving agencies such as the Enforcement Directorate (ED), Central Bureau of Investigation (CBI) and Serious Fraud Investigation Office (SFIO) are approached with structured risk assessment, calibrated response and strict control over disclosures and proceedings.",
    fullDescription:
      "Financial and regulatory prosecutions are handled as complex, multi-layered matters involving parallel exposure across criminal law and regulatory frameworks. Stratum Juris represents clients in proceedings under the Prevention of Money Laundering Act, 2002, Foreign Exchange Management Act, 1999, Customs Act, 1962, Prevention of Corruption Act, 1988 and relevant provisions of the Companies Act, 2013.",
    icon: "Briefcase",
    keyPoints: [
      "Defence under PMLA, FEMA, Customs Act and allied laws",
      "Representation before ED, CBI and SFIO",
      "Summons, attachments and adjudication proceedings",
      "Bail and anticipatory bail in economic offence matters",
      "Trial representation and appellate proceedings",
    ],
    natureOfMatters: {
      intro: "The practice includes representation in:",
      items: [
        "Money laundering investigations and attachment proceedings under PMLA",
        "FEMA violations and adjudication proceedings",
        "Corporate fraud and SFIO-led investigations",
        "Customs and economic offences involving evasion and penal proceedings",
        "Corruption-related prosecutions under PCA",
        "Prosecution arising from corporate and financial irregularities",
      ],
    },
    scopeOfWork: [
      "Defence in proceedings under PMLA, FEMA, Customs Act and allied economic laws",
      "Representation in investigations by the Enforcement Directorate (ED), CBI and SFIO",
      "Handling of summons, statements, attachments and adjudication proceedings",
      "Bail and anticipatory bail in economic offence matters",
      "Trial representation and appellate proceedings",
      "Advisory on exposure, compliance positioning and defence strategy",
    ],
    legalFramework: [
      { statute: "Prevention of Money Laundering Act, 2002", scope: "Attachment, adjudication and prosecution" },
      { statute: "Foreign Exchange Management Act, 1999", scope: "Contraventions and compounding" },
      { statute: "Customs Act, 1962", scope: "Confiscation, penalties and prosecution" },
      { statute: "Prevention of Corruption Act, 1988", scope: "Public office-related offences" },
      { statute: "Companies Act, 2013", scope: "Fraud, mismanagement and director liability" },
    ],
    howHandled:
      "Assessment begins with a clear view of financial exposure, regulatory posture and potential criminal liability. The response is structured with precision — measured, consistent and aligned with both legal and commercial considerations, while maintaining complete discretion.",
    howHandledSteps: [
      "Response to summons, notices and search actions",
      "Statements and deposition management",
      "Provisional attachment and adjudication proceedings",
      "Coordination across parallel investigations by multiple agencies",
    ],
    howHandledOutro:
      "Special attention is given to document trail, financial records and prior disclosures, ensuring that the defence remains factually aligned and legally sustainable across proceedings. Where matters involve multiple agencies or overlapping statutory exposure, responses are coordinated to maintain consistency across forums, preserving overall defence integrity.",
    strategicFocus: [
      "Early-stage risk mapping across statutes and agencies",
      "Controlled and calibrated response to investigations and summons",
      "Strong positioning for bail and interim protection",
      "Alignment of defence strategy with financial and reputational considerations",
      "Maintaining discretion and control in high-sensitivity matters",
    ],
    enforcementNote:
      "The objective remains to minimise criminal, financial and regulatory exposure while maintaining control over the course of proceedings. Strategy is aligned with protecting both immediate legal position and long-term commercial and reputational interests.",
  },
  {
    id: "property-real-estate",
    title: "Property & Real Estate Disputes",
    shortDescription: "Title, possession and real estate conflicts.",
    intro:
      "Property and real estate disputes are handled with a clear focus on title, possession and enforceability of rights. Stratum Juris represents clients in disputes involving ownership, transfer, development and regulatory compliance under the Transfer of Property Act, 1882, the Registration Act, 1908 and the Real Estate (Regulation and Development) Act, 2016.\n\nMatters often involve competing claims over title, possession or contractual rights arising from real estate transactions. Each dispute is approached with a structured evaluation of documents and legal position before proceedings are initiated.",
    fullDescription:
      "Property and real estate disputes are handled with a clear focus on title, possession and enforceability of rights. Stratum Juris represents clients in disputes involving ownership, transfer, development and regulatory compliance under the Transfer of Property Act, 1882, the Registration Act, 1908 and the Real Estate (Regulation and Development) Act, 2016.",
    icon: "Building2",
    keyPoints: [
      "Title and ownership disputes",
      "Possession and eviction matters",
      "Partition and inheritance-related disputes",
      "Builder-buyer and RERA matters",
      "Injunctions relating to property and possession",
    ],
    natureOfMatters: {
      intro: "The practice includes representation in:",
      items: [
        "Title disputes and declaration suits",
        "Possession and eviction proceedings",
        "Partition and co-ownership disputes",
        "Builder-buyer and delayed possession claims",
        "RERA complaints and appeals",
        "Injunctions relating to immovable property",
        "Disputes arising from sale agreements and conveyance",
      ],
    },
    scopeOfWork: [
      "Title and ownership disputes",
      "Possession and eviction matters",
      "Partition and inheritance-related disputes",
      "Builder-buyer and RERA matters",
      "Injunctions relating to property and possession",
      "Execution of property-related decrees",
    ],
    legalFramework: [
      { statute: "Transfer of Property Act, 1882", scope: "Transfer and ownership rights" },
      { statute: "Registration Act, 1908", scope: "Validity and effect of registered documents" },
      { statute: "Real Estate (Regulation and Development) Act, 2016", scope: "Builder obligations and buyer remedies" },
      { statute: "Specific Relief Act, 1963", scope: "Injunctions and specific performance" },
      { statute: "Code of Civil Procedure, 1908", scope: "Suits, interim reliefs and execution" },
    ],
    howHandled:
      "Close scrutiny of title documents, possession status and transactional history forms the starting point. The focus remains on identifying structural weaknesses early and aligning proceedings in a manner that strengthens the client's position from the outset.",
    howHandledOutro:
      "Attention is given to revenue records, registered instruments, encumbrances and prior transactions to establish a clear legal position before initiating or responding to proceedings. Where disputes involve multiple claimants or layered transactions, the approach remains focused on isolating the strongest legal position and structuring proceedings to reinforce it, while addressing competing claims through appropriate reliefs and procedural measures.",
    strategicFocus: [
      "Early-stage title and document analysis",
      "Identification of gaps in ownership or possession claims",
      "Effective use of interim reliefs to secure property interests",
      "Structured handling of builder and RERA disputes",
      "Focus on achieving finality and enforceable outcomes",
    ],
    enforcementNote:
      "Emphasis remains on obtaining reliefs that secure possession, protect title or enforce contractual rights. Proceedings are structured to ensure that interim protections translate into final, enforceable outcomes.",
  },
  {
    id: "family-matrimonial",
    title: "Family & Matrimonial Disputes",
    shortDescription: "Divorce, custody and personal disputes.",
    intro:
      "Family and matrimonial disputes are handled with a balance of legal clarity and practical sensitivity. Stratum Juris represents clients in matters relating to divorce, maintenance, custody and related proceedings under the Hindu Marriage Act, 1955, the Hindu Adoption and Maintenance Act, 1956, the Protection of Women from Domestic Violence Act, 2005 and other applicable personal laws.\n\nThese matters often involve overlapping civil and criminal proceedings, requiring a coordinated approach that protects legal rights while addressing personal and financial implications.",
    fullDescription:
      "Family and matrimonial disputes are handled with a balance of legal clarity and practical sensitivity. Stratum Juris represents clients in matters relating to divorce, maintenance, custody and related proceedings under the Hindu Marriage Act, 1955, the Hindu Adoption and Maintenance Act, 1956, the Protection of Women from Domestic Violence Act, 2005 and other applicable personal laws.",
    icon: "Users",
    keyPoints: [
      "Divorce and judicial separation proceedings",
      "Maintenance and alimony claims",
      "Child custody and visitation rights",
      "Domestic violence proceedings",
      "Settlement negotiations and mutual resolutions",
    ],
    natureOfMatters: {
      intro: "The practice includes representation in:",
      items: [
        "Divorce proceedings — contested and mutual consent",
        "Maintenance and alimony claims",
        "Child custody and visitation rights",
        "Domestic violence complaints and reliefs",
        "Restitution of conjugal rights",
        "Proceedings involving matrimonial property and financial arrangements",
      ],
    },
    scopeOfWork: [
      "Divorce and judicial separation proceedings",
      "Maintenance and alimony claims",
      "Restitution of conjugal rights",
      "Child custody and visitation rights",
      "Domestic violence proceedings",
      "Settlement negotiations and mutual resolutions",
    ],
    legalFramework: [
      { statute: "Hindu Marriage Act, 1955", scope: "Divorce and matrimonial reliefs" },
      { statute: "Hindu Adoption and Maintenance Act, 1956", scope: "Maintenance rights" },
      { statute: "Protection of Women from Domestic Violence Act, 2005", scope: "Civil reliefs and protection orders" },
      { statute: "Bharatiya Nagarik Suraksha Sanhita, 2023", scope: "Maintenance and procedural aspects" },
      { statute: "Bharatiya Sakshya Adhiniyam, 2023", scope: "Evidentiary standards" },
    ],
    howHandled:
      "A clear understanding of both legal position and personal context shapes the approach. The focus remains on structuring proceedings in a manner that protects the client's interests while maintaining discretion and control over the process.",
    howHandledOutro:
      "Care is taken to avoid unnecessary escalation while ensuring that the client's position is not diluted at any stage. Where parallel proceedings arise, strategy is aligned to maintain consistency across forums, ensuring that positions taken in one matter do not adversely impact another, particularly in issues of custody, maintenance and protection.",
    strategicFocus: [
      "Maintaining discretion and sensitivity throughout proceedings",
      "Structuring outcomes that are practical and sustainable",
      "Strong handling of custody and maintenance issues",
      "Encouraging resolution where it serves the client's long-term interests",
      "Ensuring enforceability without unnecessary escalation",
    ],
    enforcementNote:
      "The objective remains to secure outcomes that provide clarity, stability and enforceability, while safeguarding the client's long-term personal and financial interests.",
  },
  {
    id: "arbitration",
    title: "Arbitration & ADR",
    shortDescription: "Efficient resolution outside court.",
    intro:
      "Disputes outside the courtroom are handled with a focus on efficiency, procedural control and enforceable outcomes. Stratum Juris represents clients in arbitration, mediation and conciliation proceedings under the Arbitration and Conciliation Act, 1996, adopting a structured and outcome-oriented approach.\n\nThese proceedings are often driven by contractual frameworks, requiring clarity on rights, obligations and remedies at the outset. Representation is aligned with securing timely resolution while maintaining the client's commercial position.",
    fullDescription:
      "Disputes outside the courtroom are handled with a focus on efficiency, procedural control and enforceable outcomes. Stratum Juris represents clients in arbitration, mediation and conciliation proceedings under the Arbitration and Conciliation Act, 1996, adopting a structured and outcome-oriented approach.",
    icon: "Gavel",
    keyPoints: [
      "Domestic and international arbitration proceedings",
      "Section 9, 11, 34 and 37 applications",
      "Mediation and conciliation proceedings",
      "Enforcement and challenge of arbitral awards",
      "Advisory on dispute resolution strategy",
    ],
    natureOfMatters: {
      intro: "The practice includes representation in:",
      items: [
        "Invocation and conduct of arbitration proceedings",
        "Institutional and ad-hoc arbitrations",
        "Appointment of arbitrators and jurisdictional challenges",
        "Interim relief applications under Section 9",
        "Challenge and enforcement of arbitral awards",
        "Pre-arbitration mediation and conciliation",
      ],
    },
    scopeOfWork: [
      "Domestic and international arbitration proceedings",
      "Appointment of arbitrators and preliminary proceedings",
      "Section 9, 11, 34 and 37 applications",
      "Mediation and conciliation proceedings",
      "Enforcement and challenge of arbitral awards",
      "Advisory on dispute resolution strategy and contract structuring",
    ],
    legalFramework: [
      { statute: "Arbitration and Conciliation Act, 1996", scope: "Conduct, interim reliefs and awards" },
      { statute: "Section 9 & Section 17", scope: "Interim measures before and during arbitration" },
      { statute: "Section 34 & Section 37", scope: "Challenge and appeal of awards" },
      { statute: "Code of Civil Procedure, 1908", scope: "Enforcement where applicable" },
    ],
    howHandled:
      "Each matter is approached with early clarity on contractual position, scope of dispute and desired outcome. The focus remains on structuring proceedings efficiently, maintaining control over timelines and advancing a position that is both commercially and legally sound.",
    howHandledOutro:
      "Attention is given to pleadings, evidence and tribunal interaction to ensure that proceedings remain focused and do not deviate into unnecessary delay or complexity. Where court intervention is required — whether for interim relief or appointment of arbitrators — proceedings are coordinated to ensure continuity between arbitration and court processes, without compromising speed or strategy.",
    strategicFocus: [
      "Early identification of contractual leverage and dispute triggers",
      "Tight control over timelines and procedural stages",
      "Strong positioning in interim relief and enforcement proceedings",
      "Focus on efficiency, cost-effectiveness and finality",
      "Alignment of legal strategy with commercial objectives",
    ],
    enforcementNote:
      "The objective remains to secure outcomes that are timely, commercially viable and capable of enforcement without prolonged litigation.",
  },
];
