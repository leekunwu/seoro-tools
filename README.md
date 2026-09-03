# SEORO TOOLS

> Music Operations Hub for music distribution, metadata, settlement, DSP monitoring, and partner systems.

**SEORO TOOLS**는 AUDIOGUY의 음악 유통 운영 업무에 필요한 내부 도구와 주요 외부 서비스 바로가기를 한곳에 모은 정적 링크 허브입니다.

메타데이터 정리, 파일 변환, 정산 취합, 유통 등록·운영, DSP 모니터링, 아티스트 관리, 권리 관리 업무를 빠르게 시작할 수 있도록 구성했습니다.

## Overview

이 허브는 다음 두 가지를 중심으로 운영합니다.

1. **SEORO TOOLS**: AUDIOGUY에서 직접 운영하는 웹 도구, Google Sheets, Google Apps Script 기반 업무 시스템
2. **Partner Resources**: 글로벌·국내 DSP, 유통 파트너, 아티스트·마케팅 도구, 권리·계약·파일 전송 서비스

## Features

- 6개 업무 카테고리 기반 리소스 탐색
- 도구명, 설명, 카테고리, 유형 기준 실시간 검색
- 자주 사용하는 8개 업무 시작점을 모은 Quick Access
- 카드 전체 클릭으로 외부 도구와 서비스를 새 탭에서 실행
- 카드 기본 상태에서는 아이콘 또는 SVG 로고와 서비스명 표시
- 데스크톱 hover 및 키보드 focus 시 다크 카드 전환과 설명 표시
- SVG 로고 우선 표시, 내부 도구에는 Material Symbols fallback 적용
- SVG가 아직 없는 외부 서비스는 서비스명만 표시
- Global DSP·Korea DSP 카드는 어두운 배경과 밝은 텍스트로 구분
- SUIT Variable 웹폰트 기반의 한국어 UI
- 모바일·데스크톱 반응형 레이아웃
- 검색엔진 색인 방지 설정
  - `noindex` 메타 태그
  - `robots.txt`

## Categories

| Category | Purpose |
| --- | --- |
| SEORO TOOLS | AUDIOGUY에서 직접 운영하는 업무 도구와 운영 대시보드 |
| Global DSP | 글로벌 DSP 검색, 신작 및 카탈로그 모니터링 |
| Korea DSP | 국내 DSP 검색, 신작 및 카탈로그 모니터링 |
| Distribution Partners | 유통 등록, 카탈로그, 발매·정산 확인 파트너 시스템 |
| Artist & Marketing | 아티스트 관리, 피칭, 스마트 URL, 마케팅 보조 도구 |
| Other & Rights | 권리, 식별자 발급, 계약, 파일 전송, 메타데이터 조회 도구 |

## Included Resources

### SEORO TOOLS

