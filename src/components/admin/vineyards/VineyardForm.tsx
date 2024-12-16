import React, { useState } from 'react';
import { Save, Loader2 } from 'lucide-react';
import { useDataValidation } from '../../../hooks/useDataValidation';
import { useAuditLogger } from '../../../hooks/useAuditLogger';
import type { VineyardDetails } from '../../../types/vineyard-management';

interface VineyardFormProps {
  vineyard?: VineyardDetails;
  onSubmit: (data: VineyardDetails) => Promise<void>;
}

export const VineyardForm: React.FC<VineyardFormProps> = ({ vineyard, onSubmit }) => {
  const [formData, setFormData] = useState<Partial<VineyardDetails>>(vineyard || {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  
  const { validateVineyard } = useDataValidation();
  const { logAction } = useAuditLogger();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const validatedData = await validateVineyard(formData);
      await onSubmit(validatedData as VineyardDetails);
      
      await logAction(
        vineyard ? 'update' : 'create',
        'vineyard',
        vineyard?.id || 'new',
        {
          ...formData,
        }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Vineyard Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
            Latitude
          </label>
          <input
            type="number"
            id="latitude"
            step="any"
            value={formData.location?.latitude || ''}
            onChange={(e) => 
              setFormData({
                ...formData,
                location: {
                  ...formData.location,
                  latitude: parseFloat(e.target.value),
                },
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
            required
          />
        </div>

        <div>
          <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
            Longitude
          </label>
          <input
            type="number"
            id="longitude"
            step="any"
            value={formData.location?.longitude || ''}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: {
                  ...formData.location,
                  longitude: parseFloat(e.target.value),
                },
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
            required
          />
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#722F37] hover:bg-[#8B4513] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#722F37] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Vineyard
            </>
          )}
        </button>
      </div>
    </form>
  );
};