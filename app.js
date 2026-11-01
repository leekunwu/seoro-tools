const resources = [
  {
    id: "universal-file-mapper",
    name: "Universal File Mapper",
    label: "파일 구조 매핑",
    glyph: "workflow-square-01",
    description: "서로 다른 파일 구조와 컬럼을 기준 형식에 맞게 매핑하는 업무용 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/universal-file-mapper/",
    pinned: false,
  },
  {
    id: "release-notes",
    name: "Release Notes",
    label: "Release Notes",
    glyph: "note-01",
    description: "음악을 발매하는 팀의 알려진 이슈와 의도된 동작들",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/release-notes/",
    pinned: false,
  },
  {
    id: "multi-platform-music-search",
    name: "Multi-Platform Music Search",
    label: "음원 통합 검색",
    glyph: "global-search",
    description: "하나의 키워드로 주요 음악 플랫폼의 검색 결과를 빠르게 여는 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/Multi-Platform-Music-Search/",
    pinned: true,
  },
  {
    id: "nds-tracklist-parser",
    name: "NDS Tracklist Parser",
    label: "NDS 트랙리스트 정리",
    glyph: "list-view",
    description: "복사한 트랙리스트에서 Stereo·Dolby ISRC를 분리해 표 형태로 정리하는 로컬 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/NDS-Tracklist-Parser/",
    pinned: false,
  },
  {
    id: "mims-xml-normalizer",
    name: "MIMS XML Normalizer",
    label: "MIMS XML 정리",
    glyph: "check-list",
    description: "MIMS XML을 트랙 단위 표로 정규화하고 QC·편집·TSV/CSV 내보내기를 지원하는 로컬 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/MIMS-XML-Normalizer/",
    pinned: false,
  },
  {
    id: "digital-settlement-mapper",
    name: "Digital Settlement Mapper",
    label: "디지털 정산 매핑",
    glyph: "calculator",
    description: "디지털 정산 데이터를 통합 업무 형식으로 매핑하고 정리하는 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/digital-settlement-mapper/",
    pinned: false,
  },
  {
    id: "csv-encoding-fixer",
    name: "CSV Encoding Fixer",
    label: "CSV 인코딩 변환",
    glyph: "file-conversion",
    description: "CSV 파일의 인코딩 문제를 확인하고 업무용 형식으로 변환하는 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/csv-encoding-fixer/",
    pinned: false,
  },
  {
    id: "audioguy-distribution-dashboard",
    name: "AUDIOGUY Distribution Dashboard",
    label: "유통 대시보드",
    glyph: "dashboard-square-01",
    description: "AUDIOGUY 유통 카탈로그 및 운영 현황 대시보드",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://sound360music.netlify.app/",
    pinned: false,
  },
  {
    id: "settlement-consolidator",
    name: "Settlement Consolidator",
    label: "정산내역 취합",
    glyph: "invoice-01",
    description: "유통사 정산 원본을 월별 정산내역서로 취합·매핑·환율 반영·내보내기",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://docs.google.com/spreadsheets/d/1iT99zK5b1_981bGJ17O37h_KwTxSA-mfhV8QqaUdYeA/edit?gid=1128828444#gid=1128828444",
    pinned: false,
  },
  {
    id: "gmail-draft-composer",
    name: "Gmail Draft Composer",
    label: "Gmail 초안 생성",
    glyph: "mail-edit-01",
    description: "스프레드시트 연동 배치 초안 생성, 토큰 개인화 및 테스트 모드 지원",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://script.google.com/a/macros/audioguyrecords.com/s/AKfycbwHgPh4KwJc8KUFYs8ROZLC_qGiMHQKYEvQr7E9ux5DnRKKMjbLPlV7o2GDL7WwpliF/exec",
    pinned: false,
  },
  {
    id: "audioguys-music-catalog-portal",
    name: "Audioguys Music Catalog Portal",
    label: "카탈로그 포털",
    glyph: "disc-01",
    description: "자사 디지털 유통 카탈로그를 통합 검색하고 음원 메타데이터를 빠르게 조회하는 내부 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://script.google.com/a/macros/audioguyrecords.com/s/AKfycbxhl4X2eyW60BKzZOtZMYObyeVKifS1WPrMVWIOB5qFBO6F7PQp7bHPdASSIrFe8jhq/exec",
    pinned: true,
  },
  {
    id: "neoklavier-operator",
    name: "NeoKlavier Operator",
    label: "NeoKlavier Operator",
    glyph: "piano",
    description: "Yamaha Disklavier 녹음을 위한 로컬 MIDI 플레이리스트 및 외부 MIDI 장치 운영 도구",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/NeoKlavier-Operator/",
    pinned: false,
  },
  {
    id: "parallel-rename",
    name: "Parallel Rename",
    label: "파일 세트 이름 변경",
    glyph: "file-edit",
    description: "짝을 이루는 파일 세트의 이름을 구성하고 사본으로 저장",
    category: "SEORO TOOLS",
    type: "SEORO TOOL",
    url: "https://leekunwu.github.io/parallel-rename/",
    pinned: false,
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
    pinned: false,
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
    pinned: false,
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
    name: "NDS",
    logo: "./assets/logos/naxos-labels.svg",
    description: "낙소스 유통 등록 및 카탈로그 운영 시스템",
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
    description:
      "Too Lost 글로벌 음원 유통, 카탈로그 관리, 전달 현황 및 정산 분석을 위한 유통 플랫폼",
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
    pinned: false,
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
    pinned: true,
  },
  {
    id: "nds-smart-url",
    name: "NDS Smart URL",
    logo: "./assets/logos/nds-smart-url.svg",
    description: "found.ee 기반 낙소스·FUGA 스마트 URL 생성 서비스",
    category: "Artist & Marketing",
    type: "MARKETING",
    url: "https://fuga.fillout.com/nds-smart-url",
    pinned: true,
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

const state = {
  activeCategory: "All",
  searchTerm: "",
};

const elements = {
  filters: document.querySelector("#category-filters"),
  search: document.querySelector("#resource-search"),
  summary: document.querySelector("#search-result-summary"),
  quickAccessSection: document.querySelector("#quick-access-section"),
  pinnedGrid: document.querySelector("#pinned-grid"),
  resourceGroups: document.querySelector("#resource-groups"),
  resourceCount: document.querySelector("#resource-count"),
  emptyState: document.querySelector("#empty-state"),
  cardTemplate: document.querySelector("#resource-card-template"),
  lastUpdated: document.querySelector("#last-updated"),
};

const categories = Object.fromEntries(categoryOrder.map((key, index) =>
  [key, ["전체", "업무 도구", "글로벌 DSP", "국내 DSP", "유통 파트너", "아티스트·마케팅", "기타·권리"][index]]));
const aliases = {
  spotify: "스포티파이", "spotify-for-artists": "스포티파이 아티스트",
  "apple-music": "애플뮤직", "apple-music-for-artists": "애플뮤직 아티스트",
  "youtube-music": "유튜브뮤직", "fuga-catalog": "푸가", "naxos-labels": "낙소스",
  "parallel-rename": "파일명 변경 리네임 일괄 이름 바꾸기",
  "audioguys-music-catalog-portal": "카탈로그 포탈 오디오가이즈 뮤직",
};
function compact(value) {
  return value.normalize("NFKC").toLowerCase().replace(/[\s_-]+/g, "");
}
function getFilteredResources() {
  const words = state.searchTerm.trim().toLowerCase().split(/[\s_-]+/).filter(Boolean).map(compact);
  const ranked = [];
  for (const item of resources) {
    if (state.activeCategory !== "All" && item.category !== state.activeCategory) continue;
    const names = [item.name, item.label || ""].map(compact);
    const fields = [...names, compact(aliases[item.id] || ""), compact(item.description), compact(categories[item.category]), compact(item.category), compact(item.type)];
    if (!words.every(word => fields.some(field => field.includes(word)))) continue;
    const score = names.includes(compact(state.searchTerm)) ? 0 :
      words.every(word => names.some(name => name.includes(word))) ? 1 :
      words.every(word => fields.slice(0,3).some(field => field.includes(word))) ? 2 : 3;
    ranked.push({item, score});
  }
  return ranked.sort((a,b) => a.score-b.score).map(entry => entry.item);
}

function createCard(resource) {
  const fragment = elements.cardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".resource-card");
  const icon = fragment.querySelector(".resource-icon");
  const logo = fragment.querySelector(".resource-logo");
  const name = fragment.querySelector(".resource-name");
  const description = fragment.querySelector(".resource-description");



  card.href = resource.url;
  card.dataset.type = resource.type;

  card.setAttribute(
    "aria-label",
    resource.id === "audioguys-music-catalog-portal"
      ? `${resource.name} 열기 (새 창)`
      : `${resource.name} 열기 (새 탭)`,
  );

  if (resource.id === "audioguys-music-catalog-portal") {
    card.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  
      const popup = window.open(
        resource.url,
        "AudioguysMusicCatalogPortal",
        "popup,width=1440,height=900,resizable=yes,scrollbars=yes",
      );
  
      if (popup) {
        event.preventDefault();
        popup.opener = null;
        popup.focus();
      }
    });
  }

  if (resource.logo) {
    logo.src = resource.logo;
    logo.hidden = false;
    logo.addEventListener("error", () => { logo.hidden = true; }, { once: true });
  } else if (resource.glyph) {
    icon.dataset.glyph = resource.glyph;
    drawGlyph(icon);
  }
  name.textContent = resource.label || resource.name;
  description.textContent = resource.label && resource.label !== resource.name
    ? resource.name : resource.label ? resource.description : "";
  card.setAttribute("aria-label", [name.textContent, description.textContent,
    resource.id === "audioguys-music-catalog-portal" ? "새 창에서 열기" : "새 탭에서 열기"].filter(Boolean).join(", "));
  return fragment;
}

