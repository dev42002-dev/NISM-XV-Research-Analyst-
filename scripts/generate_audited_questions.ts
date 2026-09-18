import * as fs from 'fs';
import { Question } from '../src/types';

// Free Questions (Q001 - Q040)
// Difficulty: 5 Medium (3), 25 Hard (4), 10 Very Hard (5)
// Target Answer distribution: exactly 10 A, 10 B, 10 C, 10 D (alternating A, B, C, D)
export const FREE_QUESTIONS: Question[] = [
  {
    id: "Q001",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Cash Flow Statement Quality",
    category: "Financial Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "A manufacturing company reports a 35% growth in EBITDA and a 28% increase in reported Net Profit over the fiscal year. However, its Cash Flow from Operations (CFO) has turned negative. An equity research analyst reviews the notes to accounts and working capital schedule. Which of the following is the most appropriate financial interpretation?",
    options: {
      A: "The divergence highlights deteriorating earnings quality caused by aggressive revenue booking and significant working capital lockup in uncollected receivables and unsold inventory.",
      B: "The divergence confirms operational efficiency because high operating profit margins naturally create short-term timing lags in customer collections and vendor payments.",
      C: "The negative operating cash flow is an expected non-cash phenomenon because depreciation and amortization are added back during cash flow statement preparation.",
      D: "The decline in operating cash flow indicates that the company is funding long-term property, plant, and equipment purchases directly out of operating activities."
    },
    correctAnswer: "A",
    explanation: "Under financial statement analysis, a persistent or sudden divergence where operating profit/EBITDA rises sharply while Cash Flow from Operations (CFO) deteriorates or turns negative is a primary red flag of deteriorating earnings quality. This often stems from aggressive accrual-based revenue recognition, elongation of Days Sales Outstanding (DSO), bloated inventories, or unbilled revenues.",
    optionExplanations: {
      A: "Correct. A widening gap between accrual profits (EBITDA/PAT) and cash collected from customers indicates poor earnings quality, aggressive revenue recognition, or working capital blockage.",
      B: "Incorrect. High EBITDA accompanied by negative operating cash flow highlights poor cash conversion and potential earnings manipulation, not operational efficiency.",
      C: "Incorrect. While depreciation is a non-cash add-back, substantial increases in current assets (trade receivables and inventory) drain cash, dragging CFO into negative territory.",
      D: "Incorrect. Capital expenditures are classified under Cash Flow from Investing (CFI), not operating cash flows (CFO)."
    }
  },
  {
    id: "Q002",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Enterprise Value Calculation",
    category: "Valuation",
    difficulty: 3, // Medium
    access: "free",
    question: "Company Apex Ltd has 50 million diluted equity shares outstanding trading at ₹420 per share. Its balance sheet shows total long-term and short-term interest-bearing debt of ₹8,000 million, cash and liquid cash equivalents of ₹2,500 million, minority interest of ₹500 million, and investments in associate companies worth ₹1,000 million. What is the Enterprise Value (EV) of Apex Ltd?",
    options: {
      A: "₹27,000 million",
      B: "₹26,000 million",
      C: "₹28,500 million",
      D: "₹24,500 million"
    },
    correctAnswer: "B",
    explanation: "Enterprise Value (EV) represents the total economic value of the operating business to all providers of capital. EV = Market Capitalization + Total Debt + Minority Interest + Preferred Stock - Cash and Cash Equivalents - Value of Non-Operating Investments (Associates). Here: Market Cap = 50m × ₹420 = ₹21,000m. EV = ₹21,000m + ₹8,000m (Debt) + ₹500m (Minority Interest) - ₹2,500m (Cash) - ₹1,000m (Associates) = ₹26,000 million.",
    optionExplanations: {
      A: "Incorrect. Fails to deduct non-operating investments in associate companies (₹21,000m + ₹8,000m + ₹500m - ₹2,500m = ₹27,000m).",
      B: "Correct. Enterprise Value = Market Capitalization (₹21,000m) + Total Debt (₹8,000m) + Minority Interest (₹500m) - Cash (₹2,500m) - Associates (₹1,000m) = ₹26,000 million.",
      C: "Incorrect. Erroneously adds cash instead of subtracting it from the enterprise value.",
      D: "Incorrect. Erroneously deducts debt or omits minority interest from core firm valuation."
    }
  },
  {
    id: "Q003",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "SEBI RA Personal Trading Restrictions",
    category: "Regulation",
    difficulty: 5, // Very Hard
    access: "free",
    question: "Under Regulation 16 of the SEBI (Research Analysts) Regulations, 2014, which of the following restrictions applies to personal trading in securities by a research analyst or research entity regarding a subject company they cover?",
    options: {
      A: "They cannot trade in securities of the subject company within 15 days before and 15 days after the publication of a research report.",
      B: "They cannot trade in securities of the subject company within 60 days before and 30 days after the publication of a research report.",
      C: "They cannot trade in securities of the subject company within 30 days before and 5 days after the publication of a research report.",
      D: "They cannot trade in securities of the subject company within 7 days before and 7 days after the publication of a research report."
    },
    correctAnswer: "C",
    explanation: "Under Regulation 16(2) of SEBI (Research Analysts) Regulations, 2014: Personal trading or trading on behalf of clients by individuals employed as research analysts or research entities in securities of the subject company is strictly prohibited within 30 days prior to the publication of a research report and within 5 days after the publication of a research report.",
    optionExplanations: {
      A: "Incorrect. Regulation 16 specifies a 30-day pre-publication blackout period and a 5-day post-publication blackout period, not 15 days each.",
      B: "Incorrect. Overstates the statutory blackout periods mandated under Regulation 16.",
      C: "Correct. Regulation 16(2) explicitly mandates a blackout window of 30 days prior to publication and 5 days following publication of the research report.",
      D: "Incorrect. Understates the statutory pre-publication blackout period, which is strictly 30 days."
    }
  },
  {
    id: "Q004",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Moving Average Crossovers and Dow Theory",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "In technical trend analysis, a 'Golden Cross' occurs when a shorter-term moving average crosses above a longer-term moving average (e.g., 50-day EMA crossing above 200-day EMA). According to Dow Theory and trend confirmation principles, how should an analyst interpret this signal?",
    options: {
      A: "An immediate, definitive buy signal that guarantees an uninterrupted multi-month bullish trend regardless of volume.",
      B: "A short-term mean-reversion sell signal indicating that the asset has entered extreme overbought territory.",
      C: "A leading indicator that anticipates macroeconomic turns before they appear in corporate quarterly reports.",
      D: "A lagging confirmation of an established primary uptrend that requires supporting volume and broader market index breadth to validate."
    },
    correctAnswer: "D",
    explanation: "Moving averages are trend-following lagging indicators derived from historical price data. A Golden Cross (50-day moving average rising above the 200-day moving average) confirms that medium-term upward momentum has overtaken long-term trend resistance. Under Dow Theory, volume must expand in the direction of the primary trend, and signals should be confirmed across related market indices.",
    optionExplanations: {
      A: "Incorrect. Moving averages are lagging indicators that never guarantee trend continuation and can produce costly whipsaws in sideways markets.",
      B: "Incorrect. A Golden Cross is a bullish trend-following signal, not a mean-reversion short-sale signal.",
      C: "Incorrect. Moving averages are lagging indicators that follow price action; they do not act as leading macroeconomic predictors.",
      D: "Correct. Moving average crossovers are inherently lagging confirmations of trend changes, requiring volume expansion and index breadth to guard against false signals."
    }
  }
];

console.log("Free questions sample initialized successfully.");
