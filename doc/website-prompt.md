
# Build BEBA AI Website

## Project Overview
Build a professional, interactive, and beautiful website for BEBA AI - a healthcare-first AI technology company specializing in ethical AI governance and innovative SaaS solutions for dementia care and broader healthcare applications.

## Technical Requirements

### Core Technologies
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for navigation
- **State Management**: React Context or Zustand (if needed)

### Quality Standards
- **Mobile-First Design**: Design for mobile screens first, then scale up
- Fully responsive across all devices (320px mobile to 4K desktop)
- Touch-friendly interactions (minimum 44x44px touch targets)
- Optimized for various mobile browsers (Safari iOS, Chrome Android)
- Fast loading on mobile networks (3G/4G optimization)
- Accessibility compliant (WCAG 2.1 AA) with screen reader support
- Fast loading times (optimize images, lazy loading, code splitting)
- SEO-friendly structure with semantic HTML
- Cross-browser compatible
- TypeScript strict mode enabled
- Progressive Web App (PWA) ready

### Mobile-Specific Requirements

**Responsive Breakpoints**:
```tsx
// Tailwind breakpoints to use consistently
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large screens
```

**Mobile Navigation**:
- Hamburger menu for mobile (<768px)
- Slide-out drawer with smooth animations
- Full-screen navigation on small devices
- Bottom navigation bar option for key actions
- Fixed/sticky navigation that doesn't block content

**Touch Interactions**:
- Swipeable cards and carousels
- Pull-to-refresh on relevant sections
- Tap to expand/collapse content
- Pinch-to-zoom on images where appropriate
- No hover-dependent functionality (all features accessible via tap)

**Performance**:
- Lazy load images below the fold
- Use WebP format with fallbacks
- Implement skeleton screens for loading states
- Code splitting for faster initial load
- Service worker for offline capability

## Design System

### Brand Identity (from Logo)
**Color Palette** (extract from logo):
- **Primary Pink/Magenta**: #FF1B8D (or similar from logo left hemisphere)
- **Primary Blue**: #0D7FDC (or similar from logo right hemisphere)
- **Accent Cyan**: #00D9FF (from gradient effects)
- **Dark Purple Background**: #2D1B3D (from logo background)
- **White/Light**: #FFFFFF for text and accents
- **Gradient Effects**: Use pink-to-blue and cyan gradients throughout

**Typography**:
- Use modern, tech-forward fonts similar to logo (recommend: Orbitron or Exo 2 for headings, Inter or Roboto for body)
- Maintain the sleek, circuit-board aesthetic from the brain imagery
- **Mobile Font Sizes**: 
  - Body text: 16px minimum (for readability)
  - Headings: Scale appropriately (24px-32px on mobile)
  - Line height: 1.6 for body text

**Visual Style**:
- Clean, modern, tech-forward aesthetic
- Neural/circuit board motifs (subtle, not overwhelming on mobile)
- Gradient accents and glowing effects
- Professional healthcare feel balanced with innovation
- Use of whitespace for clarity (especially important on mobile)

## Website Structure

### 1. Home Page (Landing/Hero)

**Hero Section** (Mobile-Optimized):
```tsx
Title: "Responsible AI for Healthcare. Innovation with Integrity."
// Mobile: Stack vertically, larger touch-friendly CTAs

Subheading: "BEBA AI pioneers ethical artificial intelligence solutions that 
transform healthcare delivery while upholding the highest standards of 
governance, transparency, and human-centered design."
// Mobile: Shorter version or collapsible for small screens

CTA Buttons: 
- "Explore Our Pillars" (scroll to pillars section)
- "Our Solutions" (link to products page)
- "View Platform Demo" (NEW - links to Gilly-CLARITY showcase)
// Mobile: Full-width buttons with adequate spacing
```

**Key Statistics Section** (Mobile: Swipeable Cards):
- **£42.5B** - UK dementia care market opportunity
- **982,000** - UK patients needing support
- **99.25%** - Accuracy of our RAG-powered systems
- **7x Growth** - Ethnic minority dementia cases by 2051
// Mobile: Horizontal scrollable cards or stack vertically

