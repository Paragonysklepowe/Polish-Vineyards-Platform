import { z } from 'zod';

const vineyardSchema = z.object({
  name: z.string().min(2).max(100),
  location: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    address: z.string().min(5),
    elevation: z.number().min(0),
  }),
  size: z.object({
    hectares: z.number().positive(),
    rows: z.number().positive(),
  }),
  soil: z.object({
    type: z.string(),
    ph: z.number().min(0).max(14),
    composition: z.array(z.string()),
  }),
});

export function useDataValidation() {
  const validateVineyard = async (data: unknown) => {
    try {
      return await vineyardSchema.parseAsync(data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(error.errors.map(e => e.message).join(', '));
      }
      throw error;
    }
  };

  return {
    validateVineyard,
  };
}