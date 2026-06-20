import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import WorldMapDemo from '../components/WorldMapDemo';
import { Timeline } from '../components/ui/timeline';
import FinancialReadiness from "../components/v2/FinancialReadiness";
const AboutUs = () => {


  return (
    <>
      <Helmet>
        <title>About Us - KAWEESA CHILDREN'S MINISTRIES</title>
        <meta name="description" content="Learn about our mission to nurture, protect, and empower children in Uganda through comprehensive programs." />
      </Helmet>
      <div className="min-h-screen bg-white">
    <PageHeader
      title="Our Mission"
      subtitle="Transforming lives through love, care, and empowerment"
      bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
    />
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-8">Nurturing the next generation of Ugandan leaders.</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-12">
        KAWEESA CHILDREN'S MINISTRY LIMITED is a Ugandan foundation dedicated to improving the lives of children through education, health, protection, and community development programs. We believe every child deserves a chance to thrive and reach their full potential.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-12 mb-16">
        <div>
          <p className="font-display text-4xl text-primary mb-2">90+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Children Supported</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">4</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Communities Served</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">95%</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">School Enrollment</p>
        </div>
        <div>
          <p className="font-display text-4xl text-primary mb-2">45+</p>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Families Empowered</p>
        </div>
      </div>
    </section>

    <WorldMapDemo />

    <section className="py-24 px-6 max-w-7xl mx-auto">
      <FinancialReadiness />
    </section>

    <Timeline data={[
      {
        title: "2020",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              KAWEESA CHILDREN'S MINISTRIES was established in Kampala with a vision to provide a safe haven and quality education for vulnerable children.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                alt="Initial setup"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1524062731294-1735db9341a2?auto=format&fit=crop&q=80&w=800"
                alt="Community outreach"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2021",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              We reached our first 50 children through our education support program. We expanded our operations to Wakiso district and established our first mobile health clinic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800"
                alt="Education support"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
                alt="Health mission"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2022",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Launched the "Holistic Care" program, providing comprehensive medical and nutritional support. Our network of community volunteers grew to 100+, reaching rural areas of Luweero.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Nutrition program"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                alt="Community volunteers"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2023",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Empowered over 45 families through our sustainable livelihood projects. We established a vocational training center for older youth to gain practical skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
                alt="Vocational training"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
                alt="Family empowerment"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Today",
        content: (
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              With over 90 children under our care and a 95% school enrollment rate, we are continuing to expand our impact. We are now focusing on building a dedicated children's home and medical facility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=800"
                alt="Future home"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1502086223501-7ea2443d8447?auto=format&fit=crop&q=80&w=800"
                alt="Growing impact"
                className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
              />
            </div>
          </div>
        ),
      },
    ]} />


  </div>    </>

  );
};

export default AboutUs;
