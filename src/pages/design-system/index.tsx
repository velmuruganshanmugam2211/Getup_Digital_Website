import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Moon,
  Copy,
  Check,
  Sparkles,
  Layers,
  Palette,
  Type,
  Maximize2,
  Sliders,
  Bell,
  LayoutGrid,
  TrendingUp,
  Users,
  Code,
  SlidersHorizontal,
} from 'lucide-react';

import {
  Button,
  Input,
  Textarea,
  Select,
  MultiSelect,
  Checkbox,
  RadioGroup,
  Switch,
  Badge,
  Avatar,
  AvatarGroup,
  FeatureCard,
  StatCard,
  PricingCard,
  ProjectCard,
  Modal,
  Drawer,
  Dropdown,
  Tooltip,
  Tabs,
  Table,
  Pagination,
  Alert,
  SkeletonCard,
  Progress,
  CircularProgress,
  EmptyState,
  useToast,
  CtaBanner,
  CtaCard,
  SearchInput,
  brandGreen,
  semanticTokens,
} from '../../design-system';

export const DesignSystemPage: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('brand');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Interactive component states
  const [btnLoading, setBtnLoading] = useState(false);
  const [textInputVal, setTextInputVal] = useState('Getup Digital Studio');
  const [textareaVal, setTextareaVal] = useState('High-converting Meta campaign for Diwali promotion.');
  const [selectVal, setSelectVal] = useState('growth');
  const [multiSelectVals, setMultiSelectVals] = useState<string[]>(['meta', 'content']);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioVal, setRadioVal] = useState('pro');
  const [switchChecked, setSwitchChecked] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [tablePage, setTablePage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [progressVal, setProgressVal] = useState(68);
  const [searchVal, setSearchVal] = useState('');

  const { success, error, warning, info } = useToast();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const copyToClipboard = (text: string, type: 'hex' | 'code') => {
    navigator.clipboard.writeText(text);
    if (type === 'hex') {
      setCopiedHex(text);
      setTimeout(() => setCopiedHex(null), 2000);
    } else {
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const navItems = [
    { id: 'brand', label: 'Brand & Identity', icon: Sparkles },
    { id: 'colors', label: 'Color Architecture', icon: Palette },
    { id: 'typography', label: 'Typography (Montserrat)', icon: Type },
    { id: 'spacing-radius', label: 'Spacing & Elevation', icon: Sliders },
    { id: 'buttons', label: 'Button System', icon: Layers },
    { id: 'inputs', label: 'Input & Form System', icon: Sliders },
    { id: 'cards', label: 'Card System', icon: LayoutGrid },
    { id: 'navigation-tabs', label: 'Tabs & Navigation', icon: Layers },
    { id: 'feedback', label: 'Feedback & Overlays', icon: Bell },
    { id: 'data-display', label: 'Data Display & Tables', icon: LayoutGrid },
    { id: 'loading-empty', label: 'Loading & Empty States', icon: Maximize2 },
    { id: 'patterns', label: 'Layout Patterns', icon: LayoutGrid },
    { id: 'architecture', label: 'Multi-Product Architecture', icon: Code },
  ];

  const sampleTableData = [
    { id: 1, name: 'Siva Biryani Campaign', platform: 'Meta Ads', reach: '2,39,000', ctr: '3.4%', status: 'Active' },
    { id: 2, name: 'Vigneshwara Interiors', platform: 'Google Ads', reach: '84,500', ctr: '4.8%', status: 'Completed' },
    { id: 3, name: 'Balaji Catering Reels', platform: 'Instagram', reach: '4,10,000', ctr: '6.2%', status: 'Active' },
    { id: 4, name: 'Extreme Gym Fitness Hub', platform: 'Performance Max', reach: '1,12,000', ctr: '2.9%', status: 'Pending' },
    { id: 5, name: 'Getup Photo Shoot Batch 1', platform: 'Getup Photo', reach: '45,200', ctr: '5.1%', status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-[var(--gds-color-background)] text-[var(--gds-color-text-primary)] font-gds transition-colors duration-300">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-[var(--gds-color-border)] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2 text-decoration-none">
            <span className="w-8 h-8 rounded-lg bg-[#008000] text-white flex items-center justify-center font-black text-sm shadow-sm">
              G
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[var(--gds-color-text-primary)]">
                GETUP DESIGN SYSTEM
              </span>
              <span className="text-[10px] text-[var(--gds-color-text-muted)] font-mono">
                GDS v1.0 • Standalone Brand Foundation
              </span>
            </div>
          </Link>
          <Badge variant="green" size="sm" pulseDot dot className="hidden md:inline-flex ml-2">
            Production Ready
          </Badge>
        </div>

        <div className="flex items-center space-x-3">
          {/* Light / Dark Mode Switcher */}
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] text-xs font-semibold hover:border-[#008000] transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-[#F59E0B]" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-neutral-600" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          <Button href="/" variant="outline" size="sm" showArrow arrowType="right">
            Back to Website
          </Button>
        </div>
      </header>

      {/* Main Layout: Sticky Sidebar + Content Area */}
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">
        {/* Left Sidebar Navigation */}
        <aside className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-[var(--gds-color-border)] p-4 lg:p-6 lg:sticky lg:top-[61px] lg:h-[calc(100vh-61px)] overflow-y-auto bg-[var(--gds-color-background-secondary)]/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)] mb-3 px-2">
            Design Tokens & Components
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    flex items-center space-x-2.5 px-3 py-2 rounded-[var(--gds-radius-md)] text-xs font-semibold transition-all
                    ${
                      isActive
                        ? 'bg-[#008000] text-white shadow-xs font-bold'
                        : 'text-[var(--gds-color-text-secondary)] hover:bg-[var(--gds-color-surface)] hover:text-[#008000]'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-8 p-4 rounded-xl border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)]">
            <div className="text-xs font-bold text-[var(--gds-color-text-primary)] mb-1">
              Need Multi-Product Support?
            </div>
            <p className="text-[11px] text-[var(--gds-color-text-muted)] leading-relaxed mb-3">
              GDS is built for reuse across Getup Website, Getup Photo, and future SaaS applications.
            </p>
            <div className="text-[10px] font-mono text-[#008000] bg-[#008000]/10 p-2 rounded border border-[#008000]/20">
              import &#123; Button, Card &#125; from '@/design-system';
            </div>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <main className="flex-1 p-6 sm:p-10 lg:p-14 space-y-20 overflow-hidden">
          {/* Section 1: Brand Identity */}
          <section id="brand" className="scroll-mt-24 space-y-6">
            <div className="flex items-center space-x-2">
              <Badge variant="green" size="md">Core Brand DNA</Badge>
              <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-BRAND-01</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--gds-color-text-primary)]">
              Getup Design System <span className="text-[#008000]">(GDS)</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--gds-color-text-secondary)] max-w-3xl leading-relaxed">
              Derived directly from the verified brand identity of <strong>Getup Digital Solution</strong>. 
              GDS formalizes our primary green (#008000), Montserrat typography, subtle card elevations, 
              and accountable digital craftsmanship into a reusable single source of truth.
            </p>

            {/* Brand Traits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { title: 'CREATIVE', desc: 'Distinct visual personality without SaaS genericism' },
                { title: 'DIGITAL', desc: 'Engineered for high-performing web & software' },
                { title: 'CONFIDENT', desc: 'Solid typographic scale & bold green contrasts' },
                { title: 'BUSINESS-FOCUSED', desc: 'Clear visual hierarchy oriented around growth ROI' },
              ].map((trait, i) => (
                <div
                  key={i}
                  className="p-5 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)]"
                >
                  <div className="text-xs font-mono font-bold text-[#008000] mb-1">0{i + 1}</div>
                  <div className="text-sm font-extrabold text-[var(--gds-color-text-primary)] mb-1">{trait.title}</div>
                  <div className="text-xs text-[var(--gds-color-text-muted)] leading-relaxed">{trait.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Color Architecture */}
          <section id="colors" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Color Architecture</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-COLOR-02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Getup Green #008000 & Semantic Tokens
              </h2>
              <p className="text-sm text-[var(--gds-color-text-muted)] mt-1">
                Click any swatch to copy its HEX value. All components strictly consume semantic tokens.
              </p>
            </div>

            {/* Primary Brand Scale 50-950 */}
            <div>
              <h3 className="text-sm font-bold text-[var(--gds-color-text-primary)] uppercase tracking-wider mb-4">
                Primary Green Scale (Brand Core)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 gap-2.5">
                {Object.entries(brandGreen).map(([step, hex]) => {
                  const isCore = step === '500';
                  return (
                    <button
                      key={step}
                      type="button"
                      onClick={() => copyToClipboard(hex, 'hex')}
                      className={`
                        group p-3 rounded-[var(--gds-radius-lg)] border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-28
                        ${isCore ? 'ring-2 ring-[#008000] ring-offset-2 border-[#008000]' : 'border-[var(--gds-color-border)]'}
                        hover:scale-105 shadow-xs
                      `}
                      style={{ backgroundColor: hex }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-xs font-mono font-bold ${Number(step) >= 400 ? 'text-white' : 'text-neutral-900'}`}>
                          {step}
                        </span>
                        {isCore && (
                          <span className="text-[9px] bg-white text-[#008000] font-black px-1 rounded">
                            CORE
                          </span>
                        )}
                      </div>
                      <div>
                        <div className={`text-[11px] font-mono uppercase font-bold flex items-center justify-between ${Number(step) >= 400 ? 'text-white' : 'text-neutral-900'}`}>
                          <span>{hex}</span>
                          {copiedHex === hex ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Semantic Tokens Grid */}
            <div>
              <h3 className="text-sm font-bold text-[var(--gds-color-text-primary)] uppercase tracking-wider mb-4">
                Semantic Color Tokens ({isDark ? 'Dark Theme' : 'Light Theme'})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(isDark ? semanticTokens.dark : semanticTokens.light).map(([name, val]) => (
                  <div
                    key={name}
                    className="p-3.5 rounded-[var(--gds-radius-lg)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-7 h-7 rounded-md border border-neutral-300 dark:border-neutral-700 shadow-xs shrink-0"
                        style={{ backgroundColor: val }}
                      />
                      <div>
                        <div className="text-xs font-mono font-bold text-[var(--gds-color-text-primary)]">
                          {name}
                        </div>
                        <div className="text-[10px] text-[var(--gds-color-text-muted)] font-mono">
                          {val}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(`var(--gds-${name})`, 'code')}
                      className="p-1.5 text-[var(--gds-color-text-muted)] hover:text-[#008000] transition-colors"
                      title="Copy CSS var"
                    >
                      {copiedCode === `var(--gds-${name})` ? <Check className="w-3.5 h-3.5 text-[#008000]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Typography */}
          <section id="typography" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Typography Scale</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-TYPO-03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Montserrat Font Hierarchy
              </h2>
              <p className="text-sm text-[var(--gds-color-text-muted)] mt-1">
                Standardized type scale with defined rem sizing, line heights, and letter spacing.
              </p>
            </div>

            {/* Typography Specimen Table */}
            <div className="space-y-4">
              {[
                { level: 'Display XL', class: 'gds-display-xl', sample: 'Empowering Digital Growth', meta: '64px / 4rem • Bold 800 • -0.03em' },
                { level: 'Display LG', class: 'gds-display-lg', sample: 'Strategic Marketing Engines', meta: '52px / 3.25rem • Bold 800 • -0.025em' },
                { level: 'Display MD', class: 'gds-display-md', sample: 'Full-Stack Digital Solutions', meta: '44px / 2.75rem • Bold 700 • -0.02em' },
                { level: 'Heading XL', class: 'gds-heading-xl', sample: 'Measurable ROI Campaigns', meta: '36px / 2.25rem • Bold 700 • -0.02em' },
                { level: 'Heading LG', class: 'gds-heading-lg', sample: 'High-Converting Creative Funnels', meta: '30px / 1.875rem • Bold 700 • -0.015em' },
                { level: 'Heading MD', class: 'gds-heading-md', sample: 'Proven Performance Metrics', meta: '24px / 1.5rem • Semibold 600 • -0.01em' },
                { level: 'Heading SM', class: 'gds-heading-sm', sample: 'Verified Social Reach Proof', meta: '20px / 1.25rem • Semibold 600 • -0.005em' },
                { level: 'Body LG', class: 'gds-body-lg', sample: 'We transform casual followers into passionate paying brand advocates with data-backed content systems.', meta: '18px / 1.125rem • Regular 400 • 1.6 line-height' },
                { level: 'Body MD', class: 'gds-body-md', sample: 'Standard body copy utilized across marketing cards, dashboards, and detailed product descriptions.', meta: '16px / 1rem • Regular 400 • 1.55 line-height' },
                { level: 'Label MD', class: 'gds-label-md', sample: 'Form input labels, badge tags, and interactive button text', meta: '14px / 0.875rem • Semibold 600' },
                { level: 'Overline', class: 'gds-overline', sample: 'CATEGORY EYEBROW & STATUS BADGE', meta: '11px / 0.6875rem • Bold 700 • 0.12em uppercase' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[var(--gds-color-text-muted)] pb-2 border-b border-[var(--gds-color-border-subtle)]">
                    <span className="font-bold text-[#008000]">{item.level}</span>
                    <span>{item.meta}</span>
                  </div>
                  <div className={`${item.class} text-[var(--gds-color-text-primary)] truncate`}>
                    {item.sample}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Spacing & Elevation */}
          <section id="spacing-radius" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Spatial System</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-SPACE-04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Spacing & Elevation Architecture
              </h2>
            </div>

            {/* Spacing Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-4">
                <h3 className="text-sm font-bold text-[var(--gds-color-text-primary)] uppercase tracking-wider">
                  Base 4px Spacing Tokens
                </h3>
                <div className="space-y-2.5">
                  {[
                    { token: 'space-1', px: '4px' },
                    { token: 'space-2', px: '8px' },
                    { token: 'space-3', px: '12px' },
                    { token: 'space-4', px: '16px' },
                    { token: 'space-6', px: '24px' },
                    { token: 'space-8', px: '32px' },
                    { token: 'space-12', px: '48px' },
                    { token: 'space-16', px: '64px' },
                  ].map((s) => (
                    <div key={s.token} className="flex items-center space-x-3 text-xs font-mono">
                      <span className="w-20 font-bold text-[var(--gds-color-text-primary)]">{s.token}</span>
                      <span className="w-12 text-[var(--gds-color-text-muted)]">{s.px}</span>
                      <div className="h-4 bg-[#008000] rounded-sm" style={{ width: s.px }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Radii & Shadows */}
              <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-4">
                <h3 className="text-sm font-bold text-[var(--gds-color-text-primary)] uppercase tracking-wider">
                  Border Radius Tokens
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'radius-sm', val: '6px', r: 'rounded-[var(--gds-radius-sm)]' },
                    { name: 'radius-md', val: '8px (Inputs/Buttons)', r: 'rounded-[var(--gds-radius-md)]' },
                    { name: 'radius-lg', val: '12px (Cards)', r: 'rounded-[var(--gds-radius-lg)]' },
                    { name: 'radius-2xl', val: '24px (Getup Signature)', r: 'rounded-[var(--gds-radius-2xl)]' },
                    { name: 'radius-full', val: '9999px (Pills/Avatars)', r: 'rounded-full' },
                  ].map((rad) => (
                    <div
                      key={rad.name}
                      className={`p-3 border-2 border-[#008000]/40 bg-[#F0FDF4] dark:bg-[#008000]/10 ${rad.r} text-center`}
                    >
                      <div className="text-xs font-bold font-mono text-[var(--gds-color-text-primary)]">{rad.name}</div>
                      <div className="text-[10px] text-[var(--gds-color-text-muted)]">{rad.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Buttons */}
          <section id="buttons" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Interactive Components</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-BTN-05</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Button Component System
              </h2>
              <p className="text-sm text-[var(--gds-color-text-muted)] mt-1">
                Supports variants (Primary, Secondary, Outline, Ghost, Text, Danger, Success), sizes (XS-XL), and states.
              </p>
            </div>

            {/* Live Interactive State Switcher */}
            <div className="flex items-center space-x-4 p-4 rounded-xl border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)]">
              <span className="text-xs font-bold text-[var(--gds-color-text-primary)]">
                Test Loading State:
              </span>
              <Button
                variant={btnLoading ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setBtnLoading(!btnLoading)}
              >
                {btnLoading ? 'Stop Loading' : 'Toggle IsLoading'}
              </Button>
            </div>

            {/* Button Variants Grid */}
            <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)] mb-3">
                  Button Variants (Primary, Secondary, Outline, Ghost, Text, Danger, Success)
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="primary" isLoading={btnLoading} showArrow arrowType="up-right">
                    Primary Button
                  </Button>
                  <Button variant="secondary" isLoading={btnLoading}>
                    Secondary Button
                  </Button>
                  <Button variant="outline" isLoading={btnLoading}>
                    Outline Button
                  </Button>
                  <Button variant="ghost" isLoading={btnLoading}>
                    Ghost Button
                  </Button>
                  <Button variant="text" isLoading={btnLoading}>
                    Text Link
                  </Button>
                  <Button variant="danger" isLoading={btnLoading}>
                    Danger Button
                  </Button>
                  <Button variant="success" isLoading={btnLoading}>
                    Success Button
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled State
                  </Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div className="pt-6 border-t border-[var(--gds-color-border-subtle)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)] mb-3">
                  Button Sizes (XS, SM, MD, LG, XL)
                </h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button variant="primary" size="xs">XS Button</Button>
                  <Button variant="primary" size="sm">SM Button</Button>
                  <Button variant="primary" size="md">MD (Default)</Button>
                  <Button variant="primary" size="lg">LG Button</Button>
                  <Button variant="primary" size="xl">XL Button</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Form Controls & Inputs */}
          <section id="inputs" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Form Engine</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-FORM-06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Input, Select, Textarea, Checkbox, Radio & Switch
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Text Inputs & Search */}
              <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-5">
                <h3 className="text-sm font-bold text-[var(--gds-color-text-primary)] uppercase tracking-wider">
                  Text Inputs & States
                </h3>

                <Input
                  label="Agency Project Title"
                  value={textInputVal}
                  onChange={(e) => setTextInputVal(e.target.value)}
                  placeholder="Enter project name..."
                  helperText="Default brand state with active focus ring"
                  onClear={() => setTextInputVal('')}
                />

                <Input
                  label="Account Email"
                  type="email"
                  defaultValue="client@brand.com"
                  state="success"
                  helperText="Verified client account address"
                />

                <Input
                  label="Password Input"
                  type="password"
                  defaultValue="SecretGetupToken2026"
                  helperText="Includes secure eye toggle reveal"
                />

                <Textarea
                  label="Campaign Delivery Notes"
                  value={textareaVal}
                  onChange={(e) => setTextareaVal(e.target.value)}
                  rows={3}
                  helperText="Multi-line briefing instructions for creative editors"
                />

                <Input
                  label="Validation Error State"
                  defaultValue="invalid_format"
                  errorMessage="Please enter a valid format for campaign URL"
                />
              </div>

              {/* Dropdowns, Checkbox, Radio & Switch */}
              <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-5">
                <h3 className="text-sm font-bold text-[var(--gds-color-text-primary)] uppercase tracking-wider">
                  Select, Radio & Toggles
                </h3>

                <Select
                  label="Core Service Capability"
                  value={selectVal}
                  onChange={setSelectVal}
                  options={[
                    { label: 'Meta & Performance Ads', value: 'meta' },
                    { label: 'Viral Short-Form Content', value: 'content' },
                    { label: 'End-to-End Growth Engine', value: 'growth' },
                    { label: 'Getup Photo Production', value: 'photo' },
                  ]}
                />

                <MultiSelect
                  label="Campaign Channels (Multi-Select)"
                  value={multiSelectVals}
                  onChange={setMultiSelectVals}
                  options={[
                    { label: 'Meta Ads', value: 'meta' },
                    { label: 'Google Search', value: 'google' },
                    { label: 'Viral Content', value: 'content' },
                    { label: 'YouTube Shorts', value: 'youtube' },
                  ]}
                />

                <RadioGroup
                  name="service-tier"
                  label="Subscription Tier"
                  value={radioVal}
                  onChange={setRadioVal}
                  options={[
                    { label: 'Standard Marketing', value: 'standard', description: 'Essential ad funnel setup' },
                    { label: 'Growth Pro Partner', value: 'pro', description: 'Complete Meta + Content engine' },
                  ]}
                />

                <div className="pt-2 border-t border-[var(--gds-color-border-subtle)] space-y-3">
                  <Switch
                    checked={switchChecked}
                    onChange={setSwitchChecked}
                    label="Automated Analytics Reporting"
                    description="Deliver weekly PDF audit reports to client email"
                  />

                  <Checkbox
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                    label="Accept Getup SLA & Growth Guidelines"
                    description="Guaranteed account review within 24 business hours"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Cards Gallery */}
          <section id="cards" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Surface System</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-CARD-07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Card Gallery & Visual Character
              </h2>
              <p className="text-sm text-[var(--gds-color-text-muted)] mt-1">
                Cards inherit Getup's signature rounded-2xl curvature, subtle border tone, and ambient hover elevation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature Card */}
              <FeatureCard
                icon={TrendingUp}
                title="Performance Funnels"
                description="Engineered Meta & Google campaigns built around audited cost-per-acquisition targets."
                index={0}
              />

              {/* Stat Card */}
              <StatCard
                label="Campaign Reach"
                value="2.39L+"
                change="+184%"
                subtext="Verified audit for Siva Biryani Meta Campaign"
                icon={Users}
              />

              {/* Pricing Card */}
              <PricingCard
                name="Growth Engine"
                price="₹45,000"
                period="/month"
                description="Comprehensive digital marketing & content architecture."
                isPopular
                features={[
                  'Full Meta & Google Ad Management',
                  '12 High-Converting Reels / Month',
                  'Bi-Weekly Audited Performance Calls',
                ]}
                ctaText="Start Partnership"
              />
            </div>

            {/* Project Card Showcase */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)] mb-4">
                Project & Case Study Card
              </h4>
              <div className="max-w-md">
                <ProjectCard
                  title="Siva Biryani Erode Meta Expansion"
                  category="RESTAURANT GROWTH"
                  image="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
                  results="Scaled footfalls across Erode with targeted geo-radius Meta video ads."
                  metrics={[
                    { label: 'Unique Reach', value: '2.39L+' },
                    { label: 'Active Creatives', value: '6 Ads' },
                  ]}
                  href="/case-study/siva-biryani"
                />
              </div>
            </div>
          </section>

          {/* Section 8: Tabs & Navigation */}
          <section id="navigation-tabs" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Navigation Patterns</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-NAV-08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Tabs & Pill Navigation
              </h2>
            </div>

            <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-6">
              {/* Line Tabs */}
              <div>
                <div className="text-xs font-bold text-[var(--gds-color-text-muted)] uppercase mb-3">Line Tabs</div>
                <Tabs
                  variant="line"
                  activeTab={activeTab}
                  onChange={setActiveTab}
                  tabs={[
                    { label: 'Overview', value: 'overview', badge: <Badge size="sm" variant="green">New</Badge> },
                    { label: 'Analytics Proof', value: 'analytics' },
                    { label: 'Deliverables', value: 'deliverables' },
                    { label: 'Settings', value: 'settings' },
                  ]}
                />
              </div>

              {/* Pill Tabs */}
              <div className="pt-4 border-t border-[var(--gds-color-border-subtle)]">
                <div className="text-xs font-bold text-[var(--gds-color-text-muted)] uppercase mb-3">Pill Tabs (Getup Signature Style)</div>
                <Tabs
                  variant="pill"
                  activeTab={activeTab}
                  onChange={setActiveTab}
                  tabs={[
                    { label: 'Overview', value: 'overview' },
                    { label: 'Analytics Proof', value: 'analytics' },
                    { label: 'Deliverables', value: 'deliverables' },
                  ]}
                />
              </div>

              {/* Enclosed Tabs */}
              <div className="pt-4 border-t border-[var(--gds-color-border-subtle)]">
                <div className="text-xs font-bold text-[var(--gds-color-text-muted)] uppercase mb-3">Enclosed Tabs</div>
                <Tabs
                  variant="enclosed"
                  activeTab={activeTab}
                  onChange={setActiveTab}
                  tabs={[
                    { label: 'Overview', value: 'overview' },
                    { label: 'Analytics Proof', value: 'analytics' },
                    { label: 'Deliverables', value: 'deliverables' },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* Section 9: Feedback & Overlays */}
          <section id="feedback" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Feedback System</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-FEEDBACK-09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Toasts, Alerts, Dropdowns & Tooltips
              </h2>
            </div>

            {/* Live Interactive Trigger Controls */}
            <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)] mb-3">
                  Live Toast Notification Triggers
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => success('Campaign Published', 'Your Meta ad set is now actively running with 0 errors.')}
                  >
                    Trigger Success Toast
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => error('Budget Limit Exceeded', 'Account billing threshold was reached. Update payment method.')}
                  >
                    Trigger Error Toast
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => warning('Sync Pending', 'Google Ads reporting has a 4-hour data latency.')}
                  >
                    Trigger Warning Toast
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => info('New Feature Available', 'Getup Photo export batching is now enabled for all users.')}
                  >
                    Trigger Info Toast
                  </Button>
                </div>
              </div>

              {/* Overlays Live Triggers */}
              <div className="pt-6 border-t border-[var(--gds-color-border-subtle)]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)] mb-3">
                  Modal, Drawer, Dropdown & Tooltip
                </h4>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
                    Open Demo Modal
                  </Button>
                  <Button variant="outline" size="md" onClick={() => setIsDrawerOpen(true)}>
                    Open Slide-Over Drawer
                  </Button>

                  <Dropdown
                    trigger={
                      <Button variant="secondary" size="md" iconEnd={SlidersHorizontal}>
                        Dropdown Menu
                      </Button>
                    }
                    items={[
                      { label: 'Export Campaign PDF', onClick: () => success('Exporting PDF...') },
                      { label: 'Duplicate Campaign', onClick: () => info('Duplicating ad set...') },
                      'divider',
                      { label: 'Archive Campaign', destructive: true, onClick: () => error('Archived') },
                    ]}
                  />

                  <Tooltip content="Verified by Meta Ads API v21.0" position="top">
                    <span className="text-xs font-semibold text-[#008000] border-b border-dashed border-[#008000] cursor-help">
                      Hover for Tooltip
                    </span>
                  </Tooltip>
                </div>
              </div>

              {/* Inline Alerts */}
              <div className="pt-6 border-t border-[var(--gds-color-border-subtle)] space-y-3">
                <Alert
                  variant="success"
                  title="Audited Transparent Performance"
                  description="All campaign metrics are directly sourced from Meta Ads Manager verified exports."
                />
                <Alert
                  variant="warning"
                  title="Scheduled Maintenance Notice"
                  description="Getup Studio API will be under maintenance Sunday 02:00 AM - 04:00 AM IST."
                />
              </div>
            </div>
          </section>

          {/* Section 10: Data Display & Table */}
          <section id="data-display" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Data Display</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-DATA-10</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Data Tables, Badges & Avatars
              </h2>
              <p className="text-sm text-[var(--gds-color-text-muted)] mt-1">
                Optimized for dense business data, reports, and Getup Photo asset management.
              </p>
            </div>

            {/* Interactive Data Table */}
            <div className="space-y-4">
              <Table
                data={sampleTableData}
                keyExtractor={(item) => item.id}
                columns={[
                  {
                    header: 'Campaign Name',
                    accessor: (item) => (
                      <div className="font-bold text-[var(--gds-color-text-primary)]">
                        {item.name}
                      </div>
                    ),
                  },
                  {
                    header: 'Platform',
                    accessor: (item) => (
                      <Badge variant="neutral" size="sm">{item.platform}</Badge>
                    ),
                  },
                  {
                    header: 'Reach',
                    accessor: (item) => <span className="font-mono font-semibold">{item.reach}</span>,
                  },
                  {
                    header: 'CTR',
                    accessor: (item) => <span className="font-mono text-[#008000] font-bold">{item.ctr}</span>,
                  },
                  {
                    header: 'Status',
                    accessor: (item) => (
                      <Badge
                        variant={item.status === 'Active' ? 'green' : item.status === 'Completed' ? 'neutral' : 'warning'}
                        size="sm"
                        dot
                      >
                        {item.status}
                      </Badge>
                    ),
                  },
                ]}
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-[var(--gds-color-text-muted)]">
                  Showing 5 of 24 active campaign records
                </span>
                <Pagination
                  currentPage={tablePage}
                  totalPages={5}
                  onPageChange={setTablePage}
                />
              </div>
            </div>

            {/* Avatars & Badges Gallery */}
            <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)]">
                Avatar Sizes & Grouping (Getup Photo & Agency Team)
              </h4>
              <div className="flex flex-wrap items-center gap-6">
                <Avatar name="Velmurugan" size="xs" status="online" />
                <Avatar name="Dhanush" size="sm" status="online" />
                <Avatar name="Rohit" size="md" status="away" />
                <Avatar name="Getup Creative" size="lg" status="online" />
                <Avatar name="Siva Biryani" size="xl" status="busy" />

                <div className="pl-4 border-l border-[var(--gds-color-border-subtle)]">
                  <AvatarGroup max={4} size="md">
                    <Avatar name="Velmurugan" />
                    <Avatar name="Dhanush" />
                    <Avatar name="Rohit" />
                    <Avatar name="Shivani" />
                    <Avatar name="Client A" />
                    <Avatar name="Client B" />
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </section>

          {/* Section 11: Loading & Empty States */}
          <section id="loading-empty" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">States & Resilience</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-STATE-11</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Progress, Skeletons & Empty States
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Skeletons & Progress */}
              <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)]">
                  Progress Indicators
                </h4>

                <Progress value={progressVal} showLabel />

                <div className="flex items-center space-x-6 pt-2">
                  <CircularProgress value={progressVal} size={54} />
                  <CircularProgress isIndeterminate size={54} />
                  <div className="flex-1 space-y-2">
                    <span className="text-xs text-[var(--gds-color-text-muted)]">Adjust Progress:</span>
                    <div className="flex gap-2">
                      <Button size="xs" variant="outline" onClick={() => setProgressVal(Math.max(0, progressVal - 15))}>-15%</Button>
                      <Button size="xs" variant="outline" onClick={() => setProgressVal(Math.min(100, progressVal + 15))}>+15%</Button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--gds-color-border-subtle)] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)]">
                    Shimmer Card Skeleton
                  </h4>
                  <SkeletonCard />
                </div>
              </div>

              {/* Empty States */}
              <div className="space-y-4">
                <EmptyState
                  variant="no-projects"
                  title="No Active Campaigns Found"
                  description="You have not launched any Meta or Google campaigns yet. Start your first growth engine today."
                  primaryActionText="Create Campaign"
                  secondaryActionText="View Guidelines"
                />

                <EmptyState
                  variant="no-photos"
                  title="No Photos in Album"
                  description="Upload your high-resolution event or studio photographs to Getup Photo to begin sorting."
                  primaryActionText="Upload Photos"
                />
              </div>
            </div>
          </section>

          {/* Section 12: Reusable Patterns */}
          <section id="patterns" className="scroll-mt-24 space-y-8">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Design Patterns</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-PATTERN-12</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Reusable Patterns (Hero, CTA, Search)
              </h2>
            </div>

            {/* Pattern Preview: Search */}
            <div className="p-6 rounded-[var(--gds-radius-xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gds-color-text-muted)]">
                Search Input with Quick Filters
              </h4>
              <SearchInput
                value={searchVal}
                onChange={setSearchVal}
                filterChips={['All', 'Meta Campaigns', 'Reels', 'Photo Albums', 'Client Docs']}
                activeFilter="All"
              />
            </div>

            {/* Pattern Preview: CTA Banner */}
            <CtaBanner
              badgeText="STRATEGIC DIGITAL EXPANSION"
              title="Scale Your Brand with Accountable Performance"
              description="Getup Digital Solution blends high-impact creative production with disciplined mathematical funnels to drive real business growth."
              primaryButtonText="Book Free Audit"
              secondaryButtonText="Explore Case Studies"
            />

            {/* Pattern Preview: CTA Card */}
            <CtaCard
              title="Looking to automate photography selection?"
              description="Discover Getup Photo — our proprietary platform designed for seamless event and studio client delivery."
              buttonText="Explore Getup Photo"
            />
          </section>

          {/* Section 13: Multi-Product Architecture */}
          <section id="architecture" className="scroll-mt-24 space-y-6">
            <div className="border-b border-[var(--gds-color-border)] pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="green" size="sm">Architecture</Badge>
                <span className="text-xs text-[var(--gds-color-text-muted)] font-mono">GDS-ARCH-13</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gds-color-text-primary)]">
                Multi-Product Separation of Concerns
              </h2>
            </div>

            <div className="p-7 rounded-[var(--gds-radius-2xl)] border border-[var(--gds-color-border)] bg-[var(--gds-color-surface)] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
                <div className="p-4 rounded-xl bg-[var(--gds-color-background-secondary)] border border-[var(--gds-color-border)]">
                  <div className="text-xs font-mono font-bold text-[#008000]">LEVEL 1</div>
                  <div className="font-extrabold text-sm text-[var(--gds-color-text-primary)] mt-1">GETUP BRAND</div>
                  <div className="text-[11px] text-[var(--gds-color-text-muted)] mt-1">#008000 • Montserrat</div>
                </div>
                <div className="flex items-center justify-center text-[var(--gds-color-text-muted)] font-bold">→</div>
                <div className="p-4 rounded-xl bg-[var(--gds-color-background-secondary)] border border-[var(--gds-color-border)]">
                  <div className="text-xs font-mono font-bold text-[#008000]">LEVEL 2</div>
                  <div className="font-extrabold text-sm text-[var(--gds-color-text-primary)] mt-1">DESIGN TOKENS</div>
                  <div className="text-[11px] text-[var(--gds-color-text-muted)] mt-1">CSS Vars • Spacing • Colors</div>
                </div>
                <div className="flex items-center justify-center text-[var(--gds-color-text-muted)] font-bold">→</div>
                <div className="p-4 rounded-xl bg-[#F0FDF4] dark:bg-[#008000]/15 border border-[#008000]/30">
                  <div className="text-xs font-mono font-bold text-[#008000]">LEVEL 3</div>
                  <div className="font-extrabold text-sm text-[#008000] mt-1">PRODUCTS</div>
                  <div className="text-[11px] text-[var(--gds-color-text-muted)] mt-1">Website & Getup Photo</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs leading-relaxed overflow-x-auto">
                <span className="text-neutral-500">// Example: In Getup Photo, consume design system directly:</span><br />
                <span className="text-purple-400">import</span> &#123; Button, Card, Table, Modal, useToast &#125; <span className="text-purple-400">from</span> <span className="text-green-400">'@/design-system'</span>;<br /><br />
                <span className="text-neutral-500">// Zero reinventing of brand colors, fonts, or interactive states.</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Interactive Demo Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Getup Design System Modal"
        description="Accessible dialog with keyboard ESC dismissal and smooth backdrop blur."
        footer={
          <>
            <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setIsModalOpen(false);
                success('Action Confirmed', 'The modal action was completed successfully.');
              }}
            >
              Confirm Action
            </Button>
          </>
        }
      >
        <p className="text-sm text-[var(--gds-color-text-secondary)] leading-relaxed">
          This modal dialog conforms to ARIA accessibility guidelines, traps focus, 
          disables background document scrolling, and supports seamless keyboard dismissal.
        </p>
      </Modal>

      {/* Interactive Demo Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Side Drawer Panel"
        footer={
          <Button variant="primary" fullWidth size="md" onClick={() => setIsDrawerOpen(false)}>
            Close Drawer
          </Button>
        }
      >
        <div className="space-y-4">
          <p className="text-sm text-[var(--gds-color-text-secondary)] leading-relaxed">
            Slide-over drawers are ideal for mobile navigation, filtration bars, detail sidebars, 
            and photo gallery inspect panes.
          </p>
          <Input label="Filter Tags" placeholder="Search categories..." />
        </div>
      </Drawer>
    </div>
  );
};

export default DesignSystemPage;
