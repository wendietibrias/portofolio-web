import { type SchemaTypeDefinition } from 'sanity';
import category from './schemas/category';
import portofolio from './schemas/portofolio';
import skills from './schemas/skills';
import feedback from './schemas/feedback';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    portofolio,
    skills,
    feedback,
    category
  ],
}