**Mission Statement Section**:
```
"At BEBA AI, we believe artificial intelligence must serve humanity with 
transparency, fairness, and accountability. Our healthcare solutions combine 
cutting-edge technology with unwavering ethical standards to improve lives, 
empower caregivers, and transform patient outcomes."
```

**Featured Product Preview**:
Highlight CLARITY integration with GP-facing dementia platform:
- Brief description of the complete care pathway
- Bidirectional data flow visualization (simplified on mobile)
- Key features: RAG-powered simplification, multi-language support, cultural adaptation
- **NEW**: "See It In Action" button linking to interactive demo

**The Seven Pillars Preview** (Mobile: Vertical Stack or Swipeable):
Display all seven pillars as interactive cards with icons
// Mobile: Consider vertical stack or swipeable carousel

### 2. **NEW: Platform Showcase Page - "Gilly-CLARITY: Complete Care Pathway"**

Create a dedicated, visually stunning page showcasing the integrated platform.

**Page Hero**:
```tsx
Title: "The First Complete Dementia Care Pathway"
Subtitle: "From GP Risk Assessment to Ongoing Patient Support — 
Bridging the £42.5B Care Gap"

Interactive Demo CTA: "Explore The Platform" (scrolls to demo)
```

**The Problem Section** (Mobile: Collapsible Cards):
```tsx
Title: "The £42.5 Billion Gap in Dementia Care"

Statistics with Visual Impact:
- 37% receive ZERO support after diagnosis
- 324,000 patients undiagnosed (34.6% gap)
- 700,000 caregivers struggling alone
- £26.8B annual family costs
- 90% of NHS costs from preventable emergencies

Visual: Animated infographic showing the broken care pathway
Mobile: Stack statistics vertically with progressive reveal
```

**The Solution: Gilly-CLARITY Integration** (Mobile-Optimized):
```tsx
Title: "Two Platforms. One Complete Solution."

Subtitle: "Gilly provides GPs with advanced risk assessment. 
CLARITY delivers continuous patient and caregiver support. 
Together, they create the missing infrastructure in dementia care."
```

**Interactive Platform Demo** (Core Feature - Mobile & Desktop):

Create an interactive, animated demonstration showing:

**Desktop View**: Side-by-side split screen
**Mobile View**: Tabbed interface with smooth transitions

