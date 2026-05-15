export type Product = {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  description: string;
  notes: string;
};

export const products: Product[] = [
  {
    slug: "classic",
    name: "클래식 휘낭시에",
    shortName: "클래식",
    price: 2800,
    description: "잘 태운 발효 버터와 아몬드 가루의 정직한 한 알.",
    notes: "AOP 프랑스산 발효 버터 · 스페인산 아몬드 가루",
  },
  {
    slug: "cocoa",
    name: "초코 휘낭시에",
    shortName: "초코",
    price: 3000,
    description: "발로나 코코아의 깊고 무겁지 않은 다크 초콜릿 향.",
    notes: "Valrhona 코코아 100% · 다크 초콜릿 칩",
  },
  {
    slug: "hazelnut-mocha",
    name: "헤이즐넛 모카 휘낭시에",
    shortName: "헤이즐넛 모카",
    price: 3500,
    description: "구운 헤이즐넛과 에스프레소의 짙은 풍미.",
    notes: "이탈리아산 헤이즐넛 페이스트 · 라테 에스프레소",
  },
  {
    slug: "apple-cinnamon",
    name: "애플 시나몬 휘낭시에",
    shortName: "애플 시나몬",
    price: 3800,
    description: "캐러멜라이즈한 사과와 실론 시나몬의 따뜻한 한 알.",
    notes: "국내산 부사 · 실론 시나몬 · 데미사라 슈가",
  },
];

export const boxOptions = [
  {
    slug: "box-4",
    name: "박스 세트 4입",
    count: 4,
    price: 12000,
    note: "네 가지 맛 한 알씩. 선물용 박스 포장.",
  },
  {
    slug: "box-8",
    name: "박스 세트 8입",
    count: 8,
    price: 22000,
    note: "원하는 구성으로 8알. DM/카톡으로 구성 요청.",
  },
];

export const formatKRW = (n: number) => `${n.toLocaleString("ko-KR")}원`;
