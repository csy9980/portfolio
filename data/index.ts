export const gridItems = [
    {
        id: 1,
        title: "최수영",
        description: `퍼블리셔 4년 경험을 바탕으로 사용자 중심 UI/UX 설계와 웹 접근성을 고려한 개발을 지향합니다.

        React, Node.js 기반 프로젝트를 직접 설계·구현하고 기획과 개발을 연결하는 퍼블리셔로 성장하고 있습니다.`,
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full object-center hidden",
        titleClassName: "justify-end",
        img: "/me.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Global Mindset",
        description: `영어 기술 문서와 공식 레퍼런스 기반의 문제 해결
        GitHub 및 해외 개발 자료를 적극 활용하여 학습
        일본어 기초 회화 가능`,
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 leading-8",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Skills",
        description: `퍼블리셔 경험을 기반으로
        개발 역량을 확장하고 있습니다.`,
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
      id: 4,
      title: "Experience",
      description: `티젠소프트 | 퍼블리셔 & 기획 담당 | 2019.10 ~ 2024.02

      - 공공기관 웹/앱 구축 및 고도화 프로젝트 참여
      - HTML/CSS/JS 기반 퍼블리싱 및 반응형 웹 구현
      - UI/UX 기획 및 스토리보드 작성
      - 퍼블리싱 템플릿 공통화로 작업 효율 개선
      - 협업 과정에서 요구사항 조율 및 일정 관리 지원`,
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/team.svg",
      spareImg: "",
    },

    {
      id: 5,
      title: "Education & Growth",
      description: `클라우드 웹개발 과정 수료 (2025)
- React / Node.js 기반 프로젝트 설계 및 구현 경험
- Azure Cloud 환경에서 배포 경험

이화여자대학교 방송영상 / 경영 복수전공

웹디자인 기능사 취득

`,
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/edu.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "프로젝트를 함께 시작하실래요?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-80 text-center",
      img: "",
      spareImg: "",
    },
]


export const projects = [
  {
    id: 1,
    title: "조그마켓 쇼핑몰 2025.07.18 ~ 2025.08.20",
    des: "소셜 커머스 기반 쇼핑몰 서비스로, 소셜 로그인(카카오/네이버)과 Toss 결제 시스템을 제공하여 편리한 쇼핑 경험을 제공합니다.",
    img: "/jogeumarket.png",
    iconLists: ["/react.svg", "/type.svg", "/next.svg", "/tail.svg", "/fig.svg"],
    link: "https://github.com/csy9980/jogeu-market.git",
  },
  {
    id: 2,
    title: "레시피 검색 사이트",
    des: "OPEN API를 활용하여 레시피를 검색하는 사이트로, REST API를 사용하여 유저들간의 소통을 위한 게시판도 적용했습니다.",
    img: "/recipe.png",
    iconLists: ["/react.svg", "/node.svg", "/express-w.svg", "/seq.svg"],
    link: "https://recipe-front-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "공공기관 프로젝트들",
    des: "경찰청 과학수사 업무포털 기능개선, 한국방역협회 LMS, 한국자산관리공사 온러닝, 한국도로공사 사내방송 등 현업에서 퍼블리셔로써 구축해왔던 프로젝트입니다.",
    img: "/pj01.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/boot.svg", "/jquery.svg"],
    link: "http://proj_mcms.tigensoft.co.kr:9090/_exLive/_front/",
  },
  {
    id: 4,
    title: "사내 서비스 및 이벤트 홈페이지",
    des: "휴양소 홈페이지, 티고 홈페이지 등 사내 서비스 관련 홈페이지를 반응형으로 퍼블리싱했습니다.",
    img: "/tigen.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/boot.svg", "/jquery.svg"],
    link: "https://www.tigensoft.co.kr/_campus/sokcho/campusSokchoList.action",
  },
];