| Tool | Description | Link |
| --- | --- | --- |
| Universal File Mapper | 서로 다른 파일 구조와 컬럼을 기준 형식에 맞게 매핑하는 업무용 도구 | [Open](https://leekunwu.github.io/universal-file-mapper/) |
| Release Notes | 음악을 발매하는 팀의 알려진 이슈와 의도된 동작들 | [Open](https://leekunwu.github.io/release-notes/) |
| Multi-Platform Music Search | 하나의 키워드로 주요 음악 플랫폼의 검색 결과를 빠르게 여는 도구 | [Open](https://leekunwu.github.io/Multi_Platform_Music_Search/) |
| Digital Settlement Mapper | 디지털 정산 데이터를 통합 업무 형식으로 매핑하고 정리하는 도구 | [Open](https://leekunwu.github.io/digital-settlement-mapper/) |
| CSV Encoding Fixer | CSV 파일의 인코딩 문제를 확인하고 업무용 형식으로 변환하는 도구 | [Open](https://leekunwu.github.io/csv-encoding-fixer/) |
| AUDIOGUY Distribution Dashboard | AUDIOGUY 유통 카탈로그 및 운영 현황 대시보드 | [Open](https://sound360music.netlify.app/) |
| Settlement Consolidator | 유통사 정산 원본을 월별 정산내역서로 취합·매핑·환율 반영·내보내기 | [Open](https://docs.google.com/spreadsheets/d/1iT99zK5b1_981bGJ17O37h_KwTxSA-mfhV8QqaUdYeA/edit?gid=1128828444#gid=1128828444) |
| Gmail Draft Composer | 스프레드시트 연동 배치 초안 생성, 토큰 개인화 및 테스트 모드 지원 | [Open](https://script.google.com/a/macros/audioguyrecords.com/s/AKfycbwHgPh4KwJc8KUFYs8ROZLC_qGiMHQKYEvQr7E9ux5DnRKKMjbLPlV7o2GDL7WwpliF/exec) |

### Global DSP

| Service | Description | Link |
| --- | --- | --- |
| Apple Music | Apple Music 신작 및 글로벌 DSP 모니터링 | [Open](https://music.apple.com/us/new) |
| Spotify | Spotify 검색, 아티스트 및 릴리스 모니터링 | [Open](https://open.spotify.com/) |
| YouTube Music | YouTube Music 검색 및 서비스 모니터링 | [Open](https://music.youtube.com/) |
| TIDAL | TIDAL 카탈로그 및 글로벌 DSP 모니터링 | [Open](https://tidal.com/) |
| Amazon Music | Amazon Music 검색 및 카탈로그 확인 | [Open](https://music.amazon.com/search?filter=IsLibrary%7Cfalse&sc=none) |

### Korea DSP

| Service | Description | Link |
| --- | --- | --- |
| Melon | 멜론 검색 및 국내 DSP 모니터링 | [Open](https://www.melon.com/index.htm) |
| Genie | 지니 검색 및 국내 DSP 모니터링 | [Open](https://www.genie.co.kr/) |
| Bugs! | 벅스 검색 및 국내 DSP 모니터링 | [Open](https://music.bugs.co.kr/) |
| VIBE | VIBE 신작 및 국내 DSP 모니터링 | [Open](https://vibe.naver.com/today) |
| FLO | FLO 검색 및 국내 DSP 모니터링 | [Open](https://www.music-flo.com/) |

### Distribution Partners

| Service | Description | Link |
| --- | --- | --- |
| Naxos Labels | Naxos Labels 유통 등록 및 카탈로그 운영 시스템 | [Open](https://labels.naxos.com/catalog/products/tiles) |
| Kakao MLB | Kakao Entertainment Music Licence Bank 유통 운영 시스템 | [Open](https://imlb.co.kr/login) |
| Genie KOLA | Genie 유통 등록 및 정산 확인 파트너 시스템 | [Open](https://kola.geniemusic.co.kr/login/login) |
| Bugs Partners | Bugs 유통 등록 및 정산 확인 파트너 시스템 | [Open](https://partners.bugs.co.kr/index) |
| YG PLUS CLAS | YG PLUS 유통 등록 및 정산 확인 파트너 시스템 | [Open](http://clas.ygplus.com) |
| FLO MCP | FLO 유통 등록 및 정산 확인 파트너 시스템 | [Open](https://mcp.music-flo.com/login) |
| FUGA Catalog | FUGA 유통 등록, 카탈로그 및 정산 운영 시스템 | [Open](https://fugamusic.com/login/?r=%2Fcatalog%2Fproducts%2Fgrid) |
| Too Lost | 글로벌 음원 유통, 카탈로그 관리, 전달 현황 및 정산 분석을 위한 유통 플랫폼 | [Open](https://toolost.com/user-portal) |
| The Orchard Workstation | The Orchard 유통 등록, 카탈로그 및 정산 운영 시스템 | [Open](https://login.distroauth.com/u/login?state=hqFo2SB2dVdYMHAxRUdkV244Vjc4NnVwUl92bkg3eFJSdkZUOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHYySXQ0WlpiZ3VPaTlOd3JPVGt2emVZc21iV1RzX051o2NpZNkgbTlxZ0RHWWh0bG1BMnEzSlIxN2VxaTlUblNzYmp6c1Klb3JnaWS0b3JnXzVpd3pIOFRqVkdmSWtvOG6nb3JnbmFtZadvcmNoYXJk) |
| SME Artist Portal | Sony Music Entertainment 유통 등록 및 아티스트 파트너 포털 | [Open](https://sme-artistportal.com/login?returnUrl=%2F) |
| Mound Media Partner | POCLANOS 파트너 시스템 | [Open](https://partner.moundmedia.net/) |
| Leeway Music & Media | 리웨이뮤직앤미디어 유통 등록 및 정산 확인 파트너 시스템 | [Open](https://leeway.cuomusic.co.kr/musicgate/login.php) |
| OGAM ENT | 오감엔터테인먼트 서비스 | [Open](http://ogame.co.kr/member/login) |
| Kyobo Partner | 교보문고 유통 등록 및 정산 확인 파트너 시스템 | [Open](https://partner.kyobobook.co.kr/login) |

### Artist & Marketing

| Service | Description | Link |
| --- | --- | --- |
| NDS Score | 낙소스 피칭 툴/서비스 | [Open](https://ndsscore.softr.app/) |
| NDS Smart URL | found.ee 기반 낙소스·FUGA 스마트 URL 생성 서비스 | [Open](https://fuga.fillout.com/nds-smart-url) |
| Apple Music for Artists | Apple Music 아티스트 및 카탈로그 관리 시스템 | [Open](https://artists.apple.com/ui) |
| Spotify for Artists | Spotify 아티스트, 릴리스 및 성과 관리 | [Open](https://artists.spotify.com/home) |

### Other & Rights

| Service | Description | Link |
| --- | --- | --- |
| WeTransfer | 대용량 파일 전송 | [Open](https://wetransfer.com/) |
| Modusign | 전자계약 및 전자서명 | [Open](https://app.modusign.co.kr/authentication/signin) |
| KOMCA | 한국음악저작권협회 저작권 업무 시스템 | [Open](https://www.komca.or.kr/CTLJSP) |
| MIMS | RIAK ISRC 및 UCI 발급 시스템 | [Open](https://www.mims.or.kr/login) |
| Musicfetch | UPC, ISRC, YouTube Channel ID 및 음악 메타데이터 조회 | [Open](https://musicfetch.io/) |

## Quick Access

Quick Access는 현재 아래 8개 업무 시작점으로 구성합니다.

1. Universal File Mapper
2. Digital Settlement Mapper
3. AUDIOGUY Distribution Dashboard
4. Settlement Consolidator

Quick Access에 표시할 항목은 `app.js`의 각 리소스에 `pinned: true`를 설정해 관리합니다. `pinned: true`인 항목은 정확히 8개로 유지하는 것을 권장합니다.

## Project Structure

```text
seoro-tools/
├── assets/
│   └── logos/              # 외부 서비스 SVG 로고
├── index.html              # 랜딩페이지 구조, 접근성 마크업, SUIT·Material Symbols 로드
├── styles.css              # 디자인 토큰, 카드 UI, 반응형 스타일, hover/focus 상태
├── app.js                  # 리소스 데이터, 검색, 필터, 카드 렌더링, SVG/아이콘 fallback
├── robots.txt              # 검색엔진 크롤링 제한 요청
└── README.md               # 프로젝트 개요 및 운영 가이드
```

## Add a Resource

새 도구 또는 바로가기는 `app.js`의 `resources` 배열에 추가합니다.

```js
{
  id: "new-tool-id",
  name: "새 도구 이름",
  description: "도구 또는 서비스가 하는 일을 한 문장으로 설명",
  category: "Distribution Partners",
  type: "PARTNER",
  url: "https://example.com/",
  pinned: false,
}
```

### Resource Fields

| Field | Required | Description |
| --- | --- | --- |
| `id` | Yes | 리소스별 고유 식별자. SVG 파일명 기준으로도 사용 |
| `name` | Yes | 카드에 표시할 서비스 또는 도구 이름 |
| `description` | Yes | 카드 hover/focus 상태에서 표시할 업무 설명 |
| `category` | Yes | 필터와 전체 목록 그룹에 사용할 카테고리 |
| `type` | Yes | 카드 기본 테마를 결정하는 유형 |
| `url` | Yes | 카드 전체 클릭 시 새 탭으로 열 URL |
| `pinned` | Yes | `true`면 Quick Access에 표시 |
| `icon` | No | Material Symbol 이름. SEORO TOOLS 내부 도구에만 사용 |
| `logo` | No | `assets/logos/` 아래 SVG 경로. 외부 서비스 로고에 사용 |

### Available Types

```text
SEORO TOOL
DSP
PARTNER
MARKETING
RIGHTS
UTILITY
```

### Available Categories

```text
SEORO TOOLS
Global DSP
Korea DSP
Distribution Partners
Artist & Marketing
Other & Rights
```

새 카테고리를 추가할 경우 `resources[].category`와 `categoryOrder` 배열에 **동일한 이름**을 함께 추가해야 합니다.

## Internal Tool Icons

SEORO TOOLS의 내부 도구 8개는 SVG 대신 Google Material Symbols를 사용합니다.

| Tool | Material Symbol |
| --- | --- |
| Universal File Mapper | `folder_open` |
| Release Notes | `article` |
| Multi-Platform Music Search | `travel_explore` |
| Digital Settlement Mapper | `account_tree` |
| CSV Encoding Fixer | `data_object` |
| AUDIOGUY Distribution Dashboard | `dashboard` |
| Settlement Consolidator | `account_balance_wallet` |
| Gmail Draft Composer | `drafts` |

예시:

```js
{
  id: "gmail-draft-composer",
  name: "Gmail Draft Composer",
  icon: "drafts",
  description: "스프레드시트 연동 배치 초안 생성, 토큰 개인화 및 테스트 모드 지원",
  category: "SEORO TOOLS",
  type: "SEORO TOOL",
  url: "https://example.com/",
  pinned: true,
}
```

## Add an SVG Logo

외부 서비스는 SVG 로고를 우선 표시합니다. SVG가 아직 없으면 카드에는 서비스명만 표시되며, 깨진 이미지 아이콘이 표시되지 않도록 렌더링됩니다.

### Folder Structure

```text
assets/
└── logos/
    ├── apple-music.svg
    ├── spotify.svg
    ├── youtube-music.svg
    ├── melon.svg
    ├── flo-mcp.svg
    ├── kakao-mlb.svg
    ├── bugs-partners.svg
    └── ...
```

### File Naming Rules

- 영문 소문자만 사용
- 단어 사이는 하이픈(`-`) 사용
- 확장자는 `.svg`
- 공백, 한글, 괄호, `&`, 특수문자는 사용하지 않음
- 가능한 한 SVG 파일명은 리소스 `id`와 동일하게 유지
- 예: `flo-mcp` → `assets/logos/flo-mcp.svg`

### Add a Logo Path

SVG를 업로드한 뒤 해당 리소스에 `logo` 필드를 추가합니다.

```js
{
  id: "spotify",
  name: "Spotify",
  logo: "./assets/logos/spotify.svg",
  description: "Spotify 검색, 아티스트 및 릴리스 모니터링",
  category: "Global DSP",
  type: "DSP",
  url: "https://open.spotify.com/",
  pinned: true,
}
```

### SVG Fallback Rules

카드는 아래 우선순위로 아이콘을 표시합니다.

1. `logo` 경로에 SVG가 정상적으로 로드되면 SVG 표시
2. SVG가 없고 `icon` 값이 있으면 Material Symbol 표시
3. SVG와 Material Symbol이 모두 없으면 서비스명만 표시
4. SVG 경로가 잘못되거나 파일이 없으면 이미지 요소를 숨김

### SVG Checklist

- `viewBox`가 포함된 SVG를 사용합니다.
- 불필요한 배경 사각형·원형 프레임은 SVG 내부에 넣지 않습니다.
- 카드 표시 크기인 36px 부근에서도 식별 가능한지 확인합니다.
- 로고 주변 여백이 과도하지 않은지 확인합니다.
- 불필요한 텍스트·슬로건은 제거합니다.
- 브랜드 가이드와 사용 권한을 확인합니다.
- GitHub Pages 배포 후 SVG URL이 404가 아닌지 확인합니다.

예시 확인 URL:

```text
https://leekunwu.github.io/seoro-tools/assets/logos/spotify.svg
```

## Local Preview

별도 패키지 설치나 빌드 과정이 필요 없는 정적 웹사이트입니다.

```bash
git clone https://github.com/leekunwu/seoro-tools.git
cd seoro-tools
```

그 다음 `index.html`을 브라우저에서 열거나, 사용하는 에디터의 정적 서버 미리보기 기능으로 확인합니다.

## Deploy with GitHub Pages

1. GitHub 저장소의 **Settings**로 이동합니다.
2. 왼쪽 메뉴에서 **Pages**를 선택합니다.
3. **Build and deployment**의 Source를 **Deploy from a branch**로 설정합니다.
4. Branch로 `main`, Folder로 `/ (root)`를 선택합니다.
5. **Save**를 누릅니다.

배포 주소는 일반적으로 아래와 같습니다.

```text
https://leekunwu.github.io/seoro-tools/
```

## Accessibility and Keyboard Use

- `/`: 검색창으로 포커스를 이동합니다.
- `Escape`: 검색어가 있는 경우 검색어와 카테고리 필터를 초기화합니다.
- `Tab`: 헤더 링크, 검색창, 필터, 카드 순서로 이동합니다.
- `Enter`: 포커스된 카드 링크를 새 탭에서 엽니다.
- 카드 hover와 `:focus-visible` 상태에서는 카드 배경이 어두워지고 업무 설명이 표시됩니다.
- 모바일은 hover가 없는 환경이므로 카드의 기본 이름·아이콘 상태를 유지하고, 탭 시 바로 외부 서비스를 엽니다.

## Security Notes

이 프로젝트는 정적 링크 허브입니다.

- 비밀번호, API 키, 액세스 토큰, 인증 쿠키, 개인 식별 정보는 저장소에 커밋하지 않습니다.
- 일회성 로그인 URL 또는 민감한 세션 파라미터가 포함된 URL은 가능한 한 등록하지 않습니다.
- 외부 서비스 접근 권한은 각 서비스의 로그인 및 권한 정책으로 관리합니다.
- `noindex` 메타 태그와 `robots.txt`는 검색 색인을 줄이기 위한 요청일 뿐, 접근 제어 수단이 아닙니다.
- 사내 전용 운영이 필요한 경우 별도의 인증 계층 또는 접근 제어를 적용합니다.
- 모든 외부 카드 링크는 `target="_blank"`와 `rel="noopener noreferrer"`를 사용합니다.
- The Orchard Workstation처럼 리디렉션 또는 세션 값이 포함된 로그인 URL은 정기적으로 정상 동작 여부를 확인합니다.

## Maintenance Checklist

새 항목·SVG·링크를 추가하거나 수정한 뒤에는 아래를 확인합니다.

### Resource Data

- [ ] `id`가 다른 리소스와 중복되지 않는가
- [ ] 서비스명, 설명, 카테고리, 유형, URL이 정확한가
- [ ] `resources[].category`와 `categoryOrder`의 카테고리명이 일치하는가
- [ ] Quick Access의 `pinned: true` 항목이 정확히 8개인가
- [ ] 검색과 카테고리 필터에서 새 항목이 표시되는가

### Links and Interaction

- [ ] 카드 전체 클릭 시 올바른 외부 서비스가 새 탭에서 열리는가
- [ ] Tab 포커스와 Enter 실행이 정상인가
- [ ] `/` 검색창 포커스와 Escape 초기화가 정상인가
- [ ] hover와 키보드 focus 상태에서 카드 설명이 표시되는가
- [ ] 모바일에서 hover 상태가 고정되지 않고 카드 탭 시 바로 이동하는가

### SVG and Icons

- [ ] SVG 파일명이 `logo` 경로와 정확히 일치하는가
- [ ] SVG URL을 직접 열었을 때 404가 아닌가
- [ ] SVG가 정상적으로 카드에 표시되는가
- [ ] SVG가 없는 카드에 깨진 이미지 아이콘이 표시되지 않는가
- [ ] SEORO TOOLS 내부 도구에는 Material Symbol이 텍스트가 아니라 아이콘으로 표시되는가
- [ ] Global DSP와 Korea DSP 카드에서 흰색 SVG 로고와 밝은 텍스트가 충분히 보이는가

### Layout and Quality

- [ ] 320px, 375px, 390px, 데스크톱 폭에서 카드와 텍스트가 잘리지 않는가
- [ ] 긴 서비스명이 카드 밖으로 넘치지 않는가
- [ ] 만든이 pill이 데스크톱에서는 `만든이 · 이건우`, 모바일에서는 `이건우`로 표시되는가
- [ ] 브라우저 콘솔에 JavaScript 오류가 없는가
- [ ] 브라우저 콘솔에 SVG 404 오류가 남아 있지 않은가

## License

Internal use. All rights reserved.
