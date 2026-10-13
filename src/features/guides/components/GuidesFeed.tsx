'use client';

import { useState } from 'react';
import { GuidesFeatured } from '@/features/guides/components/GuidesFeatured';
import { GuidesFilters } from '@/features/guides/components/GuidesFilters';
import { GuidesHero } from '@/features/guides/components/GuidesHero';
import { GuidesList } from '@/features/guides/components/GuidesList';
import { filterGuideArticles, showGuideFeatured } from '@/features/guides/data/guides-map';
import type { GuideArticle } from '@/features/guides/data/guides-articles';
import type { GuideFilter } from '@/features/guides/data/guides-filters';
import type { NavLink } from '@/features/home/data/home';

type GuidesFeedProps = {
  nav: NavLink[];
  articles: readonly GuideArticle[];
};

export function GuidesFeed({ nav, articles }: GuidesFeedProps) {
  const [filter, setFilter] = useState<GuideFilter>('all');
  const visible = filterGuideArticles(articles, filter);

  return (
    <>
      <GuidesHero nav={nav} filters={<GuidesFilters active={filter} onChange={setFilter} />} />
      {showGuideFeatured(filter) ? <GuidesFeatured /> : null}
      <GuidesList articles={visible} hideCompactTail={filter === 'all'} />
    </>
  );
}
