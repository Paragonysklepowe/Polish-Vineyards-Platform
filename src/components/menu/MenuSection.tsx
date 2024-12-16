import React from 'react';
import { Wine, Grape, UtensilsCrossed } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { MenuItem } from '../../types/menu';

interface MenuSectionProps {
  title: string;
  description?: string;
  items: MenuItem[];
  type: 'wine' | 'tasting' | 'food';
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  description,
  items,
  type,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'wine':
        return <Wine className="h-6 w-6 text-[#722F37]" />;
      case 'tasting':
        return <Grape className="h-6 w-6 text-[#722F37]" />;
      case 'food':
        return <UtensilsCrossed className="h-6 w-6 text-[#722F37]" />;
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        {getIcon()}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
          {description && (
            <p className="text-gray-600 mt-1">{description}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "bg-white rounded-lg p-6 shadow-sm",
              item.featured && "border-2 border-[#722F37]"
            )}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                  {item.featured && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#722F37] text-white">
                      Featured
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
                
                {item.allergens && item.allergens.length > 0 && (
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">Allergens: </span>
                    <span className="text-sm text-gray-600">
                      {item.allergens.join(', ')}
                    </span>
                  </div>
                )}
                
                {item.dietary && item.dietary.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {item.dietary.map((diet) => (
                      <span
                        key={diet}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-[#722F37]">
                  {typeof item.price === 'number'
                    ? `${item.price.toFixed(2)} zł`
                    : item.price}
                </span>
                {item.portion && (
                  <p className="text-sm text-gray-500 mt-1">{item.portion}</p>
                )}
              </div>
            </div>
            
            {item.seasonal && (
              <div className="mt-4 flex items-center gap-2 text-sm text-[#8B4513] bg-[#F7E7CE] px-3 py-1.5 rounded-full w-fit">
                <span className="font-medium">Seasonal</span>
                {item.availability && (
                  <span className="text-gray-600">
                    ({item.availability})
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};