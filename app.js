const resources = [
  {
    id: "universal-file-mapper",
    name: "Universal File Mapper",
    description: "서로 다른 파일 구조와 컬럼을 기준 형식에 맞게 매핑하는 업무용 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/universal-file-mapper/",
    pinned: true,
  },
  {
    id: "release-notes",
    name: "Release Notes",
    description: "CSV 기반 발매 문구와 릴리스 노트를 확인하는 업무용 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/release-notes/",
    pinned: false,
  },
  {
    id: "multi-platform-music-search",
    name: "Multi-Platform Music Search",
    description: "하나의 키워드로 주요 음악 플랫폼의 검색 결과를 빠르게 여는 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/Multi_Platform_Music_Search/",
    pinned: true,
  },
  {
    id: "digital-settlement-mapper",
    name: "Digital Settlement Mapper",
    description: "디지털 정산 데이터를 통합 업무 형식으로 매핑하고 정리하는 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/digital-settlement-mapper/",
    pinned: true,
  },
  {
    id: "csv-encoding-fixer",
    name: "CSV Encoding Fixer",
    description: "CSV 파일의 인코딩 문제를 확인하고 업무용 형식으로 변환하는 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/csv-encoding-fixer/",
    pinned: true,
  },

  {
    id: "apple-music",
    name: "Apple Music",
    description: "Apple Music 신작 및 글로벌 DSP 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://music.apple.com/us/new",
    pinned: true,
    theme: "apple",
  },
  {
    id: "spotify",
    name: "Spotify",
    description: "Spotify 검색, 아티스트 및 릴리스 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://open.spotify.com/",
    pinned: true,
    theme: "spotify",
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    description: "YouTube Music 검색 및 서비스 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://music.youtube.com/",
    pinned: true,
    theme: "youtube",
  },
  {
    id: "tidal",
    name: "TIDAL",
    description: "TIDAL 카탈로그 및 글로벌 DSP 모니터링",
    category: "Global DSP",
    type: "DSP",
    url: "https://tidal.com/",
    pinned: false,
    theme: "tidal",
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    description: "Amazon Music 검색 및 카탈로그 확인",
    category: "Global DSP",
    type: "DSP",
    url: "https://music.amazon.com/search?filter=IsLibrary%7Cfalse&sc=none",
    pinned: false,
    theme: "amazon",
  },

  {
    id: "melon",
    name: "Melon",
    description: "멜론 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://www.melon.com/index.htm",
    pinned: true,
    theme: "melon",
  },
  {
    id: "genie",
    name: "Genie",
    description: "지니 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://www.genie.co.kr/",
    pinned: false,
    theme: "genie",
  },
  {
    id: "bugs",
    name: "Bugs!",
    description: "벅스 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://music.bugs.co.kr/",
    pinned: false,
    theme: "bugs",
  },
  {
    id: "vibe",
    name: "VIBE",
    description: "VIBE 신작 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://vibe.naver.com/today",
    pinned: false,
    theme: "vibe",
  },
  {
    id: "flo",
    name: "FLO",
    description: "FLO 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    url: "https://www.music-flo.com/",
    pinned: false,
    theme: "flo",
  },

  {
    id: "naxos-labels",
    name: "Naxos Labels",
    description: "Naxos Labels 카탈로그 및 상품 정보 확인",
    category: "Distribution & Catalog",
    type: "CATALOG",
    url: "https://labels.naxos.com/catalog/products/tiles",
    pinned: true,
  },
  {
    id: "fuga-catalog",
    name: "FUGA Catalog",
    description: "FUGA 카탈로그 및 상품 관리 시스템",
    category: "Distribution & Catalog",
    type: "PARTNER",
    url: "https://fugamusic.com/login/?r=%2Fcatalog%2Fproducts%2Fgrid",
    pinned: true,
  },
  {
    id: "nds-score",
    name: "NDS Score",
    description: "NDS 관련 업무 데이터 및 운영 시스템",
    category: "Distribution & Catalog",
    type: "PARTNER",
    url: "https://ndsscore.softr.app/",
    pinned: false,
  },
  {
    id: "nds-smart-url",
    name: "NDS Smart URL",
    description: "FUGA NDS Smart URL 생성 요청 도구",
    category: "Distribution & Catalog",
    type: "PARTNER",
    url: "https://fuga.fillout.com/nds-smart-url",
    pinned: false,
  },

  {
    id: "spotify-for-artists",
    name: "Spotify for Artists",
    description: "Spotify 아티스트, 릴리스 및 성과 관리",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://artists.spotify.com/home",
    pinned: true,
    theme: "spotify",
  },
 {
  id: "yg-plus-clas",
  name: "YG PLUS CLAS",
  description: "YG PLUS CLAS 파트너 포털",
  category: "Partner Systems",
  type: "PARTNER",
  url: "http://clas.ygplus.com",
  pinned: false,
},
{
  id: "leeway-music-media",
  name: "Leeway Music & Media",
  description: "리웨이뮤직앤미디어 파트너 시스템",
  category: "Partner Systems",
  type: "PARTNER",
  url: "https://leeway.cuomusic.co.kr/musicgate/login.php",
  pinned: false,
},
{
  id: "sony-music-artist-portal",
  name: "Sony Music Entertainment Artist Portal",
  description: "Sony Music Entertainment 아티스트·파트너 포털",
  category: "Partner Systems",
  type: "PARTNER",
  url: "https://sme-artistportal.com/login?returnUrl=%2F",
  pinned: false,
  theme: "sony",
},
  {
    id: "flo-mcp",
    name: "FLO MCP",
    description: "FLO 파트너 운영 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://mcp.music-flo.com/login",
    pinned: false,
    theme: "flo",
  },
  {
    id: "genie-kola",
    name: "Genie KOLA",
    description: "Genie 파트너 운영 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://kola.geniemusic.co.kr/login/login",
    pinned: false,
    theme: "genie",
  },
  {
    id: "bugs-partners",
    name: "Bugs Partners",
    description: "Bugs 파트너 운영 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://partners.bugs.co.kr/index",
    pinned: false,
    theme: "bugs",
  },
  {
    id: "mound-media",
    name: "Mound Media Partner",
    description: "Mound Media 파트너 포털",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://partner.moundmedia.net/",
    pinned: false,
  },
  {
    id: "imlb",
    name: "IMLB",
    description: "유통 및 파트너 업무 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://imlb.co.kr/login",
    pinned: false,
  },
  {
    id: "kyobo-partner",
    name: "Kyobo Partner",
    description: "교보문고 파트너 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://partner.kyobobook.co.kr/login",
    pinned: false,
  },
  {
    id: "komca",
    name: "KOMCA",
    description: "한국음악저작권협회 저작권 업무 시스템",
    category: "Partner Systems",
    type: "RIGHTS",
    url: "https://www.komca.or.kr/CTLJSP",
    pinned: false,
  },
  {
    id: "distroauth",
    name: "DistroAuth",
    description: "유통 관련 인증 및 파트너 접근 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    url: "https://login.distroauth.com/u/login?state=hqFo2SB2dVdYMHAxRUdkV244Vjc4NnVwUl92bkg3eFJSdkZUOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHYySXQ0WlpiZ3VPaTlOd3JPVGt2emVZc21iV1RzX051o2NpZNkgbTlxZ0RHWWh0bG1BMnEzSlIxN2VxaTlUblNzYmp6c1Klb3JnaWS0b3JnXzVpd3pIOFRqVkdmSWtvOG6nb3JnbmFtZadvcmNoYXJk",
    pinned: false,
  },

  {
    id: "wetransfer",
    name: "WeTransfer",
    description: "대용량 파일 전송",
    category: "Work Utilities",
    type: "UTILITY",
    url: "https://wetransfer.com/",
    pinned: true,
  },
  {
    id: "modusign",
    name: "Modusign",
    description: "전자계약 및 전자서명",
    category: "Work Utilities",
    type: "UTILITY",
    url: "https://app.modusign.co.kr/authentication/signin",
    pinned: true,
  },
  {
    id: "ogame",
    name: "OGame",
    description: "기타 업무 시스템",
    category: "Work Utilities",
    type: "UTILITY",
    url: "http://ogame.co.kr/member/login",
    pinned: false,
  },
];

