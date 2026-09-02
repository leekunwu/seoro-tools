# SEORO TOOLS

> Music Operations Hub for distribution, metadata, settlement, DSP monitoring, and partner systems.

**SEORO TOOLS**는 음악 유통 운영 업무에 필요한 사내 웹 도구와 주요 서비스 바로가기를 한곳에 모은 정적 랜딩페이지입니다. 메타데이터 정리, 파일 변환, 디지털 정산, DSP 모니터링, 유통·파트너 시스템 접근을 빠르게 시작할 수 있도록 구성했습니다.

## Overview

이 허브는 다음 두 가지를 중심으로 운영합니다.

1. **SEORO 업무 도구**: GitHub Pages로 배포된 파일 매핑, CSV 인코딩 수정, 정산 매핑, 멀티 플랫폼 검색 등의 웹 도구
2. **업무 바로가기**: 글로벌·국내 DSP, 유통 카탈로그, 파트너 포털, 저작권·계약·파일 전송 서비스

## Included Resources

### SEORO Tools

| Tool | Description | Link |
| --- | --- | --- |
| Universal File Mapper | 서로 다른 파일 구조와 컬럼을 기준 형식에 맞게 매핑 | [Open](https://leekunwu.github.io/universal-file-mapper/) |
| Release Notes | CSV 기반 발매 문구와 릴리스 노트 확인 | [Open](https://leekunwu.github.io/release-notes/) |
| Multi-Platform Music Search | 하나의 키워드로 주요 음악 플랫폼 검색 결과 실행 | [Open](https://leekunwu.github.io/Multi_Platform_Music_Search/) |
| Digital Settlement Mapper | 디지털 정산 데이터를 통합 업무 형식으로 매핑·정리 | [Open](https://leekunwu.github.io/digital-settlement-mapper/) |
| CSV Encoding Fixer | CSV 파일의 인코딩 문제를 확인하고 업무용 형식으로 변환 | [Open](https://leekunwu.github.io/csv-encoding-fixer/) |

### Quick Links

- **Global DSP**: Apple Music, Spotify, YouTube Music, TIDAL, Amazon Music
- **Korea DSP**: Melon, Genie, Bugs!, VIBE, FLO
- **Distribution & Catalog**: Naxos Labels, FUGA Catalog, NDS Score, NDS Smart URL
- **Partner Systems**: Spotify for Artists, YG PLUS CLAS, Sony Music Entertainment Artist Portal, FLO MCP, Genie KOLA, Bugs Partners, KOMCA, IMLB, Kyobo Partner, Mound Media Partner, DistroAuth
- **Work Utilities**: WeTransfer, Modusign, 기타 업무 시스템

### Partner Systems

| Service | Description | Link |
| --- | --- | --- |
| Spotify for Artists | Spotify 아티스트, 릴리스 및 성과 관리 | [Open](https://artists.spotify.com/home) |
| YG PLUS CLAS | YG PLUS CLAS 파트너 포털 | [Open](http://clas.ygplus.com) |
| Sony Music Entertainment Artist Portal | Sony Music Entertainment 아티스트·파트너 포털 | [Open](https://sme-artistportal.com/login?returnUrl=%2F) |
| FLO MCP | FLO 파트너 운영 시스템 | [Open](https://mcp.music-flo.com/login) |
| Genie KOLA | Genie 파트너 운영 시스템 | [Open](https://kola.geniemusic.co.kr/login/login) |
| Bugs Partners | Bugs 파트너 운영 시스템 | [Open](https://partners.bugs.co.kr/index) |
| Mound Media Partner | Mound Media 파트너 포털 | [Open](https://partner.moundmedia.net/) |
| IMLB | 유통 및 파트너 업무 시스템 | [Open](https://imlb.co.kr/login) |
| Kyobo Partner | 교보문고 파트너 시스템 | [Open](https://partner.kyobobook.co.kr/login) |
| KOMCA | 한국음악저작권협회 저작권 업무 시스템 | [Open](https://www.komca.or.kr/CTLJSP) |
| DistroAuth | 유통 관련 인증 및 파트너 접근 시스템 | [Open](https://login.distroauth.com/u/login?state=hqFo2SB2dVdYMHAxRUdkV244Vjc4NnVwUl92bkg3eFJSdkZUOaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHYySXQ0WlpiZ3VPaTlOd3JPVGt2emVZc21iV1RzX051o2NpZNkgbTlxZ0RHWWh0bG1BMnEzSlIxN2VxaTlUblNzYmp6c1Klb3JnaWS0b3JnXzVpd3pIOFRqVkdmSWtvOG6nb3JnbmFtZadvcmNoYXJk) |

## Features

- 카테고리 기반 도구 및 바로가기 탐색
- 이름·설명·카테고리·상태 기준 실시간 검색
- 자주 쓰는 항목을 별도로 보여주는 Quick Access
- 외부 서비스와 GitHub 저장소를 새 탭에서 실행
- 모바일·데스크톱 반응형 레이아웃
- 키보드 중심 사용성
  - `/`: 검색창으로 포커스 이동
  - `Escape`: 검색어와 필터 초기화
  - `Tab`: 모든 주요 컨트롤을 순차적으로 탐색
- 접근성 고려
  - Skip link
  - 명확한 포커스 표시
  - 외부 링크 접근성 이름
  - 검색 결과 상태 안내
- 검색엔진 색인 방지 설정 (`noindex`, `robots.txt`)

## Project Structure

```text
seoro-tools/
├── index.html      # 랜딩페이지 구조와 접근성 마크업
├── styles.css      # 디자인 토큰, 반응형 UI, 상태 스타일
├── app.js          # 도구 데이터, 검색, 카테고리 필터, 카드 렌더링
└── robots.txt      # 검색엔진 크롤링 제한 요청
```

## Add a Resource

새 도구나 바로가기를 추가하려면 `app.js`의 `resources` 배열에 아래 형식으로 항목을 추가합니다.

```js
{
  id: "new-tool-id",
  name: "새 도구 이름",
  description: "도구가 하는 일을 한 문장으로 설명",
  category: "My Tools",
  type: "SEORO TOOL",
  status: "LIVE",
  url: "https://example.com/",
  githubUrl: "https://github.com/leekunwu/example-repository",
  pinned: false,
}
```

### Field Reference

| Field | Required | Description |
| --- | --- | --- |
| `id` | Yes | 페이지 내에서 고유해야 하는 식별자 |
| `name` | Yes | 화면에 표시할 도구 또는 서비스 이름 |
| `description` | Yes | 한 줄 업무 설명 |
| `category` | Yes | 필터 및 그룹에 사용하는 카테고리 |
| `type` | Yes | 카드 상단 배지. 예: `SEORO TOOL`, `DSP`, `PARTNER` |
| `status` | Yes | 상태 배지. 예: `LIVE`, `BETA`, `OPEN`, `LOGIN` |
| `url` | Yes | 실제 도구 또는 서비스 바로가기 URL |
| `githubUrl` | No | 코드 저장소 URL. 없으면 GitHub 링크를 숨김 |
| `pinned` | Yes | `true`면 Quick Access에도 표시 |

현재 기본 카테고리는 다음과 같습니다.

```text
My Tools
Global DSP
Korea DSP
Distribution & Catalog
Partner Systems
Work Utilities
```

새 카테고리를 추가할 때에는 `app.js`의 `categoryOrder` 배열에도 같은 이름을 추가해야 합니다.

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

배포 주소는 일반적으로 다음과 같습니다.

```text
https://leekunwu.github.io/seoro-tools/
```

## Security Notes

이 프로젝트는 정적 링크 허브입니다. 다음 원칙을 지켜 주세요.

- 비밀번호, API 키, 액세스 토큰, 인증 쿠키, 개인 식별 정보는 저장소에 커밋하지 않습니다.
- 일회성 로그인 URL 또는 민감한 세션 파라미터가 포함된 URL은 등록하지 않습니다.
- 외부 서비스 접근 권한은 각 서비스의 로그인 및 권한 정책으로 관리합니다.
- `noindex` 메타 태그와 `robots.txt`는 검색 색인을 줄이기 위한 요청일 뿐, 접근 제어 수단이 아닙니다.
- 사내 전용 운영이 필요한 경우 별도의 인증 계층 또는 접근 제어를 적용합니다.

## Maintenance Checklist

새 항목을 추가하거나 링크를 수정한 뒤에는 아래를 확인합니다.

- [ ] 링크가 올바른 주소로 새 탭에서 열리는가
- [ ] 서비스명, 설명, 카테고리, 상태가 정확한가
- [ ] `pinned` 항목이 Quick Access에 의도대로 표시되는가
- [ ] 검색 결과와 카테고리 필터에 새 항목이 표시되는가
- [ ] 모바일 화면에서 카드와 버튼이 잘리지 않는가
- [ ] URL에 인증 토큰 또는 민감한 정보가 포함되지 않았는가
- [ ] 브라우저 콘솔 오류가 없는가

## License

Internal use. All rights reserved.
