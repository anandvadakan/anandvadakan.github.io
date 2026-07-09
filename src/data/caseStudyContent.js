const ASSETS = '/Portfolio/case-study-assets'

// Each fullForm is an array of blocks: { type: 'heading'|'text'|'image', text?, src?, alt? }
// This mirrors the exact document structure including image positions.

export const caseStudyContent = [
  {
    slug: 'flexcancel-revenue-system',
    title: 'Turning Cancellations Into a Revenue System',
    hook: 'What if a cancelled order could make the platform more money than a completed one?',
    tag: 'Operations',
    accentColor: '#2d6a4f',
    tagColor: '#d8f3dc',

    shortForm: `Food delivery platforms treat order cancellations as a cost of doing business. They shouldn't.

Every cancelled order represents three simultaneous failures: revenue leakage for the platform, wasted food and effort for the restaurant, and a rigid penalty experience that frustrates the customer. Current platforms respond with a binary policy - either full refund or full charge - which satisfies no one and recovers nothing.

The real insight is that most cancellations happen within the first 60 to 90 seconds of placing an order. This is not intentional churn. This is decision friction. Treating a 10-second mis-click the same as a 10-minute cancellation is commercially wasteful and operationally lazy.

When food does get prepared and then cancelled, it becomes dead inventory. No platform has built a serious system to recover value from that inventory. That is the gap.

This case study proposes two interconnected systems - FlexCancel (a time-staged cancellation policy) and HotDrop (a real-time recovery marketplace for cancelled prepared orders) - that together convert a pure cost event into a demand generation channel.`,

    fullForm: [
      { type: 'heading', text: 'Turning Cancellations Into a Revenue System' },
      { type: 'text', text: 'A concept focused on transforming food delivery order cancellations into a structured revenue recovery system. It aims to reduce waste and recover lost income through strategic operational improvements, turning a common loss point into an opportunity for efficiency and added value.' },
      { type: 'image', src: `${ASSETS}/flexcancel-1.jpeg`, alt: 'Frustrated person reviewing documents at a laptop - representing the problem of unresolved cancellation friction' },
      { type: 'text', text: "Food delivery platforms treat order cancellations as a cost of doing business. They shouldn't." },
      { type: 'text', text: 'Every cancelled order represents three simultaneous failures: revenue leakage for the platform, wasted food and effort for the restaurant, and a rigid penalty experience that frustrates the customer. Current platforms respond with a binary policy - either full refund or full charge - which satisfies no one and recovers nothing.' },
      { type: 'text', text: 'The real insight is that most cancellations happen within the first 60 to 90 seconds of placing an order. This is not intentional churn. This is decision friction. The customer didn\'t mean to cancel - they mis-clicked, changed their mind in the moment, or second-guessed the order. Treating this the same as a cancellation at the 10-minute mark is both commercially wasteful and operationally lazy.' },
      { type: 'text', text: 'At the same time, when food does get prepared and then cancelled, it becomes dead inventory. No platform has built a serious system to recover value from that inventory. That is the gap.' },
      { type: 'heading', text: 'Why now' },
      { type: 'text', text: 'Platforms are beginning to experiment with discounted cancelled food. Regulators in multiple markets have launched probes into cancellation policies following waves of consumer complaints. The window to build this proactively - before regulation forces a worse version of it - is open right now.' },
      { type: 'heading', text: 'The solution: FlexCancel + HotDrop' },
      { type: 'text', text: 'Two interconnected systems, not two separate features.' },
      { type: 'subheading', text: 'System 1 - FlexCancel: Adaptive Buffer Cancellation (ABC)' },
      { type: 'image', src: `${ASSETS}/flexcancel-2.jpeg`, alt: 'FlexCancel: Adaptive Buffer Cancellation three-stage model - Stage 1 (0-60s) full cancellation allowed, Stage 2 (60-120s) 50% fee, Stage 3 (120s+) full charge, with compliance mechanism diagram' },
      { type: 'subheading', text: 'System 2 - HotDrop: Cancelled Order Recovery Engine' },
      { type: 'text', text: 'When a prepared order is cancelled at Stage 2 or Stage 3, it does not become waste. It enters a real-time recovery marketplace.' },
      { type: 'text', text: 'Nearby users within a 2km radius in high-density urban zones during peak hours see a time-sensitive deal with an expiry window of 10 to 12 minutes.' },
      { type: 'text', text: 'Pricing structure: HotDrop deals are structured as platform and delivery fee waivers, not food price reductions. The price a customer pays on a delivery app is a composite of restaurant markup, platform commission, delivery fees, packaging, and GST. No single party captures significant margin per order, which means discounting the food price directly would hurt restaurant margins that are already thin. Instead, the HotDrop buyer gets a meaningful saving through waived platform and delivery fees, while the restaurant\'s margin stays intact.' },
      { type: 'text', text: 'Off-peak or low-density scenarios where HotDrop demand is unlikely default to food donation partnerships or restaurant recovery credit instead.' },
      { type: 'heading', text: 'HotDrop as a margin expansion mechanism' },
      { type: 'text', text: 'Together, these levers mean HotDrop generates platform margin that didn\'t exist before the cancellation occurred. The cancelled order stops being a cost event and becomes a demand generation channel.' },
      { type: 'text', text: 'HotDrop is not a loss-recovery feature. It is a margin expansion mechanism. Three levers drive this:' },
      { type: 'text', text: 'Retained delivery infrastructure: The delivery partner assigned to the original order completes the HotDrop trip, eliminating new assignment cost. Partner compensation is funded through the cancellation fee collected from the original customer, converting an otherwise lost payout into a completed, compensated delivery event.' },
      { type: 'text', text: "Subscription upsell trigger: The HotDrop deal notification is a high-intent moment to convert deal-seeking users into platform subscribers. A platform's premium membership tier can offer HotDrop early access and free delivery as a feature, converting one-time deal buyers into recurring, higher-margin subscribers." },
      { type: 'text', text: 'New customer introduction fee: When a HotDrop buyer is a first-time customer for that restaurant, the platform charges the restaurant a new customer introduction fee on that conversion at zero acquisition cost to either party.' },
      { type: 'heading', text: "Operations dashboard - what you'd track" },
      { type: 'text', text: 'Monitor cancellations, revenue recovery, compliance, and HotDrop performance to optimize operations and growth. Use a tiered abuse detection system and targeted A/B tests to balance user experience, prevent misuse, and improve conversions.' },
      { type: 'image', src: `${ASSETS}/flexcancel-3.jpeg`, alt: 'Operations dashboard showing cancellation rates by stage, HotDrop revenue recovery (79% recovered), 87% restaurant compliance rate, 18.6% HotDrop conversion rate, abuse detection system, and A/B experiments' },
      { type: 'heading', text: 'Expected impact' },
      { type: 'text', text: 'Impact projections are directional estimates pending A/B validation - actual rates will vary by city density, cuisine type, and peak vs off-peak distribution.' },
      { type: 'text', text: 'Base case: 15-25% reduction in cancellations; 25-40% recovery of cancelled order value; 3-5% improvement in contribution margin.' },
      { type: 'text', text: 'Best case: 25% reduction in cancellations; 40% recovery rate; 6-8% margin lift; measurable subscription conversion uplift from HotDrop notifications.' },
      { type: 'text', text: 'Primary risk: Cancellation window abuse by high-frequency users.' },
      { type: 'text', text: 'Mitigation: Two-layer detection system - 7-day rolling flag plus 30-day cumulative threshold.' },
      { type: 'heading', text: 'Strategic reframe' },
      { type: 'text', text: "Cancellations today largely act as a cost centre, with limited scope for recovery. What approaches like FlexCancel and HotDrop attempt to explore is whether they can be treated as a more controllable, partially monetisable operational lever." },
      { type: 'text', text: 'If designed thoughtfully, this could not only help reduce losses but also open up additional possibilities such as enabling a demand generation channel, creating moments for subscription conversion, and supporting restaurants in acquiring new customers.' },
      { type: 'text', text: 'In essence, it reflects a shift from purely reactive policies toward more system-driven thinking, where existing inefficiencies are gradually reshaped into opportunities for value creation.' },
      { type: 'divider' },
      { type: 'closing', text: "These case studies were built without access to internal data, engineering resources, or a product team. What I had was a clear view of where systems were misaligned, who was absorbing costs they shouldn't, and what a structurally correct solution could look like." },
    ],

    execution: {
      brd: {
        title: 'Business Requirements Document',
        subtitle: 'FlexCancel + HotDrop - Adaptive Cancellation & Recovery Engine',
        coming: false,
        sections: [
          {
            heading: 'Business Context',
            body: `Food delivery platforms currently treat order cancellations as an unavoidable cost. The cancellation rate on most platforms ranges between 8-15% of total orders. Each cancellation results in full refund issuance, partial or no restaurant compensation, unrecovered delivery partner costs, and food waste with no recovery mechanism.\n\nThis document defines the business requirements for a two-part system - FlexCancel and HotDrop - that converts cancellations from a cost event into a recoverable, partially monetisable operation.`,
          },
          {
            heading: 'Business Objectives',
            body: `1. Reduce total cancellation rate by 15-25% within 6 months of full rollout.\n2. Recover 25-40% of cancelled order value through HotDrop or alternative recovery channels.\n3. Improve platform contribution margin by 3-5 percentage points on affected order cohort.\n4. Generate measurable subscription conversion uplift from HotDrop notification touchpoints.\n5. Reduce food waste from cancelled orders by at least 20% in pilot cities.`,
          },
          {
            heading: 'Stakeholders',
            body: `Primary: Platform operations team (owns cancellation policy and P&L), product team (owns cancellation flow UX).\n\nSecondary: Restaurant partners (affected by cancellation rates and compensation policy), delivery partners (affected by trip completion rates and compensation), finance (affected by refund liability and margin).`,
          },
          {
            heading: 'Business Requirements: FlexCancel',
            body: `BR-FC-01: The platform must replace the single-state cancellation policy with a time-staged model of at minimum three stages.\n\nBR-FC-02: Stage boundaries must be configurable by the operations team without an engineering release (via ops dashboard).\n\nBR-FC-03: The system must send a real-time signal to the restaurant at Stage 1 to delay preparation start, minimising food waste on early cancellations.\n\nBR-FC-04: Cancellation fees collected must be attributed to a defined recovery pool, with allocation split between delivery partner compensation and HotDrop subsidy defined in policy.\n\nBR-FC-05: The abuse detection system must trigger flags at the 7-day and 30-day windows and automatically adjust the cancellation buffer for flagged users without manual intervention.`,
          },
          {
            heading: 'Business Requirements: HotDrop',
            body: `BR-HD-01: When an order enters Stage 2 or Stage 3 cancellation, the system must automatically evaluate whether a HotDrop recovery event is viable based on: geographic density (minimum addressable user radius), time of day (peak/off-peak), and cuisine type (perishability proxy).\n\nBR-HD-02: If HotDrop viability criteria are met, a time-bound recovery listing must be created and surfaced to nearby eligible users within 3 minutes of cancellation confirmation.\n\nBR-HD-03: HotDrop pricing must be structured as fee waivers, not food price reductions, to protect restaurant margin.\n\nBR-HD-04: The original assigned delivery partner must be given priority assignment on the HotDrop trip. If unavailable, standard dispatch rules apply.\n\nBR-HD-05: HotDrop conversions involving a first-time customer for that restaurant must trigger a new customer introduction fee payable by the restaurant.\n\nBR-HD-06: If HotDrop viability criteria are not met, the system must default to pre-configured fallback options (food donation partner dispatch or restaurant recovery credit).`,
          },
          {
            heading: 'Out of Scope',
            body: `- Changes to restaurant-side order acceptance flow.\n- Cross-platform HotDrop listings (HotDrop is platform-internal only).\n- Real-time food perishability tracking (cuisine-type proxy used instead).\n- Refund dispute resolution workflow (separate workstream).`,
          },
          {
            heading: 'Success Metrics',
            body: `Overall cancellation rate: Baseline ~12% → Target <9% (6 months)\nStage 1 cancellation share: Baseline ~70% → Target >80%\nHotDrop conversion rate: - → Target 15-20%\nRevenue recovered per cancelled order: ₹0 → Target ₹40-80\nContribution margin on affected cohort: Baseline → Target +3-5pp\nAbuse flag rate: - → Target <2% of users`,
          },
        ],
      },
      frd: {
        title: 'Functional Requirements Document',
        coming: true,
        sections: [],
      },
      abTest: {
        title: 'A/B Test Design',
        coming: false,
        sections: [
          {
            heading: 'Test 1: Buffer Window Duration',
            body: `Hypothesis: A 90-second Stage 1 buffer (vs. the default 60-second) will reduce overall cancellation rates without meaningfully increasing restaurant prep waste, because the additional 30 seconds resolves more genuine decision friction cases.\n\nControl: 60-second Stage 1 buffer.\nVariant: 90-second Stage 1 buffer.\n\nPrimary metric: Overall cancellation rate (7-day window post-exposure).\nSecondary metrics: Stage 1 vs Stage 2 cancellation split; restaurant prep-start-before-60s rate; customer satisfaction score on cancelled orders.\n\nGuardrail metrics: Restaurant TAT compliance rate (must not degrade >2pp); delivery partner wait time at restaurant.\n\nSegment: New users only in first two weeks (lower abuse risk baseline). Expand to full cohort on positive signal.\n\nExpected duration: 3 weeks minimum for statistical significance at 80% power, assuming 5% baseline cancellation rate and MDE of 15% relative reduction.`,
          },
          {
            heading: 'Test 2: HotDrop Notification Format',
            body: `Hypothesis: A push notification for HotDrop deals will drive higher conversion than an in-app banner, because it reaches users who are not currently in the app.\n\nControl: In-app banner surfaced to users who open the app within the HotDrop window.\nVariant: Push notification sent to eligible nearby users regardless of app state.\n\nPrimary metric: HotDrop deal conversion rate (click to order).\nSecondary metrics: App open rate from push; opt-out rate from HotDrop push notifications; subscription upsell rate from HotDrop touchpoint.\n\nGuardrail metrics: Push notification opt-out rate must stay below 3% lift vs baseline.\n\nTargeting: Users within 2km radius, opted-in to push notifications, peak hours only in Phase 1.\n\nExpected duration: 2 weeks with minimum 500 HotDrop events per arm.`,
          },
          {
            heading: 'Test 3: HotDrop Incentive Structure',
            body: `Hypothesis: Fee waiver plus loyalty points will drive higher HotDrop conversion and repeat ordering than fee waiver alone, because points create a reason to return beyond the immediate deal.\n\nControl: Fee waiver only (platform + delivery fee waived).\nVariant: Fee waiver + 2x loyalty points on HotDrop order.\n\nPrimary metric: HotDrop conversion rate.\nSecondary metrics: 30-day reorder rate from HotDrop buyers; subscription conversion rate from HotDrop touchpoint; average order value on HotDrop vs standard orders.\n\nGuardrail metrics: Points liability cost must not exceed 60% of fee waiver value recovered.\n\nExpected duration: 4 weeks to capture 30-day reorder signal.`,
          },
          {
            heading: 'Test Prioritisation and Run Order',
            body: `Tests 1 and 2 can run concurrently across non-overlapping user segments. Test 3 runs after Test 2 concludes - it builds on the confirmed notification format from Test 2 to isolate incentive structure as the only variable.\n\nAll tests require pre-registration of primary metric, power calculation sign-off, and ops dashboard alert thresholds set before launch.`,
          },
        ],
      },
    },
  },

  {
    slug: 'hotdrop-recovery',
    title: 'Designing Accountability into Delays',
    hook: 'The delivery partner got a 1-star review for a delay caused by the restaurant. No platform has fixed this.',
    tag: 'Operations',
    accentColor: '#2d6a4f',
    tagColor: '#d8f3dc',

    shortForm: `When food arrives late, the customer is angry. They leave a one-star review. The delivery partner receives it. But the delivery partner was waiting outside the restaurant for 22 minutes while the kitchen ran behind. They had nothing to do with the delay.

This is the most structurally unfair dynamic in food delivery operations - and no platform has fixed it, because fixing it requires attributing blame correctly, which requires data discipline and willingness to hold restaurants accountable.

This case study proposes a three-layer delay accountability framework: a data-derived prep-time baseline for every restaurant (not self-declared), a proactive compensation system that issues credits before customers complain, and a delivery partner rating protection layer that freezes scores when delays are provably restaurant-origin.

The result is a system where every stakeholder's incentive is aligned with the outcome that matters - food delivered on time, accurately, with dignity for everyone in the chain.`,

    fullForm: [
      { type: 'heading', text: 'Designing Accountability into Delays' },
      { type: 'text', text: 'A practical take on delay accountability in food delivery, this framework explores how unclear ownership of late orders impacts customer trust, unit economics, and operational efficiency.' },
      { type: 'heading', text: 'The Delay Accountability Framework' },
      { type: 'image', src: `${ASSETS}/delays-1.jpeg`, alt: 'Food delivery illustration: customer with chat, rider on scooter with map, and delivery handoff at door' },
      { type: 'text', text: 'When food arrives late, the customer is angry. They leave a one-star review. The delivery partner receives it. But the delivery partner was waiting outside the restaurant for 22 minutes while the kitchen ran behind. They had nothing to do with the delay.' },
      { type: 'text', text: 'This is the most structurally unfair dynamic in food delivery operations - and no platform has fixed it, because fixing it requires attributing blame correctly, which requires data discipline and willingness to hold restaurants accountable.' },
      { type: 'text', text: 'The price a customer pays on a delivery app is a composite of restaurant markup, platform commission, delivery fees, packaging, and GST. No single party captures significant margin on every order - which means delay compensation costs need to be attributed precisely rather than absorbed by the platform alone. This is exactly why a liability split model matters. Currently the customer and the delivery partner bear the full consequence of failures that originate elsewhere in the chain.' },
      { type: 'text', text: 'This case study proposes a system that redistributes delay accountability to where the failure actually originated.' },
      { type: 'heading', text: 'Root causes of delivery delay' },
      { type: 'text', text: 'Not all delays are the same. The system must distinguish between three types.' },
      { type: 'text', text: "Type 1 - Restaurant prep overrun: Kitchen is behind. Food is not ready when the partner arrives. This is the restaurant's failure." },
      { type: 'text', text: "Type 2 - Partner assignment delay: Platform cannot find an available delivery partner in time. This is the platform's operational failure." },
      { type: 'text', text: 'Type 3 - External delay: Traffic, weather, accident. Neither party is at fault.' },
      { type: 'text', text: 'Current platforms treat all three identically. The customer sees one message: "Your order is on the way." This opacity is what generates the most frustration - not the delay itself, but the silence around it.' },
      { type: 'divider' },
      { type: 'heading', text: 'The solution: Three-layer delay accountability system' },
      { type: 'subheading', text: 'Layer 1 - Prep time baseline (the foundation)' },
      { type: 'text', text: 'Every restaurant, for every item, has a rolling 30-day median preparation time tracked by the platform. This is not self-declared. It is derived from actual data - time between order confirmation and partner pickup, segmented by item type and day-part.' },
      { type: 'text', text: "Why day-part matters: A restaurant's median prep time at 2pm on a Tuesday is meaningfully different from 8pm on a Saturday. Baseline calculations are segmented by peak and off-peak periods to ensure restaurants are measured against a fair, contextually accurate standard, not a flat average that ignores operational reality." },
      { type: 'text', text: "A specific dish at a specific restaurant has a rolling median prep time. If that order is not ready for pickup beyond the baseline threshold, the delay clock starts. This baseline is the source of truth. Restaurants cannot inflate it because they do not control it - it is derived from their own historical performance data." },
      { type: 'subheading', text: 'Layer 2 - Proactive delay compensation (the customer experience fix)' },
      { type: 'text', text: 'When the prep baseline is exceeded, the platform proactively compensates the customer without waiting for a complaint.' },
      { type: 'text', text: 'Minutes 0 to 5 beyond baseline: The platform absorbs a small credit for this delay window. This acts as a buffer layer to protect customer experience from minor inefficiencies. The cost is negligible relative to per-order economics, but the signal it sends is critical - the platform acknowledges the delay before the customer is forced to react.' },
      { type: 'text', text: "Minutes 5 and beyond: The restaurant absorbs the compensation cost. For every additional 5 minutes of delay, a defined credit amount is issued to the customer and deducted from the restaurant's monthly payout. This creates a direct financial consequence - not a warning, not a rating impact, but a monetary penalty tied to operational performance." },
      { type: 'text', text: 'The liability split by delay type:' },
      { type: 'image', src: `${ASSETS}/delays-2.png`, alt: 'Liability split table: Restaurant prep overrun - Platform absorbs first 5 minutes, Restaurant absorbs all delays beyond 5 minutes; Partner assignment delay - Platform absorbs fully; External delay - Platform absorbs fully' },
      { type: 'text', text: "This distinction is what makes the system defensible. Restaurants will push back. The response is simple: the prep baseline is derived from the restaurant's own historical performance, segmented by day-part. If that baseline is exceeded, the delay is operational, not external, and therefore attributable to the restaurant." },
      { type: 'subheading', text: 'Layer 3 - Delivery partner protection (the human fix)' },
      { type: 'text', text: "When a delay is tagged as restaurant prep overrun in the system, the delivery partner's rating for that order is frozen. It does not count toward their performance score. The customer can still leave a review, but it is flagged and excluded from the partner's aggregate rating." },
      { type: 'text', text: "This is not a courtesy. It is a data correction. The partner did not cause the delay. Including their rating in the performance system when they were a passive victim of the restaurant's failure is a measurement error, not a policy choice." },
      { type: 'heading', text: 'Restaurant accountability: The TAT compliance program' },
      { type: 'text', text: 'Parallel to the compensation system, restaurants are tracked on TAT (turnaround time) compliance and placed into performance tiers. Tier placement is reviewed monthly.' },
      { type: 'image', src: `${ASSETS}/delays-3.jpeg`, alt: "Performance tiers: Platinum (>90% compliance) gets Verified Kitchen badge and priority search placement; Gold (80-90%) gets 1% commission rebate; Standard (70-80%) baseline; At-Risk (<70%) gets deprioritised in search and delay label on listing. Peak hour performance is weighted 2x." },
      { type: 'divider' },
      { type: 'heading', text: "The 'staying listed during a rush' accountability gap" },
      { type: 'text', text: 'Right now there is zero financial cost for a restaurant to remain listed on a delivery platform during a Saturday dinner rush while every dine-in table is already occupied. They stay listed, accept delivery orders, fall behind on prep, and the customer and delivery partner pay the price.' },
      { type: 'text', text: 'The TAT Compliance Program changes this calculus. If staying listed during a dine-in rush causes prep overruns that trigger compensation deductions and badge downgrades, the restaurant now has a direct financial reason to manage their availability honestly.' },
      { type: 'text', text: 'The platform should make this easier - a one-tap "pause orders" button prominently placed in the restaurant dashboard, with suggested pause triggers based on current order volume vs historical capacity. The system should work with restaurants, not just penalise them.' },
      { type: 'divider' },
      { type: 'heading', text: 'What this system changes' },
      { type: 'text', text: 'Before this system: Customer waits. Gets no information. Complains after delivery. Takes frustration out on the delivery partner who had no fault. Receives credit as an apology. Feels unheard. Orders less frequently.' },
      { type: 'text', text: 'After this system: Customer receives a transparent delay message with attribution before they complain. Automatic credit is issued proactively. Delivery partner\'s rating is protected from a failure they didn\'t cause. Restaurant faces a real financial consequence tied directly to their operational performance. Platform has a structural incentive to improve ETA accuracy because it absorbs the first 5 minutes of every restaurant delay.' },
      { type: 'text', text: "Every stakeholder's incentive is now aligned with the outcome that matters: food delivered on time, accurately, with dignity for everyone in the chain." },
      { type: 'divider' },
      { type: 'heading', text: 'Operations metrics to track' },
      { type: 'image', src: `${ASSETS}/delays-4.jpeg`, alt: 'Metrics dashboard: (1) Delay attribution breakdown by type - restaurant 52%, platform 23%, external 25%; (2) Average compensation paid per order by restaurant tier and delay type; (3) TAT compliance rate by restaurant, city, time slot and day-part; (4) Delivery partner rating accuracy comparing frozen vs non-frozen ratings; (5) Tier movement month-on-month; (6) Pause orders button usage rate; (7) Customer reorder rate post-delay; (8) Platform credit cost per delayed order vs customer lifetime value retained' },
      { type: 'heading', text: 'Strategic reframe' },
      { type: 'text', text: 'This is less about customer service and more about aligning how costs are handled across the system.' },
      { type: 'text', text: 'Today, delay-related costs are often spread across customers and delivery partners, despite limited margins for each stakeholder. The idea here is to bring more structure, so costs are addressed closer to where they originate, improving clarity and accountability.' },
      { type: 'text', text: 'If done well, this can naturally strengthen trust and improve overall system performance. When each part of the chain is better aligned with the impact it creates, the system becomes more efficient and sustainable.' },
      { type: 'divider' },
      { type: 'closing', text: "These case studies were built without access to internal data, engineering resources, or a product team. What I had was a clear view of where systems were misaligned, who was absorbing costs they shouldn't, and what a structurally correct solution could look like." },
    ],

    execution: {
      brd: { title: 'Business Requirements Document', coming: true, sections: [] },
      frd: { title: 'Functional Requirements Document', coming: true, sections: [] },
      abTest: { title: 'A/B Test Design', coming: true, sections: [] },
    },
  },
]