function renderFilters() {
  const fragment = document.createDocumentFragment();

  categoryOrder.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.setAttribute(
      "aria-pressed",
      String(category === state.activeCategory),
    );
    button.textContent = categories[category];
    button.dataset.category = category;

    button.addEventListener("click", () => {
      state.activeCategory = category;
      render();
    });

    fragment.appendChild(button);
  });

  elements.filters.replaceChildren(fragment);
}

function renderPinned(resourcesToRender) {
  const pinnedResources = resourcesToRender
    .filter((resource) => resource.pinned)
    .slice(0, 4);

  if (pinnedResources.length === 0) {
    elements.pinnedGrid.hidden = true;
    elements.quickAccessSection.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();

  pinnedResources.forEach((resource) => {
    fragment.appendChild(createCard(resource));
  });

  elements.pinnedGrid.hidden = false;
  elements.quickAccessSection.hidden = false;
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

  title.textContent = categories[category];
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
  elements.resourceCount.textContent = "";
  elements.summary.textContent = state.searchTerm.trim() ? `${categories[state.activeCategory]} · 검색 결과 ${count}개` : "";
}

function render() {
  const filteredResources = getFilteredResources();
  const hasSearch = Boolean(state.searchTerm.trim());

  elements.filters.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === state.activeCategory)));

  if (hasSearch) {
    elements.quickAccessSection.hidden = true;
  } else {
    renderPinned(filteredResources);
  }

  if (hasSearch && filteredResources.length) {
    const grid = document.createElement("div");
    grid.className = "resource-grid";
    filteredResources.forEach(item => grid.append(createCard(item)));
    elements.resourceGroups.replaceChildren(grid);
    elements.emptyState.hidden = true;
  } else {
    renderGroups(filteredResources);
  }
  document.querySelector("#clear").hidden = !hasSearch;
  document.querySelector("#all-search").hidden = !hasSearch || state.activeCategory === "All";
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
    clearSearch();
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

