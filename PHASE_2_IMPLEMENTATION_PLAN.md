# Phase 2 Implementation Plan - Visual Components

## Quick Start for New Conversation

**Prompt to use in new conversation:**
```
I need to continue with Phase 2 of my biochar system diagram refactoring. 
Please read: poultry-biochar-tool/PHASE_2_IMPLEMENTATION_PLAN.md

Phase 1 (Data Layer) is complete. Now I need to implement Phase 2 (Visual Components) 
which refactors the existing diagram components to use the data-driven architecture.
```

---

## Phase 1 Completion Summary ✅

### What Was Built
1. **Type System** - [`types/system-comparison.ts`](types/system-comparison.ts)
2. **Data Hook** - [`hooks/useSystemData.tsx`](hooks/useSystemData.tsx)
3. **Icon Mapping** - [`lib/iconMapping.ts`](lib/iconMapping.ts)
4. **Flow Generation** - [`lib/flowGeneration.ts`](lib/flowGeneration.ts)
5. **Documentation** - [`lib/DATA_LAYER_README.md`](lib/DATA_LAYER_README.md)

### Icons Organized
- 25 icons copied to `public/images/system-icons/`
- Organized by category: components, inputs, intermediate, outputs, energy
- All icons renamed from timestamps to descriptive names

### Data Files
- [`data/system/system-comparison.json`](data/system/system-comparison.json) - Master data source
- [`data/system/icon-mapping.json`](data/system/icon-mapping.json) - Icon reference

---

## Phase 2: Visual Components Implementation

### Goal
Transform hardcoded diagrams into data-driven visualizations that automatically update from `system-comparison.json`.

### Files to Modify/Create

#### 1. Refactor SystemDiagram.tsx
**File:** `components/system/SystemDiagram.tsx`  
**Current State:** Hardcoded flow paths and positions  
**Target State:** Data-driven using `useSystemData()` hook

**Implementation Steps:**
```typescript
// 1. Import data layer
import { useSystemData } from '@/hooks/useSystemData';
import { generateDiagram, calculateFlowMetrics } from '@/lib/flowGeneration';

// 2. Use hook to get data
const {
  getActiveComponents,
  data,
  findConnections,
  currentView
} = useSystemData();

// 3. Generate diagram
const diagram = useMemo(() => {
  return generateDiagram(
    currentView,
    getActiveComponents,
    data.components,
    findConnections
  );
}, [currentView, getActiveComponents, findConnections]);

// 4. Render components from diagram.components array
diagram.components.map(comp => (
  <ComponentBox
    key={comp.id}
    id={comp.id}
    name={comp.name}
    position={{ left: `${comp.x}px`, top: `${comp.y}px` }}
  />
))

// 5. Render flows from diagram.flows array
diagram.flows.map(flow => (
  <AnimatedIcon
    key={flow.id}
    iconPath={flow.iconPath}
    color={flow.color}
    label={flow.label}
    // Calculate path from positions
  />
))
```

**Key Changes:**
- Remove hardcoded positions
- Remove hardcoded flow paths
- Use `diagram.components` for component placement
- Use `diagram.flows` for animated flows
- Keep existing animations and hover effects

#### 2. Update SankeyDiagram.tsx
**File:** `components/d3/SankeyDiagram.tsx`  
**Current State:** Hardcoded data  
**Target State:** Load from `useSystemData()`

**Implementation Steps:**
```typescript
// 1. Import hook
import { useSystemData } from '@/hooks/useSystemData';

// 2. Get data
const {
  getComponentInputs,
  getComponentOutputs,
  findConnections,
  getActiveComponents
} = useSystemData();

// 3. Build nodes from active components
const nodes = getActiveComponents.map(id => {
  const component = getComponent(id);
  return {
    id,
    label: component.name,
    // Calculate value from inputs/outputs
  };
});

// 4. Build links from connections
const links = findConnections.map(conn => ({
  source: conn.source,
  target: conn.target,
  value: estimateFlowQuantity(conn.material),
  label: conn.material
}));
```

**Key Changes:**
- Replace `currentPracticeData` with generated nodes/links
- Replace `proposedSystemData` with generated nodes/links
- Keep D3 visualization logic
- Maintain smooth transitions

#### 3. Create ComparisonView Component
**New File:** `components/system/ComparisonView.tsx`

**Purpose:** Side-by-side comparison for subsystem pages

