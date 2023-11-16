const monuments = [
  {
    id: "b48e43d5-446b-4332-a055-c41d3f6c9070",
    name: "Torre de Belém",
    city: "Lisboa",
    year: 1519,
    country: "Portugal",
    desc: "Belém Tower (Portuguese: Torre de Belém, literally: Bethlehem Tower), officially the Tower of Saint Vincent (Portuguese: Torre de São Vicente) is a 16th-century fortification located in Lisbon that served as a point of embarkation and disembarkation for Portuguese explorers and as a ceremonial gateway to Lisbon.It was built during the height of the Portuguese Renaissance, and is a prominent example of the Portuguese Manueline style, but it also incorporates hints of other architectural styles. The structure was built from lioz limestone and is composed of a bastion and a 30-metre (100 ft),four-storey tower.",
    image_url: "/monuments/torre-de-belem.png",
  },
  {
    id: "fe85db9b-a7cb-41d4-bf93-9345e2cc74f7",
    name: "Mosteiro da Batalha",
    city: "Batalha",
    year: 1517,
    country: "Portugal",
    desc: "The Monastery of Batalha (Portuguese: Mosteiro da Batalha) is a Dominican convent in the municipality of Batalha, in the district of Leiria, in the Centro Region of Portugal. Originally, and officially, known as the Monastery of Saint Mary of the Victory (Portuguese: Mosteiro de Santa Maria da Vitória), it was erected in commemoration of the 1385 Battle of Aljubarrota and would serve as the burial church of the 15th-century Aviz dynasty of Portuguese royalty. It is one of the best and original examples of Late Flamboyant Gothic architecture in Portugal, intermingled with the Manueline style.",
    image_url: "/monuments/mosteiro-da-batalha.png",
  },
  {
    id: "7d5bbc9f-8652-4462-a8f2-56f9999acc8c",
    name: "Convento de Cristo",
    city: "Tomar",
    year: 1160,
    country: "Portugal",
    desc: "The Convent of Christ (Portuguese: Convento de Cristo/Mosteiro de Cristo) is a former Catholic convent in Tomar, Portugal. Originally a 12th-century Templar stronghold, when the order was dissolved in the 14th century the Portuguese branch was turned into the Knights of the Order of Christ, that later supported Portugal's maritime discoveries of the 15th century. The convent and castle complex are a historic and cultural monument and was listed as a UNESCO World Heritage site in 1983.",
    image_url: "/monuments/convento-de-cristo.png",
  },
  {
    id: "6b458840-2b36-4728-a27d-6ad0dc8830ef",
    name: "Templo de Diana",
    city: "Évora",
    year: 1,
    country: "Portugal",
    desc: "The Roman Temple of Évora (Portuguese: Templo romano de Évora), also referred to as the Templo de Diana (albeit wrongly, after Diana, the ancient Roman goddess of the moon, the hunt, and chastity) is an ancient temple in the Portuguese city of Évora (civil parish of Sé e São Pedro). The temple is part of the historical centre of the city, which was included in the classification by UNESCO as a World Heritage Site.It represents one of the most significant landmarks relating to the Roman and Lusitanian civilizations of Évora and in Portuguese territory.",
    image_url: "/monuments/templo-de-diana.png",
  },
  {
    id: "4fd9b425-ebfd-40ff-b8a7-a1e993b1acb4",
    name: "Mosteiro de Alcobaça",
    city: "Alcobaça",
    year: 1153,
    country: "Portugal",
    desc: "Lorem ipsum tellus ligula quam molestie, nibh vestibulum aptent sodales vestibulum, habitant platea purus facilisis. Phasellus ullamcorper tellus pulvinar tortor at tempus blandit semper cubilia risus curae, duis fermentum integer porta sit auctor pharetra blandit ipsum. Nulla condimentum nec primis rhoncus volutpat mattis malesuada, interdum aliquam sollicitudin massa quisque euismod gravida, libero enim per ullamcorper aliquam commodo. Ut libero dapibus aenean molestie phasellus scelerisque, netus dictum etiam pharetra odio sollicitudin, lorem dictumst senectus congue etiam.",
    image_url: "/monuments/mosteiro-de-alcobaça.png",
  },
  {
    id: "fe85db9b-a7cb-41d4-bf93-9345e2cc74f7",
    name: "Palácio da Pena",
    city: "Sintra",
    year: 1854,
    country: "Portugal",
    desc: "Porta sodales donec quisque ultrices faucibus porta eget condimentum curae, ante consectetur pretium diam eu viverra senectus justo aenean commodo, vehicula tellus faucibus rhoncus dolor etiam interdum dictumst. Suscipit vivamus risus condimentum convallis risus sagittis non cursus, netus aliquam per dictumst sem ipsum purus etiam, enim ultricies commodo quisque tristique consectetur mollis. Nulla vulputate lacinia volutpat blandit nam erat class felis justo aenean, eleifend ut interdum nullam praesent bibendum ad ipsum urna mauris habitant, feugiat sagittis mollis nisl dictum elementum suspendisse etiam lobortis.",
    image_url: "/monuments/palacio-da-pena.png",
  },
  {
    id: "5870b673-81f5-442e-829b-0b960857dc20",
    name: "Castelo de Guimarães",
    city: "Guimarães",
    year: 968,
    country: "Portugal",
    desc: "Neque aliquam posuere eu dui orci curabitur platea, pharetra in placerat leo duis ligula nam per, lorem pulvinar mauris lacinia sit augue. Dui ornare ante at aenean consectetur orci ad non, aenean consectetur dui per mauris potenti ante conubia, quisque euismod iaculis neque feugiat eget augue. Purus mollis curae adipiscing primis est sed justo, dictum tempor diam senectus ultricies interdum imperdiet, inceptos quis ad fames feugiat eu.",
    image_url: "/monuments/castelo-de-guimaraes.png",
  },
  {
    id: "9224a2d1-3638-4892-b01f-2c3797c47d94",
    name: "Universidade de Coimbra",
    city: "Coimbra",
    year: 1290,
    country: "Portugal",
    desc: "Platea litora sit commodo a fusce auctor eros, vitae convallis faucibus odio laoreet tempor placerat accumsan, orci elit libero potenti aptent torquent. Inceptos vel tincidunt nisl venenatis sodales posuere enim tempor, bibendum tempus hendrerit nisi augue feugiat taciti hac, odio auctor ullamcorper per himenaeos odio ante. Senectus condimentum nibh aenean feugiat porta eu ac dui dictum fusce molestie faucibus himenaeos ad, purus quisque etiam nisl etiam netus habitant himenaeos elementum consequat class quis pellentesque.",
    image_url: "/monuments/universidade-de-coimbra.png",
  },
  {
    id: "ee6d8e23-60bb-4693-ba79-b68078b76141",
    name: "Convento de Mafra",
    city: "Mafra",
    year: 1755,
    country: "Portugal",
    desc: "Curae arcu amet phasellus scelerisque convallis libero cursus vivamus, at vitae a turpis bibendum amet etiam, lorem iaculis feugiat morbi eros nostra hendrerit. Molestie lobortis orci magna felis class pharetra etiam aenean congue egestas, posuere lacinia mauris cubilia pretium placerat vitae morbi curabitur libero, sapien morbi velit felis vitae nostra accumsan risus etiam. Faucibus consequat tellus eleifend interdum quisque consequat velit dictum lectus et sollicitudin, hac ligula vel ultrices praesent malesuada laoreet sagittis aliquam.",
    image_url: "/monuments/convento-de-mafra.png",
  },
  {
    id: "2d444f6d-21c8-4827-8aee-377a9da16551",
    name: "Bom Jesus do Monte",
    city: "Braga",
    year: 1784,
    country: "Portugal",
    desc: "The Sanctuary of Bom Jesus do Monte is a Portuguese Catholic shrine in Tenões, outside the city of Braga, in northern Portugal. Its name means Good Jesus of the Mount.This sanctuary is a notable example of Christian pilgrimage site with a monumental, Baroque stairway that climbs 116 meters (381 feet). It is an important tourist attraction of Braga.On 7 July 2019, the Sanctuary of Bom Jesus do Monte in Braga was inscribed as a UNESCO World Heritage Site.",
    image_url: "/monuments/bom-jesus-do-monte.png",
  },
];

