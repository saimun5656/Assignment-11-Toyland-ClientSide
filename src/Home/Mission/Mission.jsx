import { useState } from 'react';

const Mission = () => {
    const [scroll, setScroll] = useState(0);
    console.log(scroll);
    return (
        <div className='text-white relative'>
            {/* mission-1-------*/}
            <div onTouchStart={() => setScroll(1)} onWheel={() => setScroll(1)} className='flex gap-y-5 flex-col md:flex-row justify-between gap-x-5 pb-16 pt-20'>
                <div className={`w-full border border-emerald-400  rounded p-5 glassbg ${scroll === 1 ? 'bg-scroll' : ''}`}>
                    <button>mission 1</button>
                    <h1 className='text-xl my-5'>Inspire Creativity and Imagination</h1>
                    <ul className='list-disc space-y-5 ps-4'>
                        <li>Offer a wide variety of art supplies, building blocks, and open-ended toys that allow children to explore their creativity and imagination.</li>
                        <li>Collaborate with local artists and designers to create exclusive toy lines that inspire artistic expression.</li>
                        <li>Provide resources and tutorials on creative projects that can be done with the toys, fostering a sense of inspiration and innovation.</li>
                    </ul>
                </div>
                <div className={`w-full`}>
                    <div className={`md:border-l-4 ps-6 py-10 translate-x-[-620px] md:translate-x-[0px]  ${scroll === 1 ? 'block duration-1000 translate-x-[0px]' : 'md:hidden'}`}>
                        <h1 className='font-semibold mb-4'>Mission 1: Inspiring Creativity and Imagination</h1>
                        Our toy selling marketplace aims to ignite creativity and imagination in children. Through a curated collection of art supplies, building blocks, and open-ended toys, we provide endless possibilities for exploration and self-expression. We believe in the power of imagination to shape young minds and are committed to fostering creativity and problem-solving skills.
                    </div>
                </div>
            </div>
            {/* mission-2------- */}
            <div onTouchStart={() => setScroll(2)} onWheel={() => setScroll(2)} className='flex flex-col-reverse md:flex-row justify-between gap-x-5 py-16'>

                <div className='w-full'>
                    <div className={`md:border-r-4  translate-x-[-620px] md:translate-x-[0px]  pr-6 py-10 ${scroll === 2 ? 'translate-x-[0px] duration-1000' : 'md:hidden'}`}>
                        <h1 className='font-semibold mb-4'>Mission 2: Inspiring Creativity and Imagination</h1>
                        Our toy selling marketplace aims to ignite creativity and imagination in children. Through a curated collection of art supplies, building blocks, and open-ended toys, we provide endless possibilities for exploration and self-expression. We believe in the power of imagination to shape young minds and are committed to fostering creativity and problem-solving skills.
                    </div>
                </div>
                <div className={`w-full border border-emerald-400 rounded p-5 glassbg ${scroll === 2 ? 'bg-scroll' : ''}`}>
                    <button>mission 2</button>
                    <h1 className='text-xl my-5'>Foster Learning and Development</h1>
                    <ul className='list-disc space-y-5 ps-4'>
                        <li>Provide a selection of STEM toys that promote critical thinking, problem-solving, and logical reasoning skills.</li>
                        <li>Partner with educators and child development experts to curate educational toys that align with different age groups and learning objectives.</li>
                        <li>Create a blog or resource section on the website with articles and tips for parents on how to maximize the educational value of toys.</li>
                    </ul>
                </div>

            </div>
            {/* mission-3------- */}
            <div onTouchStart={() => setScroll(3)} onWheel={() => setScroll(3)} className='flex flex-col md:flex-row justify-between gap-x-5 py-16'>
                <div className={`w-full border border-emerald-400 rounded p-5 glassbg  ${scroll === 3 ? 'bg-scroll' : ''}`}>
                    <button>mission 3</button>
                    <h1 className='text-xl my-5'>Promote Safe and Ethical Toy Choices</h1>
                    <ul className='list-disc space-y-5 ps-4'>
                        <li>Provide a diverse range of toys that stimulate creativity.</li>
                        <li>Foster a sense of wonder and curiosity in children.</li>
                        <li>Support the development of problem-solving skills.</li>
                    </ul>
                </div>
                <div className='w-full'>
                    <div className={` md:border-l-4   ps-6 py-10  translate-x-[-620px] md:translate-x-[0px] ${scroll === 3 ? 'block translate-x-[0px] duration-1000' : 'md:hidden'}`}>
                        <h1 className='font-semibold mb-4'>Mission 3: Inspiring Creativity and Imagination</h1>
                        Our toy selling marketplace aims to ignite creativity and imagination in children. Through a curated collection of art supplies, building blocks, and open-ended toys, we provide endless possibilities for exploration and self-expression. We believe in the power of imagination to shape young minds and are committed to fostering creativity and problem-solving skills.
                    </div>
                </div>
            </div>
            {/* mission-4------- */}
            <div onTouchStart={() => setScroll(4)} onWheel={() => setScroll(4)} className='flex flex-col-reverse md:flex-row pt-10 pb-28 justify-between gap-x-5'>

                <div className='w-full'>
                    <div className={`md:border-r-4  translate-x-[-620px] md:translate-x-[0px]  pr-6 py-10 ${scroll === 4 ? ' translate-x-[0px] duration-1000' : 'md:hidden'}`}>
                        <h1 className='font-semibold mb-4'>Mission 4: Inspiring Creativity and Imagination</h1>
                        Our toy selling marketplace aims to ignite creativity and imagination in children. Through a curated collection of art supplies, building blocks, and open-ended toys, we provide endless possibilities for exploration and self-expression. We believe in the power of imagination to shape young minds and are committed to fostering creativity and problem-solving skills.
                    </div>
                </div>
                <div className={`w-full border border-emerald-400 rounded p-5 glassbg  ${scroll === 4 ? 'bg-scroll' : ''}`}>
                    <button>mission 4</button>
                    <h1 className='text-xl my-5'>Celebrate Diversity and Inclusivity</h1>
                    <ul className='list-disc space-y-5 ps-4'>
                        <li>Curate a diverse range of figures, and toys representing different races, ethnicities, and abilities to promote inclusivity.</li>
                        <li>Feature books and toys that highlight stories and characters from various cultural backgrounds.</li>
                        <li>Offer sensory toys  children with special needs, ensuring they have access to inclusive play experiences.</li>
                    </ul>
                </div>

            </div>

            {/* backround */}
            <div className='absolute top-[230px] w-11/12 h-[300px] bg-gr rounded-l-[200px] rounded-r-[200px] rotate-[30deg]'>
            </div>
            <div className='absolute bottom-60 w-11/12 h-[300px] bg-gr rounded-l-[200px] rounded-r-[200px] rotate-[-30deg]'>
            </div>


        </div>
    );
};

export default Mission;