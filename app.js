const resources = [
  {
    id: "universal-file-mapper",
    name: "Universal File Mapper",
    icon: "folder_open",
    description: "서로 다른 파일 구조와 컬럼을 기준 형식에 맞게 매핑하는 업무용 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/universal-file-mapper/",
    pinned: true,
  },
  {
    id: "release-notes",
    name: "Release Notes",
    icon: "article",
    description: "음악을 발매하는 팀의 알려진 이슈와 의도된 동작들",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/release-notes/",
    pinned: false,
  },
  {
    id: "multi-platform-music-search",
    name: "Multi-Platform Music Search",
    icon: "travel_explore",
    description: "하나의 키워드로 주요 음악 플랫폼의 검색 결과를 빠르게 여는 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/Multi_Platform_Music_Search/",
    pinned: false,
  },
  {
    id: "digital-settlement-mapper",
    name: "Digital Settlement Mapper",
    icon: "account_tree",
    description: "디지털 정산 데이터를 통합 업무 형식으로 매핑하고 정리하는 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/digital-settlement-mapper/",
    pinned: true,
  },
  {
    id: "csv-encoding-fixer",
    name: "CSV Encoding Fixer",
    icon: "data_object",
    description: "CSV 파일의 인코딩 문제를 확인하고 업무용 형식으로 변환하는 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/csv-encoding-fixer/",
    pinned: false,
  },
  {
    id: "audioguy-distribution-dashboard",
    name: "AUDIOGUY Distribution Dashboard",
    icon: "dashboard",
    description: "AUDIOGUY 유통 카탈로그 및 운영 현황 대시보드",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://sound360music.netlify.app/",
    pinned: true,
  },
  {
    id: "settlement-consolidator",
    name: "Settlement Consolidator",
    icon: "account_balance_wallet",
    description: "유통사 정산 원본을 월별 정산내역서로 취합·매핑·환율 반영·내보내기",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://docs.google.com/spreadsheets/d/1iT99zK5b1_981bGJ17O37h_KwTxSA-mfhV8QqaUdYeA/edit?gid=1128828444#gid=1128828444",
    pinned: true,
  },
  {
    id: "gmail-draft-composer",
    name: "Gmail Draft Composer",
    icon: "drafts",
    description: "스프레드시트 연동 배치 초안 생성, 토큰 개인화 및 테스트 모드 지원",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://script.google.com/a/macros/audioguyrecords.com/s/AKfycbwHgPh4KwJc8KUFYs8ROZLC_qGiMHQKYEvQr7E9ux5DnRKKMjbLPlV7o2GDL7WwpliF/exec",
    pinned: true,
  },

  {
    id: "apple-music",
    name: "Apple Music",
    logo: "./assets/logos/apple-music.svg",
    description: "Apple Music 신작 및 글로벌 DSP 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://music.apple.com/us/new",
    pinned: false,
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "./assets/logos/spotify.svg",
    description: "Spotify 검색, 아티스트 및 릴리스 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://open.spotify.com/",
    pinned: true,
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    logo: "./assets/logos/youtube-music.svg",
    description: "YouTube Music 검색 및 서비스 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://music.youtube.com/",
    pinned: false,
  },
  {
    id: "tidal",
    name: "TIDAL",
    logo: "./assets/logos/tidal.svg",
    description: "TIDAL 카탈로그 및 글로벌 DSP 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://tidal.com/",
    pinned: false,
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    logo: "./assets/logos/amazon-music.svg",
    description: "Amazon Music 검색 및 카탈로그 확인",
    category: "Global DSP",
    type: "DSP",
    url: "https://music.amazon.com/search?filter=IsLibrary%7Cfalse&sc=none",
    pinned: false,
  },

  {
    id: "melon",
    name: "Melon",
    logo: "./assets/logos/melon.svg",
    description: "멜론 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://www.melon.com/index.htm",
    pinned: true,
  },
  {
    id: "genie",
    name: "Genie",
    logo: "./assets/logos/genie.svg",
    description: "지니 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://www.genie.co.kr/",
    pinned: false,
  },
  {
    id: "bugs",
    name: "Bugs!",
    logo: "./assets/logos/bugs.svg",
    description: "벅스 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://music.bugs.co.kr/",
    pinned: false,
  },
  {
    id: "vibe",
    name: "VIBE",
    logo: "./assets/logos/vibe.svg",
    description: "VIBE 신작 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://vibe.naver.com/today",
    pinned: false,
  },
  {
    id: "flo",
    name: "FLO",
    logo: "./assets/logos/flo.svg",
    description: "FLO 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://www.music-flo.com/",
    pinned: false,
  },

  {
    id: "naxos-labels",
    name: "Naxos Labels",
    logo: "./assets/logos/naxos-labels.svg",
    description: "Naxos Labels 유통 등록 및 카탈로그 운영 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://labels.naxos.com/catalog/products/tiles",
    pinned: false,
  },
  {
    id: "kakao-mlb",
    name: "Kakao MLB",
    logo: "./assets/logos/kakao-mlb.svg",
    description: "Kakao Entertainment Music Licence Bank 유통 운영 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://imlb.co.kr/login",
    pinned: false,
  },
  {
    id: "genie-kola",
    name: "Genie KOLA",
    logo: "./assets/logos/genie-kola.svg",
    description: "Genie 유통 등록 및 정산 확인 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://kola.geniemusic.co.kr/login/login",
    pinned: false,
  },
  {
    id: "bugs-partners",
    name: "Bugs Partners",
    logo: "./assets/logos/bugs-partners.svg",
    description: "Bugs 유통 등록 및 정산 확인 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://partners.bugs.co.kr/index",
    pinned: false,
  },
  {
    id: "yg-plus-clas",
    name: "YG PLUS CLAS",
    logo: "./assets/logos/yg-plus-clas.svg",
    description: "YG PLUS 유통 등록 및 정산 확인 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "http://clas.ygplus.com",
    pinned: false,
  },
  {
    id: "flo-mcp",
    name: "FLO MCP",
    logo: "./assets/logos/flo-mcp.svg",
    description: "FLO 유통 등록 및 정산 확인 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://mcp.music-flo.com/login",
    pinned: false,
  },
  {
    id: "fuga-catalog",
    name: "FUGA Catalog",
    logo: "./assets/logos/fuga-catalog.svg",
    description: "FUGA 유통 등록, 카탈로그 및 정산 운영 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://fugamusic.com/login/?r=%2Fcatalog%2Fproducts%2Fgrid",
    pinned: false,
  },
  {
    id: "too-lost",
    name: "Too Lost",
    logo: "./assets/logos/too-lost.svg",
    description: "글로벌 음원 유통, 카탈로그 관리, 전달 현황 및 정산 분석을 위한 유통 플랫폼",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://toolost.com/user-portal",
    pinned: false,
  },
  {
    id: "the-orchard-workstation",
    name: "The Orchard Workstation",
    logo: "./assets/logos/the-orchard-workstation.svg",
    description: "The Orchard 유통 등록, 카탈로그 및 정산 운영 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://login.distroauth.com/u/login?state=hqFo2SB2dVdYMHAxRUdkV244Vjc4NnVwUl92bkg3eFJSdkZUOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHYySXQ0WlpiZ3VPaTlOd3JPVGt2emVZc21iV1RzX051o2NpZNkgbTlxZ0RHWWh0bG1BMnEzSlIxN2VxaTlUblNzYmp6c1Klb3JnaWS0b3JnXzVpd3pIOFRqVkdmSWtvOG6nb3JnbmFtZadvcmNoYXJk",
    pinned: true,
  },
  {
    id: "sme-artist-portal",
    name: "SME Artist Portal",
    logo: "./assets/logos/sme-artist-portal.svg",
    description: "Sony Music Entertainment 유통 등록 및 아티스트 파트너 포털",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://sme-artistportal.com/login?returnUrl=%2F",
    pinned: false,
  },
  {
    id: "mound-media-partner",
    name: "Mound Media Partner",
    logo: "./assets/logos/mound-media-partner.svg",
    description: "POCLANOS 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://partner.moundmedia.net/",
    pinned: false,
  },
  {
    id: "leeway-music-media",
    name: "Leeway Music & Media",
    logo: "./assets/logos/leeway-music-media.svg",
    description: "리웨이뮤직앤미디어 유통 등록 및 정산 확인 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://leeway.cuomusic.co.kr/musicgate/login.php",
    pinned: false,
  },
  {
    id: "ogam-ent",
    name: "OGAM ENT",
    logo: "./assets/logos/ogam-ent.svg",
    description: "오감엔터테인먼트 서비스",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "http://ogame.co.kr/member/login",
    pinned: false,
  },
  {
    id: "kyobo-partner",
    name: "Kyobo Partner",
    logo: "./assets/logos/kyobo-partner.svg",
    description: "교보문고 유통 등록 및 정산 확인 파트너 시스템",
    category: "Distribution Partners",
    type: "PARTNER",
    url: "https://partner.kyobobook.co.kr/login",
    pinned: false,
  },

  {
    id: "nds-score",
    name: "NDS Score",
    logo: "./assets/logos/nds-score.svg",
    description: "낙소스 피칭 툴/서비스",
    category: "Artist & Marketing",
    type: "MARKETING",
    url: "https://ndsscore.softr.app/",
    pinned: false,
  },
  {
    id: "nds-smart-url",
    name: "NDS Smart URL",
    logo: "./assets/logos/nds-smart-url.svg",
    description: "found.ee 기반 낙소스·FUGA 스마트 URL 생성 서비스",
    category: "Artist & Marketing",
    type: "MARKETING",
    url: "https://fuga.fillout.com/nds-smart-url",
    pinned: false,
  },
  {
    id: "apple-music-for-artists",
    name: "Apple Music for Artists",
    logo: "./assets/logos/apple-music-for-artists.svg",
    description: "Apple Music 아티스트 및 카탈로그 관리 시스템",
    category: "Artist & Marketing",
    type: "MARKETING",
    url: "https://artists.apple.com/ui",
    pinned: false,
  },
  {
    id: "spotify-for-artists",
    name: "Spotify for Artists",
    logo: "./assets/logos/spotify-for-artists.svg",
    description: "Spotify 아티스트, 릴리스 및 성과 관리",
    category: "Artist & Marketing",
    type: "MARKETING",
    url: "https://artists.spotify.com/home",
    pinned: false,
  },

  {
    id: "wetransfer",
    name: "WeTransfer",
    logo: "./assets/logos/wetransfer.svg",
    description: "대용량 파일 전송",
    category: "Other & Rights",
    type: "UTILITY",
    url: "https://wetransfer.com/",
    pinned: false,
  },
  {
    id: "modusign",
    name: "Modusign",
    logo: "./assets/logos/modusign.svg",
    description: "전자계약 및 전자서명",
    category: "Other & Rights",
    type: "UTILITY",
    url: "https://app.modusign.co.kr/authentication/signin",
    pinned: false,
  },
  {
    id: "komca",
    name: "KOMCA",
    logo: "./assets/logos/komca.svg",
    description: "한국음악저작권협회 저작권 업무 시스템",
    category: "Other & Rights",
    type: "RIGHTS",
    url: "https://www.komca.or.kr/CTLJSP",
    pinned: false,
  },
  {
    id: "mims",
    name: "MIMS",
    logo: "./assets/logos/mims.svg",
    description: "RIAK ISRC 및 UCI 발급 시스템",
    category: "Other & Rights",
    type: "RIGHTS",
    url: "https://www.mims.or.kr/login",
    pinned: false,
  },
  {
    id: "musicfetch",
    name: "Musicfetch",
    logo: "./assets/logos/musicfetch.svg",
    description: "UPC, ISRC, YouTube Channel ID 및 음악 메타데이터 조회",
    category: "Other & Rights",
    type: "UTILITY",
    url: "https://musicfetch.io/",
    pinned: false,
  },
];

