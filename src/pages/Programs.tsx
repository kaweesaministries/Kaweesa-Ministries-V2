import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { GraduationCap, Sparkles, Shield, Users } from 'lucide-react';
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
          bgImage="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20Hero%20section%20best.jpeg"
        />

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Education Program: God’s Grace Primary and Infant School</h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Kaweesa Children’s Ministries, we believe that education is the foundation for a brighter future. Through our Education Program, we are proud to support <span className="text-primary font-semibold">God’s Grace Primary and Infant School</span>, where we currently provide quality education to over 100 children.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our mission is to ensure that every child, regardless of their background, has access to the tools they need to succeed. We provide not only academic instruction but also essential support, including school fees, uniforms, and scholastic materials.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  God’s Grace Primary and Infant School is more than just a place of learning; it is a center of hope and transformation. By investing in these young minds, we are not only changing individual lives but also strengthening the community as a whole.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium italic border-l-4 border-accent-lime pl-6">
                  "Together, we are creating a nurturing environment where children can dream big and achieve their full potential. We are grateful for the support of our donors and partners who make this possible."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(18).jpeg" alt="Education" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(19).jpeg" alt="Children" className="rounded-3xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <GraduationCap className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-4">Education</h3>
              <p className="text-gray-600 mb-6">Supporting God’s Grace Primary and Infant School with education for 100+ children.</p>
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