```tsx
// Demo Structure
<InteractivePlatformDemo>
  
  {/* Control Panel - Mobile: Bottom tabs, Desktop: Side selector */}
  <DemoControls>
    <Tab>GP Assessment</Tab>
    <Tab>Data Flow</Tab>
    <Tab>Patient Portal</Tab>
    <Tab>Family Support</Tab>
    <Tab>Feedback Loop</Tab>
  </DemoControls>

  {/* Demo Visualization Area */}
  <DemoVisualization>
    
    {/* Scene 1: GP Side (Gilly Platform) */}
    <Scene id="gp-assessment">
      <MockInterface type="gp-dashboard">
        <Title>Gilly - GP Assessment Dashboard</Title>
        
        <AnimatedElement>
          Risk Stratification Tool
          - Cognitive scores (MoCA, ACE-III)
          - Functional assessment (ADL/IADL)
          - Medical history review
          - Social factors analysis
        </AnimatedElement>
        
        <RiskScore animated>
          Patient Risk Level: MODERATE-HIGH
          Recommendation: Refer for diagnostic workup
        </RiskScore>
        
        <CTAButton animated>
          Send to CLARITY Portal →
        </CTAButton>
      </MockInterface>
    </Scene>

    {/* Scene 2: Bidirectional Data Flow */}
    <Scene id="data-flow">
      <DataFlowVisualization>
        {/* Animated particles/lines flowing between systems */}
        
        <FlowDirection direction="gp-to-patient">
          <DataPacket>
            ✓ Risk assessment results
            ✓ Medical history
            ✓ Medications list
            ✓ Personalized care recommendations
          </DataPacket>
        </FlowDirection>

        <CentralHub>
          FHIR-Compliant
          Secure Data Exchange
        </CentralHub>

        <FlowDirection direction="patient-to-gp">
          <DataPacket>
            ✓ Patient engagement metrics
            ✓ Symptom progression tracking
            ✓ Medication adherence
            ✓ Service utilization data
            ✓ Nutrition compliance
          </DataPacket>
        </FlowDirection>
      </DataFlowVisualization>
    </Scene>

    {/* Scene 3: Patient Side (CLARITY Portal) */}
    <Scene id="patient-portal">
      <MockInterface type="patient-portal">
        <Title>CLARITY - Patient Portal</Title>
        
        <WelcomeMessage animated>
          Welcome back, [Patient Name]
          Your personalized dementia support hub
        </WelcomeMessage>

        <FeatureGrid>
          <Feature icon="brain">
            Understanding Your Diagnosis
            - Plain language explanation
            - Available in 8+ languages
            - Cultural adaptations
          </Feature>

          <Feature icon="pill">
            Your Medications
            - What they do (simplified)
            - How to take them
            - Nutrition interactions
          </Feature>

          <Feature icon="utensils">
            Mediterranean Diet Plan
            - Personalized meal suggestions
            - Cultural recipe adaptations
            - Shopping lists
          </Feature>

          <Feature icon="message-circle">
            AI Health Literacy Assistant
            - Ask questions anytime
            - 99.25% accuracy
            - Evidence-based answers
          </Feature>
        </FeatureGrid>

        <ServiceConnections>
          Connected Local Services:
          - Memory clinic appointment
          - Benefits eligibility check
          - Caregiver support group
          - Legal planning resources
        </ServiceConnections>
      </MockInterface>
    </Scene>

    {/* Scene 4: Family/Caregiver Hub */}
    <Scene id="family-support">
      <MockInterface type="caregiver-portal">
        <Title>Family & Caregiver Hub</Title>
        
        <FeatureHighlights>
          <Highlight>
            Health Literacy Resources
            - Understanding the diagnosis
            - Care planning guides
            - Communication tips
          </Highlight>

          <Highlight>
            Burden Tracking & Support
            - Zarit Burden Interview
            - Respite care booking
            - Support group connections
          </Highlight>

          <Highlight>
            Practical Assistance
            - Financial support wizard
            - Legal planning checklist
            - Emergency contacts
          </Highlight>
        </FeatureHighlights>
      </MockInterface>
    </Scene>

    {/* Scene 5: Continuous Feedback Loop */}
    <Scene id="feedback-loop">
      <FeedbackVisualization>
        <Title>Continuous Care Coordination</Title>
        
        <CycleAnimation>
          1. GP identifies risk → 
          2. Patient receives immediate support → 
          3. Family engages with resources → 
          4. Outcomes tracked in real-time → 
          5. GP receives progress updates → 
          6. Care plan adjusted as needed
        </CycleAnimation>

        <ImpactMetrics animated>
          Platform Impact:
          - Time to support: <7 days (vs 37% never)
          - Medication adherence: >80% (vs 50%)
          - Hospital admissions: -20%
          - Caregiver burden: -15 points (Zarit)
        </ImpactMetrics>
      </FeedbackVisualization>
    </Scene>

  </DemoVisualization>

  {/* Feature Annotations - Mobile: Bottom sheet, Desktop: Sidebar */}
  <FeatureAnnotations>
    Context-sensitive explanations appear here as user 
    explores different scenes
  </FeatureAnnotations>

</InteractivePlatformDemo>
```

**Mobile Implementation Notes**:
- Use tabs to switch between scenes rather than side-by-side view
- Implement swipe gestures to navigate between scenes
- Ensure all interactive elements are touch-friendly (44x44px minimum)
- Use bottom sheets for detailed information
- Optimize animations for mobile performance (reduce particle count)

**Key Features Comparison Table** (Mobile: Accordion/Expandable):
```tsx
<ComparisonTable>
  <Column>Without Gilly-CLARITY</Column>
  <Column>With Gilly-CLARITY</Column>

  <Row>
    <Cell>37% receive zero support</Cell>
    <Cell>100% immediate access to resources</Cell>
  </Row>

  <Row>
    <Cell>Fragmented care coordination</Cell>
    <Cell>Unified platform for all stakeholders</Cell>
  </Row>

  <Row>
    <Cell>Language barriers for 65% of ethnic minorities</Cell>
    <Cell>8+ languages with cultural adaptation</Cell>
  </Row>

  <Row>
    <Cell>27% malnutrition rate</Cell>
    <Cell>Evidence-based nutrition guidance</Cell>
  </Row>

  <Row>
    <Cell>50% medication non-adherence</Cell>
    <Cell>80%+ adherence with clear instructions</Cell>
  </Row>

  <Row>
    <Cell>Caregiver burnout epidemic</Cell>
    <Cell>Comprehensive family support tools</Cell>
  </Row>
</ComparisonTable>
```

