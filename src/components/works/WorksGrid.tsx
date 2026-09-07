import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../common/Container';
import { workData } from '../../data/workData';
import type { WorkCategory } from '../../types/work';
import { WorksFilter } from './WorksFilter';
import { WorkCard } from './WorkCard';

export const WorksGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('All');

  const filteredWorks = activeCategory === 'All'
    ? workData
    : workData.filter((w) => w.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <Container>
        <WorksFilter activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

        {filteredWorks.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredWorks.map((work, index) => (
                <WorkCard key={work.id} work={work} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center text-[#6B7280]">
            <p className="text-base font-semibold">No works found in this category.</p>
            <p className="text-xs mt-1">Select another filter above.</p>
          </div>
        )}
      </Container>
    </section>
  );
};
