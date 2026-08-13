import { blogServices, type BlogService } from '../data/blogServices';
import { blogTowns, type BlogTown } from '../data/blogTowns';

/** Replace {town} and {county} tokens in a string. */
export function fill(str: string, town: BlogTown): string {
  return str.replace(/\{town\}/g, town.name).replace(/\{county\}/g, town.county);
}

/** Trim a string to a max length on a word boundary. */
function clamp(str: string, max: number): string {
  if (str.length <= max) return str;
  const cut = str.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).trim() + '…';
}

export interface PostFaq {
  q: string;
  a: string;
}

export interface Post {
  slug: string;
  path: string;
  service: BlogService;
  town: BlogTown;
  h1: string;
  title: string;
  description: string;
  datePublished: string;
  intro: string;
  angle: string;
  body: string[];
  benefits: string[];
  faqs: PostFaq[];
}

/** Deterministic publish date, spread backwards so posts are not all dated the same day. */
function dateFor(index: number): string {
  // Base date, then step back a few days per post. No Date.now() so builds are stable.
  const base = Date.UTC(2026, 6, 20); // 20 Jul 2026
  const d = new Date(base - index * 4 * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

/** Build a single post from a service + town. */
export function buildPost(service: BlogService, town: BlogTown, index = 0): Post {
  const slug = `${service.slug}-${town.slug}`;
  const angle = town.serviceAngles[service.slug] ?? '';

  const intro = `${fill(service.lead, town)} We fit ${service.name.toLowerCase()} across ${town.name}, ${town.hook}.`;

  // Town-specific FAQs (areas + local reason) give every post distinct Q&A.
  const areaList =
    town.areas.slice(0, -1).join(', ') + ' and ' + town.areas[town.areas.length - 1];
  const townFaqs: PostFaq[] = [
    {
      q: `Which areas around ${town.name} do you cover for ${service.name.toLowerCase()}?`,
      a: `We cover ${town.name} and the surrounding areas, including ${areaList}. ${town.coverage}`,
    },
    {
      q: `Why use a local firm for ${service.name.toLowerCase()} in ${town.name}?`,
      a: `${fill(service.lead, town)} Being a genuinely local, family-run firm means we know ${town.name} well, we turn up when we say we will, and you get a clear written price with no pushy sales.`,
    },
  ];

  const faqs: PostFaq[] = [
    ...service.faqs.map((f) => ({ q: fill(f.q, town), a: fill(f.a, town) })),
    ...townFaqs,
  ];

  return {
    slug,
    path: `/blog/${slug}/`,
    service,
    town,
    h1: `${service.name} in ${town.name}`,
    title: `${service.keyword} ${town.name} | Ultra Doors Security`,
    description: clamp(
      `${service.keyword} in ${town.name}, ${town.county}. ${service.summary}`,
      155,
    ),
    datePublished: dateFor(index),
    intro,
    angle,
    body: service.body.map((p) => fill(p, town)),
    benefits: service.benefits,
    faqs,
  };
}

/** All posts, one per service per town. */
export function allPosts(): Post[] {
  const posts: Post[] = [];
  let i = 0;
  for (const town of blogTowns) {
    for (const service of blogServices) {
      posts.push(buildPost(service, town, i));
      i += 1;
    }
  }
  return posts;
}

/** Posts for the same service in other towns (for "nearby" internal links). */
export function sameServiceOtherTowns(service: BlogService, town: BlogTown, limit = 6) {
  return blogTowns
    .filter((t) => t.slug !== town.slug)
    .slice(0, limit)
    .map((t) => ({
      name: `${service.name} in ${t.name}`,
      path: `/blog/${service.slug}-${t.slug}/`,
    }));
}

/** Other services in the same town (for cross-service internal links). */
export function otherServicesSameTown(service: BlogService, town: BlogTown) {
  return blogServices
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({
      name: `${s.name} in ${town.name}`,
      path: `/blog/${s.slug}-${town.slug}/`,
    }));
}

export { blogServices, blogTowns };