const categoryOrder = [
  "All",
  "SEORO TOOLS",
  "Global DSP",
  "Korea DSP",
  "Distribution Partners",
  "Artist & Marketing",
  "Other & Rights",
];

const typeThemes = {
  "SEORO TOOL": {
    background: "#f1f3fb",
    border: "#ccd5f2",
    accent: "#405ba8",
  },
  DSP: {
    background: "#f0f6f1",
    border: "#c9ddcd",
    accent: "#2f7d4b",
  },
  PARTNER: {
    background: "#f6f1f7",
    border: "#dfcde2",
    accent: "#7d4f8b",
  },
  MARKETING: {
    background: "#fdf6ea",
    border: "#ead8b5",
    accent: "#9a681f",
  },
  RIGHTS: {
    background: "#f8f2ee",
    border: "#e8d4c7",
    accent: "#9a5b35",
  },
  UTILITY: {
    background: "#f3f4f5",
    border: "#d8dde0",
    accent: "#55616a",
  },
};

const defaultTheme = {
  background: "#ffffff",
  border: "#e2e2dc",
  accent: "#1b1b1a",
};

const state = {
  activeCategory: "All",
  searchTerm: "",
};

const elements = {
  filters: document.querySelector("#category-filters"),
  search: document.querySelector("#resource-search"),
  summary: document.querySelector("#search-result-summary"),
  pinnedGrid: document.querySelector("#pinned-grid"),
  resourceGroups: document.querySelector("#resource-groups"),
  resourceCount: document.querySelector("#resource-count"),
  emptyState: document.querySelector("#empty-state"),
  cardTemplate: document.querySelector("#resource-card-template"),
  lastUpdated: document.querySelector("#last-updated"),
};

