import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, GraduationCap, Sparkles, Shield, Users } from 'lucide-react';
import CombinedFeaturedSection from "../components/ui/combined-featured-section";

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Our Programs - KAWEESA CHILDREN'S MINISTRIES</title>
        <meta name="description" content="Explore our comprehensive programs in Education, Health, Protection, and Family Empowerment in Uganda." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <PageHeader
          title="Our Impact Programs"
          subtitle="Holistic support for children and families in Uganda"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
        />

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Nurturing Potential</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our programs are designed to address the foundational needs of children, ensuring they have the tools and support necessary to build a better future for themselves and their communities.
              </p>
              <ul className="space-y-4">
                {[
                  "Quality Education & School Supplies",
                  "Nutritional Support & Medical Care",
                  "Safe Environments & Protection",
                  "Family Economic Empowerment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400" alt="Education" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" alt="Children" className="rounded-3xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <GraduationCap className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-4">Education</h3>
              <p className="text-gray-600 mb-6">Providing school fees, uniforms, and scholastic materials for over 90 children.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <Sparkles className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-4">Health</h3>
              <p className="text-gray-600 mb-6">Regular health screenings, immunizations, and nutritional support programs.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-4">Protection</h3>
              <p className="text-gray-600 mb-6">Ensuring children grow up in safe, nurturing environments free from harm.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl">
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-4">Family</h3>
              <p className="text-gray-600 mb-6">Empowering 45+ families through small business grants and skills training.</p>
            </div>
          </div>
        </section>

        <CombinedFeaturedSection />
      </div>
    </>
  );
};

export default Programs;
