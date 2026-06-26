import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Kaweesa Ministries has been a godsend. My daughter is now in school and has a bright future ahead of her.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(1).jpeg",
    name: "Grace Nakato",
    role: "Parent",
  },
  {
    text: "The transparency and dedication of the team in Uganda is inspiring. I know exactly how my sponsorship is helping my student.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(2).jpeg",
    name: "Emma Wilson",
    role: "Child Sponsor",
  },
  {
    text: "The health clinic saved my life when I was sick. I am so grateful for the care and support they provide to everyone.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(1).jpeg",
    name: "David Kato",
    role: "Community Member",
  },
  {
    text: "Seeing the children thrive and grow in their education is the best reward. We are making a lasting impact together.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(2).jpeg",
    name: "John Musoke",
    role: "Local Volunteer",
  },
  {
    text: "I love going to school and learning new things. My sponsor is like family to me, even though we are far apart.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(3).jpeg",
    name: "Sarah Namukasa",
    role: "Student",
  },
  {
    text: "The vocational training program changed everything for me. I now have a skill and can support my family.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(4).jpeg",
    name: "Aisha Hassan",
    role: "Vocational Graduate",
  },
  {
    text: "We've seen our village transform since the ministry started working here. There is more hope and better health.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(5).jpeg",
    name: "Robert Lule",
    role: "Village Leader",
  },
  {
    text: "Partnering with this ministry has been an honor. Their commitment to the children is truly world-class.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(3).jpeg",
    name: "James Baker",
    role: "NGO Partner",
  },
  {
    text: "The ministry doesn't just provide for needs; they build character and faith. It's a holistic transformation.",
    image: "https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(4).jpeg",
    name: "Mary Nakajubi",
    role: "Community Elder",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Voices of Hope
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our community and supporters have to say about the impact of our work.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
