import { Question } from '../types';

export const LOCKED_QUESTIONS: Question[] = [
  {
    id: "Q041",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "WACC Impact on DCF Valuation",
    category: "Valuation",
    difficulty: 4, // Hard
    access: "locked",
    question: "An equity research analyst models a 10-year Discounted Cash Flow (DCF) for an industrial conglomerate. If the company's Weighted Average Cost of Capital (WACC) increases from 11.0% to 12.5% while cash flow forecasts remain unchanged, what is the expected impact on Enterprise Value?",
    options: {
      A: "Enterprise Value decreases because future operational cash flows and the terminal value are discounted at a higher hurdle rate.",
      B: "Enterprise Value increases because a higher cost of capital implies greater perceived risk and higher expected nominal yields.",
      C: "Enterprise Value remains completely unchanged because WACC only affects the capital structure weights on the balance sheet.",
      D: "Enterprise Value increases in the near term but decreases beyond the 5-year forecast horizon."
    },
    correctAnswer: "A",
    explanation: "In a Discounted Cash Flow model, Enterprise Value is the sum of the present values of projected future FCFF plus the present value of the terminal value: PV = Σ [FCFF_t / (1 + WACC)^t] + [TV_N / (1 + WACC)^N]. Because WACC resides in the denominator of the present value formula, any increase in the discount rate decreases the present value of each future cash flow and dramatically shrinks the capitalized terminal value.",
    optionExplanations: {
      A: "Correct. A higher discount rate (WACC) reduces the present value of all future cash flows and the terminal value, resulting in a lower Enterprise Value.",
      B: "Incorrect. Higher risk increases the discount rate, which reduces the current present value rather than increasing it.",
      C: "Incorrect. WACC is the fundamental discount rate in DCF models; changes in WACC have a substantial impact on valuation.",
      D: "Incorrect. An increase in WACC uniformly reduces discounted cash flow values across all projected time periods."
    }
  },
  {
    id: "Q042",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "5-Stage DuPont ROE Decomposition",
    category: "Financial Analysis",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "Under the extended 5-stage DuPont framework, Return on Equity (ROE) is decomposed into five specific ratios. Which of the following expressions correctly defines this 5-stage breakdown?",
    options: {
      A: "(EBIT / Sales) × (Sales / Assets) × (Assets / Equity) × (Net Income / EBIT) × (Gross Profit / Sales)",
      B: "(Tax Burden) × (Interest Burden) × (EBIT Margin) × (Asset Turnover) × (Financial Leverage)",
      C: "(Net Income / Sales) × (Sales / Assets) × (Assets / Equity) × (Operating Cash Flow / Net Income) × (Free Cash Flow / Sales)",
      D: "(Operating Income / Sales) × (Sales / Working Capital) × (Working Capital / Equity) × (Debt / Equity) × (1 - Tax Rate)"
    },
    correctAnswer: "B",
    explanation: "The 5-stage DuPont decomposition breaks down ROE into: (1) Tax Burden = Net Income / EBT; (2) Interest Burden = EBT / EBIT; (3) Operating (EBIT) Margin = EBIT / Sales; (4) Asset Turnover = Sales / Total Assets; and (5) Financial Leverage = Total Assets / Shareholders' Equity. Multiplying these five terms cancels intermediate numerators and denominators to yield Net Income / Shareholders' Equity (ROE).",
    optionExplanations: {
      A: "Incorrect. Contains redundant profit margins and does not isolate the tax burden and interest burden correctly.",
      B: "Correct. 5-Stage ROE = (Net Income / EBT) × (EBT / EBIT) × (EBIT / Sales) × (Sales / Assets) × (Assets / Equity).",
      C: "Incorrect. Introduces operating cash flow and free cash flow ratios that are not part of the DuPont accounting identity.",
      D: "Incorrect. Modifies balance sheet components without preserving the mathematical cancellation to ROE."
    }
  },
  {
    id: "Q043",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Candlestick Patterns: Bullish Engulfing",
    category: "Technical Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "In technical candlestick analysis, what constitutes a valid 'Bullish Engulfing' pattern at the end of a downtrend?",
    options: {
      A: "A small green candle followed by a large red candle whose real body completely covers the preceding green body.",
      B: "A doji candle with long upper and lower shadows followed immediately by a shooting star candlestick.",
      C: "A small red (bearish) candle followed by a large green (bullish) candle whose real body completely engulfs the real body of the first candle.",
      D: "Three consecutive tall green candles with small shadows making progressively higher highs and higher closes."
    },
    correctAnswer: "C",
    explanation: "A Bullish Engulfing pattern is a two-candle reversal pattern that appears after a downtrend. The first candle is a smaller red (bearish) candle representing continuing selling pressure. The second candle opens lower than the first candle's close (reflecting opening pessimism), but powerful buying surges throughout the session, causing the green real body to completely envelop the preceding red candle's real body.",
    optionExplanations: {
      A: "Incorrect. A green candle engulfed by a subsequent red candle is a Bearish Engulfing pattern.",
      B: "Incorrect. A doji followed by a shooting star is a bearish combination, not a bullish engulfing pattern.",
      C: "Correct. A small red body followed by a large green body that completely covers the prior body confirms a Bullish Engulfing reversal.",
      D: "Incorrect. Three consecutive tall green candles describes the Three White Soldiers pattern."
    }
  },
  {
    id: "Q044",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Prohibition on Trading Contrary to Recommendation",
    category: "Regulation",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "Under Regulation 16(3) of the SEBI (Research Analysts) Regulations, 2014, when is a research analyst or research entity permitted to trade in a security contrary to their published recommendation?",
    options: {
      A: "Whenever the benchmark index declines by more than 2% in a single trading session.",
      B: "If the analyst provides a 24-hour advance written notice on their public website or social media channels.",
      C: "Only if the trade is executed on an offshore international stock exchange.",
      D: "Never, except in cases of significant personal financial emergency with prior written approval of the Compliance Officer."
    },
    correctAnswer: "D",
    explanation: "Under Regulation 16(3) of SEBI (Research Analysts) Regulations, 2014: Research analysts and research entities shall not trade in securities of the subject company contrary to their recommendations given which is consistent with the objective of maintaining research integrity. However, an exception is permitted in situations of significant personal financial emergency, subject to obtaining prior written approval from the Compliance Officer.",
    optionExplanations: {
      A: "Incorrect. Market index volatility does not permit an analyst to trade contrary to their active recommendation.",
      B: "Incorrect. Advance public notices cannot waive statutory conflicts of interest.",
      C: "Incorrect. SEBI regulations govern the analyst's worldwide conduct regarding covered subject companies.",
      D: "Correct. Regulation 16(3) prohibits contrary trading except during documented personal financial emergency with prior Compliance Officer sign-off."
    }
  },
  {
    id: "Q045",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "EV/EBITDA vs Price/Earnings Multiples",
    category: "Valuation",
    difficulty: 4, // Hard
    access: "locked",
    question: "Why do equity research analysts often prefer the Enterprise Value to EBITDA (EV/EBITDA) multiple over the Price to Earnings (P/E) multiple when comparing companies within capital-intensive industries?",
    options: {
      A: "EV/EBITDA is capital-structure neutral and removes distortions caused by differing debt levels, depreciation policies, and tax rates.",
      B: "EV/EBITDA guarantees that cyclical commodity companies will never appear overvalued at the peak of an earnings cycle.",
      C: "P/E ratios cannot be calculated whenever a company issues preferred stock or convertible debt securities.",
      D: "EBITDA represents the exact liquid cash available to pay dividends to ordinary equity shareholders."
    },
    correctAnswer: "A",
    explanation: "EV/EBITDA evaluates the total operating enterprise value relative to core operating cash generation before non-operating distortions. Because companies in capital-intensive sectors (power, steel, telecom) may adopt different debt ratios (affecting interest expense), different depreciation schedules (SLM vs WDV), or operate under different tax regimes, EV/EBITDA provides a cleaner operational comparison than P/E.",
    optionExplanations: {
      A: "Correct. EV/EBITDA neutralizes capital structure (debt vs equity) and removes depreciation/tax accounting variations across firms.",
      B: "Incorrect. Cyclical stocks can still appear optically cheap or expensive; EV/EBITDA does not eliminate cyclicality.",
      C: "Incorrect. P/E ratios are routinely computed for firms with preferred stock or convertible bonds (via diluted EPS).",
      D: "Incorrect. EBITDA is not cash flow and cannot be distributed directly as dividends without funding capex, working capital, interest, and taxes."
    }
  },
  {
    id: "Q046",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Fibonacci Retracement Ratios",
    category: "Technical Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "In technical analysis, which of the following represents the primary set of key Fibonacci retracement levels derived mathematically from the Fibonacci sequence?",
    options: {
      A: "10.0%, 25.0%, 50.0%, 75.0%, and 90.0%",
      B: "23.6%, 38.2%, 50.0%, 61.8%, and 78.6%",
      C: "15.0%, 30.0%, 45.0%, 60.0%, and 90.0%",
      D: "5.0%, 12.5%, 25.0%, 37.5%, and 50.0%"
    },
    correctAnswer: "B",
    explanation: "Classical Fibonacci retracement analysis utilizes key ratios derived from the Fibonacci sequence: 23.6%, 38.2%, 61.8% (the Golden Ratio reciprocal: 1/1.618), and 78.6% (square root of 0.618). Although 50.0% is not a pure Fibonacci ratio, it is universally included by technical analysts as a key Dow Theory half-retracement benchmark.",
    optionExplanations: {
      A: "Incorrect. These are arbitrary round decimal percentages, not Fibonacci ratios.",
      B: "Correct. 23.6%, 38.2%, 50.0%, 61.8%, and 78.6% constitute standard Fibonacci retracement levels.",
      C: "Incorrect. Multiples of 15% are not derived from Fibonacci mathematical properties.",
      D: "Incorrect. Eighths (12.5%, 37.5%) are Gann/Murrey math levels, not Fibonacci ratios."
    }
  },
  {
    id: "Q047",
    chapter: "Chapter 6 – Industry Analysis",
    topic: "Cyclical vs Defensive vs Growth Industries",
    category: "Industry Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "Which of the following industry classifications is considered a classic 'Defensive' sector whose revenues and earnings remain relatively resilient during macroeconomic recessions?",
    options: {
      A: "Commercial Real Estate and Heavy Construction",
      B: "Automobile Manufacturing and Luxury Consumer Goods",
      C: "Pharmaceuticals and Fast-Moving Consumer Goods (FMCG)",
      D: "Capital Goods and Mining Machinery"
    },
    correctAnswer: "C",
    explanation: "Defensive industries produce essential goods and services that consumers require regardless of the economic cycle, such as basic food products, personal hygiene items, healthcare, and pharmaceuticals. Demand for these essentials exhibits very low income elasticity. In contrast, automotive, real estate, and capital goods are highly cyclical and suffer sharp revenue declines during downturns.",
    optionExplanations: {
      A: "Incorrect. Real estate and construction are highly cyclical and interest-rate sensitive.",
      B: "Incorrect. Automobiles and luxury goods are discretionary purchases deferred during economic downturns.",
      C: "Correct. FMCG and Pharmaceuticals exhibit inelastic demand and are archetypal defensive sectors.",
      D: "Incorrect. Capital goods and mining machinery are early-to-mid cycle industrial segments with high cyclical volatility."
    }
  },
  {
    id: "Q048",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Portfolio Diversification and Unsystematic Risk",
    category: "Risk and Return",
    difficulty: 4, // Hard
    access: "locked",
    question: "As an investor progressively increases the number of randomly selected, uncorrelated stocks in an equity portfolio from 5 to 35, what happens to the portfolio's total risk?",
    options: {
      A: "Total risk drops to zero because all market fluctuations are eliminated.",
      B: "Systematic risk is completely eliminated, leaving only firm-specific risk.",
      C: "Total risk increases because managing more stocks introduces operational and tracking errors.",
      D: "Unsystematic (company-specific) risk is largely diversified away, leaving primarily non-diversifiable systematic market risk."
    },
    correctAnswer: "D",
    explanation: "Portfolio theory demonstrates that total risk consists of Unsystematic (diversifiable/firm-specific) risk and Systematic (market/macroeconomic) risk. By combining 20 to 30 uncorrelated assets, idiosyncratic firm-specific risks cancel out. However, systematic risk (e.g., inflation, geopolitical events, interest rate shocks) affects the entire market and cannot be eliminated through diversification.",
    optionExplanations: {
      A: "Incorrect. Total risk can never reach zero in an equity portfolio due to unavoidable systematic market risk.",
      B: "Incorrect. Systematic risk cannot be diversified away; diversification eliminates unsystematic risk.",
      C: "Incorrect. Adding uncorrelated securities reduces portfolio variance, it does not increase risk.",
      D: "Correct. Diversification reduces unsystematic risk to near zero, leaving only undiversifiable systematic risk."
    }
  },
  {
    id: "Q049",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Current Ratio vs Quick Ratio",
    category: "Financial Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "Company Zenith Ltd reports: Cash & Bank = ₹300m, Marketable Securities = ₹200m, Trade Receivables = ₹500m, Inventories = ₹800m, Prepaid Expenses = ₹100m, and Current Liabilities = ₹1,000m. What are Zenith Ltd's Current Ratio and Quick (Acid-Test) Ratio?",
    options: {
      A: "Current Ratio = 1.90x; Quick Ratio = 1.00x",
      B: "Current Ratio = 1.80x; Quick Ratio = 0.80x",
      C: "Current Ratio = 1.00x; Quick Ratio = 1.90x",
      D: "Current Ratio = 2.10x; Quick Ratio = 1.20x"
    },
    correctAnswer: "A",
    explanation: "Total Current Assets = Cash (300) + Securities (200) + Receivables (500) + Inventories (800) + Prepaid Expenses (100) = ₹1,900m. Current Ratio = Current Assets ÷ Current Liabilities = 1,900 ÷ 1,000 = 1.90x. Quick Assets = Current Assets - Inventories - Prepaid Expenses = 1,900 - 800 - 100 = ₹1,000m. Quick Ratio = Quick Assets ÷ Current Liabilities = 1,000 ÷ 1,000 = 1.00x.",
    optionExplanations: {
      A: "Correct. Current Ratio = 1,900 / 1,000 = 1.90x; Quick Ratio = (1,900 - 800 - 100) / 1,000 = 1,000 / 1,000 = 1.00x.",
      B: "Incorrect. Omitted marketable securities from current assets.",
      C: "Incorrect. Inverts the Current Ratio and Quick Ratio definitions.",
      D: "Incorrect. Failed to deduct prepaid expenses from quick assets."
    }
  },
  {
    id: "Q050",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "SEBI RA Minimum Net Worth Requirements",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "locked",
    question: "Under Regulation 8 of the SEBI (Research Analysts) Regulations, 2014, what is the minimum net worth or capital adequacy requirement for a Body Corporate / Company applying for registration as a Research Analyst?",
    options: {
      A: "A minimum net worth of ₹5 lakh",
      B: "A minimum net worth of ₹25 lakh",
      C: "A minimum net worth of ₹1 crore",
      D: "A minimum net worth of ₹50 lakh"
    },
    correctAnswer: "B",
    explanation: "Under Regulation 8(2) of SEBI (Research Analysts) Regulations, 2014: A research analyst who is an individual or partnership firm must have net tangible assets of not less than ₹1 lakh (revised in subsequent guidelines), whereas a research analyst that is a body corporate or limited liability partnership (LLP) must have a net worth of not less than twenty-five lakh rupees (₹25,00,000).",
    optionExplanations: {
      A: "Incorrect. ₹5 lakh was an earlier proposal, but the statutory requirement for bodies corporate is ₹25 lakh.",
      B: "Correct. Regulation 8 mandates a minimum net worth of ₹25 lakh for body corporate applicants.",
      C: "Incorrect. ₹1 crore applies to merchant bankers and portfolio managers, not research analysts.",
      D: "Incorrect. ₹50 lakh exceeds the statutory capital requirement for research entities."
    }
  },
  {
    id: "Q051",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Support/Resistance Breakout Volume Confirmation",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "A stock has traded inside a horizontal congestion channel between ₹400 and ₹450 for four months. The price closes above ₹450 at ₹454, but daily volume is 40% below its 30-day average. Over the next two days, the price slips back inside the channel to ₹442. This price action is best categorized as a:",
    options: {
      A: "Successful breakout confirming an accelerating primary bull trend.",
      B: "Exhaustion gap signaling the immediate end of a multi-year bear market.",
      C: "False Breakout (Bull Trap), where lack of institutional volume failed to absorb overhead supply, leading to a quick reversal.",
      D: "Rounding bottom reversal pattern signaling long-term institutional accumulation."
    },
    correctAnswer: "C",
    explanation: "A breakout above key resistance that occurs on below-average volume is suspect. Technical analysis dictates that legitimate breakouts require expanding volume to confirm institutional participation. When price pierces resistance on light volume and immediately slips back into the range, it is a classic 'Bull Trap' (false breakout), trapping breakout buyers as sellers re-exert control.",
    optionExplanations: {
      A: "Incorrect. Sub-par volume contradicts breakout confirmation and failed to sustain the price move.",
      B: "Incorrect. Price gaps did not occur, and this was an intraday range breakout rather than an exhaustion gap.",
      C: "Correct. Piercing resistance on low volume followed by an immediate retreat below resistance defines a classic false breakout or Bull Trap.",
      D: "Incorrect. Rounding bottoms take months of gradual curvilinear price action, not a two-day channel failed breakout."
    }
  },
  {
    id: "Q052",
    chapter: "Chapter 9 – Corporate Actions",
    topic: "Record Date vs Ex-Dividend Date in T+1 Settlement",
    category: "Corporate Actions",
    difficulty: 4, // Hard
    access: "locked",
    question: "Under the T+1 settlement cycle prevailing in Indian equity markets, a listed company declares a corporate dividend with a Record Date of Thursday, May 15. What is the Ex-Dividend Date, and by which date must an investor purchase shares to be entitled to receive the dividend?",
    options: {
      A: "Ex-dividend date is Friday, May 16; shares must be purchased by Friday, May 16.",
      B: "Ex-dividend date is Tuesday, May 13; shares must be purchased by Monday, May 12.",
      C: "Ex-dividend date is Friday, May 16; shares must be purchased by Thursday, May 15.",
      D: "Ex-dividend date is Thursday, May 15; shares must be purchased on or before Wednesday, May 14."
    },
    correctAnswer: "D",
    explanation: "Under the T+1 rolling settlement regime, the Ex-Date and the Record Date fall on the exact same trading day (Thursday, May 15). To be recorded on the company's register of beneficial owners on the Record Date (T+1), an investor must purchase the shares on the cum-dividend date, which is one trading day prior to the ex-date (Wednesday, May 14). Buying on or after the Ex-Date does not grant entitlement.",
    optionExplanations: {
      A: "Incorrect. In T+1, ex-date cannot be after the record date.",
      B: "Incorrect. Two-day gaps existed under older T+2 settlement, not under T+1.",
      C: "Incorrect. Purchasing on the record date under T+1 settles on T+2, missing the record date shareholder register.",
      D: "Correct. Under T+1, Ex-Date is the same as Record Date (May 15), so shares must be bought on or before May 14 (T-1) to settle by May 15."
    }
  },
  {
    id: "Q053",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Enterprise Value to Sales (EV/Sales)",
    category: "Valuation",
    difficulty: 3, // Medium
    access: "locked",
    question: "Why is the Enterprise Value to Sales (EV/Sales) multiple preferred over the Price to Sales (P/Sales) multiple when valuing early-stage or loss-making companies with heavy debt?",
    options: {
      A: "EV/Sales matches a firm-wide valuation metric with a firm-wide revenue figure, whereas P/Sales compares an equity-only metric against revenues claimed by all capital providers.",
      B: "P/Sales ratios are mathematically impossible to compute whenever a company reports negative net profits.",
      C: "EV/Sales ignores accounts receivable and inventory while P/Sales explicitly includes working capital.",
      D: "P/Sales ratios are only permitted under Indian GAAP and are prohibited under Ind AS accounting standards."
    },
    correctAnswer: "A",
    explanation: "Sales revenue is generated by the entirety of the firm's productive assets, which are funded by both debt holders and equity holders. Comparing Price (Market Cap, an equity-only metric) to Sales creates distortion if one company is funded 90% by debt and another 100% by equity. Enterprise Value includes both debt and equity claims, creating consistency between numerator and denominator.",
    optionExplanations: {
      A: "Correct. EV/Sales aligns total enterprise claims with total top-line revenue, avoiding debt distortion inherent in P/Sales.",
      B: "Incorrect. P/Sales is easily calculated when earnings are negative because revenue is always positive.",
      C: "Incorrect. Working capital components do not determine the definition of sales multiples.",
      D: "Incorrect. Both multiples are valuation metrics used by analysts, not governed by accounting standards."
    }
  },
  {
    id: "Q054",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Compensation Disclosures under SEBI RA",
    category: "Regulation",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "Under Regulation 17(2) of the SEBI (Research Analysts) Regulations, 2014, which of the following rules governs the compensation structure of research analysts employed by a research entity?",
    options: {
      A: "Analyst compensation must be tied directly to the quarterly commission volume generated by institutional sales desks.",
      B: "Compensation of research analysts must be reviewed and approved annually by a compensation committee, and cannot be based on specific investment banking transactions.",
      C: "Analysts must be paid exclusively through profit-sharing bonuses derived from proprietary trading desk gains.",
      D: "SEBI fixes the exact monthly salary scales for all certified research analysts across registered brokerage houses."
    },
    correctAnswer: "B",
    explanation: "Under Regulation 17(2) of SEBI (Research Analysts) Regulations, 2014: Research entities must ensure that the compensation of research analysts is reviewed and approved annually by a board committee or senior management. Crucially, research analyst compensation cannot be linked directly to specific investment banking, merchant banking, or brokerage transactions.",
    optionExplanations: {
      A: "Incorrect. Direct linkage to sales commissions creates conflicts of interest prohibited under SEBI regulations.",
      B: "Correct. Regulation 17(2) mandates annual review and explicitly bans linking analyst pay to specific investment banking transactions.",
      C: "Incorrect. Linking research pay to proprietary trading profits violates research independence mandates.",
      D: "Incorrect. SEBI regulates structural independence, not private market salary amounts."
    }
  },
  {
    id: "Q055",
    chapter: "Chapter 11 – Fundamental Analysis of Commodities",
    topic: "Agricultural vs Non-Agricultural Commodity Seasonality",
    category: "Commodities",
    difficulty: 4, // Hard
    access: "locked",
    question: "Which of the following factors exerts the STRONGEST fundamental influence on the intra-year price seasonality and basis of agricultural commodities compared to non-agricultural industrial metals?",
    options: {
      A: "Central bank monetary policy decisions and sovereign debt default swap spreads.",
      B: "Global automotive manufacturing capex and industrial electrical transmission expansion.",
      C: "Crop sowing and harvesting cycles, monsoon rainfall distribution, and perishable physical storage constraints.",
      D: "LME warehouse warrant cancellation rates and cross-border customs tariff disputes."
    },
    correctAnswer: "C",
    explanation: "Agricultural commodities (pulses, grains, oilseeds, sugar) are seasonal biological products. Their supply is highly inelastic in the short term, concentrated around harvest windows (Kharif and Rabi in India), subject to weather/monsoon disruptions, and constrained by perishability and warehousing. Industrial metals (copper, aluminum, zinc), by contrast, are extracted continuously year-round and driven primarily by industrial demand cycles.",
    optionExplanations: {
      A: "Incorrect. Macro interest rates affect holding carry costs but do not drive unique agri seasonal harvest price dips.",
      B: "Incorrect. Industrial capex drives base metals (copper, nickel) and energy, not agricultural commodity seasonality.",
      C: "Correct. Sowing/harvesting seasons, rainfall distribution, and storage limitations create pronounced agricultural price seasonality.",
      D: "Incorrect. Warehouse warrant cancellations are structural features of base metal trading on the London Metal Exchange."
    }
  },
  {
    id: "Q056",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Simple vs Exponential Moving Average Weighting",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "What is the primary mathematical difference between a Simple Moving Average (SMA) and an Exponential Moving Average (EMA) of identical period length (e.g., 20 days)?",
    options: {
      A: "SMA uses equal volume weighting, whereas EMA calculates exponential moving standard deviations across rolling periods.",
      B: "SMA incorporates trailing trading volume, whereas EMA tracks only opening prices without adjusting for volatility.",
      C: "SMA eliminates older prices after five sessions, whereas EMA retains equal weighting across all historical periods.",
      D: "SMA weights every observation equally, whereas EMA applies exponential multipliers giving higher weight to recent prices."
    },
    correctAnswer: "D",
    explanation: "A Simple Moving Average (SMA) calculates the unweighted arithmetic mean of price over N periods, assigning an identical 1/N weight to every day. An Exponential Moving Average (EMA) applies a smoothing multiplier [2 / (N + 1)], assigning exponentially higher weight to the most recent price data. Consequently, the EMA reacts faster to recent price changes and exhibits less lag than an SMA.",
    optionExplanations: {
      A: "Incorrect. Both indicators are typically calculated on closing prices, though both can be applied to open, high, low, or typical price.",
      B: "Incorrect. Neither SMA nor EMA tracks volume; both track closing prices across defined lookback periods.",
      C: "Incorrect. EMA never completely discards historical data; its influence simply decays asymptotically toward zero.",
      D: "Correct. An SMA assigns equal weight (1/N) to every observation, whereas an EMA applies exponential multipliers giving higher weight to recent prices."
    }
  },
  {
    id: "Q057",
    chapter: "Chapter 3 – Terminology in Equity and Debt Markets",
    topic: "Clean Price vs Dirty Price of a Bond",
    category: "Debt Markets",
    difficulty: 4, // Hard
    access: "locked",
    question: "When a corporate bond is traded between two coupon payment dates in the secondary debt market, the buyer pays the seller the 'Dirty Price'. What is the relationship between Clean Price, Accrued Interest, and Dirty Price?",
    options: {
      A: "Dirty Price = Clean Price + Accrued Interest",
      B: "Dirty Price = Clean Price - Accrued Interest",
      C: "Clean Price = Dirty Price + Accrued Interest",
      D: "Dirty Price = Clean Price × (1 - Yield to Maturity)"
    },
    correctAnswer: "A",
    explanation: "In fixed income markets: Clean Price is the quoted market price of the bond excluding interest accrued since the last coupon date. Accrued Interest is the coupon interest earned by the seller during the current coupon period. The Dirty Price (or Invoice Price/Settlement Price) paid by the buyer to the seller equals Clean Price + Accrued Interest.",
    optionExplanations: {
      A: "Correct. The settlement invoice price (Dirty Price) equals the quoted Clean Price plus interest accrued since the last coupon payment date.",
      B: "Incorrect. Accrued interest must be added to the clean price, not deducted.",
      C: "Incorrect. Reverses the relationship; clean price is the dirty price minus accrued interest.",
      D: "Incorrect. YTM determines discounted present value, but dirty price is a simple linear sum of clean price and accrued coupon."
    }
  },
  {
    id: "Q058",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Asset Turnover and Capital Efficiency",
    category: "Financial Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "A company has Total Assets of ₹5,000 million at the beginning of the year and ₹7,000 million at the end of the year. Its Net Revenue for the year is ₹18,000 million. What is the company's Total Asset Turnover ratio?",
    options: {
      A: "3.60x",
      B: "3.00x",
      C: "2.57x",
      D: "4.20x"
    },
    correctAnswer: "B",
    explanation: "Total Asset Turnover = Net Revenue ÷ Average Total Assets. Average Total Assets = (₹5,000m + ₹7,000m) ÷ 2 = ₹6,000m. Total Asset Turnover = ₹18,000m ÷ ₹6,000m = 3.00x.",
    optionExplanations: {
      A: "Incorrect. Uses opening assets only: ₹18,000m ÷ ₹5,000m = 3.60x.",
      B: "Correct. Average assets = (5,000 + 7,000) / 2 = 6,000. Turnover = 18,000 / 6,000 = 3.00x.",
      C: "Incorrect. Uses closing assets only: ₹18,000m ÷ ₹7,000m = 2.57x.",
      D: "Incorrect. Calculation error in denominator averaging."
    }
  },
  {
    id: "Q059",
    chapter: "Chapter 5 – Economic Analysis",
    topic: "Monetary Policy Transmission: CRR and Repo Rate",
    category: "Economic Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "When the Reserve Bank of India (RBI) raises both the Repo Rate and the Cash Reserve Ratio (CRR), what is the intended macroeconomic transmission mechanism?",
    options: {
      A: "To inject primary liquidity into commercial banks, stimulate corporate capex borrowing, and increase aggregate demand.",
      B: "To lower domestic bond yields, weaken the exchange rate of the Indian Rupee, and accelerate export expansion.",
      C: "To absorb systemic banking liquidity, elevate borrowing costs across the economy, and cool inflationary pressures.",
      D: "To reduce commercial bank capital adequacy ratios and expand statutory retail lending quotas."
    },
    correctAnswer: "C",
    explanation: "Raising the Repo Rate increases the cost at which banks borrow from the RBI, leading banks to increase lending and deposit rates. Raising the CRR obligates commercial banks to park a higher proportion of their net demand and time liabilities (NDTL) as cash reserves with the RBI, draining loanable liquidity from the banking system. Together, they tighten monetary conditions to rein in inflation.",
    optionExplanations: {
      A: "Incorrect. That describes monetary easing (rate cuts and CRR reductions), not policy tightening.",
      B: "Incorrect. Rate hikes increase bond yields and tend to attract capital inflows, strengthening the rupee rather than weakening it.",
      C: "Correct. Higher Repo Rate and CRR drain banking liquidity, raise corporate/consumer borrowing costs, and suppress inflation.",
      D: "Incorrect. CRR and Repo hikes do not alter statutory Basel capital adequacy framework formulas."
    }
  },
  {
    id: "Q060",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Stochastic Oscillator %K and %D",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "The Fast Stochastic Oscillator compares a security's closing price to its price range over a given time period. In standard configuration (14-period), what do %K and %D represent?",
    options: {
      A: "%K is the ratio of Volume to Open Interest; %D is the daily price change percentage.",
      B: "%K is the 200-day moving average; %D is the 2-standard-deviation envelope.",
      C: "%K is the 12-day EMA minus 26-day EMA; %D is the 9-day signal line.",
      D: "%K measures where the close sits relative to the 14-day High-Low range; %D is a 3-period moving average of %K."
    },
    correctAnswer: "D",
    explanation: "Developed by George Lane, the Stochastic Oscillator calculates %K = [(Close - Lowest Low_14) ÷ (Highest High_14 - Lowest Low_14)] × 100. %D is simply a 3-period moving average of %K, serving as the signal line. Crossovers between %K and %D in overbought (>80) or oversold (<20) zones generate trading signals.",
    optionExplanations: {
      A: "Incorrect. Stochastics uses price ranges, not open interest.",
      B: "Incorrect. Conflates Stochastics with Bollinger Bands.",
      C: "Incorrect. That describes the MACD indicator formula.",
      D: "Correct. %K plots the relative position of the close within the high-low range; %D is the 3-period smoothed moving average of %K."
    }
  },
  {
    id: "Q061",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "SEBI (Prohibition of Insider Trading) Regulations",
    category: "Regulation",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "Under the SEBI (Prohibition of Insider Trading) Regulations, 2015, which of the following scenarios constitutes an illegal transmission or trade based on Unpublished Price Sensitive Information (UPSI)?",
    options: {
      A: "An executive director informs their spouse about an unannounced multi-million-dollar acquisition, and the spouse purchases shares before public disclosure.",
      B: "An equity research analyst publishes a BUY rating based on publicly available annual reports and channel checks with dealer distributors.",
      C: "A portfolio manager rebalances mutual fund holdings based on a quantitative statistical arbitrage model using closing tick data.",
      D: "A listed company holds an earnings call open to all shareholders and analysts simultaneously to discuss published quarterly results."
    },
    correctAnswer: "A",
    explanation: "Under Regulation 3 and 4 of SEBI (PIT) Regulations, 2015: An insider who possesses Unpublished Price Sensitive Information (UPSI) is strictly prohibited from communicating, providing, or allowing access to UPSI, and no insider shall trade in securities when in possession of UPSI. Communicating unannounced M&A information to family members who trade constitutes illegal insider trading.",
    optionExplanations: {
      A: "Correct. Sharing non-public M&A details with a relative who trades on that information is a textbook insider trading violation under SEBI PIT Regulations.",
      B: "Incorrect. Conducting channel checks and analyzing public filings is legitimate mosaic research.",
      C: "Incorrect. Trading on quantitative models derived from public market data is fully permissible.",
      D: "Incorrect. Open investor conference calls disseminating published earnings ensure fair public disclosure."
    }
  },
  {
    id: "Q062",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Beta Interpretation and Negative Beta",
    category: "Risk and Return",
    difficulty: 4, // Hard
    access: "locked",
    question: "A specialized investment asset has a measured Beta (β) of -0.40 relative to the Nifty 50 Index. How will this asset typically perform during a market environment where the Nifty 50 declines by 10%?",
    options: {
      A: "It is expected to decline by 4.0%.",
      B: "It is expected to rise by approximately 4.0%.",
      C: "It is expected to decline by 40.0%.",
      D: "It is expected to remain exactly flat at 0.0% change."
    },
    correctAnswer: "B",
    explanation: "Beta measures the sensitivity and direction of an asset's returns relative to the benchmark index. Expected percentage change in asset = Beta × % Change in Market. Here: Expected Change = -0.40 × (-10%) = +4.0%. Assets with negative beta (such as gold or inverse hedging vehicles) move inversely to the market index.",
    optionExplanations: {
      A: "Incorrect. A negative beta produces returns in the opposite direction of the market; -0.4 × (-10%) = +4%.",
      B: "Correct. -0.40 × (-10%) = +4.0% gain during a 10% market drop.",
      C: "Incorrect. Multiplies 10% by 4 instead of 0.40.",
      D: "Incorrect. A zero beta asset has no correlation; a negative beta asset moves in the opposite direction."
    }
  },
  {
    id: "Q063",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Enterprise Value to EBITDA Multiple Calculation",
    category: "Valuation",
    difficulty: 3, // Medium
    access: "locked",
    question: "A company has a Market Capitalization of ₹15,000 million, Total Debt of ₹4,000 million, Cash & Liquid Equivalents of ₹1,000 million, and reports Annual EBITDA of ₹2,250 million. What is its EV/EBITDA multiple?",
    options: {
      A: "8.89x",
      B: "6.67x",
      C: "8.00x",
      D: "7.50x"
    },
    correctAnswer: "C",
    explanation: "Enterprise Value (EV) = Market Cap + Debt - Cash = ₹15,000m + ₹4,000m - ₹1,000m = ₹18,000 million. EV/EBITDA = ₹18,000m ÷ ₹2,250m = 8.0x.",
    optionExplanations: {
      A: "Incorrect. Failed to deduct cash from enterprise value: 20,000 ÷ 2,250 = 8.89x.",
      B: "Incorrect. Uses Market Cap alone: 15,000 ÷ 2,250 = 6.67x (that is MCap/EBITDA, not EV/EBITDA).",
      C: "Correct. EV = 15,000 + 4,000 - 1,000 = 18,000. EV/EBITDA = 18,000 / 2,250 = 8.00x.",
      D: "Incorrect. Calculation error in debt inclusion."
    }
  },
  {
    id: "Q064",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Continuation Patterns: Symmetrical Triangles",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "In technical pattern analysis, which of the following statements correctly describes the structural formation and trading volume behavior of a valid Symmetrical Triangle?",
    options: {
      A: "It features a horizontal upper resistance line and an upward-sloping lower trendline with volume expanding inside the apex.",
      B: "It is an immediate reversal pattern that signals a bear market regardless of prior trend context.",
      C: "It features a horizontal lower support line and a downward-sloping upper trendline with static volume.",
      D: "It consists of converging trendlines (lower highs and higher lows) with volume steadily diminishing as the price approaches the apex, followed by a surge in volume on breakout."
    },
    correctAnswer: "D",
    explanation: "A Symmetrical Triangle represents a period of consolidation where neither buyers nor sellers hold clear control, forming lower peaks and higher troughs that converge toward an apex. Trading volume characteristically contracts as the price range narrows toward the apex. A decisive breakout in either direction on expanding volume confirms continuation of the prevailing trend.",
    optionExplanations: {
      A: "Incorrect. A horizontal top and rising bottom describes an Ascending Triangle.",
      B: "Incorrect. Symmetrical triangles are typically continuation patterns, not guaranteed bear reversals.",
      C: "Incorrect. A horizontal bottom and declining top describes a Descending Triangle.",
      D: "Correct. Symmetrical triangles have converging trendlines with diminishing volume toward the apex, followed by volume expansion on breakout."
    }
  },
  {
    id: "Q065",
    chapter: "Chapter 7 – Company Analysis – Business and Governance",
    topic: "Economic Moat and Competitive Advantage",
    category: "Business Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "Which of the following sources of economic moat provides the STRONGEST protection against pricing erosion caused by new market entrants in consumer platform businesses?",
    options: {
      A: "Two-sided Network Effects, where the value of the platform to new users scales exponentially as the existing user base expands.",
      B: "Temporary promotional discounts and heavy equity-funded cash burn to acquire short-term gross merchandise value.",
      C: "Outsourcing production to low-cost third-party manufacturing facilities available to all competitors.",
      D: "Maintaining low corporate overhead through the absence of dedicated customer service departments."
    },
    correctAnswer: "A",
    explanation: "Network effects occur when a product or service becomes inherently more valuable as more people use it (e.g., payment networks, e-commerce marketplaces, social platforms). In a two-sided network effect, more buyers attract more merchants, and more merchants attract more buyers, creating a formidable self-reinforcing competitive barrier that new entrants cannot replicate simply by spending capital.",
    optionExplanations: {
      A: "Correct. Network effects create an exponential competitive moat that strengthens organically with user adoption, resisting competitive displacement.",
      B: "Incorrect. Cash-burn promotions create ephemeral transaction volume rather than a sustainable economic moat.",
      C: "Incorrect. Readily available outsourced manufacturing can be replicated by any competitor.",
      D: "Incorrect. Cutting customer service damages brand equity and customer retention."
    }
  },
  {
    id: "Q066",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "SEBI RA Qualification and Certification Mandates",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "locked",
    question: "Under Regulation 7 of SEBI (Research Analysts) Regulations, 2014, what is the mandatory professional qualification and certification required for an individual research analyst or research entity's partners/employees engaged in research preparation?",
    options: {
      A: "Any undergraduate degree without any statutory examination or certification requirement.",
      B: "A post-graduate degree or diploma in finance/business management (or professional qualification like CA/CFA/CS/CWA) AND NISM-Series-XV Research Analyst Certification.",
      C: "Only a valid active trading terminal license from a recognized national stock exchange.",
      D: "Ten years of proprietary algorithmic equity trading experience without formal academic requirements."
    },
    correctAnswer: "B",
    explanation: "Under Regulation 7 of SEBI (Research Analysts) Regulations, 2014: Research analysts, or partners/employees engaged in research preparation and recommendation, must possess: (i) A professional qualification or post-graduate degree/diploma in finance, accountancy, business management, commerce, economics, capital market, or banking; AND (ii) An active NISM-Series-XV: Research Analyst Certification (valid for 3 years).",
    optionExplanations: {
      A: "Incorrect. Undergraduate degree alone without professional qualification and NISM certification does not satisfy Regulation 7.",
      B: "Correct. Regulation 7 mandates a relevant post-graduate/professional qualification (CA/CFA/MBA) AND NISM Series XV certification.",
      C: "Incorrect. Exchange terminal licenses are for broker dealers, not research analyst statutory registration.",
      D: "Incorrect. Experience cannot waive the mandatory academic qualification and NISM certification requirements."
    }
  },
  {
    id: "Q067",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Depreciation Methods and Earnings Quality",
    category: "Financial Analysis",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "A company switches its accounting depreciation method from the Written Down Value (WDV) method to the Straight Line Method (SLM) on its manufacturing plant. How will this change typically impact reported Net Income and Cash Flow from Operations (CFO) in the early years of the assets' useful life?",
    options: {
      A: "Reported Net Income will decline, but Cash Flow from Operations will increase substantially.",
      B: "Both reported Net Income and Cash Flow from Operations will remain identical under accrual rules.",
      C: "Reported Net Income will be higher under SLM than under WDV, while actual Cash Flow from Operations (before tax effects) remains fundamentally unaffected.",
      D: "Cash Flow from Operations will turn negative due to accelerated non-cash tax amortization schedules."
    },
    correctAnswer: "C",
    explanation: "Under WDV, depreciation is front-loaded (higher depreciation expense in early years). Under SLM, depreciation is spread evenly across useful life. Switching from WDV to SLM reduces depreciation expense in the initial years, thereby boosting reported Net Income. However, because depreciation is a non-cash expense, operational cash collected from customers and paid to suppliers (CFO before tax) is fundamentally unchanged.",
    optionExplanations: {
      A: "Incorrect. SLM yields lower early-year depreciation, which increases net income, not reduces it.",
      B: "Incorrect. Net income changes significantly due to the lower accounting depreciation charge.",
      C: "Correct. Lower early-year depreciation under SLM inflates accounting net income, while operational cash generation remains unchanged.",
      D: "Incorrect. CFO does not turn negative due to an internal accounting policy change."
    }
  },
  {
    id: "Q068",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Average Directional Index (ADX) Trend Strength",
    category: "Technical Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "The Average Directional Index (ADX), developed by J. Welles Wilder, is used by technical analysts primarily to determine:",
    options: {
      A: "The precise future price target of a stock based on daily volume-weighted average price.",
      B: "The exact calendar date on which corporate earnings announcements will occur.",
      C: "Whether a company's shares are held primarily by foreign institutional investors or retail brokers.",
      D: "The strength of a prevailing price trend regardless of whether the trend is up or down."
    },
    correctAnswer: "D",
    explanation: "The ADX indicator measures the strength (velocity and persistence) of a trend on a scale from 0 to 100. Readings above 25 generally indicate a strong, tradeable trend, while readings below 20 indicate a weak, choppy, or non-trending rangebound market. Crucially, ADX is non-directional: it rises whether the underlying price trend is strongly bullish or strongly bearish.",
    optionExplanations: {
      A: "Incorrect. ADX does not calculate price targets; it quantifies trend strength.",
      B: "Incorrect. Corporate announcement dates are fundamental calendar events, not technical indicators.",
      C: "Incorrect. Shareholding patterns are fundamental disclosures, not technical indicator outputs.",
      D: "Correct. ADX quantifies the strength of a trend non-directionally; rising ADX indicates an intensifying trend (up or down)."
    }
  },
  {
    id: "Q069",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Price to Book (P/B) Ratio Application",
    category: "Valuation",
    difficulty: 3, // Medium
    access: "locked",
    question: "For which sector of the economy is the Price to Book Value (P/B) multiple considered the primary, most reliable valuation metric by research analysts?",
    options: {
      A: "Commercial Banks and Financial Services Institutions",
      B: "Pharmaceutical and Biotechnology Companies with heavy R&D expenditure",
      C: "Software-as-a-Service (SaaS) and Digital Consumer Internet Companies",
      D: "Advertising Agencies and Corporate Strategy Consulting Services"
    },
    correctAnswer: "A",
    explanation: "Banks and NBFCs hold assets (loans, advances, government securities) and liabilities (deposits, borrowings) that are predominantly marked-to-market financial contracts. Their book value reflects tangible economic equity value far more accurately than in service or tech firms, whose primary value drivers are intangible intellectual property, human capital, or network effects not capitalized on the balance sheet.",
    optionExplanations: {
      A: "Correct. Financial institutions hold mark-to-market liquid assets, making Book Value and P/B the gold standard for bank valuation.",
      B: "Incorrect. Pharma value resides in R&D pipelines and drug patents expensed on the P&L, depressing book value.",
      C: "Incorrect. SaaS and internet platforms rely on intangible technology and network moats, distorting P/B multiples.",
      D: "Incorrect. Consulting and ad agencies possess minimal physical balance sheet capital."
    }
  },
  {
    id: "Q070",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Sharpe Ratio Calculation",
    category: "Risk and Return",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "An equity portfolio achieves an annualized return of 16.5% with an annualized standard deviation (volatility) of 14.0%. The risk-free rate of return during the same period is 6.0%. What is the portfolio's Sharpe Ratio?",
    options: {
      A: "1.18",
      B: "0.75",
      C: "0.43",
      D: "1.46"
    },
    correctAnswer: "B",
    explanation: "Sharpe Ratio = (Portfolio Return Rp - Risk-Free Rate Rf) ÷ Portfolio Standard Deviation σp. Sharpe Ratio = (16.5% - 6.0%) ÷ 14.0% = 10.5% ÷ 14.0% = 0.75.",
    optionExplanations: {
      A: "Incorrect. Divided total return by standard deviation without subtracting risk-free rate (16.5 / 14 = 1.18).",
      B: "Correct. Sharpe Ratio = (16.5% - 6.0%) ÷ 14.0% = 10.5% ÷ 14.0% = 0.75.",
      C: "Incorrect. Inverted the ratio calculation.",
      D: "Incorrect. Added risk-free rate instead of subtracting it."
    }
  },
  {
    id: "Q071",
    chapter: "Chapter 2 – Introduction to Securities Market",
    topic: "Anchor Investors in IPO Book Building",
    category: "Securities Market",
    difficulty: 4, // Hard
    access: "locked",
    question: "Under SEBI (ICDR) Regulations, which of the following rules governs 'Anchor Investors' participating in an Indian public offering?",
    options: {
      A: "Anchor investors bid at any price below the floor price without lock-in obligations or investment minimums.",
      B: "Anchor investors are retail individuals investing above ₹2 lakh through non-institutional bidding categories.",
      C: "Anchor investors must apply for at least ₹10 crore from the QIB quota one day prior to issue opening with lock-in.",
      D: "Anchor investors are sovereign wealth funds authorized to acquire equity via bilateral government treaties."
    },
    correctAnswer: "C",
    explanation: "Under SEBI ICDR Regulations: Anchor Investors are Qualified Institutional Buyers (QIBs) who apply for a minimum of ₹10 crore in a public issue. Allocation is made on a discretionary basis on the day preceding the public issue opening date. Anchor investors provide confidence to other investors and are subject to mandatory lock-in periods (30 days for 50% and 90 days for the remaining 50%).",
    optionExplanations: {
      A: "Incorrect. Anchor investors cannot bid below the issue price or floor price and are subject to lock-in rules.",
      B: "Incorrect. Retail individuals cannot participate as anchor investors; anchors must be institutional QIBs.",
      C: "Correct. Minimum application is ₹10 crore, allocation occurs one day prior to issue open from the QIB quota, and lock-in periods apply.",
      D: "Incorrect. Any qualified institutional buyer (mutual funds, insurance companies, pension funds) can participate as an anchor."
    }
  },
  {
    id: "Q072",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Gaps: Breakaway, Runaway, and Exhaustion",
    category: "Technical Analysis",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "In technical price analysis, a price gap that occurs after a rapid, extended multi-month bull rally, characterized by euphoric public buying, extreme high volume, and followed within two to three trading sessions by a sharp reversal or gap-down in the opposite direction (forming an Island Reversal), is known as an:",
    options: {
      A: "Breakaway Gap, signaling a breakout from a base.",
      B: "Runaway Gap, signaling trend acceleration midway.",
      C: "Common Gap, occurring in quiet sideways markets.",
      D: "Exhaustion Gap, signaling impending termination."
    },
    correctAnswer: "D",
    explanation: "An Exhaustion Gap occurs near the very end of an extended trend. Driven by late-stage market euphoria or panic, prices make a dramatic final leap on massive volume. Because smart money has distributed and no fresh buyers remain, the move quickly stalls, and price reverses to fill the gap, often creating an Island Reversal top.",
    optionExplanations: {
      A: "Incorrect. A Breakaway Gap occurs at the beginning of a new trend breaking out of a major consolidation base.",
      B: "Incorrect. A Runaway or Measuring Gap occurs midway through an established, accelerating trend.",
      C: "Incorrect. Common gaps occur in quiet sideways trading ranges on low volume and carry no forecasting significance.",
      D: "Correct. An Exhaustion Gap forms at the climax of an extended trend on heavy volume, preceding an abrupt trend termination."
    }
  },
  {
    id: "Q073",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Quiet Period Post-IPO Under SEBI RA",
    category: "Regulation",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "Under the SEBI (Research Analysts) Regulations, 2014, when a research entity acts as a manager or underwriter in an Initial Public Offering (IPO), what 'Quiet Period' restriction applies to publishing research reports on that issuer?",
    options: {
      A: "The entity cannot publish reports or make public appearances regarding the issuer for 25 days from IPO allotment.",
      B: "The entity cannot publish reports or make public appearances regarding the issuer for 40 days following listing.",
      C: "The entity must publish reports immediately upon listing to provide public market liquidity and trade clarity.",
      D: "The entity cannot publish reports or make public appearances regarding the issuer for 3 years following the IPO."
    },
    correctAnswer: "A",
    explanation: "Under Regulation 17(1) of SEBI (Research Analysts) Regulations, 2014: A research analyst or research entity shall not publish or distribute a research report or make a public appearance regarding a subject company for which they have acted as a manager or co-manager in an initial public offering for a period of twenty-five (25) days from the date of allotment of securities in the IPO.",
    optionExplanations: {
      A: "Correct. Regulation 17(1) mandates a 25-day quiet period from the date of allotment of securities in an IPO for managers/underwriters.",
      B: "Incorrect. 40 days was an older US SEC threshold; SEBI explicitly mandates 25 days from allotment.",
      C: "Incorrect. Publishing immediately on listing violates the statutory quiet period.",
      D: "Incorrect. 3 years is completely unfounded; the statutory blackout is 25 days."
    }
  },
  {
    id: "Q074",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "EBITDA Margin vs PAT Margin Discrepancy",
    category: "Financial Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "Company Solar Power Ltd and Company Wind Energy Ltd both report an identical 40% EBITDA margin on ₹1,000 crore revenue. However, Solar Power Ltd reports a PAT margin of 18%, whereas Wind Energy Ltd reports a PAT margin of only 4%. What is the most plausible structural balance-sheet reason for this wide divergence in net profitability?",
    options: {
      A: "Wind Energy Ltd operates with zero debt leverage and zero fixed asset depreciation.",
      B: "Wind Energy Ltd carries significantly higher interest-bearing debt and heavy front-loaded depreciation from capitalized assets compared to Solar Power Ltd.",
      C: "Solar Power Ltd has higher cost of goods sold and vendor procurement expenses.",
      D: "Wind Energy Ltd enjoys lower corporate income tax rates under renewable incentive schemes."
    },
    correctAnswer: "B",
    explanation: "Because EBITDA is calculated before Interest, Taxes, Depreciation, and Amortization, two firms with identical EBITDA margins can have vastly different Profit After Tax (PAT) margins. If Wind Energy Ltd has financed its turbine assets with substantial bank borrowings (high interest expense) and has massive capitalized tangible assets (high depreciation charges), these non-operating and financing costs consume the operating profit, reducing net profit margin.",
    optionExplanations: {
      A: "Incorrect. Zero debt and depreciation would result in a very high PAT margin close to EBITDA, not a tiny 4% margin.",
      B: "Correct. Heavy interest expense from high debt and high depreciation charges from capitalized assets dramatically compress PAT relative to EBITDA.",
      C: "Incorrect. COGS affects gross profit and EBITDA; both companies have identical 40% EBITDA margins.",
      D: "Incorrect. Lower income taxes would increase Wind Energy's PAT margin, not compress it to 4%."
    }
  },
  {
    id: "Q075",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Volume Rate of Change and On Balance Volume (OBV)",
    category: "Technical Analysis",
    difficulty: 4, // Hard
    access: "locked",
    question: "On Balance Volume (OBV), developed by Joseph Granville, is calculated based on which of the following cumulative arithmetic rules?",
    options: {
      A: "Today's volume is multiplied by the high-low price range and divided by the 20-day moving average volume.",
      B: "Cumulative OBV rises only on trading days where trading volume exceeds the 50-day average volume by 20%.",
      C: "Volume is added on up-close days, subtracted on down-close days, and held unchanged on flat closing days.",
      D: "Volume is added on green candlestick days and halved when closing prices finish below the opening price."
    },
    correctAnswer: "C",
    explanation: "On Balance Volume (OBV) is a cumulative momentum indicator that relates volume to price change: (1) If Close_today > Close_yesterday: OBV_today = OBV_yesterday + Volume_today; (2) If Close_today < Close_yesterday: OBV_today = OBV_yesterday - Volume_today; (3) If Close_today == Close_yesterday: OBV_today = OBV_yesterday.",
    optionExplanations: {
      A: "Incorrect. OBV uses simple directional addition/subtraction, not price range multiplication.",
      B: "Incorrect. Volume thresholds do not dictate OBV calculation.",
      C: "Correct. OBV adds volume on up-close days, subtracts volume on down-close days, and holds constant on unchanged days.",
      D: "Incorrect. Arbitrary formula that does not match Granville's definition."
    }
  },
  {
    id: "Q076",
    chapter: "Chapter 10 – Valuation Principles",
    topic: "Enterprise Value to Capital Employed (ROCE) Link",
    category: "Valuation",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "A company consistently earns a Return on Capital Employed (ROCE) of 28% while its WACC is 11%. Over the last five years, it reinvested 60% of its operating profits into high-return internal capex projects. According to fundamental valuation theory, this company should trade at:",
    options: {
      A: "A steep discount to its book value because heavy cash reinvestment depresses near-term dividend distributions.",
      B: "A negative enterprise value because excessive internal capex commitments drain liquid working capital reserves.",
      C: "Parity at exactly 1.0x EV to Capital Employed regardless of whether return on capital exceeds cost of capital.",
      D: "A substantial premium over book value (EV/Capital Employed >> 1.0) as returns significantly exceed cost of capital."
    },
    correctAnswer: "D",
    explanation: "Economic Value Added (EVA) and corporate finance theory state that firm value is created when ROCE > WACC. When a company can reinvest large portions of its cash at a rate of return (28%) that substantially exceeds its cost of capital (11%), each rupee of reinvested capital generates positive Net Present Value (NPV). Consequently, market valuation accords a high premium multiple over invested capital.",
    optionExplanations: {
      A: "Incorrect. Reinvesting at 28% creates far greater intrinsic value than paying out dividends to investors whose hurdle rate is only 11%.",
      B: "Incorrect. Economic profit generation leads to high positive enterprise value, not negative value.",
      C: "Incorrect. EV/Capital Employed equals 1.0x only when ROCE equals WACC.",
      D: "Correct. When ROCE significantly exceeds WACC, reinvested growth compounds economic value, driving EV/Capital Employed well above 1.0x."
    }
  },
  {
    id: "Q077",
    chapter: "Chapter 14 – Legal and Regulatory Environment",
    topic: "Public Appearances and Media Commentaries by RA",
    category: "Regulation",
    difficulty: 4, // Hard
    access: "locked",
    question: "When an independent research analyst appears on television or public digital media to express a recommendation on a listed security, what mandatory disclosure must the analyst make during or alongside that public appearance under SEBI regulations?",
    options: {
      A: "The analyst must disclose whether they or their relatives hold a financial interest in the subject security, and any material conflict of interest.",
      B: "The analyst must disclose their entire lifetime personal net worth and tax filing history.",
      C: "The analyst must disclose their confidential client trade book and retail subscriber phone numbers.",
      D: "No disclosures are required for media commentary because public broadcasts are exempt under press freedom laws."
    },
    correctAnswer: "A",
    explanation: "Under Regulation 19(2) of SEBI (Research Analysts) Regulations, 2014: Any research analyst who makes a public appearance on television, radio, or electronic digital media must disclose during such appearance whether they, their associate, or their relative has any financial interest in the subject company, and the nature of such interest, as well as any other material conflict of interest.",
    optionExplanations: {
      A: "Correct. Regulation 19(2) strictly requires disclosing financial interest, beneficial holding, and material conflicts of interest during public media appearances.",
      B: "Incorrect. Personal net worth and tax history are confidential and not required disclosures.",
      C: "Incorrect. Client trading books are confidential records protected under client privacy standards.",
      D: "Incorrect. Media commentaries on securities are strictly subject to SEBI RA regulations; there is no press exemption."
    }
  },
  {
    id: "Q078",
    chapter: "Chapter 15 – Technical Analysis",
    topic: "Support and Resistance with Trendlines",
    category: "Technical Analysis",
    difficulty: 3, // Medium
    access: "locked",
    question: "To construct a valid and reliable upward (bullish) trendline in classical technical analysis, an analyst must connect at least:",
    options: {
      A: "Two or more successively lower reaction highs (peaks) across the price chart.",
      B: "Two or more successively higher reaction lows (troughs), with a third test confirming validity.",
      C: "The opening prices of the first trading session of every consecutive month.",
      D: "The daily closing price and the 200-day exponential moving average midpoint."
    },
    correctAnswer: "B",
    explanation: "In technical analysis: An upward (bullish) trendline is drawn beneath price action by connecting successively higher reaction lows (troughs). Two points define a tentative trendline, while a third bounce from the line confirms its technical validity as dynamic support. Conversely, a downward trendline is drawn above price action connecting lower highs.",
    optionExplanations: {
      A: "Incorrect. Connecting lower highs defines a downward (bearish) trendline, not an upward trendline.",
      B: "Correct. An upward trendline connects successively higher troughs (reaction lows); a third test provides technical confirmation.",
      C: "Incorrect. Trendlines are drawn along actual swing inflection points, not calendar days.",
      D: "Incorrect. Trendlines connect price swings directly rather than moving average midpoints."
    }
  },
  {
    id: "Q079",
    chapter: "Chapter 8 – Company Analysis – Financial Analysis",
    topic: "Free Cash Flow to Equity (FCFE) Calculation",
    category: "Financial Analysis",
    difficulty: 5, // Very Hard
    access: "locked",
    question: "A company provides the following financial figures for the fiscal year: • Net Income = ₹1,200 million • Non-Cash Depreciation & Amortization = ₹300 million • Capital Expenditures (Capex) = ₹500 million • Investment in Non-Cash Net Working Capital (ΔNWC) = ₹150 million • New Debt Issued = ₹400 million • Debt Repaid = ₹250 million. What is the Free Cash Flow to Equity (FCFE)?",
    options: {
      A: "₹850 million",
      B: "₹1,150 million",
      C: "₹1,000 million",
      D: "₹700 million"
    },
    correctAnswer: "C",
    explanation: "FCFE = Net Income + Non-Cash Expenses - Capex - ΔNWC + Net Borrowing. Net Borrowing = New Debt Issued (₹400m) - Debt Repaid (₹250m) = +₹150 million. FCFE = ₹1,200m + ₹300m - ₹500m - ₹150m + ₹150m = ₹1,000 million.",
    optionExplanations: {
      A: "Incorrect. Forgot to add net borrowing (+₹150m): 850 + 150 = 1,000.",
      B: "Incorrect. Subtracted depreciation instead of adding it back to net income.",
      C: "Correct. Net Income (1200) + Depr (300) - Capex (500) - ΔNWC (150) + Net Borrowing (150) = ₹1,000 million.",
      D: "Incorrect. Deducted gross debt issued and debt repaid."
    }
  },
  {
    id: "Q080",
    chapter: "Chapter 12 – Fundamentals of Risk and Return",
    topic: "Treynor Ratio Calculation",
    category: "Risk and Return",
    difficulty: 4, // Hard
    access: "locked",
    question: "Portfolio Alpha generates an average annualized return of 18.0% with a portfolio beta of 1.20 and a standard deviation of 20.0%. If the risk-free rate is 6.0%, what is Portfolio Alpha's Treynor Ratio?",
    options: {
      A: "0.60",
      B: "12.00%",
      C: "15.00%",
      D: "10.00%"
    },
    correctAnswer: "D",
    explanation: "The Treynor Ratio measures excess return per unit of systematic risk: Treynor Ratio = (Rp - Rf) ÷ Beta. Here: Rp = 18.0%, Rf = 6.0%, Beta = 1.20. Treynor Ratio = (18.0% - 6.0%) ÷ 1.20 = 12.0% ÷ 1.20 = 10.00% (or 0.10).",
    optionExplanations: {
      A: "Incorrect. 0.60 is the Sharpe Ratio: (18% - 6%) / 20% = 0.60.",
      B: "Incorrect. 12.00% is merely the excess return (18% - 6%), forgetting to divide by Beta.",
      C: "Incorrect. Divided 18% by 1.20 without deducting the risk-free rate.",
      D: "Correct. Treynor Ratio = (18.0% - 6.0%) / 1.20 = 12.0% / 1.20 = 10.00%."
    }
  }
];
