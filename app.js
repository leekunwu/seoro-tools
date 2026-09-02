const resources = [
  {
    id: "universal-file-mapper",
    name: "Universal File Mapper",
    description: "서로 다른 파일 구조와 컬럼을 기준 형식에 맞게 매핑하는 업무용 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    status: "LIVE",
    url: "https://leekunwu.github.io/universal-file-mapper/",
    githubUrl: "https://github.com/leekunwu/universal-file-mapper",
    pinned: true,
  },
  {
    id: "release-notes",
    name: "Release Notes",
    description: "CSV 기반 발매 문구와 릴리스 노트를 확인하는 업무용 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    status: "LIVE",
    url: "https://leekunwu.github.io/release-notes/",
    githubUrl: "https://github.com/leekunwu/release-notes",
    pinned: false,
  },
  {
    id: "multi-platform-music-search",
    name: "Multi-Platform Music Search",
    description: "하나의 키워드로 주요 음악 플랫폼의 검색 결과를 빠르게 여는 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    status: "LIVE",
    url: "https://leekunwu.github.io/Multi_Platform_Music_Search/",
    githubUrl: "https://github.com/leekunwu/Multi_Platform_Music_Search",
    pinned: true,
  },
  {
    id: "digital-settlement-mapper",
    name: "Digital Settlement Mapper",
    description: "디지털 정산 데이터를 통합 업무 형식으로 매핑하고 정리하는 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    status: "LIVE",
    url: "https://leekunwu.github.io/digital-settlement-mapper/",
    githubUrl: "https://github.com/leekunwu/digital-settlement-mapper",
    pinned: true,
  },
  {
    id: "csv-encoding-fixer",
    name: "CSV Encoding Fixer",
    description: "CSV 파일의 인코딩 문제를 확인하고 업무용 형식으로 변환하는 도구",
    category: "My Tools",
    type: "SEORO TOOL",
    status: "LIVE",
    url: "https://leekunwu.github.io/csv-encoding-fixer/",
    githubUrl: "https://github.com/leekunwu/csv-encoding-fixer",
    pinned: true,
  },

  {
    id: "apple-music",
    name: "Apple Music",
    description: "Apple Music 신작 및 글로벌 DSP 모니터링",
    category: "Global DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://music.apple.com/us/new",
    pinned: true,
  },
  {
    id: "spotify",
    name: "Spotify",
    description: "Spotify 검색, 아티스트 및 릴리스 모니터링",
    category: "Global DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://open.spotify.com/",
    pinned: true,
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    description: "YouTube Music 검색 및 서비스 모니터링",
    category: "Global DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://music.youtube.com/",
    pinned: true,
  },
  {
    id: "tidal",
    name: "TIDAL",
    description: "TIDAL 카탈로그 및 글로벌 DSP 모니터링",
    category: "Global DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://tidal.com/",
    pinned: false,
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    description: "Amazon Music 검색 및 카탈로그 확인",
    category: "Global DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://music.amazon.com/search?filter=IsLibrary%7Cfalse&sc=none",
    pinned: false,
  },

  {
    id: "melon",
    name: "Melon",
    description: "멜론 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://www.melon.com/index.htm",
    pinned: true,
  },
  {
    id: "genie",
    name: "Genie",
    description: "지니 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://www.genie.co.kr/",
    pinned: false,
  },
  {
    id: "bugs",
    name: "Bugs!",
    description: "벅스 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://music.bugs.co.kr/",
    pinned: false,
  },
  {
    id: "vibe",
    name: "VIBE",
    description: "VIBE 신작 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://vibe.naver.com/today",
    pinned: false,
  },
  {
  id: "yg-plus-clas",
  name: "YG PLUS CLAS",
  description: "YG PLUS CLAS 파트너 포털",
  category: "Partner Systems",
  type: "PARTNER",
  status: "LOGIN",
  url: "http://clas.ygplus.com",
  pinned: false,
  },
  {
    id: "sony-music-artist-portal",
    name: "Sony Music Entertainment Artist Portal",
    description: "Sony Music Entertainment 아티스트·파트너 포털",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://sme-artistportal.com/login?returnUrl=%2F",
    pinned: false,
  },
  {
    id: "flo",
    name: "FLO",
    description: "FLO 검색 및 국내 DSP 모니터링",
    category: "Korea DSP",
    type: "DSP",
    status: "OPEN",
    url: "https://www.music-flo.com/",
    pinned: false,
  },

  {
    id: "naxos-labels",
    name: "Naxos Labels",
    description: "Naxos Labels 카탈로그 및 상품 정보 확인",
    category: "Distribution & Catalog",
    type: "CATALOG",
    status: "OPEN",
    url: "https://labels.naxos.com/catalog/products/tiles",
    pinned: true,
  },
  {
    id: "fuga-catalog",
    name: "FUGA Catalog",
    description: "FUGA 카탈로그 및 상품 관리 시스템",
    category: "Distribution & Catalog",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://fugamusic.com/login/?r=%2Fcatalog%2Fproducts%2Fgrid",
    pinned: true,
  },
  {
    id: "nds-score",
    name: "NDS Score",
    description: "NDS 관련 업무 데이터 및 운영 시스템",
    category: "Distribution & Catalog",
    type: "PARTNER",
    status: "OPEN",
    url: "https://ndsscore.softr.app/",
    pinned: false,
  },
  {
    id: "nds-smart-url",
    name: "NDS Smart URL",
    description: "FUGA NDS Smart URL 생성 요청 도구",
    category: "Distribution & Catalog",
    type: "PARTNER",
    status: "OPEN",
    url: "https://fuga.fillout.com/nds-smart-url",
    pinned: false,
  },

  {
    id: "spotify-for-artists",
    name: "Spotify for Artists",
    description: "Spotify 아티스트, 릴리스 및 성과 관리",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://artists.spotify.com/home",
    pinned: true,
  },
  {
    id: "flo-mcp",
    name: "FLO MCP",
    description: "FLO 파트너 운영 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://mcp.music-flo.com/login",
    pinned: false,
  },
  {
    id: "genie-kola",
    name: "Genie KOLA",
    description: "Genie 파트너 운영 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://kola.geniemusic.co.kr/login/login",
    pinned: false,
  },
  {
    id: "bugs-partners",
    name: "Bugs Partners",
    description: "Bugs 파트너 운영 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://partners.bugs.co.kr/index",
    pinned: false,
  },
  {
    id: "mound-media",
    name: "Mound Media Partner",
    description: "Mound Media 파트너 포털",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://partner.moundmedia.net/",
    pinned: false,
  },
  {
    id: "imlb",
    name: "IMLB",
    description: "유통 및 파트너 업무 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://imlb.co.kr/login",
    pinned: false,
  },
  {
    id: "kyobo-partner",
    name: "Kyobo Partner",
    description: "교보문고 파트너 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://partner.kyobobook.co.kr/login",
    pinned: false,
  },
  {
    id: "komca",
    name: "KOMCA",
    description: "한국음악저작권협회 저작권 업무 시스템",
    category: "Partner Systems",
    type: "RIGHTS",
    status: "LOGIN",
    url: "https://www.komca.or.kr/CTLJSP",
    pinned: false,
  },
  {
    id: "distroauth",
    name: "DistroAuth",
    description: "유통 관련 인증 및 파트너 접근 시스템",
    category: "Partner Systems",
    type: "PARTNER",
    status: "LOGIN",
    url: "https://login.distroauth.com/u/login?state=hqFo2SB2dVdYMHAxRUdkV244Vjc4NnVwUl92bkg3eFJSdkZUOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHYySXQ0WlpiZ3VPaTlOd3JPVGt2emVZc21iV1RzX051o2NpZNkgbTlxZ0RHWWh0bG1BMnEzSlIxN2VxaTlUblNzYmp6c1Klb3JnaWS0b3JnXzVpd3pIOFRqVkdmSWtvOG6nb3JnbmFtZadvcmNoYXJk",
    pinned: false,
  },

  {
    id: "wetransfer",
    name: "WeTransfer",
    description: "대용량 파일 전송",
    category: "Work Utilities",
    type: "UTILITY",
    status: "OPEN",
    url: "https://wetransfer.com/",
    pinned: true,
  },
  {
    id: "modusign",
    name: "Modusign",
    description: "전자계약 및 전자서명",
    category: "Work Utilities",
    type: "UTILITY",
    status: "LOGIN",
    url: "https://app.modusign.co.kr/authentication/signin",
    pinned: true,
  },
  {
    id: "ogame",
    name: "OGame",
    description: "기타 업무 시스템",
    category: "Work Utilities",
    type: "UTILITY",
    status: "LOGIN",
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

function getSearchableText(resource) {
  return [
    resource.name,
    resource.description,
    resource.category,
    resource.type,
    resource.status,
  ]
    .join(" ")
    .toLocaleLowerCase("ko-KR");
}

function getFilteredResources() {
  const normalizedSearchTerm = normalizeText(state.searchTerm);

  return resources.filter((resource) => {
    const matchesCategory =
      state.activeCategory === "All" || resource.category === state.activeCategory;

    const matchesSearch =
      !normalizedSearchTerm ||
      getSearchableText(resource).includes(normalizedSearchTerm);

    return matchesCategory && matchesSearch;
  });
}

function createResourceCard(resource) {
  const card = elements.cardTemplate.content.cloneNode(true);

  const badge = card.querySelector(".resource-badge");
  const status = card.querySelector(".resource-status");
  const name = card.querySelector(".resource-name");
  const description = card.querySelector(".resource-description");
  const primaryLink = card.querySelector(".primary-link");
  const secondaryLink = card.querySelector(".secondary-link");

  badge.textContent = resource.type;
  status.textContent = resource.status;
  status.dataset.status = resource.status;

  name.textContent = resource.name;
  description.textContent = resource.description;

  primaryLink.href = resource.url;
  primaryLink.setAttribute("aria-label", `${resource.name} 열기 (새 탭)`);

  if (resource.githubUrl) {
    secondaryLink.href = resource.githubUrl;
    secondaryLink.setAttribute(
      "aria-label",
      `${resource.name} GitHub 저장소 열기 (새 탭)`,
    );
    secondaryLink.hidden = false;
  }

  return card;
}

function renderFilters() {
  const fragment = document.createDocumentFragment();

  categoryOrder.forEach((category) => {
    const button = document.createElement("button");
    const totalInCategory =
      category === "All"
        ? resources.length
        : resources.filter((resource) => resource.category === category).length;

    button.type = "button";
    button.className = "filter-button";
    button.role = "tab";
    button.dataset.category = category;
    button.setAttribute(
      "aria-selected",
      String(category === state.activeCategory),
    );
    button.textContent = `${category} (${totalInCategory})`;

    button.addEventListener("click", () => {
      state.activeCategory = category;
      render();
    });

    fragment.appendChild(button);
  });

  elements.filters.replaceChildren(fragment);
}

function renderPinnedResources(filteredResources) {
  const pinnedResources = filteredResources.filter((resource) => resource.pinned);

  if (pinnedResources.length === 0) {
    elements.pinnedGrid.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();

  pinnedResources.forEach((resource) => {
    fragment.appendChild(createResourceCard(resource));
  });

  elements.pinnedGrid.hidden = false;
  elements.pinnedGrid.replaceChildren(fragment);
}

function createResourceGroup(category, items) {
  const group = document.createElement("section");
  const title = document.createElement("h3");
  const count = document.createElement("span");
  const grid = document.createElement("div");

  group.className = "resource-group";
  title.className = "group-title";
  grid.className = "resource-grid";

  title.textContent = category;
  count.className = "group-count";
  count.textContent = `${items.length}`;
  title.appendChild(count);

  items.forEach((resource) => {
    grid.appendChild(createResourceCard(resource));
  });

  group.append(title, grid);
  return group;
}

function renderResourceGroups(filteredResources) {
  if (filteredResources.length === 0) {
    elements.resourceGroups.replaceChildren();
    elements.emptyState.hidden = false;
    return;
  }

  const categoriesToRender =
    state.activeCategory === "All"
      ? categoryOrder.filter((category) => category !== "All")
      : [state.activeCategory];

  const fragment = document.createDocumentFragment();

  categoriesToRender.forEach((category) => {
    const categoryResources = filteredResources.filter(
      (resource) => resource.category === category,
    );

    if (categoryResources.length > 0) {
      fragment.appendChild(createResourceGroup(category, categoryResources));
    }
  });

  elements.emptyState.hidden = true;
  elements.resourceGroups.replaceChildren(fragment);
}

function renderSummary(filteredResources) {
  const count = filteredResources.length;
  const hasSearch = Boolean(normalizeText(state.searchTerm));
  const categoryLabel =
    state.activeCategory === "All" ? "전체 카테고리" : state.activeCategory;

  elements.resourceCount.textContent = `${count}개 항목`;

  if (hasSearch) {
    elements.summary.textContent = `"${state.searchTerm}" 검색 결과 ${count}개 · ${categoryLabel}`;
    return;
  }

  elements.summary.textContent = `${categoryLabel}에서 ${count}개 항목을 표시하고 있습니다.`;
}

function render() {
  const filteredResources = getFilteredResources();

  renderFilters();
  renderPinnedResources(filteredResources);
  renderResourceGroups(filteredResources);
  renderSummary(filteredResources);
}

function resetFilters() {
  state.activeCategory = "All";
  state.searchTerm = "";
  elements.search.value = "";
  render();
  elements.search.focus();
}

function setLastUpdated() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  elements.lastUpdated.textContent = `Last updated: ${formatter.format(new Date())}`;
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

setLastUpdated();
render();
