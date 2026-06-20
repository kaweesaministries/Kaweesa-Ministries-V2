import React from 'react';
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
} from './progressive-carousel';

const items = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop",
    title: 'Education',
    desc: 'Empowering children with quality education, providing school fees, uniforms, and essential learning materials.',
    sliderName: 'education',
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1170&auto=format&fit=crop",
    title: 'Health Care',
    desc: 'Ensuring access to medical care, nutritious food, and clean water for healthy development.',
    sliderName: 'health',
  },
  {
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1170&auto=format&fit=crop",
    title: 'Protection',
    desc: 'Creating safe environments where children are protected from harm and their rights are respected.',
    sliderName: 'protection',
  },
  {
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1170&auto=format&fit=crop",
    title: 'Empowerment',
    desc: 'Supporting families and communities through economic initiatives and vocational training.',
    sliderName: 'empowerment',
  },
];

export default function ProgressiveCarouselDemo() {
  return (
    <div className="max-w-5xl mx-auto my-12 relative w-full overflow-hidden rounded-3xl">
      <ProgressSlider vertical={false} activeSlider='education'>
        <SliderContent>
          {items.map((item, index) => (
            <SliderWrapper key={index} value={item?.sliderName}>
              <img
                className='w-full 2xl:h-[600px] h-[500px] object-cover rounded-3xl'
                src={item.img}
                alt={item.desc}
              />
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className='absolute bottom-0 w-full dark:text-white text-black bg-black/40 backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4 rounded-b-3xl'>
          {items.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.sliderName}
              className='text-left cursor-pointer p-4 border-r border-white/20 last:border-0'
              progressBarClass='bg-primary h-full'
            >
              <h2 className='relative px-4 py-1 rounded-full w-fit text-black bg-white mb-2 text-sm font-bold'>
                {item.title}
              </h2>
              <p className='text-sm font-medium line-clamp-2 text-white'>{item.desc}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </div>
  );
}