const categoryOrder = [
  "All",
  "My Tools",
  "Global DSP",
  "Korea DSP",
  "Distribution & Catalog",
  "Partner Systems",
  "Work Utilities",
];

const typeThemes = {
  "SEORO TOOL": {
    background: "#f1f3fb",
    border: "#ccd5f2",
    accent: "#405ba8",
    badgeBackground: "#dde4f8",
    badgeText: "#294381",
  },
  DSP: {
    background: "#f0f6f1",
    border: "#c9ddcd",
    accent: "#2f7d4b",
    badgeBackground: "#dceee0",
    badgeText: "#24623b",
  },
  CATALOG: {
    background: "#fdf6ea",
    border: "#ead8b5",
    accent: "#9a681f",
    badgeBackground: "#f5e7ca",
    badgeText: "#7b5013",
  },
  PARTNER: {
    background: "#f6f1f7",
    border: "#dfcde2",
    accent: "#7d4f8b",
    badgeBackground: "#ebdced",
    badgeText: "#633a70",
  },
  RIGHTS: {
    background: "#f8f2ee",
    border: "#e8d4c7",
    accent: "#9a5b35",
    badgeBackground: "#f0dfd3",
    badgeText: "#7a4425",
  },
  UTILITY: {
    background: "#f3f4f5",
    border: "#d8dde0",
    accent: "#55616a",
    badgeBackground: "#e7ebed",
    badgeText: "#424c53",
  },
};

