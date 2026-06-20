import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Sparkles } from "lucide-react";

const stories = [
  {
    quote: "Thanks to Kaweesa Ministries, I am now in Primary 5 and I want to be a doctor to help my community.",
    name: "Sarah Namukasa",
    title: "Sponsored Student",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400",
    location: "Kampala, Uganda"
  },
  {
    quote: "The vocational training gave me the skills to start my own tailoring business. Now I can support my siblings.",
    name: "John Musoke",
    title: "Vocational Graduate",
    img: "https://images.unsplash.com/photo-1540914124281-3425879aa73e?auto=format&fit=crop&q=80&w=400",
    location: "Wakiso, Uganda"
  },
  {
    quote: "Supporting a child through Kaweesa has been the most rewarding experience. Seeing Sarah thrive brings me so much joy.",
    name: "Emma Wilson",
    title: "Child Sponsor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    location: "London, UK"
  },
  {
    quote: "The health clinic saved my son's life when he had severe malaria. We are forever grateful for the ministry's care.",
    name: "Grace Nakato",
    title: "Community Member",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=400",
    location: "Luweero, Uganda"
  },
  {
    quote: "I am happy to be in school. I love learning new things every day with my friends.",
    name: "Peter Lule",
    title: "Student",
    img: "https://images.unsplash.com/photo-1526976668912-1a8123a8746a?auto=format&fit=crop&q=80&w=400",
    location: "Kampala, Uganda"
  }
];

const FoundersCircle = () => {
  return (
    <section className="py-24 bg-white dark:bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider mb-6 border border-primary/10">
              <Sparkles className="w-3 h-3" /> Our Impact
            </div>
            <h2 className="text-5xl md:text-6xl font-display text-primary dark:text-white mb-6">
              Our <br/> <span className="text-gray-400">Community.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Real stories of transformation and hope from the children, families, and supporters who make this ministry possible. Together, we are changing lives.
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
             <div className="text-4xl font-display text-primary dark:text-white mb-1">90+</div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Children Supported Every Day</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <InfiniteMovingCards
          items={stories}
          direction="left"
          speed="slow"
          className="mb-8"
        />
        <InfiniteMovingCards
          items={stories.slice().reverse()}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
};

export default FoundersCircle;