**Structure:**
```typescript
interface ComparisonViewProps {
  componentId: string;
}

export function ComparisonView({ componentId }: ComparisonViewProps) {
  const { getComponent, currentView } = useSystemData();
  const component = getComponent(componentId);
  
  if (!component) return null;
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Current System Column */}
      <div className="border-l-4 border-red-500">
        <h3>Current Practice</h3>
        <ComponentDetails view={component.current} />
      </div>
      
      {/* Proposed System Column */}
      <div className="border-l-4 border-green-600">
        <h3>Proposed System</h3>
        <ComponentDetails view={component.proposed} />
      </div>
    </div>
  );
}

function ComponentDetails({ view }: { view: SystemView }) {
  return (
    <>
      <ActionsList actions={view.actions} />
      <InputsGrid inputs={view.inputs} />
      <OutputsGrid outputs={view.outputs} />
      <ImpactsList impacts={view.impacts} />
      <FinancialSummary text={view.financialImplications} />
    </>
  );
}
```

**Features:**
- Side-by-side current vs proposed
- Icon grids for inputs/outputs
- Impact badges (benefits in green, detriments in red)
- Financial implications summary

#### 4. Update Subsystem Pages
**Files:** `src/app/[component]/page.tsx`

**Changes:**
```typescript
import { ComparisonView } from '@/components/system/ComparisonView';

export default function ComponentPage({ params }: { params: { component: string } }) {
  return (
    <div>
      <ComponentHeader componentId={params.component} />
      <ComparisonView componentId={params.component} />
    </div>
  );
}
```

---

## Implementation Order

### Step 1: Test Data Layer (Quick validation)
```typescript
// Create test file: __tests__/data-layer.test.tsx
import { useSystemData } from '@/hooks/useSystemData';

// Verify:
// - Data loads correctly
// - Connections are found
// - Icons resolve
```

### Step 2: ComparisonView Component (Easiest)
- Create new component
- Build side-by-side layout
- Add icon grids
- Test on one subsystem page

### Step 3: SankeyDiagram (Medium complexity)
- Replace hardcoded data
- Keep D3 visualization
- Test transitions

### Step 4: SystemDiagram (Most complex)
- Refactor to data-driven
- Maintain animations
- Test both views

---

## Testing Checklist

After each implementation:
- [ ] Current view shows 3 components
- [ ] Proposed view shows 5 components
- [ ] Toggle switch works smoothly
- [ ] Icons display correctly
- [ ] Flows connect properly
- [ ] Hover tooltips work
- [ ] Mobile responsive
- [ ] No TypeScript errors

---

## Success Criteria

Phase 2 is complete when:
1. ✅ SystemDiagram uses `useSystemData()` hook
2. ✅ All flows generated from `findConnections()`
3. ✅ Icons resolved from `iconMapping`
4. ✅ SankeyDiagram loads from data
5. ✅ ComparisonView component created
6. ✅ At least one subsystem page uses ComparisonView
7. ✅ All existing animations preserved
8. ✅ No hardcoded positions or paths

---

## Files Reference

### Data Layer (Don't modify)
- `types/system-comparison.ts`
- `hooks/useSystemData.tsx`
- `lib/iconMapping.ts`
- `lib/flowGeneration.ts`

### To Modify
- `components/system/SystemDiagram.tsx`
- `components/d3/SankeyDiagram.tsx`
- `src/app/[component]/page.tsx`

### To Create
- `components/system/ComparisonView.tsx`
- `components/system/InputsGrid.tsx` (optional helper)
- `components/system/OutputsGrid.tsx` (optional helper)
- `components/system/ImpactsList.tsx` (optional helper)

---

## Next Phase Preview

### Phase 3: Detail Pages & Polish
- Enhance subsystem detail pages
- Add metrics visualization
- Implement "Learn More" links
- Add animation polish
- Create hover state enhancements

---

## Questions to Ask in New Conversation

1. "Should I start with the easiest (ComparisonView) or most important (SystemDiagram)?"
2. "Do you want to see the code before I apply it, or should I implement directly?"
3. "Should I preserve 100% of existing animations or can I simplify some?"

---

## Emergency Rollback

If Phase 2 breaks something:
```bash
git checkout -- components/system/SystemDiagram.tsx
git checkout -- components/d3/SankeyDiagram.tsx
```

Phase 1 data layer will remain intact and functional.