**Market Opportunity Section**:
```tsx
Title: "Capturing the £42.5 Billion Opportunity"

<MarketStats grid>
  <Stat>
    1.68M Users Today
    UK patients + caregivers
  </Stat>

  <Stat>
    2.38M By 2040
    42% market growth
  </Stat>

  <Stat>
    £26.8B Family Costs
    63% of total burden
  </Stat>

  <Stat>
    Zero Competition
    Only integrated solution
  </Stat>
</MarketStats>

<UniqueValue>
  "No existing platform combines GP-facing risk assessment 
  with patient-facing continuous support. Gilly-CLARITY is 
  the only complete care pathway solution — a defensible 
  market position capturing the massive post-diagnosis void."
</UniqueValue>
```

**Technical Architecture Section** (Mobile: Simplified Diagram):
```tsx
<ArchitectureDiagram interactive>
  
  Components:
  - FHIR UK Core compliance
  - SNOMED CT integration
  - NHS Login authentication
  - GP Connect APIs
  - DSPT certified security
  - ISO 27001 quality management
  - RAG-powered AI (99.25% accuracy)
  - Multi-language NLP
  - Cultural adaptation engine

  Mobile: Show simplified, tappable component cards
</ArchitectureDiagram>
```

**Clinical Validation & Evidence** (Mobile: Expandable Cards):
```tsx
<EvidenceSection>
  <Badge>NHS-Compliant</Badge>
  <Badge>MHRA Registered</Badge>
  <Badge>DTAC Certified</Badge>
  <Badge>NICE Evidence Standards</Badge>

  <ValidationStudy expandable>
    Clinical Study Results (400 patients, 6 months):
    - Primary: Caregiver health literacy +40%
    - Service utilization: +80%
    - Quality of life: +25%
    - NHS cost reduction: £2,400/patient/year
  </ValidationStudy>
</EvidenceSection>
```

**Call to Action Section**:
```tsx
<CTASection gradient>
  <Title>Ready to Transform Dementia Care?</Title>
  
  <CTAButtons>
    <Button primary>Request a Demo</Button>
    <Button secondary>Download Clinical Evidence</Button>
    <Button secondary>Talk to Our Team</Button>
  </CTAButtons>

  <ContactInfo>
    Healthcare organizations, NHS trusts, and private 
    care providers: Contact us to pilot Gilly-CLARITY 
    in your organization.
  </ContactInfo>
</CTASection>
```

### 3. Seven Pillars of Ethical AI Page

**Mobile Optimization**:
- Vertical stack of pillar cards
- Tap to expand full details
- Swipe to navigate between pillars
- Fixed "Back to Top" button

Create an immersive, visually striking page for the seven pillars. Each pillar should have:

**Page Introduction**:
```
"Ethics is our architecture — each pillar strengthens the whole."

The Seven Pillars represent BEBA AI's commitment to responsible innovation. 
They guide every decision, every line of code, and every product we create. 
Together, they form an unshakeable foundation for AI that serves humanity.
```

**Interactive Pillar Display** (Mobile: Expandable Accordion):
For each pillar, create an interactive card/section with:

1. **Clarity — Governance & Accountability**
   - Icon: Shield with checkmark or organizational chart
   - Description provided
   - Visual: Circuit paths leading to a central governance node
   - Mobile: Tap to expand full description

2. **Purity — Data Ethics & Privacy**
   - Icon: Lock or shield with data symbols
   - Description provided
   - Visual: Encrypted data flows, protected pathways

3. **Fairness — Bias Detection & Inclusion**
   - Icon: Balanced scales or diverse people icons
   - Description provided
   - Visual: Equal opportunity pathways, inclusive design

4. **Transparency — Explainability & Documentation**
   - Icon: Open book or magnifying glass
   - Description provided
   - Visual: Clear documentation flows, visible processes

