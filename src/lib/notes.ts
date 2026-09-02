import type { CollectionEntry } from 'astro:content';
import { getSlug } from './categories';

export function getNotaSlug(nota: CollectionEntry<'notas'>): string {
  return nota.id.split('/').pop() ?? nota.id;
}

export function getNotaUrl(nota: CollectionEntry<'notas'>): string {
  return `/notas/${getSlug(nota.data.category)}/${getNotaSlug(nota)}/`;
}