const serviceThemes = {
  apple: {
    background: "#fff2f5",
    border: "#f0cbd5",
    accent: "#d84c70",
    badgeBackground: "#ffe0e8",
    badgeText: "#a92b4c",
  },
  spotify: {
    background: "#effaf2",
    border: "#bee6c9",
    accent: "#1f8d4e",
    badgeBackground: "#d9f3e1",
    badgeText: "#176f3d",
  },
  youtube: {
    background: "#fff2f2",
    border: "#f0c6c6",
    accent: "#ca3e3e",
    badgeBackground: "#fde0e0",
    badgeText: "#a32d2d",
  },
  tidal: {
    background: "#f3f3f3",
    border: "#d5d5d5",
    accent: "#303030",
    badgeBackground: "#e7e7e7",
    badgeText: "#202020",
  },
  amazon: {
    background: "#f0f7fc",
    border: "#c5deef",
    accent: "#397fac",
    badgeBackground: "#dceef9",
    badgeText: "#2c6388",
  },
  melon: {
    background: "#effaf9",
    border: "#c3e7e1",
    accent: "#208f83",
    badgeBackground: "#d8f2ed",
    badgeText: "#176f65",
  },
  genie: {
    background: "#f3f0ff",
    border: "#d8cef1",
    accent: "#6950b5",
    badgeBackground: "#e6dff9",
    badgeText: "#503a94",
  },
  bugs: {
    background: "#fff5ec",
    border: "#f0d3b2",
    accent: "#c67428",
    badgeBackground: "#fae3ca",
    badgeText: "#9f581a",
  },
  vibe: {
    background: "#f5f2fc",
    border: "#ded4f1",
    accent: "#7752aa",
    badgeBackground: "#e9e1f8",
    badgeText: "#5d3d8d",
  },
  flo: {
    background: "#f2f7ff",
    border: "#cbdbf1",
    accent: "#3d68ab",
    badgeBackground: "#dce8fa",
    badgeText: "#2f528a",
  },
  sony: {
    background: "#f2f6ff",
    border: "#cad8f2",
    accent: "#315ca8",
    badgeBackground: "#dce7fb",
    badgeText: "#26498a",
  },
};

const defaultTheme = {
  background: "#ffffff",
  border: "#d8d8d2",
  accent: "#171717",
  badgeBackground: "#ebebe7",
  badgeText: "#686866",
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
  resetButton: document.querySelector("#reset-filters-button"),
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

function applyTheme(card, resource) {
  const theme =
    (resource.theme && serviceThemes[resource.theme]) ||
    typeThemes[resource.type] ||
    defaultTheme;

  card.style.setProperty("--card-bg", theme.background);
  card.style.setProperty("--card-border", theme.border);
  card.style.setProperty("--card-accent", theme.accent);
  card.style.setProperty("--card-badge-bg", theme.badgeBackground);
  card.style.setProperty("--card-badge-text", theme.badgeText);
}

function createCard(resource) {
  const fragment = elements.cardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".resource-card");

  applyTheme(card, resource);

  card.href = resource.url;
  card.setAttribute("aria-label", `${resource.name} 열기 (새 탭)`);

  fragment.querySelector(".resource-badge").textContent = resource.type;
  fragment.querySelector(".resource-name").textContent = resource.name;
  fragment.querySelector(".resource-description").textContent =
    resource.description;

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

elements.resetButton.addEventListener("click", resetFilters);

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
    day: "2-digit",
  },
).format(new Date())}`;

render();