function normalizeText(value) {
  return value.toLocaleLowerCase("ko-KR").trim();
}

function getFilteredResources() {
  const keyword = normalizeText(state.searchTerm);

  return resources.filter((resource) => {
    const matchesCategory =
      state.activeCategory === "All" || resource.category === state.activeCategory;

    const searchableText = [
      resource.name,
      resource.description,
      resource.category,
      resource.type,
    ]
      .join(" ")
      .toLocaleLowerCase("ko-KR");

    return matchesCategory && (!keyword || searchableText.includes(keyword));
  });
}

function applyTheme(card, type) {
  const theme = typeThemes[type] ?? defaultTheme;

  card.style.setProperty("--card-bg", theme.background);
  card.style.setProperty("--card-border", theme.border);
  card.style.setProperty("--card-accent", theme.accent);
}

function createCard(resource) {
  const fragment = elements.cardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".resource-card");
  const icon = fragment.querySelector(".resource-icon");
  const logo = fragment.querySelector(".resource-logo");
  const name = fragment.querySelector(".resource-name");
  const description = fragment.querySelector(".resource-description");

  applyTheme(card, resource.type);

  card.href = resource.url;
  card.dataset.type = resource.type;
  card.setAttribute("aria-label", `${resource.name} 열기 (새 탭)`);

  name.textContent = resource.name;
  description.textContent = resource.description;

  if (resource.logo) {
    logo.src = resource.logo;
    logo.hidden = false;

    logo.addEventListener(
      "error",
      () => {
        logo.removeAttribute("src");
        logo.hidden = true;

        if (resource.icon) {
          icon.textContent = resource.icon;
          icon.hidden = false;
        }
      },
      { once: true },
    );
  } else if (resource.icon) {
    icon.textContent = resource.icon;
    icon.hidden = false;
  }

  return fragment;
}

