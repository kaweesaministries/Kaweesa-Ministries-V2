import React from 'react';
import WorldMapDemo from './WorldMapDemo';
import FinancialReadiness from './v2/FinancialReadiness';
import { Timeline } from './ui/timeline';

const AboutSection = () => (
  <div id="about">
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl mb-8 text-primary">Nurturing the next generation of Ugandan leaders.</h2>
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

    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="bg-primary text-white rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">Mum Janice: A Mother to Our Ministry Since 2021</h2>
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                Mum Janice has been a blessing to our family at Kaweesa Children’s Ministries since 2021, when we first met her through Facebook. What began as a simple online connection grew into a meaningful relationship filled with kindness, compassion, and unwavering support.
              </p>
              <p>
                Over the years, Mum Janice has stood beside us through both joyful moments and difficult challenges. She has shown genuine love and care for the children, the elderly, and everyone connected to our ministry. Her encouragement, prayers, and generous heart have brought hope to many lives.
              </p>
              <p>
                To us, Mum Janice is more than a friend and supporter—she is a mother figure whose compassion has touched countless hearts. Her dedication reminds us that love knows no distance and that one caring person can make a tremendous difference in the lives of others.
              </p>
              <p className="font-medium italic text-accent-lime">
                We are deeply grateful for her friendship, guidance, and the love she has shared with our ministry since 2021. May God richly bless Mum Janice for her kindness and for being such an important part of our family—we love you so much mum.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[400px] flex-shrink-0 relative">
            <div className="absolute inset-0 bg-accent-lime/20 rounded-3xl transform rotate-6 scale-105"></div>
            <img
              src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20MUMMY%20JANICE.jpeg"
              alt="Mum Janice"
              className="rounded-3xl relative z-10 shadow-2xl w-full aspect-[4/5] object-cover border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 px-6 max-w-7xl mx-auto">
      <FinancialReadiness />
    </section>

    <div className="pb-24">
      <Timeline data={[
        {
          title: "2020",
          content: (
            <div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                KAWEESA CHILDREN'S MINISTRIES was established in Kampala with a vision to provide a safe haven and quality education for vulnerable children.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(4).jpeg"
                  alt="Initial setup"
                  className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
                />
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(5).jpeg"
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
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We reached our first 50 children through our education support program. We expanded our operations to Wakiso district and established our first mobile health clinic.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(6).jpeg"
                  alt="Education support"
                  className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
                />
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(8).jpeg"
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
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Launched the "Holistic Care" program, providing comprehensive medical and nutritional support. Our network of community volunteers grew to 100+, reaching rural areas of Luweero.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(9).jpeg"
                  alt="Nutrition program"
                  className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
                />
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(10).jpeg"
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
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Empowered over 45 families through our sustainable livelihood projects. We established a vocational training center for older youth to gain practical skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(11).jpeg"
                  alt="Vocational training"
                  className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
                />
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(12).jpeg"
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
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With over 90 children under our care and a 95% school enrollment rate, we are continuing to expand our impact. We are now focusing on building a dedicated children's home and medical facility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(13).jpeg"
                  alt="Future home"
                  className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
                />
                <img
                  src="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(17).jpeg"
                  alt="Growing impact"
                  className="rounded-3xl object-cover h-44 md:h-60 w-full shadow-xl"
                />
              </div>
            </div>
          ),
        },
      ]} />
    </div>
  </div>
);

export default AboutSection;