5. **Resilience — Security & Robustness**
   - Icon: Fortress or reinforced structure
   - Description provided
   - Visual: Strong defensive architecture, redundancy systems

6. **Integrity — Compliance & Standards**
   - Icon: Certificate or stamp of approval
   - Description provided
   - Visual: ISO/IEC standards badges, compliance checkmarks

7. **Impact — Human, Social & Environmental Outcomes**
   - Icon: Earth with heart or growing tree
   - Description provided
   - Visual: Positive impact ripples, sustainable growth

**Closing Statement**:
```
"Together these pillars uphold a single principle: 
Responsible AI is not an option — it is our identity."

Learn how we apply these pillars in our products →
```

### 4. Products & Services Page

**Mobile Navigation**: Tab bar or chip selector for product categories

**Main Products Section**:

**CLARITY Dementia Support Platform**:
```tsx
Tagline: "Bridging the £42.5 Billion Care Gap"

// Mobile: Collapsible sections for each feature category

Description:
"CLARITY represents a transformational breakthrough in dementia care. 
By integrating seamlessly with GP-facing risk assessment platforms, 
CLARITY creates the first complete care pathway from diagnosis through 
ongoing support — addressing the critical void where 37% of UK dementia 
patients receive zero post-diagnosis assistance."

Key Features (Mobile: Icon grid with tap-to-expand):
- RAG-Powered Medical Simplification (99.25% accuracy)
- Multi-Language Support (8+ languages including Punjabi, Urdu, Hindi, Gujarati)
- Cultural Adaptation for ethnic minority communities
- Evidence-Based Nutrition Guidance (Mediterranean diet protocols)
- Bidirectional GP Integration
- Family Caregiver Portal
- Complete Service Coordination

Market Impact:
- 982,000 UK dementia patients (growing to 1.4M by 2040)
- 700,000 family caregivers supported
- £26.8B annual family care costs addressed
- 7x ethnic minority case growth by 2051

Clinical Validation:
- NHS-compliant architecture
- MHRA regulatory pathway
- NICE evidence standards
- DTAC compliance

<CTAButton>See Platform Demo</CTAButton>
```

**GP-Facing Dementia Risk Assessment Dashboard (Gilly)**:
```tsx
Description:
"Advanced clinical decision support system providing GPs with sophisticated 
risk stratification and evidence-based recommendations for early dementia 
detection and intervention."

Integration Benefits:
- Seamless data flow to CLARITY patient portal
- Continuous outcome monitoring and feedback
- Population health management capabilities
- Reduced diagnostic delays

<CTAButton>View Integration Demo</CTAButton>
```

**AI Governance Services**:
```tsx
Description:
"BEBA AI's governance framework helps organizations implement ethical AI 
systems aligned with our Seven Pillars. We provide assessment, certification, 
and ongoing compliance support."

Services (Mobile: Expandable list):
- Ethical AI audits and assessments
- Seven Pillars certification program
- Policy development and implementation
- Training and education programs
- Ongoing compliance monitoring
```

### 5. About Us Page

**Mobile Optimization**:
- Vertical card layout for founders
- Swipeable founder profiles
- Collapsible bio sections

**Company Story Section**:
```
"Founded at the intersection of clinical expertise, technological innovation, 
and ethical leadership, BEBA AI was born from a simple conviction: artificial 
intelligence in healthcare must be as human as it is intelligent.

Our journey began with a question: How do we bridge the massive gap in dementia 
care while ensuring AI serves patients, caregivers, and clinicians with 
transparency, fairness, and compassion?

The answer became our mission."
```

**Our Founders Section**:

Create visually striking founder profile cards with professional headshots (use placeholder):

