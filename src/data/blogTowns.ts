/**
 * Towns for the local blog. Each town carries genuinely distinct local
 * detail (real districts, property and business character, and a specific
 * local hook) plus a unique angle per service, so that no two posts read the
 * same. Written in plain language with no em dashes.
 *
 * To add a town, copy one block and fill in real local detail. The blog
 * pages, index, sitemap and schema pick it up automatically.
 */

export interface BlogTown {
  slug: string;
  name: string;
  county: string;
  /** A short, distinctive local hook (used in the intro). */
  hook: string;
  /** Two or three sentences of unique local framing. */
  intro: string;
  /** Property and business character of the town. */
  character: string;
  /** Real local districts and neighbouring areas. */
  areas: string[];
  /** Drive-time / coverage note from the Bolton base. */
  coverage: string;
  /** A unique local angle for each service slug. */
  serviceAngles: Record<string, string>;
}

export const blogTowns: BlogTown[] = [
  {
    slug: 'bolton',
    name: 'Bolton',
    county: 'Greater Manchester',
    hook: 'our home town, from the terraces of Halliwell to the trade units at Waters Meeting',
    intro:
      'Bolton is where we are based, so we know its streets, its housing and its businesses better than anywhere. From the old cotton-town terraces in Halliwell and Daubhill to the newer estates around Lostock and the retail and trade units at Waters Meeting and Middlebrook, we work right across the borough every week.',
    character:
      'Bolton mixes solid Victorian terraces with post-war and modern estates, a busy town centre, and plenty of trade counters, workshops and industrial units.',
    areas: ['Halliwell', 'Horwich', 'Farnworth', 'Westhoughton', 'Little Lever', 'Lostock', 'Tonge Moor', 'Kearsley'],
    coverage: 'This is our base, so attendance across Bolton is quick and there is never a long-distance call-out charge.',
    serviceAngles: {
      'security-doors':
        'Many Bolton homes in areas like Halliwell, Daubhill and Tonge Moor are older terraces with original openings, so we measure and square each one up properly rather than forcing in a standard-size door.',
      'roller-shutters':
        'The independent shops along Bradshawgate and around the Market Place, plus the trade counters near Waters Meeting, keep us busy fitting and servicing shutters that stand up to daily town-centre use.',
      'industrial-doors':
        'The units around Waters Meeting, the Wingates estate in Westhoughton and Middlebrook in Horwich rely on sectional and roller doors that get used all day, so planned servicing keeps them moving.',
      'shop-fronts-glazing':
        'Around Bolton town centre and the suburban parades in Farnworth and Horwich we fit new frontages and replace toughened units for independent traders.',
      'security-gates':
        'Larger detached homes around Lostock, Heaton and Bromley Cross often want made-to-measure driveway gates, with automation so the gates open without leaving the car.',
      'emergency-repairs':
        'As our home town, Bolton gets our quickest emergency response, day or night, whether it is a forced door in Farnworth or a smashed shop window in the centre.',
    },
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    county: 'Greater Manchester',
    hook: 'a dense city of high-rise apartments, independent quarters and student neighbourhoods',
    intro:
      'Manchester packs city-centre apartment blocks, independent trading quarters and busy student neighbourhoods into a small area. That mix means plenty of communal door and glazing work in the centre, and steady demand for security doors in the terraces and converted flats of the inner suburbs.',
    character:
      'The city runs from high-rise and converted apartment blocks in the centre to dense terraces and student housing in Fallowfield, Rusholme and Withington, with commercial and industrial pockets at Trafford Park and Openshaw.',
    areas: ['City Centre', 'Ancoats', 'Northern Quarter', 'Rusholme', 'Chorlton', 'Didsbury', 'Fallowfield', 'Openshaw'],
    coverage: 'We cover the city and its inner suburbs from Bolton, with no city-centre premium on our prices.',
    serviceAngles: {
      'security-doors':
        'The student streets of Fallowfield and Rusholme and the many converted flats across Manchester see a lot of forced-entry attempts, so reinforced flat-entrance and communal doors are among our most requested jobs here.',
      'roller-shutters':
        'The independents of the Northern Quarter, the takeaways along Rusholme, and the parades in Chorlton and Withington all use shutters and grilles to protect glass and stock overnight.',
      'industrial-doors':
        'The commercial units around Trafford Park, Openshaw and Gorton keep us fitting and repairing sectional and roller doors on loading bays that run all day.',
      'shop-fronts-glazing':
        'From city-centre units to the village high streets of Chorlton and Didsbury, we fit aluminium frontages and toughened glazing built for constant footfall.',
      'security-gates':
        'Gated apartment courtyards and commercial yards across the city use automated and heavy-duty gates to control who gets in.',
      'emergency-repairs':
        'City-centre break-ins and vandalism mean our 24/7 boarding-up and glazing team is called into Manchester regularly to make premises safe fast.',
    },
  },
  {
    slug: 'salford',
    name: 'Salford',
    county: 'Greater Manchester',
    hook: 'from the modern towers of MediaCity and the Quays to rows of traditional terraces',
    intro:
      'Salford sits right next to Manchester but has a character of its own, from the modern offices and apartments of MediaCityUK and Salford Quays to the traditional terraces of Ordsall, Pendleton and Eccles. That split gives us a steady mix of commercial glazing and fire-rated door work alongside home security jobs.',
    character:
      'Salford runs from the regenerated docks and apartment towers of the Quays to dense terraced streets and the suburban centres of Eccles, Swinton and Walkden.',
    areas: ['Salford Quays', 'Eccles', 'Swinton', 'Walkden', 'Ordsall', 'Pendleton', 'Worsley', 'Little Hulton'],
    coverage: 'Salford is a short run from Bolton, so surveys and repairs are booked quickly.',
    serviceAngles: {
      'security-doors':
        'The large stock of apartments around the Quays and the terraces of Ordsall and Pendleton mean we fit plenty of flat-entrance and communal security doors, plus reinforced rear doors where properties back onto alleys.',
      'roller-shutters':
        'Retail and trade units around Eccles, Swinton and Walkden use shutters and grilles to protect frontages on busy through-roads.',
      'industrial-doors':
        'The commercial estates around Salford and the docks keep us fitting sectional and roller doors sized for constant loading-bay use.',
      'shop-fronts-glazing':
        'The modern commercial frontages at the Quays and the older parades in Eccles and Swinton both come to us for aluminium fronts and toughened glazing.',
      'security-gates':
        'New gated developments near the Quays and yards across the industrial areas use automated and heavy-duty gates to manage access.',
      'emergency-repairs':
        'Break-ins and vandalism are a fact of city life, so our round-the-clock team makes Salford premises safe day or night before a permanent repair.',
    },
  },
  {
    slug: 'bury',
    name: 'Bury',
    county: 'Greater Manchester',
    hook: 'home of the famous market and The Rock, with independent traders at its heart',
    intro:
      'Bury is built around its world-famous market and The Rock shopping area, so independent traders are at the heart of the town. That gives us a steady stream of shop front, shutter and grille work, alongside home security jobs across its stone-built and modern estates.',
    character:
      'Bury blends its historic market town centre with the stone-built streets of Ramsbottom and Tottington and the suburban estates of Prestwich, Whitefield and Radcliffe.',
    areas: ['Ramsbottom', 'Prestwich', 'Whitefield', 'Radcliffe', 'Tottington', 'Unsworth'],
    coverage: 'Bury is roughly twenty minutes from our Bolton base and we cover it several times a week.',
    serviceAngles: {
      'security-doors':
        'Bury has a real mix of stone-built and newer homes, so we take care to fit each door to the exact opening, and we get plenty of calls to strengthen a vulnerable back door after an attempted break-in.',
      'roller-shutters':
        'The independent shops around Bury Market and The Rock rely on shutters and grilles to protect glass and stock, and our servicing keeps them opening on time every day.',
      'industrial-doors':
        'Units around Bury and Radcliffe use sectional and roller doors that we fit, service and repair to keep sites working.',
      'shop-fronts-glazing':
        'From the market quarter to the parades in Ramsbottom and Prestwich, we fit toughened shop front glazing and replace cracked units for independent traders.',
      'security-gates':
        'The greener edges of the borough around Ramsbottom and Tottington often want made-to-measure driveway gates, with automation as an option.',
      'emergency-repairs':
        'Because Bury is so close to base, our emergency team reaches the town quickly to board up and re-glaze after a break-in or breakage.',
    },
  },
  {
    slug: 'wigan',
    name: 'Wigan',
    county: 'Greater Manchester',
    hook: 'a major logistics and distribution hub, from Wigan Pier to the warehouses at Martland Park',
    intro:
      'Wigan has grown into one of the region’s big logistics and distribution centres, with large warehouses and distribution parks sitting alongside the heritage of Wigan Pier. All that industrial floor space means heavy demand for loading-bay and roller shutter work, on top of home security across its estates.',
    character:
      'Wigan combines large residential estates with major distribution and industrial sites, and takes in the neighbouring towns of Leigh, Atherton and Hindley.',
    areas: ['Leigh', 'Atherton', 'Hindley', 'Ashton-in-Makerfield', 'Standish', 'Orrell'],
    coverage: 'Wigan is around twenty-five minutes from Bolton and well inside our regular patch.',
    serviceAngles: {
      'security-doors':
        'The large estates across Wigan, Leigh and Atherton keep us fitting reinforced security doors and strengthening rear doors that are the usual point of forced entry.',
      'roller-shutters':
        'The retail parks and trade counters around Robin Park and the town centre use shutters and grilles that we install, service and repair.',
      'industrial-doors':
        'This is real industrial-door country. The distribution warehouses around Martland Park and the wider Wigan estates run sectional and roller doors many times a day, so our servicing and fast breakdown cover keep them trading.',
      'shop-fronts-glazing':
        'High-street units in Wigan, Leigh and Standish come to us for aluminium fronts, toughened glazing and single-unit replacements.',
      'security-gates':
        'Distribution yards and compounds across the Wigan estates use heavy-duty gates, palisade and fencing to secure vehicles and stock.',
      'emergency-repairs':
        'From a broken shop window in the centre to a shutter knocked off its guides at a unit, our 24/7 team covers Wigan quickly.',
    },
  },
  {
    slug: 'preston',
    name: 'Preston',
    county: 'Lancashire',
    hook: 'a Lancashire city with a working dockland at Riversway and a busy student population',
    intro:
      'Preston is a Lancashire city with a redeveloped dockland at Riversway, a large university population, and the busy Fishergate shopping streets at its core. The blend of student housing, retail and waterfront commercial space gives us a wide spread of security, shutter and glazing work.',
    character:
      'Preston runs from its Georgian and Victorian core and the Riversway docklands to the suburban districts of Fulwood, Penwortham and Bamber Bridge.',
    areas: ['Fulwood', 'Penwortham', 'Bamber Bridge', 'Ashton-on-Ribble', 'Ribbleton', 'Leyland'],
    coverage: 'Preston sits up the M61 from Bolton and is a regular part of our Lancashire coverage.',
    serviceAngles: {
      'security-doors':
        'Preston’s large student rental market around the university and Ashton-on-Ribble means landlords come to us for reinforced entrance doors, while homeowners in Fulwood and Penwortham upgrade front and rear doors.',
      'roller-shutters':
        'The Fishergate area and the parades across Preston use shutters and grilles to protect frontages, and we service them to keep them reliable.',
      'industrial-doors':
        'The commercial units around Riversway and the estates towards Bamber Bridge and Leyland use sectional and roller doors that we fit and maintain.',
      'shop-fronts-glazing':
        'From the city-centre shopping streets to the Riversway retail units, we fit aluminium shop fronts and toughened glazing built for footfall.',
      'security-gates':
        'Homes in the greener suburbs of Fulwood and Penwortham, and yards around the docks, use made-to-measure and automated gates.',
      'emergency-repairs':
        'Our 24/7 team covers Preston for break-ins and breakages, boarding up and re-glazing whether it is a student let or a city-centre shop.',
    },
  },
  {
    slug: 'blackburn',
    name: 'Blackburn',
    county: 'Lancashire',
    hook: 'a former cotton-weaving town gathered around its market and cathedral',
    intro:
      'Blackburn grew up as a cotton-weaving town and still centres on its market and its cathedral, with dense terraced streets radiating out to Darwen and the surrounding villages. Its solid stone and brick housing stock and its busy independent high streets shape the work we do here.',
    character:
      'Blackburn is a town of hard-wearing terraces, a compact retail centre, and neighbouring communities like Darwen, Great Harwood and Rishton.',
    areas: ['Darwen', 'Great Harwood', 'Rishton', 'Wilpshire', 'Mill Hill', 'Ewood'],
    coverage: 'Blackburn is a straightforward run for us and part of our regular Lancashire coverage.',
    serviceAngles: {
      'security-doors':
        'Blackburn’s older terraced housing often has original door openings that need proper measuring, and we fit steel and composite security doors that suit those solid stone and brick fronts.',
      'roller-shutters':
        'The independent shops across Blackburn’s high streets and around the market use shutters and grilles that we install and keep serviced.',
      'industrial-doors':
        'The mill conversions and industrial units around Blackburn and Darwen use roller and sectional doors that we fit, service and repair.',
      'shop-fronts-glazing':
        'We fit toughened shop front glazing and aluminium frontages across Blackburn town centre and the parades in Darwen and Great Harwood.',
      'security-gates':
        'Homes towards Wilpshire and the greener edges of the borough, and yards across the industrial areas, use made-to-measure gates and fencing.',
      'emergency-repairs':
        'Our round-the-clock team reaches Blackburn and Darwen to board up and re-glaze after break-ins, breakages and storm damage.',
    },
  },
  {
    slug: 'burnley',
    name: 'Burnley',
    county: 'Lancashire',
    hook: 'a Pennine mill town, from the Weavers’ Triangle to Turf Moor',
    intro:
      'Burnley is a Pennine mill town with a proud industrial heritage, seen in the restored Weavers’ Triangle and the mills that still line its canal. Its hard-wearing stone terraces and its exposed hillside setting shape the doors, shutters and glazing that work best here.',
    character:
      'Burnley is built from solid stone terraces and mill-era buildings, with a compact town centre and the neighbouring towns of Padiham and Nelson close by.',
    areas: ['Padiham', 'Nelson', 'Brierfield', 'Reedley', 'Rosegrove', 'Cliviger'],
    coverage: 'Burnley sits up the M65 and is a settled part of our Lancashire coverage.',
    serviceAngles: {
      'security-doors':
        'Burnley’s stone terraces and older openings suit properly measured steel and composite doors, and its exposed setting makes a well-sealed, solid door doubly worthwhile.',
      'roller-shutters':
        'Shops around Burnley town centre and Padiham use shutters and grilles to protect glass on busy streets, and we keep them serviced.',
      'industrial-doors':
        'The mills and industrial units around Burnley and Nelson use roller and sectional doors, which we fit, service and repair to keep sites working.',
      'shop-fronts-glazing':
        'We fit aluminium shop fronts and toughened glazing across Burnley and Padiham, from single-unit replacements to full frontages.',
      'security-gates':
        'Homes on the greener edges towards Cliviger and Reedley, and yards across the industrial areas, use made-to-measure and automated gates.',
      'emergency-repairs':
        'Being used to the run up the M65, our 24/7 team reaches Burnley, Padiham and Nelson to make properties safe after a break-in or breakage.',
    },
  },
  {
    slug: 'blackpool',
    name: 'Blackpool',
    county: 'Lancashire',
    hook: 'the classic seaside resort, where salt air and coastal weather test every fitting',
    intro:
      'Blackpool is the classic Lancashire seaside resort, built around the Tower, the Promenade and its hotels, guest houses and Golden Mile attractions. The one thing that shapes almost every job here is the coast itself, because salt-laden air and exposed weather are hard on doors, shutters and fixings.',
    character:
      'Blackpool is a resort town of hotels, guest houses, arcades and seafront retail, backed by residential districts at South Shore, Bispham and out towards Cleveleys.',
    areas: ['South Shore', 'Bispham', 'Cleveleys', 'Marton', 'Layton', 'Squires Gate'],
    coverage: 'Blackpool is a longer run on the coast, and we plan Fylde coast work so you still get a fair price.',
    serviceAngles: {
      'security-doors':
        'On the coast we steer Blackpool customers towards doors and hardware that cope with salt air, because cheaper fittings corrode fast so near the sea. A properly specified door lasts far longer here.',
      'roller-shutters':
        'The seafront arcades, shops and takeaways along the Promenade and Golden Mile rely on shutters against both weather and overnight security, and salt air makes regular servicing especially important.',
      'industrial-doors':
        'Units around Squires Gate and the industrial areas use roller and sectional doors that we specify and maintain with the coastal climate in mind.',
      'shop-fronts-glazing':
        'Seafront and town-centre frontages take a battering from wind and salt, so we fit robust aluminium shop fronts and toughened glazing built to last on the coast.',
      'security-gates':
        'Homes and premises across the Fylde coast use made-to-measure gates, specified and finished to stand up to the exposed seaside setting.',
      'emergency-repairs':
        'Storm and wind damage add to the usual break-ins here, so our 24/7 team covers Blackpool for boarding up and re-glazing whatever the weather throws at the coast.',
    },
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    county: 'Merseyside',
    hook: 'a waterfront city of Georgian terraces, dockland regeneration and major retail',
    intro:
      'Liverpool is a proud waterfront city, from its famous docks and regenerated waterfront to Georgian terraces, big student districts and the major retail of Liverpool ONE. That range gives us everything from communal apartment security to high-street shop fronts and dockside commercial work.',
    character:
      'Liverpool takes in city-centre apartments, Georgian and Victorian terraces, large student neighbourhoods, and commercial and retail districts spread across the city and out to Bootle.',
    areas: ['City Centre', 'Wavertree', 'Aigburth', 'Bootle', 'Allerton', 'Anfield'],
    coverage: 'Liverpool is out towards the coast from Bolton and part of our wider North West coverage.',
    serviceAngles: {
      'security-doors':
        'Liverpool’s student districts around Wavertree and the many converted flats across the city keep us fitting reinforced flat-entrance and communal doors, along with security doors for its Georgian and Victorian terraces.',
      'roller-shutters':
        'From city-centre units to the parades in Allerton and Aigburth, shops use shutters and grilles that we install and service.',
      'industrial-doors':
        'The commercial and dockside estates around Liverpool and Bootle run sectional and roller doors that we fit and maintain.',
      'shop-fronts-glazing':
        'Around the retail core and the suburban high streets we fit aluminium shop fronts and toughened glazing built for heavy footfall.',
      'security-gates':
        'Gated developments across the city and yards around the docks use automated and heavy-duty gates to control access.',
      'emergency-repairs':
        'Our 24/7 team covers Liverpool for break-ins, vandalism and breakages, boarding up and re-glazing to make premises safe fast.',
    },
  },
  {
    slug: 'warrington',
    name: 'Warrington',
    county: 'Cheshire',
    hook: 'a logistics powerhouse between Manchester and Liverpool, wrapped around the motorway network',
    intro:
      'Warrington sits right between Manchester and Liverpool on the motorway network, which has made it one of the North West’s biggest logistics and distribution centres. Huge distribution parks and retail parks sit alongside new-town estates, so warehouse doors and commercial glazing are a big part of what we do here.',
    character:
      'Warrington combines major distribution parks and retail parks with new-town residential estates and older centres like Stockton Heath and Great Sankey.',
    areas: ['Birchwood', 'Great Sankey', 'Stockton Heath', 'Padgate', 'Woolston', 'Latchford'],
    coverage: 'Warrington is within our wider coverage between the two cities and we plan work here efficiently.',
    serviceAngles: {
      'security-doors':
        'The new-town estates around Birchwood, Great Sankey and Woolston keep us fitting reinforced front and rear security doors for family homes.',
      'roller-shutters':
        'The retail parks and trade counters, including the Gemini area, use shutters and grilles that we install, service and repair.',
      'industrial-doors':
        'This is prime industrial-door territory. The distribution parks around Omega and Birchwood run sectional and loading-bay doors constantly, so our servicing and breakdown cover keep them moving.',
      'shop-fronts-glazing':
        'From the town centre to the retail parks and the village feel of Stockton Heath, we fit aluminium fronts and toughened glazing.',
      'security-gates':
        'Distribution yards and compounds across Warrington use heavy-duty gates, palisade and fencing to secure vehicles and stock.',
      'emergency-repairs':
        'Our 24/7 team covers Warrington for break-ins and breakages at homes, shops and units, making them safe before a permanent repair.',
    },
  },
  {
    slug: 'chester',
    name: 'Chester',
    county: 'Cheshire',
    hook: 'a historic walled city of the medieval Rows and many listed, conservation-area buildings',
    intro:
      'Chester is a historic walled city, famous for its Roman walls and the medieval Rows, the two-tier galleried shopping streets found nowhere else. So much of the centre is listed or sits in a conservation area, which shapes the glazing and security work we do here more than in any other town we cover.',
    character:
      'Chester ranges from its heritage core of listed and conservation-area buildings to the suburban districts of Hoole, Handbridge and Upton, with tourism and retail driving much of its commercial activity.',
    areas: ['Hoole', 'Handbridge', 'Boughton', 'Upton', 'Newton', 'Saltney'],
    coverage: 'Chester is out towards the Cheshire and North Wales border and part of our wider coverage.',
    serviceAngles: {
      'security-doors':
        'In Chester’s conservation areas we focus on security doors that improve protection while staying sympathetic to period and listed frontages, alongside standard security doors for the suburbs like Hoole and Upton.',
      'roller-shutters':
        'Around the Rows and the historic centre, discreet internal and perforated shutters protect shop glass without spoiling heritage frontages, which is exactly the kind of work Chester needs.',
      'industrial-doors':
        'The commercial units on the edges of the city and towards Saltney use sectional and roller doors that we fit and maintain.',
      'shop-fronts-glazing':
        'Heritage frontages call for careful, sympathetic glazing, so around Chester’s conservation core we fit toughened and laminated glass that keeps the look while adding strength and security.',
      'security-gates':
        'The larger homes around Chester and its greener suburbs use made-to-measure gates chosen to suit period and characterful properties.',
      'emergency-repairs':
        'Our 24/7 team covers Chester for break-ins and breakages, and we take extra care making safe and re-glazing sensitive heritage and shop frontages.',
    },
  },
];

export function getBlogTown(slug: string): BlogTown | undefined {
  return blogTowns.find((t) => t.slug === slug);
}