function clearSearch() {
  state.searchTerm = "";
  elements.search.value = "";
  render();
  elements.search.focus();
}
document.querySelector("#clear").onclick = clearSearch;
document.querySelector("#reset").onclick = resetFilters;
document.querySelector("#all-search").onclick = () => { state.activeCategory = "All"; render(); elements.search.focus(); };

// Reuse the existing jsDelivr host. Only the selected Hugeicons are inserted.
const fallbackPaths = {
  "workflow-square-01": "M3 3h6v7H3z M15 14h6v7h-6z M6 10v7h9",
  "note-01": "M5 3h14v18H5z M8 8h8 M8 12h8 M8 16h5",
  "global-search": "M15 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0 M3 9h12 M9 3q-4 6 0 12 M14 14l6 6",
  "list-view": "M3 5h2v4 M2 13q5-3 2 2l-2 3h4 M9 7h12 M9 16h12",
  "check-list": "M8 5L3 10l5 5 M15 5l5 5-3 3 M11 17l3 3 7-7",
  "calculator": "M5 2h14v20H5z M8 6h8 M8 11h2 M14 11h2 M8 15h2 M14 15h2 M8 19h2",
  "file-conversion": "M4 3h12l4 4v4 M4 3v17h7 M9 13h11l-3-3 M20 17H9l3 3",
  "dashboard-square-01": "M3 3h8v8H3z M14 3h7v5h-7z M14 11h7v10h-7z M3 14h8v7H3z",
  "invoice-01": "M5 3l2 1 2-1 3 1 3-1 2 1 2-1v18l-3-2-4 2-4-2-3 2z M8 8h8 M8 12h6",
  "mail-edit-01": "M3 5h18v7 M3 5v14h9 M3 6l9 7 8-7 M14 18l6-6 2 2-6 6-3 1z",
  "disc-01": "M19 10a8 8 0 1 0-8 9 M13 10a2 2 0 1 0-4 0 2 2 0 1 0 4 0 M19 15a3 3 0 1 0-6 0 3 3 0 0 0 6 0 M18 18l4 4",
  "piano": "M2 5h20v14H2z M7 5v8h2V5 M14 5v8h2V5 M8 13v6 M15 13v6",
  "file-edit": "M4 3h10l4 4v3 M4 3v18h7 M8 8h5 M13 16l6-6 3 3-6 6-4 1z"
};
let glyphs = {};
function drawGlyph(node) {
  const entry = glyphs[node.dataset.glyph];
  if (!entry) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", fallbackPaths[node.dataset.glyph]);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.6");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-linecap", "round");
    svg.append(path);
    node.replaceChildren(svg);
    node.hidden = false;
    return;
  }
  const svg = new DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg">' + entry.body + '</svg>', "image/svg+xml");
  const target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  target.setAttribute("viewBox","0 0 24 24");
  for (const path of svg.querySelectorAll("path,circle,rect,line,polyline,ellipse,polygon")) {
    const copy = document.createElementNS(target.namespaceURI,path.localName);
    for (const attr of path.attributes) if (/^(d|fill|stroke|stroke-width|stroke-linecap|stroke-linejoin|cx|cy|r|rx|ry|x|y|width|height|x1|x2|y1|y2|points|fill-rule|clip-rule|opacity|transform)$/.test(attr.name)) copy.setAttribute(attr.name,attr.value);
    for (const key of ["stroke","fill","stroke-width","stroke-linecap","stroke-linejoin"]) {
      const ancestor = path.closest("["+key+"]");
      if (ancestor) copy.setAttribute(key,ancestor.getAttribute(key));
    }
    target.append(copy);
  }
  node.replaceChildren(target);
  node.hidden = false;
}
renderFilters();
render();
fetch("https://cdn.jsdelivr.net/npm/@iconify-json/hugeicons@1/icons.json")
  .then(response => response.ok ? response.json() : Promise.reject())
  .then(data => {
    glyphs = data.icons;
    document.querySelectorAll("[data-glyph]").forEach(drawGlyph);
  }).catch(() => {});
