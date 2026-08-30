export const CATEGORY_LABELS = [
  'SANTA SEDE',
  'FORMACIÓN',
  'LITURGIA',
  'BIBLIA',
  'TEOLOGIA',
  'SANTOS',
  'REFLEXIONES',
] as const;

export type CategoryLabel = typeof CATEGORY_LABELS[number];

const SLUG_MAP: Record<CategoryLabel, string> = {
  'SANTA SEDE': 'santa-sede',
  'FORMACIÓN': 'formacion',
  'LITURGIA': 'liturgia',
  'BIBLIA': 'biblia',
  'TEOLOGIA': 'teologia',
  'SANTOS': 'santos',
  'REFLEXIONES': 'reflexiones',
};

export function getSlug(label: CategoryLabel): string {
  return SLUG_MAP[label];
}

export function getLabelBySlug(slug: string): CategoryLabel | undefined {
  return CATEGORY_LABELS.find((label) => SLUG_MAP[label] === slug);
}