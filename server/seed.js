const Card = require("./card");
const db = require("./db");

let AllCards = [
  { question: "90% DISK UTILIZRTION ON DB NODE3", answer: "IGNORE" },
  {
    question:
      "HOST PRDW3456 OFFLINE HOST PRDW3459 OFFLINE <ALL 152 PROD HOSTS OFFLINE>",
    answer: "RESPOND",
  },
  { question: "DEPLOY PIPELINE IS BROKEN", answer: "IT DEPENDS" },
  {
    question:
      "NO DATA:EPHEMERRL STORRGE IS ABNORMRLLY HIGH ON HOST:l-027270DEE16E37AC5786>",
    answer: "RESPOND",
  },
  {
    question:
      "Nobl9 APP 3:00 AM: Your SLO needs attention! Alert Condition(s):Error budget would be exhausted in 2 hours and this condition lasts for 10 minutes",
    answer: "RESPOND",
  },
  {
    question:
      "Service is returning 502s Burn Rate: 5X; Error Budget Remaining: -13.8h (-165%)",
    answer: "RESPOND",
  },
  { question: `CEO SAYS THE SITE ISN'T LOADING FOR THEM`, answer: "IGNORE" },
  {
    question: "HTTP 500 errors leading to budget burn of 10X normal",
    answer: "RESPOND",
  },
  { question: "EURAPP STATUS: 1HOST= DOWN; 9 HOST= UP", answer: "IGNORE" },
  {
    question:
      "Service is returning 502s Burn Rate: 0X; Error Budget Remaining: -1.9h (-28%)",
    answer: "IGNORE",
  },
  {
    question:
      "ACME CLOUO PROVIDER STATUS: INCIDENT: WE ARE INVESTIGATING REPORTS OF DEGRADED AVRILRBILITY.",
    answer: "IT DEPENDS",
  },
  {
    question:
      "Response latency increased on an API service, Error buget is buring: Burn Rate: 0.91X, Error Budget Remaining: 41min(14%)",
    answer: "IGNORE",
  },
  {
    question:
      "Synthetic latency SLO shows slow burn; Burn Rate: 1.5X Error Budget Remaining: 36min (8%)",
    answer: "IGNORE",
  },
  {
    question:
      "Synthetic latency SLO shows fast burn; Burn Rate: 5X Error Budget Remaining: 45min (24%)",
    answer: "RESPOND",
  },
  {
    question:
      "PO TICKET OPENED BY CUSTOMER SUPPORT: MANY CUSTOMERS COMPLAINING ON TWITTER",
    answer: "RESPOND",
  },
  { question: "Web UI pages failing to load", answer: "IGNORE" },
  { question: "SSL CERT EXPIRES IN 7 DAYS", answer: "IGNORE" },
  {
    question:
      "HOST PRDW3456 OFFLINE HOST PRDW3459 OFFLINE <ALL 157 STAGE HOSTS OFFLINE>",
    answer: "IGNORE",
  },
  {
    question: "99% CPU UTILIZATION ON LNXSRV1 OVER THE LAST 10 MINUTES",
    answer: "IGNORE",
  },
  { question: "API	RESPONSES HTTP ERROR RATE: 7.5%", answer: "IT DEPENDS" },
  {
    question: "KUBERNETES ERROR: PRODENVPOD-4986 IS OOMKILLED",
    answer: "IGNORE",
  },
  { question: "PRDXSADB CLUSTER HAS FAILED OVER", answer: "IGNORE" },
  { question: "p95 latency exceeds 400ms", answer: "IGNORE" },
  {
    question:
      "MAINTENANCE: COMPLETED PLATFORM MAINTENANCE IN FR (BLUE) REGION. THE SCHEDULED MAINTENANCE HAS BEEN COMPLETED. NO ISSUES FOUND",
    answer: "IGNORE",
  },
  {
    question: "Bid price of spot request lower than current spot price",
    answer: "IGNORE",
  },
  { question: "End User Apdex below 0.8", answer: "IT DEPENDS" },
  {
    question: "URG: NETWORK BANDWIDTH LIMIT EXCEEDED. THROTTLING",
    answer: "IGNORE",
  },
  {
    question:
      "You breached your error budget a second time after resolving the first breach; Burn Rate:0X Error Budget Remaining: -34min",
    answer: "RESPOND",
  },
  { question: "URG: TRAFFIC THRESHOLD EXCEEDED 10000 QPS", answer: "IGNORE" },
  {
    question: "DNS SYNTHETIC TEST: PRODUCTION APP = FAILED",
    answer: "RESPOND",
  },
  { question: "APPNOD3: CRASHLOOPBACKOFF", answer: "IGNORE" },
  {
    question:
      "YOUR IRS REFUND IS PENDING ACCEPTANCE! MUST ACCEPT BY GOING TO HTTPS://BIT.LY/3ZBRN95 IN 24 HOURS.",
    answer: "IGNORE",
  },
];

const seed = async () => {
  console.log("STARTING DB SEED...");

  await db.sync({ force: true });
  AllCards = await Promise.all(AllCards.map((item) => Card.create(item)));
  console.log("DB SEED COMPLETE.");
};

seed();