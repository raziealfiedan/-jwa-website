/* ------------------------------------------------------------------
   JWA Design & Build — project data
   Order and labels follow the revision deck (p.49–52): GLC and
   government flagships first. `client` or `year` left as null shows
   a TBC tag on the card until JWA confirms it.
   Images are served from the staging site's storage for now.
------------------------------------------------------------------- */
const BLOB = 'https://ljlmhlwco3ezbrys.public.blob.vercel-storage.com/projects/';

const SECTORS = [
  { key: 'all', label: 'All projects' },
  { key: 'corporate', label: 'Corporate Offices' },
  { key: 'government', label: 'Government' },
  { key: 'hotels', label: 'Hotels & Resorts' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'industrial', label: 'Industrial' },
  { key: 'fnb', label: 'Restaurants & Cafes' },
  { key: 'residential', label: 'Residential' }
];

const PROJECTS = [
  // ---- Flagships and ongoing work (company profile, Sept 2026)
  { slug: 'sesb-kwsp-hq', name: 'SESB KWSP HQ', sector: 'corporate', flagship: true,
    client: 'Sabah Electricity Sdn Bhd', location: 'Kota Kinabalu', year: '2025', value: 'RM41.8 million', scope: 'Design & build office fit-out',
    images: ['offices/sesb-kwsp-hq/edited-photo-6.jpg', 'offices/sesb-kwsp-hq/edited-photo-10.jpg', 'offices/sesb-kwsp-hq/edited-photo-4.jpg', 'offices/sesb-kwsp-hq/edited-photo-7.jpg', 'offices/sesb-kwsp-hq/edited-photo-132.jpg', 'offices/sesb-kwsp-hq/edited-photo-12.jpg', 'offices/sesb-kwsp-hq/edited-photo-1.jpg', 'offices/sesb-kwsp-hq/edited-photo-11.jpg'] },
  { slug: 'inanam-sesb-warehouse', name: 'Sabah Electricity Warehouse', sector: 'industrial', flagship: true, ongoing: true,
    client: 'Sabah Electricity Sdn Bhd', location: 'Inanam, Kota Kinabalu', year: '2025', value: 'RM31.88 million', scope: 'Warehouse & office design and build',
    images: ['assets/img/projects/sesb-warehouse-1.jpg', 'assets/img/projects/sesb-warehouse-2.jpg', 'assets/img/projects/sesb-warehouse-3.jpg', 'assets/img/projects/sesb-warehouse-4.jpg', 'commercial/inanam-sesb-warehouse/1%20lounge-6EBpb59S9UE2bubu0v3lb7NXi96FyN.jpg', 'commercial/inanam-sesb-warehouse/18%20conference%20room-ZbI1vrj10hFKDcAzMqACkVQlhMOlHb.jpg', 'commercial/inanam-sesb-warehouse/20%20walkway-V4MPez1mlrYNICnfOKgm9dQSOJtrfj.jpg', 'commercial/inanam-sesb-warehouse/14%20pantry-m99BdNoBcIxfWlKUhao2xfYYddy7uI.jpg'] },
  { slug: 'conocophillips-office', name: 'ConocoPhillips Office', sector: 'corporate', flagship: true, ongoing: true,
    client: 'ConocoPhillips', location: 'Sabah', year: '2026', value: 'RM23 million', scope: 'Office fit-out (design by SLG)',
    images: ['assets/img/projects/conocophillips-1.jpg', 'assets/img/projects/conocophillips-2.jpg', 'assets/img/projects/conocophillips-3.jpg'] },
  { slug: 'qhazanah-sabah-ppns', name: 'Qhazanah Sabah PPNS', sector: 'corporate', flagship: true,
    client: 'Qhazanah Sabah Berhad', location: 'Kota Kinabalu', year: '2023', value: 'RM6.2 million', scope: 'Corporate office fit-out',
    images: ['offices/qhazanah-sabah-ppns/20231108_114512-8LufrQjAmrfHgGoJ8vHaNfPCrSlDCx.jpg', 'offices/qhazanah-sabah-ppns/20231108_115927-IzgwyjKGrRq01BGLHO3B6DESfEfsUZ.jpg', 'offices/qhazanah-sabah-ppns/20231108_114427-LGV6arNsWU37a5Wmc5g0ZBa2F9clj0.jpg', 'offices/qhazanah-sabah-ppns/20231108_114608-aLtNlMUIXJbgvaSr2aezq7KyfYoW2D.jpg'] },
  { slug: 'suria-capital-jq', name: 'Suria Capital JQ Central', sector: 'corporate', flagship: true,
    client: 'Suria Capital Holdings Berhad', location: 'Kota Kinabalu', year: '2023', value: 'RM3.9 million', scope: 'Corporate office fit-out',
    images: ['offices/suria-capital-jq/C_109605-78XBHdlEmNkfJrjaZLHX9hpYsHhAMT.jpg', 'offices/suria-capital-jq/C_106066-5b9e7dc8PDHqBZ77rsHR4EJqoxvNF7.jpg', 'offices/suria-capital-jq/C_109638-L5fPmsgI7kfNLUVsshGvQ5HVBPrAS6.jpg'] },
  { slug: 'sesb-keningau', name: 'SESB Keningau', sector: 'corporate',
    client: 'Sabah Electricity Sdn Bhd', location: 'Keningau', year: null, value: null, scope: 'Regional office fit-out',
    images: ['offices/sesb-keningau/2-HquuPoLLpaWPOnlUdmv11gWTYt4J7a.jpg', 'offices/sesb-keningau/4-leXTclRqNjpm3mRS6cKe4s2FgiOsPh.jpg', 'offices/sesb-keningau/12-3kI0i71NrBL5W5R0LFwNy694dxjumK.jpg', 'offices/sesb-keningau/1-cdpMRfKrEJF1Tkfq3FpkkBbyk5lM7x.jpg', 'offices/sesb-keningau/15-mdh8ZlaRqxqklK4rm0F0FdowIbM1xZ.jpg'] },

  // ---- Government
  { slug: 'jkr-sk-kuala-namadan', name: 'JKR SK Kuala Namadan', sector: 'government',
    client: 'Jabatan Kerja Raya', location: 'Sabah', year: null, value: null, scope: 'Public school works',
    images: ['government/jkr-sk-kuala-namadan/Enscape_2025-08-01-15-57-39_Scene%207-WyvEILOUKEyJQgihMPAuiCQpX5ZKU7.jpg', 'government/jkr-sk-kuala-namadan/Enscape_2025-08-01-15-57-39_Scene%208-Hp6j5P4MGRKhZPr5ws0sfLneNFEWtv.jpg', 'government/jkr-sk-kuala-namadan/Enscape_2025-08-01-15-57-39_Enscape%20scene%201-SUwEmoBIUyRlpLBUHyjtxCEKniKJzH.jpg', 'government/jkr-sk-kuala-namadan/Enscape_2025-08-01-15-57-39_Scene%202-YxmujzBbmJN2tMOcIw3CuBA9MNj7Lr.jpg', 'government/jkr-sk-kuala-namadan/Enscape_2025-08-01-15-57-39_Scene%203-wbsUiI6sAj9OzbVZ97agFeUO2hhG7O.jpg'] },
  { slug: 'jkr-klinik-mansiat', name: 'JKR Klinik Mansiat', sector: 'government',
    client: 'Jabatan Kerja Raya', location: 'Sabah', year: null, value: null, scope: 'Public healthcare facility',
    images: ['government/jkr-klinik-mansiat/WhatsApp%20Image%202026-05-11%20at%201.38.37%20PM%20%282%29-eCFJzjpIW2WanV4p5sLvpm8tBsYGTY.jpg', 'government/jkr-klinik-mansiat/WhatsApp%20Image%202026-05-11%20at%201.38.37%20PM%20%281%29-OC4BqNjNocOqtt8akfH4rObWPPe1Yf.jpg', 'government/jkr-klinik-mansiat/WhatsApp%20Image%202026-05-11%20at%201.38.37%20PM%20%283%29-4NmYhLElR8TXOGKoDZFJXk6v1MWiYI.jpg', 'government/jkr-klinik-mansiat/WhatsApp%20Image%202026-05-11%20at%201.38.37%20PM-6fq5sdib7HOL6Et5kmGqOLT8SV5vEB.jpg'] },

  // ---- Hotels & resorts
  { slug: 'inanam-taipan-ibis', name: 'ibis Styles Kota Kinabalu Inanam', sector: 'hotels',
    client: null, location: 'Inanam, Kota Kinabalu', year: '2018', value: 'RM3.17 million', scope: 'Hotel design & build',
    images: ['hospitality/inanam-taipan-ibis/20180307_184343-V3ZI65pubrkH5TDNLEs8HjcsRpoqee.jpg', 'hospitality/inanam-taipan-ibis/20180307_184459-p9yE8BVfGsc1LzdMdn8XSNnaK9hJW9.jpg', 'hospitality/inanam-taipan-ibis/IMG_3320-PQd53PocOGSYUaKdlagcKOLSyZLhyY.jpg', 'hospitality/inanam-taipan-ibis/IMG_3415-4TYEVfhBBVxaMg6KxHafXgEyq7VNgh.jpg', 'hospitality/inanam-taipan-ibis/IMG_3333-tSmQPQKkDGIMOQTuDxogh2mrJSWMCG.jpg'] },
  { slug: 'kundasang-golf-villa', name: 'Kundasang Golf Villa', sector: 'hotels', label: 'Resort',
    client: null, location: 'Kundasang', year: '2016', value: null, scope: 'Resort villa design & build',
    images: ['assets/img/projects/kundasang-golf-villa-1.jpg', 'assets/img/projects/kundasang-golf-villa-2.jpg', 'assets/img/projects/kundasang-golf-villa-3.jpg', 'assets/img/projects/kundasang-golf-villa-4.jpg'] },
  { slug: 'kk-hyatt', name: 'KK Hyatt', sector: 'hotels',
    client: 'Hyatt Regency', location: 'Kota Kinabalu', year: null, value: null, scope: 'Hospitality fit-out',
    images: ['hospitality/kk-hyatt/2%20new-N3UUKrFITcRlYQiCNyUH9NZRPAdF3z.jpg', 'hospitality/kk-hyatt/6-rdlGZQMmo7q8K02Ow11ZMXQxyuQHxh.jpg', 'hospitality/kk-hyatt/8-FODMEsnDncBCxaqI5ceIHvObEZ0FpI.jpg', 'hospitality/kk-hyatt/2.1-V9FQg4HPEJ5mqmUCwjE66HN8F2pwB0.jpg', 'hospitality/kk-hyatt/7-BGuP3SdYWGbFW4Sv5zL1HEDSNPcBO3.jpg'] },

  // ---- Corporate offices
  { slug: 'vts-group-sutera', name: 'VTS Group Sutera', sector: 'corporate',
    client: 'VTS Group', location: 'Kota Kinabalu', year: '2023', value: 'RM3.4 million', scope: 'Corporate HQ & show gallery',
    images: ['offices/vts-group-sutera/VTS%201.3-6GaACy27JLwacWr6obazFsgv8Hp9zI.jpg', 'offices/vts-group-sutera/VTS%201.1-bEGj4eIdoW5E4yvXGNFcYDbvtn3Q2Y.jpg', 'offices/vts-group-sutera/VTS%201.4-6lmRUHuAqZlpuGwWIAnLJHPSSAfkPy.jpg', 'offices/vts-group-sutera/VTS%201.2-seuF8lo89zEzO0JWIjWzPMOJW1aKG6.jpg'] },
  { slug: 'jsk-group-far-east', name: 'JSK Group Far East', sector: 'corporate',
    client: 'JSK Group', location: 'Kota Kinabalu', year: '2022', value: 'RM1.1 million', scope: 'Corporate office fit-out',
    images: ['offices/jsk-group-far-east/_OSR0061-e1H4GVW2ovsNzVpWye2d5vIaOpcq4c.jpg', 'offices/jsk-group-far-east/_OSR0021-HDR-v2-7rMoPJqm15q7hiKsEWOicia5ob9Czq.jpg', 'offices/jsk-group-far-east/_OSR0026-HDR-P8eHGZsXBIxrJyynv1VPLTFmG2qorn.jpg', 'offices/jsk-group-far-east/_OSR0049%281%29-WVtSjtTPIxGjq4dJFgr7a0GOnNfZpg.jpg', 'offices/jsk-group-far-east/_OSR0035-HDR-9CfUQg2q9u8ZFOk4J0PEoW9CDqxLoR.jpg'] },
  { slug: 'urban-space-co-working', name: 'VTS Coworking Space', sector: 'corporate',
    client: 'VTS Group', location: 'Kota Kinabalu', year: '2021', value: 'RM916,000', scope: 'Coworking space fit-out',
    images: ['offices/urban-space-co-working/US%20Final%2005-Z9lJ3zRRYXqu8wZw1gHAVey6smZIg6.jpg', 'offices/urban-space-co-working/US%20Final%2004-qHHguTYInUUTQcKewF2Y5jX0DQuiE1.jpg', 'offices/urban-space-co-working/US%20Final%2001-xXPixwBCWQtOZE3mWC8huhrV6OESLX.jpg', 'offices/urban-space-co-working/US%20Final%2003-VwDYcK6ZYZiUBPdJzxmVjl4k3tN0dS.jpg'] },
  { slug: 'forest-solution-riverson', name: 'Forest Solution Riverson', sector: 'corporate',
    client: 'Forest Solutions', location: 'Kota Kinabalu', year: null, value: null, scope: 'Corporate office fit-out',
    images: ['offices/forest-solution-riverson/5-vjUrsoORhu45We01GiUTh10Nc2eMcl.jpg', 'offices/forest-solution-riverson/7-qenHcsot7eVh6LLMb9MKMO3If0h1Ca.jpg', 'offices/forest-solution-riverson/1-jr9KSycMSuhvQt6TFJoftiBE0UWbIj.jpg', 'offices/forest-solution-riverson/10-JnbqgjYUSn7OulB6Ukdw2rYMD6tLk3.jpg', 'offices/forest-solution-riverson/2-vj7LrtrlUlo941tZctf0VAeB99k6cd.jpg'] },
  { slug: 'jwa-group-plaza-yly', name: 'JWA Headquarters', sector: 'corporate',
    client: 'JWA Group', location: 'Inanam, Kota Kinabalu', year: null, value: null, scope: 'Headquarters fit-out',
    images: ['offices/jwa-group-plaza-yly/IMG_1632-VpOGBlAzdvgul5wuNFXgVFSv10EcOu.jpg', 'offices/jwa-group-plaza-yly/IMG_1320-etxorBODe52Npn9IvPIaQWIGRQ7Khr.jpg', 'offices/jwa-group-plaza-yly/IMG_1617-5jPtdQ32mnAH7kZ0WzGyM4MgK3WLZz.jpg', 'offices/jwa-group-plaza-yly/IMG_E2449-LI1COo7HVq3VYrx99adXjl6wDsKYgw.jpg', 'offices/jwa-group-plaza-yly/IMG_E2423-2Q843AJWb7rFAuRghuTMuSaear9oAM.jpg'] },

  // ---- Commercial & showrooms
  { slug: 'putatan-proton', name: 'Proton Putatan 3S', sector: 'commercial', label: 'Showroom',
    client: 'Proton', location: 'Putatan', year: '2019', value: 'RM4.6 million', scope: '3S centre design & build',
    images: ['commercial/putatan-proton/IMG_7573-JAerOoESDtjjAlfnADeD9H9muuBuyl.jpg', 'commercial/putatan-proton/IMG_7548-Fq38XaMROtWL1GPCOWKdI2bHlifnhy.jpg', 'commercial/putatan-proton/IMG_7613-Vs8O7O0LtLuqC9HCNHgznPBxP70h2i.jpg', 'assets/img/projects/proton-putatan-1.jpg', 'assets/img/projects/proton-putatan-2.jpg', 'commercial/putatan-proton/IMG_7591-YHw3p4uadGzc3HvXjRImMv9gJDUX4J.jpg'] },
  { slug: 'putatan-toyota', name: 'Putatan Toyota', sector: 'commercial', label: 'Showroom',
    client: 'Toyota', location: 'Putatan', year: null, value: null, scope: '3S centre design & build',
    images: ['commercial/putatan-toyota/01-lR1NwTSNO8zCrXwWDBWczQxdGjqPkV.jpg', 'commercial/putatan-toyota/02-kcXTEcexBtGXflf7QpyoaXrAvH9srp.jpg', 'commercial/putatan-toyota/04-fZLcbMstUqyqnOYKhN4BCJQVZbFMNY.jpg', 'commercial/putatan-toyota/03-0jepEsO4TLMqnCvFPBe15jYOfIXsEK.jpg'] },
  { slug: 'ranau-one-superstore', name: 'Ranau One Superstore', sector: 'commercial',
    client: null, location: 'Ranau', year: null, value: null, scope: 'Retail fit-out',
    images: ['commercial/ranau-one-superstore/IMG_0378-xfj84hzBixeSuAUtPoJGaCXdbhQAum.jpg', 'commercial/ranau-one-superstore/IMG_0243-m1HVszaiV3j7CKc5Al8T43Hfhy9Trd.jpg', 'commercial/ranau-one-superstore/IMG_0261-C5TKfFi2P8iRH6HiEpS0pKlxWBknCW.jpg', 'commercial/ranau-one-superstore/IMG_0248-6FqJUvWg9MMb9oXcpPv3FceusHe8nv.jpg', 'commercial/ranau-one-superstore/IMG_0251-FnalCvzJCoOtn4LKOK61lgxq6ZvSkP.jpg'] },
  { slug: 'k-avenue-lido', name: 'K Avenue Lido', sector: 'commercial',
    client: null, location: 'Kota Kinabalu', year: null, value: null, scope: 'Commercial development',
    images: ['commercial/k-avenue-lido/C2-MQxqfqshBRpQ1etA0l06GlLxKjU5cn.jpg', 'commercial/k-avenue-lido/C1-W13aaxxap45V0t9eEifAPgcK7x2aGu.jpg', 'commercial/k-avenue-lido/C3-2eFrZ0lz4yxtLH1gtyQ1ZHkt6yRblI.jpg'] },

  // ---- Restaurants, bars & cafes (company profile, Sept 2026)
  { slug: 'dragon-palace-suria', name: 'Dragon Palace', sector: 'fnb', label: 'Restaurant',
    client: 'Dragon Palace', location: 'Kota Kinabalu', year: '2018', value: 'RM2.2 million', scope: 'Restaurant design & fit-out',
    images: ['fnb/dragon-palace-suria/IMG_1676-ymH98ZfSZQbva4M6dVxkgvIniIAbOW.jpg', 'fnb/dragon-palace-suria/IMG_1551-QCEvRjyUjKUVqrEYZS2sIolLNMJQ60.jpg', 'fnb/dragon-palace-suria/IMG_1569-GdM7lOSciyxcz6owhgtG4Xmzp8vQTZ.jpg', 'fnb/dragon-palace-suria/IMG_1641-MvloUx3grB3lcHucrtFMliAYR3GUVM.jpg', 'fnb/dragon-palace-suria/IMG_1560-9hRbqy8jIWeEddIFva1Z8IMaMWLXUy.jpg', 'fnb/dragon-palace-suria/IMG_1582-WfA1ggcyNTzjKjZxAk0e9waMtsD9oS.jpg'] },
  { slug: 'brown-fox-cafe', name: 'Brown Fox Cafe', sector: 'fnb', label: 'Bars & Cafes',
    client: 'Brown Fox Cafe', location: 'Kota Kinabalu', year: '2020', value: 'RM143,000', scope: 'Cafe design & fit-out',
    images: ['assets/img/projects/brown-fox-cafe-1.jpg', 'assets/img/projects/brown-fox-cafe-2.jpg', 'assets/img/projects/brown-fox-cafe-3.jpg'] },
  { slug: 'kudat-golf-marina', name: 'Kudat Golf & Marina Resort', sector: 'fnb', label: 'Bars & Cafes',
    client: 'Kudat Golf & Marina Resort', location: 'Kudat', year: '2016', value: 'RM500,000', scope: 'Bar & cafe design & fit-out',
    images: ['assets/img/projects/kudat-golf-marina-1.jpg', 'assets/img/projects/kudat-golf-marina-2.jpg', 'assets/img/projects/kudat-golf-marina-3.jpg'] },

  // ---- Residential (kept at the back; list follows the company profile)
  { slug: 'jtt-condo', name: 'JTT Condominium', sector: 'residential',
    client: 'Private client', location: 'Kota Kinabalu', year: '2025', value: 'RM690,000', scope: 'Residential interior',
    images: ['residential/jtt-condo/6089413858314797361-mDsZtMD7SFN08SwyPHkMH9Em7NQSer.jpg', 'residential/jtt-condo/6089413858314797363-uL2PeKCpSXkixCeerCsSJTCZc36dPr.jpg', 'residential/jtt-condo/6089413858314797368-UnAvp9Iw78UiswXmIqkik78NOgS2vy.jpg'] },
  { slug: 'taman-emas', name: 'Taman Emas Residence', sector: 'residential',
    client: 'Private client', location: 'Kota Kinabalu', year: '2023', value: 'RM2.62 million', scope: 'Residential design & build',
    images: ['residential/taman-emas-bungalow/Taman%20Emas%20Exeterior%20%2810%29-wV2kENb4dz5rCDLVzvjOCH1ifCijDz.jpg', 'residential/taman-emas-bungalow/Taman%20Emas%20Exeterior%20%282%29-5ZR3WLAY5ubI6YGzGdmUG66MsodEXQ.jpg', 'residential/taman-emas-bungalow/Taman%20Emas%20Exeterior%20%284%29-33r8LzsX17XYOeAcsOeksAhREyLJ86.jpg'] },
  { slug: 'prima-jaya', name: 'Prima Jaya Residence', sector: 'residential',
    client: 'Private client', location: 'Kota Kinabalu', year: '2022', value: 'RM1.63 million', scope: 'Residential design & build',
    images: ['residential/taman-prima-jaya/IMG_20210204_134011-MExc7Bjkq9jC29j1DyuxdrtegW56YJ.jpg', 'residential/taman-prima-jaya/IMG_20210204_134031-5QrR2xWyXohWBIPxjfQtsgBmxy6j8v.jpg', 'residential/taman-prima-jaya/IMG_20210204_134321-kkOqBVnxlihY2Fy4h2CCj5eMI5P0Ln.jpg'] },
  { slug: 'alamesra', name: 'Alamesra Residence', sector: 'residential',
    client: 'Private client', location: 'Kota Kinabalu', year: '2019', value: 'RM2.35 million', scope: 'Residential design & build',
    images: ['assets/img/projects/alamesra-1.jpg', 'assets/img/projects/alamesra-2.jpg', 'assets/img/projects/alamesra-3.jpg'] },
  { slug: 'element-utara', name: 'Elemen Utara KK', sector: 'residential', label: 'Residential Interior',
    client: 'Elemen Utara KK', location: 'Kota Kinabalu', year: '2018', value: 'RM388,000', scope: 'Residential interior',
    images: ['commercial/element-utara/IMG_4709-OXCC48BvJYK68oNLW9D1rEiqgjNFbb.jpg', 'commercial/element-utara/IMG_4714-vdo55vYte8H8ibQFHCERfTecIhDPSU.jpg', 'commercial/element-utara/IMG_4727-CnyYxAykf1vrN3pUdW22iziYh5wZZh.jpg'] }
];

PROJECTS.forEach(p => {
  p.images = p.images.map(src => (src.startsWith('assets/') ? src : BLOB + src));
  p.sectorLabel = p.label || (SECTORS.find(s => s.key === p.sector) || {}).label || '';
});
