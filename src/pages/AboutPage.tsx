import React from 'react';
import { Wine, Award, Users, Target } from 'lucide-react';
import { TeamMember } from '../components/about/TeamMember';

const teamMembers = [
  {
    name: 'Anna Kowalska',
    role: 'Founder & CEO',
    bio: 'With over 20 years of experience in viticulture, Anna has been instrumental in developing the Polish wine industry.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Piotr Nowak',
    role: 'Head Sommelier',
    bio: 'A certified sommelier with expertise in both international and Polish wines, leading our tasting programs.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Maria Wiśniewska',
    role: 'Marketing Director',
    bio: 'Bringing Polish wines to the global stage through innovative marketing strategies and brand development.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#722F37] mb-6">About Polish Vineyards</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Connecting wine enthusiasts with Poland's finest vineyards, we're dedicated to promoting
            the rich heritage and growing excellence of Polish wines.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-[#722F37]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To showcase and support the growing Polish wine industry while providing wine enthusiasts
              with authentic and memorable experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-[#722F37]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Quality, authenticity, and sustainability guide everything we do, from vineyard
              partnerships to customer experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Wine className="h-12 w-12 text-[#722F37]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To establish Poland as a recognized wine region and create a thriving community of
              wine lovers and producers.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 mb-6">
              Founded in 2020, Polish Vineyards emerged from a passion for showcasing the untapped
              potential of Polish wines. What began as a small directory of local vineyards has grown
              into a comprehensive platform connecting wine enthusiasts with producers across the country.
            </p>
            <p className="text-gray-600">
              Today, we work with over 150 vineyards, organizing tastings, tours, and educational
              events that celebrate Polish wine culture. Our commitment to quality and authenticity
              has helped establish Polish wines in the international wine community.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center mb-8">
            <Users className="h-8 w-8 text-[#722F37] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};