**Elizabeth Shapton - Founder & Chief Executive Officer**
```
Title: "Visionary Architect & Ethical Compass"

Bio:
As Founder and Chief Executive Officer, Elizabeth Shapton serves as the 
visionary architect and ethical compass of BEBA AI — a creative leader 
shaping the future of responsible, safe, and human-centred AI. Elizabeth's 
leadership defines the company's founding purpose: to design intelligent 
systems that serve people, improve lives, and build trust in technology. 
The role transcends strategy — fusing imagination, science, and moral 
responsibility into a culture of purpose-driven innovation.

Vision & Influence:
Under Elizabeth's direction, BEBA AI is establishing itself as a global 
thought leader in ethical AI, healthcare transformation, and digital integrity. 
Elizabeth is redefining innovation as a force for good — inspiring collaborators, 
researchers, and policymakers to see AI not as automation, but as augmentation 
of human potential. Through Elizabeth's guidance, BEBA AI operates at the 
intersection of creativity, ethics, and impact, ensuring that every breakthrough 
contributes to the well-being of individuals, communities, and the planet.
```

**Dan Ralley - Co-Founder & Chief Technology Officer**
```
Title: "Creative Engine & Innovation Architect"

Bio:
As Co-Founder and Chief Technology Officer, you are the creative engine of 
BEBA AI — transforming imagination into intelligent design. You merge science 
and artistry to craft responsible AI systems that redefine how technology 
interacts with humanity.

Vision & Influence:
Your vision propels BEBA AI into the frontier of ethical and creative engineering. 
You see technology as a language of possibility — one that must speak with 
empathy, clarity, and conscience. Through your innovation leadership, you ensure 
that every product embodies transparency, fairness, and trust.
```

**Aigbs - Co-Founder & Chief Clinical Advisor**
```
Title: "Ethical & Clinical Heart"

Bio:
As Co-Founder and Chief Clinical Advisor, you are the ethical and clinical 
heart of BEBA AI. You translate human care, medical science, and moral 
intelligence into the foundations of responsible AI. You ensure that every 
innovation enhances wellbeing, safety, and equality — turning technology 
into a tool for healing and trust.

Vision & Influence:
Your vision bridges clinical reality and digital innovation. You ensure BEBA AI 
remains grounded in evidence, compassion, and ethical clarity — where every 
algorithm has purpose, and every outcome serves humanity. You are a leading 
voice in ethical healthtech, advocating globally for the safe and meaningful 
integration of AI in healthcare.
```

**Our Values Section** (Mobile: Icon cards):
- Patient-Centered Innovation
- Evidence-Based Development
- Ethical AI Leadership
- Healthcare Transformation
- Global Impact

### 6. Navigation & Footer

**Navigation Bar**:

**Desktop**: Horizontal sticky navbar
**Mobile**: 
- Hamburger menu icon (top-right)
- Slide-out drawer navigation
- Bottom navigation bar for key actions (optional)

```tsx
<MobileNavigation>
  <Drawer>
    <Logo />
    <NavLinks>
      <Link>Home</Link>
      <Link>Platform Demo</Link> {/* NEW */}
      <Link>About Us</Link>
      <Link>Products & Services</Link>
      <Link>Seven Pillars</Link>
      <Link>Contact</Link>
    </NavLinks>
    <CTAButton>Get Started</CTAButton>
  </Drawer>
</MobileNavigation>

<DesktopNavigation sticky>
  <Logo />
  <NavLinks horizontal>
    {/* Same links as mobile */}
  </NavLinks>
  <CTAButton>Get Started</CTAButton>
</DesktopNavigation>
```

**Footer** (Mobile: Stacked layout):
```
BEBA AI
Intelligence · Innovation · Integrity

Links (Mobile: Expandable sections):
- About Us
- Products
- Seven Pillars
- Platform Demo
- Privacy Policy
- Terms of Service

Contact:
- Email: info@beba-ai.com
- LinkedIn
- Twitter/X

Copyright © 2025 BEBA AI. All rights reserved.

Tagline: "Responsible AI is not an option — it is our identity."
```

## Interactive Elements to Include

**Mobile-Specific Interactions**:
1. **Pull-to-Refresh**: On relevant data pages
2. **Swipe Gestures**: Navigate between pillars, products, founder profiles
3. **Bottom Sheets**: For detailed information without leaving page
4. **Floating Action Button**: Quick access to demo or contact
5. **Progressive Disclosure**: Tap to reveal more information
6. **Haptic Feedback**: On important interactions (if supported)

