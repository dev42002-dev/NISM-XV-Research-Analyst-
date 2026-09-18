import { Question } from '../types';

export const FREE_QUESTIONS: Question[] = [
  {
    id: "Q001",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Cash Flow Statement Quality",
    category: "Financial Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "A manufacturing firm reports 35% EBITDA growth and 28% Net Profit growth, but Cash Flow from Operations (CFO) turns negative. Which financial interpretation is most appropriate?",
    options: {
      A: "The divergence signals weaker earnings quality due to aggressive revenue recognition and working-capital buildup.",
      B: "The divergence confirms operational efficiency as margins create normal collection lags.",
      C: "Negative operating cash flow is an expected non-cash effect of depreciation add-backs.",
      D: "The drop indicates the firm funds long-term capex directly out of operating activities."
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
    question: "Apex Ltd has 50M shares at ₹420, debt of ₹8,000M, cash of ₹2,500M, minority interest of ₹500M, and associates of ₹1,000M. What is Enterprise Value (EV)?",
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
      C: "Incorrect. Erroneously adds cash instead of subtracting it from enterprise value.",
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
    question: "Under Regulation 16 of SEBI RA Regulations, 2014, what personal trading restrictions apply to an analyst covering a subject company?",
    options: {
      A: "No trading within 15 days before and 15 days after publishing a research report.",
      B: "No trading within 60 days before and 30 days after publishing a research report.",
      C: "No trading within 30 days before and 5 days after publishing a research report.",
      D: "No trading within 45 days before and 10 days after publishing a research report."
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
    question: "In technical analysis, a 'Golden Cross' occurs when a 50-day EMA crosses above a 200-day EMA. How should an analyst interpret this signal?",
    options: {
      A: "A definitive buy signal guaranteeing a multi-month bull trend regardless of volume.",
      B: "A short-term mean-reversion sell signal indicating extreme overbought conditions.",
      C: "A leading indicator that anticipates macroeconomic turns before earnings appear.",
      D: "A lagging confirmation of a primary uptrend requiring volume and market breadth."
    },
    correctAnswer: "D",
    explanation: "Moving averages are trend-following lagging indicators derived from historical price data. A Golden Cross (50-day moving average rising above the 200-day moving average) confirms that medium-term upward momentum has overtaken long-term trend resistance. Under Dow Theory, volume must expand in the direction of the primary trend, and signals should be confirmed across related market indices.",
    optionExplanations: {
      A: "Incorrect. Moving averages are lagging indicators that never guarantee trend continuation and can produce costly whipsaws in sideways markets.",
      B: "Incorrect. A Golden Cross is a bullish trend-following signal, not a mean-reversion short-sale signal.",
      C: "Incorrect. Moving averages are lagging indicators that follow price action; they do not act as leading macroeconomic predictors.",
      D: "Correct. Moving average crossovers are inherently lagging confirmations of trend changes, requiring volume expansion and index breadth to guard against false signals."
    }
  },
  {
    id: "Q005",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "FCFF vs FCFE Methodological Adjustments",
    category: "Valuation",
    difficulty: 5, // Very Hard
    access: "free",
    question: "When transitioning from an FCFF model to an FCFE model, which adjustment is REQUIRED to determine intrinsic equity value per share?",
    options: {
      A: "Discount FCFF at WACC and deduct net debt; discount FCFE at Cost of Equity directly to Equity Value.",
      B: "Discount FCFF at Cost of Equity; discount FCFE at pre-tax Cost of Debt.",
      C: "Discount FCFF at Risk-Free Rate; discount FCFE at WACC to derive Equity Value.",
      D: "Discount FCFF at post-tax Cost of Debt; discount FCFE at nominal GDP growth rate."
    },
    correctAnswer: "A",
    explanation: "In valuation methodology: FCFF represents cash available to all providers of capital (debt holders + equity holders) and must be discounted at WACC to calculate Enterprise Value. To reach Equity Value, net debt, preferred stock, and minority interest must be deducted. Conversely, FCFE represents cash available purely to equity shareholders after debt servicing and net borrowings, and must be discounted at the Cost of Equity (Ke) to yield Equity Value directly.",
    optionExplanations: {
      A: "Correct. FCFF discounted at WACC yields Enterprise Value (from which net debt must be deducted to get Equity Value), whereas FCFE discounted at the Cost of Equity directly yields Equity Value.",
      B: "Incorrect. FCFF cannot be discounted at Ke, nor can FCFE be discounted at the pre-tax cost of debt.",
      C: "Incorrect. Risk-free rate is never the sole discount rate for enterprise cash flows.",
      D: "Incorrect. Cost of debt alone is invalid for FCFF, and nominal GDP growth rate is not an appropriate discount rate for equity cash flows."
    }
  },
  {
    id: "Q006",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Capital Asset Pricing Model (CAPM)",
    category: "Risk and Return",
    difficulty: 4, // Hard
    access: "free",
    question: "A stock has a beta of 1.4. The risk-free rate is 6.5% and expected market return is 14.5%. Under CAPM, what is the required rate of return?",
    options: {
      A: "18.30%",
      B: "17.70%",
      C: "11.20%",
      D: "20.30%"
    },
    correctAnswer: "B",
    explanation: "Under CAPM: Expected Return = Rf + β × (Rm - Rf). The Market Risk Premium (Rm - Rf) = 14.5% - 6.5% = 8.0%. Expected Return = 6.5% + 1.4 × (8.0%) = 6.5% + 11.2% = 17.70%.",
    optionExplanations: {
      A: "Incorrect. Uses 14.5% directly as the market risk premium: 6.5% + 1.4 × (14.5% - 6.5% + 0.6%) = 18.30%.",
      B: "Correct. Expected Return = 6.5% + 1.4 × (14.5% - 6.5%) = 6.5% + 11.2% = 17.70%.",
      C: "Incorrect. Represents only the risk premium component (1.4 × 8.0% = 11.20%), omitting the risk-free rate.",
      D: "Incorrect. Erroneously adds market return to risk-free rate before multiplying by beta."
    }
  },
  {
    id: "Q007",
    chapter: "Chapter 6 – Industry Analysis",
    topic: "Porter's Five Forces Framework",
    category: "Industry Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "In Porter's Five Forces, which industry structure yields the GREATEST pricing power and sustained profitability for incumbents?",
    options: {
      A: "High buyer power, low entry barriers, many suppliers, and abundant substitutes.",
      B: "Standardized commodity products, zero switching costs, and high fixed costs.",
      C: "High capital entry barriers, high switching costs, fragmented suppliers, and few substitutes.",
      D: "Pure price competition among fragmented rivals with negligible patent protection."
    },
    correctAnswer: "C",
    explanation: "Under Porter's Five Forces, incumbent pricing power and sustained economic profits are maximized when barriers to entry are high (protecting against new entrants), threat of substitutes is low, buyer switching costs are high (reducing buyer power), supplier power is weak, and competitive rivalry is restrained.",
    optionExplanations: {
      A: "Incorrect. High buyer bargaining power and low entry barriers severely depress industry margins.",
      B: "Incorrect. Standardized products with zero switching costs create intense price wars and commoditized returns.",
      C: "Correct. High barriers to entry, steep customer switching costs, weak supplier leverage, and lack of substitutes create a durable economic moat and strong pricing power.",
      D: "Incorrect. Fragmented competition and negligible intellectual property protections drive economic profits down to marginal cost."
    }
  },
  {
    id: "Q008",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Relative Strength Index (RSI) Divergence",
    category: "Technical Analysis",
    difficulty: 5, // Very Hard
    access: "free",
    question: "A stock prints higher highs over a 6-week rally while the 14-day RSI prints lower highs below 70. How should an analyst interpret this divergence?",
    options: {
      A: "Hidden bullish divergence signaling institutional accumulation and a breakout.",
      B: "Immediate continuation signal confirming accelerating bull momentum.",
      C: "Indicator calculation anomaly that should be disregarded in trending markets.",
      D: "Classic bearish divergence signaling weakening upward momentum and correction risk."
    },
    correctAnswer: "D",
    explanation: "A classic (regular) bearish divergence occurs when price registers higher highs while the momentum oscillator (such as 14-period RSI) forms lower highs. This discrepancy demonstrates that internal upward momentum is waning despite higher nominal prices, signaling that buying pressure is exhausting and warning of an impending reversal or consolidation.",
    optionExplanations: {
      A: "Incorrect. Hidden bullish divergence occurs when price makes a higher low while RSI makes a lower low during an uptrend pullback.",
      B: "Incorrect. Momentum failing to confirm price is a sign of decelerating trend velocity, not accelerating momentum.",
      C: "Incorrect. RSI divergences are among the most reliable classical momentum warning signals, not calculation anomalies.",
      D: "Correct. Higher highs in price accompanied by lower highs in RSI constitute a classic bearish divergence, signaling momentum fatigue and elevated correction risk."
    }
  },
  {
    id: "Q009",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "DuPont 3-Stage ROE Decomposition",
    category: "Financial Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "Beta Ltd reports: Net Margin = 8%, Asset Turnover = 1.5, Leverage = 2.0. If Net Margin rises to 10%, Turnover falls to 1.2, and Leverage drops to 1.75, what happens to ROE?",
    options: {
      A: "ROE decreases from 24.0% to 21.0%",
      B: "ROE remains constant at 24.0%",
      C: "ROE increases from 20.0% to 22.5%",
      D: "ROE decreases from 25.0% to 19.5%"
    },
    correctAnswer: "A",
    explanation: "Under the 3-stage DuPont Model: ROE = Net Profit Margin × Asset Turnover × Equity Multiplier. Initial ROE = 8% × 1.5 × 2.0 = 24.0%. Revised ROE = 10% × 1.2 × 1.75 = 21.0%. Thus, ROE decreases by 300 basis points from 24.0% to 21.0%.",
    optionExplanations: {
      A: "Correct. Initial ROE = 0.08 × 1.5 × 2.0 = 24.0%. Revised ROE = 0.10 × 1.2 × 1.75 = 21.0%.",
      B: "Incorrect. Assumes margin expansion perfectly offsets lower asset utilization and reduced debt leverage.",
      C: "Incorrect. Calculation error in initial and revised product calculations.",
      D: "Incorrect. Uses incorrect starting or ending multiplier values."
    }
  },
  {
    id: "Q010",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Research Report Disclosures",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "free",
    question: "Under SEBI RA Regulations, 2014, at what ownership threshold in a subject company must an analyst or entity disclose their holding before publishing?",
    options: {
      A: "Holding of 0.1% or more of securities of the subject company.",
      B: "Holding of 1% or more of securities of the subject company.",
      C: "Holding of 5% or more of securities of the subject company.",
      D: "Holding of 10% or more of securities of the subject company."
    },
    correctAnswer: "B",
    explanation: "Under Regulation 19 of SEBI (Research Analysts) Regulations, 2014: A research analyst or research entity must disclose if they or their associate or their relatives have actual/beneficial ownership of 1% or more securities of the subject company at the end of the month immediately preceding the date of publication of the research report or date of the public appearance.",
    optionExplanations: {
      A: "Incorrect. 0.1% is too low; the statutory threshold under SEBI RA Regulations is 1%.",
      B: "Correct. Regulation 19 mandates disclosure if beneficial ownership reaches or exceeds 1% of the subject company's securities.",
      C: "Incorrect. 5% is the threshold under SEBI SAST (Substantial Acquisition of Shares and Takeovers) Regulations, not the RA report disclosure threshold.",
      D: "Incorrect. 10% relates to material corporate holdings, not research report analyst conflict disclosures."
    }
  },
  {
    id: "Q011",
    chapter: "Chapter 5 – Economic Analysis",
    topic: "Fiscal and Monetary Indicators",
    category: "Economic Analysis",
    difficulty: 5, // Very Hard
    access: "free",
    question: "Evaluate: I. Fiscal Deficit excludes borrowings. II. Inverted yield curve signals recession risk. III. RBI anchors policy to WPI. Which are correct?",
    options: {
      A: "Statement I is correct; Statements II and III are incorrect.",
      B: "Statements II and III are correct; Statement I is incorrect.",
      C: "Statements I and II are correct; Statement III is incorrect.",
      D: "All three statements (I, II, and III) are completely correct."
    },
    correctAnswer: "C",
    explanation: "Statements I and II are correct. Statement III is incorrect because following the Urjit Patel Committee recommendations in 2014, the Reserve Bank of India formally adopted the Consumer Price Index (CPI Combined) as its primary nominal anchor for headline inflation targeting (4% ± 2%), not the Wholesale Price Index (WPI).",
    optionExplanations: {
      A: "Incorrect. Statement II is also correct; an inverted yield curve reflects market expectations of central bank policy rate cuts in response to economic weakness.",
      B: "Incorrect. Statement III is false; RBI uses CPI (Combined), not WPI, as its monetary policy headline inflation target.",
      C: "Correct. Statements I and II are accurate definitions and macroeconomic relationships, while Statement III is incorrect as RBI targets CPI Combined.",
      D: "Incorrect. Includes Statement III, which misidentifies WPI as the RBI's primary monetary policy anchor."
    }
  },
  {
    id: "Q012",
    chapter: "Chapter 9 – Corporate Actions",
    topic: "Bonus Issue vs Stock Split",
    category: "Corporate Actions",
    difficulty: 4, // Hard
    access: "free",
    question: "A firm executes a 1:1 Bonus Issue, while another executes a 2-for-1 Stock Split (₹10 to ₹5). What is the key accounting difference?",
    options: {
      A: "Bonus issue dilutes existing equity ownership; stock split preserves exact ownership.",
      B: "Stock split requires cash outflow; bonus issue is a non-cash accounting action.",
      C: "Bonus issue reduces nominal face value; stock split increases face value proportionally.",
      D: "Bonus issue capitalizes reserves at constant face value; stock split sub-divides face value."
    },
    correctAnswer: "D",
    explanation: "In a Bonus Issue, the company capitalizes its free reserves or securities premium account into paid-up equity capital. The number of shares increases while the face value per share remains unchanged. In a Stock Split, the existing face value of the share is divided (e.g., from ₹10 to ₹5), increasing the share count while total share capital and free reserves remain completely unchanged on the balance sheet.",
    optionExplanations: {
      A: "Incorrect. Neither corporate action dilutes existing shareholders; both preserve proportionate equity ownership.",
      B: "Incorrect. Neither action involves cash outflow; both are balance sheet capitalization or sub-division adjustments.",
      C: "Incorrect. Bonus issues leave face value unchanged; stock splits reduce face value per share.",
      D: "Correct. A bonus issue capitalizes reserves into equity share capital at constant face value, whereas a stock split sub-divides face value leaving reserves unchanged."
    }
  },
  {
    id: "Q013",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Weighted Average Cost of Capital (WACC)",
    category: "Valuation",
    difficulty: 4, // Hard
    access: "free",
    question: "Gamma Corp has 60% Equity and 40% Debt. Pre-tax cost of debt is 9.0%, corporate tax is 25%, and cost of equity is 15.0%. What is its WACC?",
    options: {
      A: "11.70%",
      B: "12.60%",
      C: "10.80%",
      D: "13.20%"
    },
    correctAnswer: "A",
    explanation: "WACC = (We × Ke) + [Wd × Kd × (1 - Tax Rate)]. After-tax cost of debt = 9.0% × (1 - 0.25) = 6.75%. WACC = (0.60 × 15.0%) + (0.40 × 6.75%) = 9.00% + 2.70% = 11.70%.",
    optionExplanations: {
      A: "Correct. WACC = (0.60 × 15.0%) + [0.40 × 9.0% × (1 - 0.25)] = 9.00% + 2.70% = 11.70%.",
      B: "Incorrect. Fails to adjust cost of debt for the interest tax shield: (0.60 × 15%) + (0.40 × 9%) = 9% + 3.6% = 12.60%.",
      C: "Incorrect. Erroneously taxes cost of equity instead of cost of debt.",
      D: "Incorrect. Inverts capital structure weights (40% equity, 60% debt without tax shield)."
    }
  },
  {
    id: "Q014",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Head and Shoulders Pattern",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "In a classical Head and Shoulders top pattern, which condition defines the textbook confirmation and price target projection rule?",
    options: {
      A: "Breaks above right shoulder on volume; target equals distance between shoulder troughs.",
      B: "Closes decisively below neckline on volume; target equals head-to-neckline height projected down.",
      C: "Closes below 200-day moving average; target equals twice average true range.",
      D: "Volume on right shoulder exceeds head; target equals left shoulder to neckline."
    },
    correctAnswer: "B",
    explanation: "In technical analysis, a Head and Shoulders top is confirmed only when the closing price penetrates decisively below the neckline (support line connecting the two intervening troughs), preferably accompanied by expanding volume. The minimum price projection target is calculated by measuring the vertical distance from the highest point of the head to the neckline, and projecting that distance downward from the breakout level.",
    optionExplanations: {
      A: "Incorrect. Breaking above the right shoulder invalidates the bearish reversal pattern.",
      B: "Correct. Confirmation occurs on a decisive close below the neckline on expanding volume, with the minimum price target equal to the vertical distance from head to neckline projected downward.",
      C: "Incorrect. The head crossing below the left shoulder is not the confirmation rule; the neckline breakout is the definitive signal.",
      D: "Incorrect. Volume is typically heaviest on the left shoulder and head, and noticeably lighter on the right shoulder."
    }
  },
  {
    id: "Q015",
    chapter: "Chapter 7 – Company Analysis – Business and Governance",
    topic: "Corporate Governance and Board Independence",
    category: "Governance",
    difficulty: 4, // Hard
    access: "free",
    question: "Under SEBI LODR, if a listed firm's Chairperson is a non-executive promoter or promoter-relative, what proportion of the Board must be Independent Directors?",
    options: {
      A: "At least one-third (33.3%) of the Board",
      B: "At least two-thirds (66.7%) of the Board",
      C: "At least half (50%) of the Board",
      D: "At least one-fourth (25%) of the Board"
    },
    correctAnswer: "C",
    explanation: "Under Regulation 17 of SEBI LODR Regulations: Where the Chairperson of the board of directors is a non-executive director, at least one-third of the board must comprise independent directors. However, where the regular non-executive Chairperson is a promoter of the listed entity or is related to any promoter or person occupying management positions, at least half (50%) of the board of directors shall consist of independent directors.",
    optionExplanations: {
      A: "Incorrect. One-third applies only when the non-executive Chairperson is independent and unrelated to promoters.",
      B: "Incorrect. Two-thirds is not mandated under SEBI LODR for board composition.",
      C: "Correct. When the Chairperson is a promoter or related to promoters, SEBI LODR mandates that at least 50% of the board must consist of independent directors.",
      D: "Incorrect. One-fourth is below statutory minimum governance requirements in India."
    }
  },
  {
    id: "Q016",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Sharpe Ratio vs Treynor Ratio",
    category: "Risk and Return",
    difficulty: 5, // Very Hard
    access: "free",
    question: "Portfolio X has a higher Treynor ratio than Portfolio Y, but Portfolio Y has a higher Sharpe ratio than Portfolio X. What explains this divergence?",
    options: {
      A: "Portfolio X has negative beta; Portfolio Y holds high-beta securities.",
      B: "Portfolio Y has zero systematic market risk, eliminating its Treynor denominator.",
      C: "Different risk-free hurdle rates were used for the two portfolio calculations.",
      D: "Portfolio X carries high unsystematic risk from poor diversification, penalizing Sharpe."
    },
    correctAnswer: "D",
    explanation: "Sharpe Ratio divides excess return by Total Risk (Standard Deviation: σ), which captures both systematic and unsystematic risk. Treynor Ratio divides excess return by Systematic Risk (Beta: β). If a portfolio is poorly diversified, it carries high unique/unsystematic risk; this inflates the standard deviation (lowering Sharpe ratio) while having no impact on Beta (keeping Treynor ratio high).",
    optionExplanations: {
      A: "Incorrect. Negative beta would distort the sign of Treynor ratio rather than creating this standard divergence.",
      B: "Incorrect. Zero beta would make Treynor undefined, but both metrics were successfully evaluated.",
      C: "Incorrect. Standard performance attribution uses the same benchmark risk-free rate for both metrics.",
      D: "Correct. Sharpe evaluates total risk (systematic + unsystematic), whereas Treynor evaluates only systematic risk. Poor diversification penalizes Sharpe but leaves Treynor elevated."
    }
  },
  {
    id: "Q017",
    chapter: "Chapter 11 – Fundamental Analysis of Commodities",
    topic: "Contango vs Backwardation",
    category: "Commodities",
    difficulty: 4, // Hard
    access: "free",
    question: "In commodity futures, when the futures price trades at a discount to the spot price (Futures < Spot), the market condition is described as:",
    options: {
      A: "Backwardation, driven by high convenience yield or tight near-term physical supply.",
      B: "Contango, reflecting high cost of carry, financing costs, and physical storage.",
      C: "Arbitrage equilibrium, reflecting zero physical storage and financing carry costs.",
      D: "Short Squeeze, requiring mandatory cash settlement on delivery day across expiries."
    },
    correctAnswer: "A",
    explanation: "When futures price is lower than the spot price (an inverted futures curve), the market is in Backwardation (or Normal Backwardation). This occurs when immediate demand for the physical commodity is exceptionally high (high convenience yield) or spot supplies are tight, prompting market participants to pay a premium for immediate physical delivery.",
    optionExplanations: {
      A: "Correct. Backwardation occurs when spot price exceeds futures price due to tight current supply and high convenience yield.",
      B: "Incorrect. Contango occurs when futures price is higher than spot price (Futures > Spot) to compensate for carrying costs.",
      C: "Incorrect. Arbitrage equilibrium with carrying costs results in a normal upward-sloping (contango) curve.",
      D: "Incorrect. A short squeeze is an acute market price disruption, not the fundamental economic definition of an inverted forward curve."
    }
  },
  {
    id: "Q018",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Price-to-Earnings Growth (PEG) Ratio",
    category: "Valuation",
    difficulty: 3, // Medium
    access: "free",
    question: "A company trades at a P/E multiple of 36x with projected EPS growth of 24% CAGR. What is its PEG ratio, and how is it interpreted?",
    options: {
      A: "PEG = 0.67; the stock trades at an attractive discount to growth.",
      B: "PEG = 1.50; the stock trades at a premium relative to growth.",
      C: "PEG = 1.20; the stock is in exact valuation parity with the market.",
      D: "PEG = 8.64; the stock is severely overvalued relative to historical norms."
    },
    correctAnswer: "B",
    explanation: "The Price/Earnings-to-Growth (PEG) ratio is calculated as: P/E Ratio ÷ Annual EPS Growth Rate (as a percentage). Here: PEG = 36 ÷ 24 = 1.50. A PEG ratio > 1.0 indicates that the stock is trading at a premium relative to its projected earnings growth.",
    optionExplanations: {
      A: "Incorrect. Inverts the ratio (24 ÷ 36 = 0.67).",
      B: "Correct. PEG = 36 ÷ 24 = 1.50. A PEG of 1.50 indicates the company is priced at a multiple higher than its percentage growth rate.",
      C: "Incorrect. 36 ÷ 24 is 1.50, not 1.20.",
      D: "Incorrect. Multiplies P/E by growth rate instead of dividing."
    }
  },
  {
    id: "Q019",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "MACD Indicator Mechanics",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "Under standard settings, what formulas construct the MACD Line and the Signal Line?",
    options: {
      A: "MACD Line = 20-day SMA - 50-day SMA; Signal Line = 14-day RSI of MACD.",
      B: "MACD Line = Close - 14-day Lowest Low; Signal Line = 3-day SMA of MACD.",
      C: "MACD Line = 12-day EMA - 26-day EMA; Signal Line = 9-day EMA of MACD Line.",
      D: "MACD Line = 50-day EMA - 200-day EMA; Signal Line = 20-day Volume SMA."
    },
    correctAnswer: "C",
    explanation: "Standard MACD settings use exponential moving averages of closing prices: MACD Line = 12-period EMA - 26-period EMA. The Signal Line is the 9-period EMA of the MACD Line itself. The MACD Histogram plots the difference between the MACD Line and the Signal Line.",
    optionExplanations: {
      A: "Incorrect. Uses simple moving averages and RSI, which are not components of standard MACD.",
      B: "Incorrect. Confuses MACD with the Stochastic oscillator formula.",
      C: "Correct. MACD Line = 12-period EMA - 26-period EMA; Signal Line = 9-period EMA of the MACD Line.",
      D: "Incorrect. 50 and 200 EMA are used for Golden/Death Crosses, not MACD construction."
    }
  },
  {
    id: "Q020",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "SEBI RA Definition and Exemptions",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "free",
    question: "Which entity is explicitly EXEMPT from registering as a Research Analyst under SEBI (Research Analysts) Regulations, 2014?",
    options: {
      A: "An independent professional offering public stock tips on television or digital media.",
      B: "An individual providing paid equity research reports to public subscribers.",
      C: "A proxy advisory firm providing voting advice to institutional shareholders.",
      D: "An investment adviser or merchant banker issuing research solely incidental to licensed activities."
    },
    correctAnswer: "D",
    explanation: "Under Regulation 2(1)(u) of SEBI (Research Analysts) Regulations, 2014, exemptions from registration are provided to: investment advisers, credit rating agencies, portfolio managers, asset management companies, or merchant bankers who issue research reports or make public appearances solely in connection with their licensed primary activities, provided they comply with specific conflict-of-interest guidelines.",
    optionExplanations: {
      A: "Incorrect. Persons offering public stock recommendations to the general public must be registered under SEBI regulations.",
      B: "Incorrect. Providing research reports to clients or subscribers for consideration requires mandatory SEBI RA registration.",
      C: "Incorrect. Proxy advisory firms are explicitly covered under SEBI (Research Analysts) Regulations, 2014 and must register.",
      D: "Correct. Merchant bankers and investment advisers issuing research solely incidental to their licensed activities are exempt from duplicate registration."
    }
  },
  {
    id: "Q021",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Working Capital Ratios and Cash Conversion Cycle",
    category: "Financial Analysis",
    difficulty: 5, // Very Hard
    access: "free",
    question: "DSO = 65 days, Inventory Days = 90 days, and Payable Days = 45 days. What is the firm's Cash Conversion Cycle (CCC)?",
    options: {
      A: "110 days",
      B: "200 days",
      C: "70 days",
      D: "155 days"
    },
    correctAnswer: "A",
    explanation: "The Cash Conversion Cycle (CCC) measures the time it takes for a business to convert its investments in inventory and other resources into cash flows from sales. Formula: CCC = Days Sales in Inventory (DSI) + Days Sales Outstanding (DSO) - Days Payable Outstanding (DPO). Here: CCC = 90 days + 65 days - 45 days = 110 days.",
    optionExplanations: {
      A: "Correct. CCC = Inventory Days (90) + Receivable Days (65) - Payable Days (45) = 110 days.",
      B: "Incorrect. Adds payables instead of subtracting them (90 + 65 + 45 = 200).",
      C: "Incorrect. Subtracted receivables instead of payables.",
      D: "Incorrect. Omits the payable financing offset (90 + 65 = 155)."
    }
  },
  {
    id: "Q022",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Candlestick Patterns: Hammer vs Hanging Man",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "A candle has a small body near the top, a long lower shadow (≥2x body), and minimal upper shadow. How do analysts differentiate a Hammer from a Hanging Man?",
    options: {
      A: "A Hammer must be green; a Hanging Man must always be red.",
      B: "A Hammer forms at the bottom of a downtrend (bullish); a Hanging Man forms at the top of an uptrend (bearish).",
      C: "A Hammer is confirmed only by moving averages; a Hanging Man only by volume.",
      D: "A Hammer appears only on weekly charts; a Hanging Man only on intraday charts."
    },
    correctAnswer: "B",
    explanation: "Both the Hammer and the Hanging Man share identical visual candlestick geometry: a small real body at the upper end of the trading range with a long lower shadow. The critical difference is the prior trend context: a Hammer forms after an extended downtrend and signals potential bullish reversal (buyers rejected lower prices). A Hanging Man forms after an extended uptrend, signaling that intraday selling emerged.",
    optionExplanations: {
      A: "Incorrect. The color of the body can be either red or green for both patterns, although a green hammer and red hanging man offer stronger sentiment confirmation.",
      B: "Correct. The distinguishing factor is trend location: a Hammer occurs at the bottom of a downtrend (bullish), whereas a Hanging Man occurs at the peak of an uptrend (bearish warning).",
      C: "Incorrect. Both patterns require subsequent candlestick confirmation rather than distinct indicator dependencies.",
      D: "Incorrect. Candlestick patterns apply across all timeframes from intraday to monthly charts."
    }
  },
  {
    id: "Q023",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Terminal Value in DCF",
    category: "Valuation",
    difficulty: 5, // Very Hard
    access: "free",
    question: "In an FCFF DCF model, Year 5 FCFF is ₹500M, WACC is 12.0%, and terminal growth (g) is 4.0%. What is the undiscounted Terminal Value at the END of Year 5?",
    options: {
      A: "₹6,250 million",
      B: "₹4,167 million",
      C: "₹6,500 million",
      D: "₹5,200 million"
    },
    correctAnswer: "C",
    explanation: "Under the Gordon Growth Model for Terminal Value: Terminal Value at Year N = FCFF_(N+1) ÷ (WACC - g) = [FCFF_N × (1 + g)] ÷ (WACC - g). Here: FCFF_6 = ₹500 million × (1 + 0.04) = ₹520 million. WACC - g = 12.0% - 4.0% = 8.0% (0.08). Terminal Value_5 = ₹520m ÷ 0.08 = ₹6,500 million.",
    optionExplanations: {
      A: "Incorrect. Uses Year 5 cash flow without growing it by (1 + g): ₹500m ÷ 0.08 = ₹6,250m.",
      B: "Incorrect. Uses 12% in the denominator without subtracting the growth rate: ₹500m ÷ 0.12 = ₹4,167m.",
      C: "Correct. Formula: [₹500m × (1 + 0.04)] ÷ (0.12 - 0.04) = ₹520m ÷ 0.08 = ₹6,500 million.",
      D: "Incorrect. ₹520 million is merely FCFF in year 6, not the capitalized terminal value."
    }
  },
  {
    id: "Q024",
    chapter: "Chapter 2 – Introduction to Securities Market",
    topic: "IPO Allotment and Qualified Institutional Buyers",
    category: "Securities Market",
    difficulty: 3, // Medium
    access: "free",
    question: "Under SEBI ICDR Regulations, what minimum percentage of the net offer must go to QIBs if an IPO issuer DOES NOT meet standard profitability criteria?",
    options: {
      A: "At least 35% of the net offer",
      B: "At least 50% of the net offer",
      C: "At least 60% of the net offer",
      D: "At least 75% of the net offer"
    },
    correctAnswer: "D",
    explanation: "Under SEBI ICDR Regulations, if an issuer company does not satisfy the conventional track record criteria (net tangible assets, operating profit, and net worth under Regulation 6(1)), it must undertake the IPO through the book-building process and allocate at least 75% of the net offer to Qualified Institutional Buyers (QIBs) under Regulation 6(2).",
    optionExplanations: {
      A: "Incorrect. 35% is the standard allocation for retail individual investors in normal profitability-route IPOs.",
      B: "Incorrect. 50% is the standard QIB allocation for issuers meeting normal profitability criteria.",
      C: "Incorrect. 60% does not correspond to the mandatory non-profitability allocation tier.",
      D: "Correct. SEBI ICDR mandates at least 75% QIB allocation for companies coming through the alternative non-profitability route."
    }
  },
  {
    id: "Q025",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Structure and Disclosures in Research Reports",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "free",
    question: "Under SEBI RA Regulations, 2014, which disclosure is MANDATORY in every research report distributed by an analyst or entity?",
    options: {
      A: "Receipt of compensation from subject company for banking or broking in past 12 months.",
      B: "Names, PANs, and residential addresses of all report subscribers.",
      C: "Proprietary trading algorithms and quantitative source code used by the trading desk.",
      D: "Personal tax returns and private bank account statements of the research analyst."
    },
    correctAnswer: "A",
    explanation: "Under Regulation 19 of SEBI (Research Analysts) Regulations, 2014: Research analysts and research entities must disclose whether they or their associates received any compensation from the subject company for investment banking, merchant banking, or brokerage services, or for products/services other than investment banking, in the previous twelve months.",
    optionExplanations: {
      A: "Correct. Disclosures regarding any compensation received from the subject company for investment banking, merchant banking, or brokerage services in the past 12 months are mandatory under Regulation 19.",
      B: "Incorrect. Client details and PAN numbers are strictly confidential under privacy and client protection rules.",
      C: "Incorrect. Proprietary source codes and internal algorithms are proprietary trade secrets and are not required disclosures.",
      D: "Incorrect. Personal tax returns are private financial records not subject to public research report disclosure."
    }
  },
  {
    id: "Q026",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Support and Resistance Role Reversal",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "A stock breaks horizontal resistance at ₹1,200 on heavy volume and pulls back to ₹1,200. Under role reversal, how is the ₹1,200 level expected to behave?",
    options: {
      A: "It will act as stronger resistance, resuming the prior downtrend.",
      B: "It is expected to act as new support defended by buyers.",
      C: "It becomes completely irrelevant once broken.",
      D: "It triggers an immediate continuation sell signal under Dow Theory."
    },
    correctAnswer: "B",
    explanation: "One of the fundamental tenets of technical analysis is 'Role Reversal' (polarity principle): once a well-established resistance level is broken decisively to the upside, it flips and becomes a support level on subsequent pullbacks. Traders who sold at resistance or missed the breakout view the retest as an attractive entry point.",
    optionExplanations: {
      A: "Incorrect. Broken resistance acts as support upon retest, not stronger resistance.",
      B: "Correct. Under the principle of role reversal, previous resistance converts into support upon a successful breakout retest.",
      C: "Incorrect. Historic breakout levels remain critical psychological support zones.",
      D: "Incorrect. Pullback to broken resistance is a potential buying opportunity, not an immediate sell signal."
    }
  },
  {
    id: "Q027",
    chapter: "Chapter 3 – Terminology in Equity and Debt Markets",
    topic: "Macaulay Duration and Modified Duration",
    category: "Debt Markets",
    difficulty: 5, // Very Hard
    access: "free",
    question: "A 5-year bond has Macaulay Duration of 4.2 years and YTM of 8.0%. What is its Modified Duration and estimated price change if yields rise by 50 bps (+0.50%)?",
    options: {
      A: "Modified Duration = 4.20 years; Price drops by ~2.10%",
      B: "Modified Duration = 3.89 years; Price rises by ~1.94%",
      C: "Modified Duration = 3.89 years; Price drops by ~1.94%",
      D: "Modified Duration = 4.54 years; Price drops by ~2.27%"
    },
    correctAnswer: "C",
    explanation: "Modified Duration = Macaulay Duration ÷ [1 + (YTM ÷ compounding frequency)]. Here: Modified Duration = 4.2 ÷ (1 + 0.08) = 4.2 ÷ 1.08 ≈ 3.8889 years (approx 3.89 years). Estimated percentage change in bond price = -Modified Duration × ΔYield = -3.8889 × (+0.0050) = -1.944% (approx -1.94% decrease).",
    optionExplanations: {
      A: "Incorrect. Fails to adjust Macaulay Duration by dividing by (1 + YTM).",
      B: "Incorrect. Bond prices move inversely to yields; an increase in interest rates causes bond prices to fall, not rise.",
      C: "Correct. Modified Duration = 4.2 ÷ 1.08 = 3.89 years. Percentage price decline = -3.89 × 0.50% = -1.94%.",
      D: "Incorrect. Multiplied duration by 1.08 instead of dividing."
    }
  },
  {
    id: "Q028",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Interest Coverage and Solvency Ratios",
    category: "Financial Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "Revenue is ₹2,500M, Opex (excl depr) is ₹1,800M, Depreciation is ₹200M, and Interest is ₹100M. What is the Interest Coverage Ratio?",
    options: {
      A: "7.0x",
      B: "3.75x",
      C: "4.0x",
      D: "5.0x"
    },
    correctAnswer: "D",
    explanation: "Interest Coverage Ratio = EBIT ÷ Interest Expense. Revenue = ₹2,500m. Operating expenses (excl depr) = ₹1,800m. EBITDA = ₹2,500m - ₹1,800m = ₹700m. EBIT = EBITDA - Depreciation = ₹700m - ₹200m = ₹500m. Interest Expense = ₹100m. Interest Coverage Ratio = ₹500m ÷ ₹100m = 5.0x.",
    optionExplanations: {
      A: "Incorrect. Uses EBITDA (₹700m ÷ ₹100m = 7.0x) instead of EBIT; that is EBITDA coverage, not standard Interest Coverage.",
      B: "Incorrect. Deducts taxes before dividing by interest (EAT / Interest).",
      C: "Incorrect. Calculation error in operating income.",
      D: "Correct. EBIT = ₹2,500m - ₹1,800m - ₹200m = ₹500m. Interest Coverage = ₹500m ÷ ₹100m = 5.0x."
    }
  },
  {
    id: "Q029",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Bollinger Bands Interpretation",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "How are standard Bollinger Bands constructed, and what does a prolonged 'Band Squeeze' signify?",
    options: {
      A: "20-day SMA with ±2 standard deviation bands; squeeze reflects low volatility preceding a breakout.",
      B: "20-day EMA with ±10% envelopes; squeeze indicates circuit breaker closure.",
      C: "Intraday VWAP with daily high/low bands; squeeze indicates trend reversal.",
      D: "50-day SMA with ±3 ATR bands; squeeze indicates exceptionally high liquidity."
    },
    correctAnswer: "A",
    explanation: "John Bollinger developed Bollinger Bands using a 20-period Simple Moving Average (SMA) as the centerline, with outer bands set at 2 standard deviations above and below the centerline. A 'Squeeze' occurs when the bands contract tightly together, indicating that volatility has dropped to historic lows. Because volatility is cyclical, squeezes frequently precede powerful directional breakouts.",
    optionExplanations: {
      A: "Correct. Middle band = 20-day SMA; outer bands = ±2 standard deviations. A squeeze reflects compressed volatility that typically resolves in an explosive price expansion.",
      B: "Incorrect. Bollinger Bands use standard deviations, not fixed percentage envelopes.",
      C: "Incorrect. Bollinger Bands are not based on intraday VWAP.",
      D: "Incorrect. Bands set by ATR multiples are Keltner Channels, not Bollinger Bands."
    }
  },
  {
    id: "Q030",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Chinese Wall and Research Independence",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "free",
    question: "Under SEBI regulations and global practice, what is the primary purpose of an internal 'Chinese Wall' in a securities firm?",
    options: {
      A: "Prevent foreign institutional investors from acquiring equities without central bank approval.",
      B: "Isolate Research from Investment Banking and Trading to prevent conflicts and MNPI leaks.",
      C: "Physically restrict foreign equity analysts from accessing local trading terminals.",
      D: "Keep proprietary quantitative trading algorithms hidden from retail clients."
    },
    correctAnswer: "B",
    explanation: "A 'Chinese Wall' is an information barrier erected between corporate advisory/investment banking teams (who routinely possess material non-public price-sensitive information) and public-side divisions such as equity research and trading. Its primary statutory purpose is to prevent insider trading, eliminate conflicts of interest, and protect the objectivity and independence of research reports.",
    optionExplanations: {
      A: "Incorrect. Foreign portfolio investment permissions are governed by RBI and SEBI FPI regulations, unrelated to internal Chinese Walls.",
      B: "Correct. The Chinese Wall prevents unauthorized flow of price-sensitive confidential information between investment banking and equity research.",
      C: "Incorrect. Chinese Walls govern information flow, not geographical or physical terminal access of foreign analysts.",
      D: "Incorrect. The purpose is conflict of interest mitigation and insider trading prevention, not algorithmic secrecy."
    }
  },
  {
    id: "Q031",
    chapter: "Chapter 4 – Fundamentals of Research",
    topic: "Top-Down vs Bottom-Up Research Approaches",
    category: "Fundamentals of Research",
    difficulty: 3, // Medium
    access: "free",
    question: "An analyst evaluates global macro trends, picks defensive sectors poised to outperform, and selects leading firms within those sectors. This research approach is:",
    options: {
      A: "Bottom-up fundamental approach",
      B: "Quantitative mean-reversion approach",
      C: "Top-down fundamental approach",
      D: "Scuttlebutt qualitative approach"
    },
    correctAnswer: "C",
    explanation: "A Top-Down approach begins at the highest macro level (economy), proceeds down to the industry/sector level, and concludes with specific company selection (Economy → Industry → Company or E-I-C). In contrast, a Bottom-Up approach focuses first on company-specific fundamentals (financial statements, management quality, competitive moat) regardless of macroeconomic or industry conditions.",
    optionExplanations: {
      A: "Incorrect. Bottom-up starts with company-specific financial and operational analysis rather than macro forecasting.",
      B: "Incorrect. Mean-reversion is a statistical trading strategy, not a fundamental macro-to-company framework.",
      C: "Correct. Top-down research moves sequentially from the broad economy to specific industry sectors and finally to individual company selection.",
      D: "Incorrect. Scuttlebutt involves qualitative ground-level channel checks with customers, suppliers, and competitors."
    }
  },
  {
    id: "Q032",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Jensen's Alpha Calculation",
    category: "Risk and Return",
    difficulty: 5, // Very Hard
    access: "free",
    question: "A fund delivers 18.0% return with beta of 1.25. The risk-free rate is 6.0% and market return is 14.0%. What is its Jensen's Alpha?",
    options: {
      A: "+4.00%",
      B: "-1.50%",
      C: "+1.25%",
      D: "+2.00%"
    },
    correctAnswer: "D",
    explanation: "Jensen's Alpha measures the abnormal return generated by a portfolio over and above what is predicted by the CAPM: Alpha (α) = Actual Portfolio Return (Rp) - [Rf + β × (Rm - Rf)]. Expected CAPM Return = 6.0% + 1.25 × (14.0% - 6.0%) = 6.0% + 1.25 × 8.0% = 6.0% + 10.0% = 16.0%. Jensen's Alpha = 18.0% - 16.0% = +2.00%.",
    optionExplanations: {
      A: "Incorrect. Calculated excess return over the market (18% - 14% = 4%) without adjusting for portfolio beta.",
      B: "Incorrect. Sign error resulting from reversing actual and expected returns.",
      C: "Incorrect. Confused alpha percentage with the beta numerical value.",
      D: "Correct. CAPM expected return = 6% + 1.25 × (14% - 6%) = 16%. Actual return = 18%. Alpha = 18% - 16% = +2.00%."
    }
  },
  {
    id: "Q033",
    chapter: "Chapter 6 – Industry Analysis",
    topic: "Industry Life Cycle Stages",
    category: "Industry Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "In which Industry Life Cycle stage does sales growth decelerate, product differentiation diminish, price competition intensify, and M&A consolidation peak?",
    options: {
      A: "Maturity / Shakeout stage",
      B: "Pioneering / Embryonic stage",
      C: "Rapid Growth stage",
      D: "Terminal Decline stage"
    },
    correctAnswer: "A",
    explanation: "During the Shakeout and Maturity stages of the industry life cycle, market saturation approaches, sales growth slows to the rate of general economic expansion, product designs standardize, and weaker, high-cost producers are eliminated or acquired by dominant competitors in a wave of industry consolidation.",
    optionExplanations: {
      A: "Correct. The shakeout and maturity phase is marked by decelerating growth, price competition, margin pressure, and significant industry M&A consolidation.",
      B: "Incorrect. The embryonic stage has very low sales, high R&D costs, and uncertain customer adoption.",
      C: "Incorrect. Rapid growth features accelerating sales, expanding margins, and low price competition.",
      D: "Incorrect. Terminal decline exhibits contracting absolute industry revenues and structural obsolescence."
    }
  },
  {
    id: "Q034",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Dividend Discount Model (Gordon Growth)",
    category: "Valuation",
    difficulty: 4, // Hard
    access: "free",
    question: "Delta Ltd paid dividend D0 = ₹12, growing perpetually at 6% annually. If required return is 11%, what is intrinsic value under Gordon Growth Model?",
    options: {
      A: "₹240.00",
      B: "₹254.40",
      C: "₹109.09",
      D: "₹218.18"
    },
    correctAnswer: "B",
    explanation: "Under the Gordon Growth Model: Intrinsic Value P0 = D1 ÷ (Ke - g) = [D0 × (1 + g)] ÷ (Ke - g). Here: D0 = ₹12. D1 = ₹12 × (1 + 0.06) = ₹12.72. Ke = 11% (0.11), g = 6% (0.06). Ke - g = 0.11 - 0.06 = 0.05. P0 = ₹12.72 ÷ 0.05 = ₹254.40.",
    optionExplanations: {
      A: "Incorrect. Forgot to compound dividend to D1: ₹12 ÷ 0.05 = ₹240.00.",
      B: "Correct. P0 = D1 / (Ke - g) = [₹12 × 1.06] ÷ (0.11 - 0.06) = ₹12.72 ÷ 0.05 = ₹254.40.",
      C: "Incorrect. Divided D0 by Ke without considering the growth factor.",
      D: "Incorrect. Subtracted growth rate from dividend numerator."
    }
  },
  {
    id: "Q035",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Dow Theory Core Tenets",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "Which of the following is NOT a foundational tenet of Dow Theory?",
    options: {
      A: "The market averages discount everything.",
      B: "The market exhibits primary, secondary, and minor trends.",
      C: "A trend reversal is confirmed whenever a minor daily swing violates the prior day's extreme.",
      D: "Volume must confirm the trend direction."
    },
    correctAnswer: "C",
    explanation: "Dow Theory explicitly holds that minor daily fluctuations are meaningless 'noise' that cannot confirm a trend reversal. Reversals in the primary trend require confirmation across both the Industrial and Transportation averages breaking past significant intermediate (secondary) swing peaks or troughs, validated by expanding volume.",
    optionExplanations: {
      A: "Incorrect. 'The averages discount everything' is a foundational tenet of Dow Theory.",
      B: "Incorrect. The classification into primary, secondary, and minor trends is central to Dow Theory.",
      C: "Correct. Dow Theory states that minor day-to-day swings do NOT confirm trend reversals; only secondary swings confirmed by both averages can signal a reversal.",
      D: "Incorrect. Volume confirming the trend is a core tenet of Dow Theory."
    }
  },
  {
    id: "Q036",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "SEBI RA Maintenance of Records",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "free",
    question: "Under Regulation 25 of SEBI RA Regulations, 2014, for what minimum period must an analyst or entity maintain and preserve research records?",
    options: {
      A: "A minimum period of 3 years",
      B: "A minimum period of 10 years",
      C: "Permanently for the lifetime of the registered entity",
      D: "A minimum period of 5 years"
    },
    correctAnswer: "D",
    explanation: "Under Regulation 25 of SEBI (Research Analysts) Regulations, 2014: Research analysts and research entities must maintain all research reports, research notes, written research recommendations, client communication records, and compliance audit reports for a minimum period of five years.",
    optionExplanations: {
      A: "Incorrect. 3 years is below the statutory minimum required by SEBI.",
      B: "Incorrect. 10 years exceeds the general statutory preservation requirement.",
      C: "Incorrect. Lifetime retention is not required; the statutory requirement is 5 years.",
      D: "Correct. Regulation 25 mandates that records must be maintained and preserved for a minimum period of 5 years."
    }
  },
  {
    id: "Q037",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Operating Leverage and Financial Leverage",
    category: "Financial Analysis",
    difficulty: 5, // Very Hard
    access: "free",
    question: "A company has Degree of Operating Leverage (DOL) = 3.0 and Degree of Financial Leverage (DFL) = 1.5. If sales increase 10%, what is the expected EPS increase?",
    options: {
      A: "45%",
      B: "30%",
      C: "15%",
      D: "20%"
    },
    correctAnswer: "A",
    explanation: "The Degree of Combined Leverage (DCL) measures the total sensitivity of EPS to changes in sales revenue: DCL = DOL × DFL = 3.0 × 1.5 = 4.5. Therefore: % Change in EPS = % Change in Sales × DCL = 10% × 4.5 = 45%.",
    optionExplanations: {
      A: "Correct. DCL = DOL × DFL = 3.0 × 1.5 = 4.5. A 10% change in sales translates to 10% × 4.5 = 45% change in EPS.",
      B: "Incorrect. Only reflects operating leverage effect on EBIT (10% × 3.0 = 30%), ignoring financial leverage.",
      C: "Incorrect. Only reflects financial leverage effect (10% × 1.5 = 15%), ignoring operating leverage.",
      D: "Incorrect. Arbitrary calculation that fails to apply the multiplicative property of combined leverage."
    }
  },
  {
    id: "Q038",
    chapter: "Chapter 1 – Introduction to Research Analyst Profession",
    topic: "Sell-Side vs Buy-Side Analysts",
    category: "Profession Overview",
    difficulty: 3, // Medium
    access: "free",
    question: "Which statement accurately contrasts the primary mandate of a Sell-Side research analyst with that of a Buy-Side research analyst?",
    options: {
      A: "Sell-side analysts manage portfolios; buy-side analysts publish reports for commissions.",
      B: "Sell-side analysts publish reports to facilitate client trading; buy-side analysts evaluate ideas internally for portfolio managers.",
      C: "Sell-side analysts cover fixed income exclusively; buy-side analysts cover equities.",
      D: "Sell-side analysts are exempt from SEBI; buy-side analysts must register."
    },
    correctAnswer: "B",
    explanation: "Sell-side analysts work for brokerage houses and investment banks, publishing research reports that are distributed to clients to generate trade execution, visibility, and commissions. Buy-side analysts work for institutional investors (mutual funds, hedge funds, pension funds, insurance companies) and conduct in-depth research exclusively for their internal portfolio managers to make direct investment decisions.",
    optionExplanations: {
      A: "Incorrect. Inverts the core functions of sell-side and buy-side analysts.",
      B: "Correct. Sell-side analysts produce external research to facilitate client trade execution, while buy-side analysts produce internal proprietary recommendations for portfolio managers.",
      C: "Incorrect. Both sell-side and buy-side analysts cover equities, fixed income, commodities, and currencies.",
      D: "Incorrect. Both sell-side and buy-side research entities operate under strict SEBI regulatory oversight."
    }
  },
  {
    id: "Q039",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Double Top and Double Bottom Reversal Patterns",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "free",
    question: "In technical chart analysis, which characteristic is TRUE regarding a valid Double Top pattern?",
    options: {
      A: "The second peak must always print higher volume than the first peak.",
      B: "A Double Top is a bullish continuation pattern signaling accelerating upside.",
      C: "The pattern is confirmed only when price breaks decisively below the intervening trough (neckline) on volume.",
      D: "The time elapsed between the two peaks should ideally be no more than two trading sessions."
    },
    correctAnswer: "C",
    explanation: "A Double Top is a bearish reversal pattern that forms after an extended uptrend. It consists of two consecutive peaks at roughly the same price level separated by a distinct trough. Crucially, the pattern is NOT confirmed when the second peak fails; it is confirmed ONLY when price breaks decisively below the intervening trough (neckline). Volume is typically lower on the second peak and expands on the neckline breakdown.",
    optionExplanations: {
      A: "Incorrect. Volume on the second peak is typically lower than on the first peak, reflecting waning buying enthusiasm.",
      B: "Incorrect. A Double Top is a bearish reversal pattern, not a bullish continuation pattern.",
      C: "Correct. A Double Top is formally confirmed only when the price breaks below the intervening swing low (neckline) on expanding volume.",
      D: "Incorrect. Valid double tops take weeks or months to develop; two sessions represents daily noise rather than a structural reversal."
    }
  },
  {
    id: "Q040",
    chapter: "Chapter 7 – Company Analysis – Business and Governance",
    topic: "Related Party Transactions and Governance",
    category: "Governance",
    difficulty: 4, // Hard
    access: "free",
    question: "Under SEBI LODR and the Companies Act, 2013, which safeguard is legally required to approve Material Related Party Transactions (RPTs)?",
    options: {
      A: "Approval only by the Chief Financial Officer and statutory auditor without board oversight.",
      B: "Approval by a simple majority of executive directors without Audit Committee review.",
      C: "No approval required if the transaction is valued at less than 50% of annual turnover.",
      D: "Prior approval of Audit Committee (independent directors only) and shareholder approval with related parties abstaining from voting in favor."
    },
    correctAnswer: "D",
    explanation: "Under Regulation 23 of SEBI LODR Regulations and Section 188 of Companies Act, 2013: All related party transactions require prior approval of the Audit Committee (where only independent directors who are members of the audit committee can vote). Furthermore, all Material Related Party Transactions require approval of the shareholders through a resolution, and no related party can vote in favor of such resolution.",
    optionExplanations: {
      A: "Incorrect. Statutory auditor and CFO cannot substitute for mandatory Audit Committee and shareholder approval.",
      B: "Incorrect. Executive directors cannot approve material RPTs without Audit Committee independent scrutiny.",
      C: "Incorrect. The materiality threshold under SEBI LODR is ₹1,000 crore or 10% of annual consolidated turnover, whichever is lower.",
      D: "Correct. Material RPTs require prior approval by the Audit Committee (independent directors only) and approval by shareholders with related parties abstaining from voting in favor."
    }
  }
];
