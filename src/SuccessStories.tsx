import { Helmet } from 'react-helmet-async';
import PageHeader from './components/PageHeader';
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, MapPin } from 'lucide-react';

const stories = [
  {
    name: "Sarah Namukasa",
    title: "Sponsored Student",
    location: "Kampala, Uganda",
    quote: "Thanks to Kaweesa Ministries, I am now in Primary 5 and I want to be a doctor to help my community. I love my school and my teachers.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "John Musoke",
    title: "Vocational Graduate",
    location: "Wakiso, Uganda",
    quote: "The vocational training gave me the skills to start my own tailoring business. Now I can support my siblings and give back to the ministry.",
    img: "https://images.unsplash.com/photo-1540914124281-3425879aa73e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Emma Wilson",
    title: "Child Sponsor",
    location: "London, UK",
    quote: "Supporting a child through Kaweesa has been the most rewarding experience. Seeing Sarah thrive and hearing about her progress brings me so much joy.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Grace Nakato",
    title: "Community Member",
    location: "Luweero, Uganda",
    quote: "The health clinic saved my son's life when he had severe malaria. We are forever grateful for the ministry's care and presence in our village.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Peter Lule",
    title: "Student",
    location: "Kampala, Uganda",
    quote: "I am happy to be in school. I love learning new things every day with my friends. My favorite subject is Science.",
    img: "https://images.unsplash.com/photo-1526976668912-1a8123a8746a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "David Kato",
    title: "Youth Leader",
    location: "Wakiso, Uganda",
    quote: "The mentorship I received here transformed my perspective on life. Now I lead youth groups and encourage others to stay in school.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
  }
];

const SuccessStories = () => {
  return (
    <>
      <Helmet>
        <title>Impact Stories - KAWEESA CHILDREN'S MINISTRIES</title>
        <meta name="description" content="Read inspiring stories of transformation and hope from the children and families supported by Kaweesa Children's Ministries." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <PageHeader
          title="Impact Stories"
          subtitle="Real lives, real transformation, real hope"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
        />

        <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-white rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-accent-lime/20 border border-accent-lime/30 text-accent-lime font-bold px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4" /> FEATURED STORY
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">From Vulnerability to Vision: Sarah's Journey</h2>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-6 w-12 h-12 text-white/10" />
                  <p className="text-white/90 text-xl mb-10 leading-relaxed font-medium pl-6 border-l-4 border-accent-lime/50">
                    "Before I joined Kaweesa Ministries, I didn't think I would ever finish school. Now, I am in Primary 5 and dreaming of becoming a doctor. The ministry hasn't just given me an education; they've given me a family and a future."
                  </p>
                </div>
                <div className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 w-fit">
                  <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=200" alt="Sarah" className="w-20 h-20 rounded-full border-4 border-white/20 object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-xl text-white">Sarah Namukasa</p>
                    <p className="text-accent-lime font-medium">Sponsored Student</p>
                    <p className="text-white/60 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-accent-lime/20 to-transparent rounded-3xl transform rotate-6 scale-105 z-0"></div>
                 <img src="https://images.unsplash.com/photo-1524062731294-1735db9341a2?auto=format&fit=crop&q=80&w=800" alt="Sarah at school" className="rounded-3xl relative z-10 shadow-2xl border border-white/10 object-cover h-[500px] w-full" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Infinite Moving Cards Section */}
        <section className="py-24 bg-gray-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Voices of Our Community</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Hear directly from the children, families, and supporters who make this ministry possible.</p>
          </div>

          <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <InfiniteMovingCards
              items={stories}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCards
              items={stories.slice().reverse()}
              direction="left"
              speed="slow"
              className="mt-8"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessStories;