**Universal Interactions**:
1. **Animated Statistics Counter**: Numbers count up when scrolling into view
2. **Pillar Cards**: Tap/hover effects with subtle glow, expand details
3. **Parallax Scrolling**: Subtle depth effects (lighter on mobile for performance)
4. **Smooth Page Transitions**: Fade effects between sections
5. **Interactive Circuit Patterns**: Background animations (simplified on mobile)
6. **Gradient Text Effects**: Use pink-to-blue gradients on key headings
7. **Micro-interactions**: Button states, card lifts, icon animations
8. **Loading Animations**: Brain/circuit themed initial page load
9. **Progress Indicators**: Show reading progress on long pages
10. **Modal Windows**: For detailed information (mobile: full-screen)

## Implementation Instructions

### Project Setup
```bash
npx create-react-app beba-ai-website --template typescript
cd beba-ai-website
npm install tailwindcss framer-motion react-router-dom lucide-react
npm install @headlessui/react # For accessible mobile components
npm install react-intersection-observer # For scroll animations
```

### Mobile-Responsive File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Mission.tsx
│   │   ├── FeaturedProduct.tsx
│   │   └── PillarsPreview.tsx
│   ├── platform-demo/ # NEW FOLDER
│   │   ├── PlatformShowcase.tsx
│   │   ├── InteractiveDemo.tsx
│   │   ├── DemoControls.tsx
│   │   ├── GPInterface.tsx
│   │   ├── PatientInterface.tsx
│   │   ├── DataFlow.tsx
│   │   ├── ComparisonTable.tsx
│   │   └── MarketOpportunity.tsx
│   ├── pillars/
│   │   ├── PillarCard.tsx
│   │   ├── PillarDetail.tsx
│   │   └── PillarsGrid.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ClaritySection.tsx
│   │   └── ServicesSection.tsx
│   ├── about/
│   │   ├── FounderCard.tsx
│   │   ├── CompanyStory.tsx
│   │   └── Values.tsx
│   ├── mobile/ # NEW FOLDER
│   │   ├── TouchDrawer.tsx
│   │   ├── BottomSheet.tsx
│   │   ├── SwipeableCard.tsx
│   │   └── MobileMenu.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── ResponsiveContainer.tsx
│       └── AnimatedSection.tsx
├── pages/
│   ├── Home.tsx
│   ├── PlatformDemo.tsx # NEW PAGE
│   ├── Pillars.tsx
│   ├── Products.tsx
│   └── About.tsx
├── hooks/
│   ├── useMediaQuery.ts
│   ├── useSwipe.ts
│   └── useScrollAnimation.ts
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── App.tsx
```

### Key Code Patterns

**Responsive Design Utilities**:
```tsx
// useMediaQuery.ts
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  
  return matches;
};

// Usage
const isMobile = useMediaQuery('(max-width: 768px)');
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
const isDesktop = useMediaQuery('(min-width: 1024px)');
```

**Color Scheme Implementation**:
```tsx
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'beba-pink': '#FF1B8D',
        'beba-blue': '#0D7FDC',
        'beba-cyan': '#00D9FF',
        'beba-purple': '#2D1B3D',
        'beba-purple-light': '#4A2F5A',
      },
      backgroundImage: {
        'gradient-beba': 'linear-gradient(135deg, #FF1B8D 0%, #0D7FDC 100%)',
        'gradient-beba-reverse': 'linear-gradient(135deg, #0D7FDC 0%, #FF1B8D 100%)',
      },
      screens: {
        'xs': '475px',
      }
    }
  }
}
```

**Mobile-Optimized Animation Examples**:
```tsx
// Framer Motion variants with reduced motion for mobile
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    // Reduce motion on mobile for performance
    ...(isMobile && { duration: 0.3 })
  }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: isMobile ? 0.05 : 0.1
    }
  }
};

// Swipe gesture handler
const swipeHandlers = useSwipeGesture({
  onSwipeLeft: () => nextSlide(),
  onSwipeRight: () => prevSlide(),
});
```

**Interactive Platform Demo - Core Component**:
```tsx
// InteractiveDemo.tsx
interface DemoScene {
  id: string;
  title: string;
  component: React.ComponentType;
  description: string;
}