const users = [
  {
    id: "eb66017d-01b8-4d3d-b8c5-299232958459",
    address: "0x9de68178B483E57121178fC981940a6BAEa69F4b",
    monument_ids: [monuments[0].id, monuments[1].id, monuments[2].id],
    username: "amy-burns",
    email: "amy@burns.com",
    bio: "sou eu.",
    avatar_url: "/users/amy-burns.png",
  },
  {
    id: "d992e70f-786e-4682-a311-7a95a437a4a6",
    address: "0xB90007a24B01F500ABEF571ddafa96c7d3676d2B",
    monument_ids: [monuments[3].id, monuments[4].id],
    username: "balazs-orban",
    email: "balazs@orban.com",
    bio: "",
    avatar_url: "/users/balazs-orban.png",
  },
  {
    id: "c794f658-431f-4189-8295-9ba51be8007a",
    address: "0x67A99fbEA6844443aDEEfb01DF5265f7C892332C",
    monument_ids: [monuments[5].id],
    username: "emil-kowalski",
    email: "emil@kowalski.com",
    bio: "",
    avatar_url: "/users/emil-kowalski.png",
  },
  {
    id: "9c7ec3a5-0eb5-4b19-acc8-92a71ffebb2c",
    address: "0xaF7eE4aFf0a3C010B96EB23a0b09E2A26e91ceDF",
    monument_ids: [monuments[6].id],
    username: "guillermo-rauch",
    email: "guillermo@rauch.com",
    bio: "",
    avatar_url: "/users/guillermo-rauch.png",
  },
  {
    id: "1e1118ac-bc8f-49b2-bb2e-8887bd722f70",
    address: "0x21B7110f97d3Be570afb6F49b4C86614874268fA",
    monument_ids: [],
    username: "hector-simpson",
    email: "hector@simpson.com",
    bio: "",
    avatar_url: "/users/hector-simpsons.png",
  },
];