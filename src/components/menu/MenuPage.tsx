import React from 'react';
import { MenuSection } from './MenuSection';
import { wines, tastings, foodItems } from '../../data/menu';

export const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#722F37] mb-4">Our Menu</h1>
            <p className="text-gray-600">
              Discover our selection of fine wines, tasting experiences, and seasonal dishes
            </p>
          </div>

          <MenuSection
            title="Wine Selection"
            description="Carefully curated wines from our vineyard"
            items={wines}
            type="wine"
          />

          <MenuSection
            title="Wine Tasting Experiences"
            description="Guided tastings by our expert sommeliers"
            items={tastings}
            type="tasting"
          />

          <MenuSection
            title="Seasonal Kitchen"
            description="Fresh, local ingredients prepared with care"
            items={foodItems}
            type="food"
          />
        </div>
      </div>
    </div>
  );
};