const PlatformDemo: React.FC = () => {
  const [activeScene, setActiveScene] = useState('gp-assessment');
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const scenes: DemoScene[] = [
    { 
      id: 'gp-assessment', 
      title: 'GP Assessment', 
      component: GPInterface,
      description: 'Risk stratification and clinical decision support'
    },
    { 
      id: 'data-flow', 
      title: 'Data Exchange', 
      component: DataFlowVisualization,
      description: 'FHIR-compliant bidirectional data flow'
    },
    { 
      id: 'patient-portal', 
      title: 'Patient Portal', 
      component: PatientInterface,
      description: 'Personalized health literacy and support'
    },
    // ... more scenes
  ];

  return (
    <div className="relative">
      {/* Mobile: Tab navigation */}
      {isMobile ? (
        <MobileTabNavigation 
          scenes={scenes}
          active={activeScene}
          onChange={setActiveScene}
        />
      ) : (
        <DesktopSceneSelector 
          scenes={scenes}
          active={activeScene}
          onChange={setActiveScene}
        />
      )}
      
      {/* Scene renderer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene}
          initial={{ opacity: 0, x: isMobile ? 100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isMobile ? -100 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {scenes.find(s => s.id === activeScene)?.component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
```

## Content Priorities

1. **Mobile-First Experience**: Every feature must work flawlessly on mobile
2. **Platform Demo Centerpiece**: The Gilly-CLARITY showcase is a key differentiator
3. **Emphasize Ethical Leadership**: The Seven Pillars should be central to brand identity
4. **Clinical Credibility**: Highlight evidence-based approach and clinical validation
5. **Real Impact**: Use statistics and outcomes from CLARITY documents
6. **Human-Centered**: Balance technical sophistication with compassionate healthcare focus
7. **Trust Building**: Transparency, certifications, and clear governance

## Performance Targets

**Mobile Performance**:
- First Contentful Paint: <2.5s on 3G
- Largest Contentful Paint: <4s on 3G
- Time to Interactive: <5s on 3G
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms

**Optimization Techniques**:
- Lazy load all images
- Use WebP with PNG/JPG fallback
- Implement code splitting
- Minimize JavaScript bundle size
- Use CSS transforms for animations (GPU acceleration)
- Reduce animation complexity on mobile
- Implement service worker for offline capability

## Testing Checklist

**Mobile Testing**:
- [ ] Test on iPhone SE (smallest modern screen)
- [ ] Test on iPhone 12/13/14 (standard iOS)
- [ ] Test on Samsung Galaxy (standard Android)
- [ ] Test on iPad (tablet experience)
- [ ] Test landscape and portrait orientations
- [ ] Test with slow 3G network throttling
- [ ] Test with touch-only (no hover states)
- [ ] Test with screen readers (VoiceOver, TalkBack)
- [ ] Verify all CTAs are thumb-friendly (44x44px minimum)
- [ ] Check font sizes are readable (16px minimum body text)

**Platform Demo Testing**:
- [ ] All scenes load and transition smoothly on mobile
- [ ] Swipe gestures work correctly
- [ ] Animations don't cause jank on older devices
- [ ] Data flow visualization is understandable on small screens
- [ ] All interactive elements are touch-friendly
- [ ] Demo works offline (if applicable)

## Final Deliverables

Provide:
1. Complete React + TypeScript codebase
2. Fully responsive design (320px mobile to 4K desktop)
3. Interactive platform demo with smooth mobile experience
4. All interactive animations functional across devices
5. Touch-friendly interactions throughout
6. Clear code comments and component documentation
7. README with setup instructions
8. Mobile testing documentation
9. Performance optimization report
10. Deployment-ready build configuration (with PWA manifest)

## Brand Voice Guidelines

- **Professional yet Warm**: Healthcare expertise with human touch
- **Confident yet Humble**: Leader in ethics without arrogance
- **Technical yet Accessible**: Complex AI explained clearly
- **Innovative yet Responsible**: Cutting-edge with moral compass
- **Mobile-Friendly Copywriting**: Concise, scannable text for small screens

---

**Begin building the BEBA AI website following these specifications. Create a modern, interactive, mobile-first, and ethically grounded digital presence that reflects the company's mission to transform healthcare through responsible AI. Special emphasis on the interactive Gilly-CLARITY platform showcase as a key differentiator.**