'use client';

import { useState } from 'react';
import { GuidesFilters } from '@/features/guides/components/GuidesFilters';
import { GuidesHero } from '@/features/guides/components/GuidesHero';
import { GuidesList } from '@/features/guides/components/GuidesList';
import { filterGuideArticles } from '@/features/guides/data/guides-map';
import type { GuideFilter } from '@/features/guides/data/guides-filters';
import type { GuideArticle } from '@/features/guides/data/guides-types';
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
      <GuidesList articles={visible} hideCompactTail={filter === 'all'} />
    </>
  );
}