function renderFilters() {
  const fragment = document.createDocumentFragment();

  categoryOrder.forEach((category) => {
    const button = document.createElement("button");
    const count =
      category === "All"
        ? resources.length
        : resources.filter((resource) => resource.category === category).length;

    button.type = "button";
    button.className = "filter-button";
    button.setAttribute(
      "aria-pressed",
      String(category === state.activeCategory),
    );
    button.textContent = `${category} (${count})`;

    button.addEventListener("click", () => {
      state.activeCategory = category;
      render();
    });

    fragment.appendChild(button);
  });

  elements.filters.replaceChildren(fragment);
}

function renderPinned(resourcesToRender) {
  const pinnedResources = resourcesToRender.filter(
    (resource) => resource.pinned,
  );

  if (pinnedResources.length === 0) {
    elements.pinnedGrid.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();

  pinnedResources.forEach((resource) => {
    fragment.appendChild(createCard(resource));
  });

  elements.pinnedGrid.hidden = false;
  elements.pinnedGrid.replaceChildren(fragment);
}

function createGroup(category, resourcesToRender) {
  const group = document.createElement("section");
  const title = document.createElement("h3");
  const count = document.createElement("span");
  const grid = document.createElement("div");

  group.className = "resource-group";
  title.className = "group-title";
  grid.className = "resource-grid";

  title.textContent = category;
  count.className = "group-count";
  count.textContent = `${resourcesToRender.length}`;
  title.appendChild(count);

  resourcesToRender.forEach((resource) => {
    grid.appendChild(createCard(resource));
  });

  group.append(title, grid);
  return group;
}

function renderGroups(resourcesToRender) {
  if (resourcesToRender.length === 0) {
    elements.resourceGroups.replaceChildren();
    elements.emptyState.hidden = false;
    return;
  }

  const categories =
    state.activeCategory === "All"
      ? categoryOrder.slice(1)
      : [state.activeCategory];

  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const categoryResources = resourcesToRender.filter(
      (resource) => resource.category === category,
    );

    if (categoryResources.length > 0) {
      fragment.appendChild(createGroup(category, categoryResources));
    }
  });

  elements.emptyState.hidden = true;
  elements.resourceGroups.replaceChildren(fragment);
}

function renderSummary(resourcesToRender) {
  const count = resourcesToRender.length;
  const category =
    state.activeCategory === "All" ? "전체 카테고리" : state.activeCategory;

  elements.resourceCount.textContent = `${count}개 항목`;

  elements.summary.textContent = state.searchTerm.trim()
    ? `"${state.searchTerm}" 검색 결과 ${count}개 · ${category}`
    : `${category}에서 ${count}개 항목을 표시하고 있습니다.`;
}

function render() {
  const filteredResources = getFilteredResources();

  renderFilters();
  renderPinned(filteredResources);
  renderGroups(filteredResources);
  renderSummary(filteredResources);
}

function resetFilters() {
  state.activeCategory = "All";
  state.searchTerm = "";
  elements.search.value = "";
  render();
  elements.search.focus();
}

elements.search.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  render();
});

elements.search.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && event.target.value) {
    event.preventDefault();
    resetFilters();
  }
});

document.addEventListener("keydown", (event) => {
  const activeElement = document.activeElement;
  const isTyping =
    activeElement instanceof HTMLInputElement ||
    activeElement instanceof HTMLTextAreaElement ||
    activeElement?.isContentEditable;

  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    elements.search.focus();
  }
});

elements.lastUpdated.textContent = `Last updated: ${new Intl.DateTimeFormat(
  "en-CA",
  {
    year: "numeric",
    month: "2-digit",
  },
).format(new Date())}`;

render();
