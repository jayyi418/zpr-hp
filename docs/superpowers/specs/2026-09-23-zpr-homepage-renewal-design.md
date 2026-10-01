# 제피로스 홈페이지 리뉴얼 — 설계 문서

- 작성일: 2026-09-23
- 대상: https://zpr.co.kr (제피로스 일렉트로닉스(주) / Zephyros Electronics Inc.)
- 상태: 설계 합의 완료, 사용자 검토 대기

---

## 1. 배경

### 1.1 회사
- AI·로봇용 반도체 및 시스템 설계 기업. 대표 김유선(공학박사).
- 핵심 기술 3가지: AI 기반 하드웨어 설계 자동화 / 5D 임베디드 PCB(22년 노하우) / 고정밀 시뮬레이션·해석.
- 사업 모델(BM) 3가지(계속 수정 중): 에너지 고효율 저전력 / 센서·무선 통합 / 로보틱스·AI.
- 공개된 수치: 전력 변환 효율 90%→92%, AI 시뮬레이션 설계 정확도 98%.
- 본사: 서울 강서구 금낭화로 136, 1020호 / R&D센터: 서울 마포구 백범로31길 21 서울창업허브 별관 308호.

### 1.2 현재 사이트의 문제 (리뉴얼로 전부 해소)
| 문제 | 상세 |
|---|---|
| 깨진 페이지 | About Us(`/?page_id=1557`)가 404 |
| 빈 페이지 | BM1~3 상세(`/tech-emi`, `/tech-sensor`, `/tech-robotai`)에 제목만 있고 비교표 자리는 빈 박스 |
| 빈 섹션 | 홈 Partners 섹션에 로고가 없음 |
| 테마 데모 잔재 | 사이드 메뉴에 `hello@themenectar.com`, 해외 전화번호, 빈 SNS 링크 |
| 언어 | 영문만 있음(`lang="ko-KR"`로 선언돼 있음) |
| 품질 | 오탈자("Perfer"), 모호한 헤드카피("Surpassing 100 Years of Tradition") |
| 기반 | WordPress + WPBakery + Salient 테마 (카페24 호스팅) |

---

## 2. 목표와 성공 기준

### 2.1 타깃
1. **1순위: B2B 고객사·파트너.** 기술을 이해하고 도입(기술 상담)을 문의하게 만든다.
2. 2순위: 투자자·정부과제/기관 심사, 채용 후보자. 이들은 회사 페이지와 문의 유형으로 수용한다.

### 2.2 성공 기준
- 404 페이지 0개, 빈 섹션 0개. 데이터가 없는 섹션은 렌더링되지 않는다.
- 모든 페이지를 국문(`/`)과 영문(`/en/`)으로 제공한다.
- BM 추가·수정·삭제는 **언어별 마크다운 파일 1개 수정**으로 끝나며, 코드는 수정하지 않는다.
- 문의 폼 제출이 회사 메일(sdh@zpr.co.kr)로 도착한다.
- Lighthouse(모바일): 성능 85 이상, 접근성·권장사항·SEO 95 이상.
- 기존 URL은 새 URL로 301 리다이렉트된다.
- 도메인 전환 중에도 회사 메일이 끊기지 않는다.

---

## 3. 설계 원칙

1. **빈 섹션을 만들지 않는다.** 파트너, 뉴스, 인증, 사양, 마일스톤은 데이터가 있을 때만 노출한다(메뉴 포함).
2. **BM은 데이터다.** 목록, 상세, 문의 유형, 푸터 링크가 모두 BM 데이터에서 파생된다.
3. **신뢰는 기술과 사람으로 만든다.** 고객 로고 대신 원리 다이어그램, 핵심 수치, 대표의 전문성을 신뢰 근거로 쓴다.
4. **기업 톤을 쓴다.** 이미 설립된 법인이므로 창업경진대회식 "문제 제기" 피칭 톤은 쓰지 않는다. 사실, 수치, 방법으로 말한다.
5. **증거 없는 수치나 그래프를 만들지 않는다.** 회사가 제공한 값만 쓰고, 그 전까지는 수치 없는 개념 도식으로 둔다.

### 3.1 핵심 메시지: 하드웨어 × 소프트웨어 융합
제피로스의 가장 큰 차별점은 **하드웨어(5D 임베디드 PCB, 회로·기판 설계)와 소프트웨어(AI 설계 자동화, 시뮬레이션)를 한 회사가 모두 다루고 융합해 설계한다는 점**이다(사용자 확인, 2026-09-23). 이 메시지를 다음 위치에서 일관되게 반복한다.
- 홈 히어로 헤드라인: "AI와 로보틱스를 위한 하드웨어 & 소프트웨어"
- 홈 핵심 기술 섹션: 제목 "하드웨어와 소프트웨어, 하나로 융합해 설계합니다". 각 기술에 `SW`/`HW` 태그를 달아 "소프트웨어로 설계 → 하드웨어로 구현 → 소프트웨어로 검증" 흐름을 보여준다
- 홈 Why ZEPHYROS 첫 항목: "하드웨어와 소프트웨어를 함께"
- 기술 페이지 헤더와 회사 페이지 비전 문구

---

## 4. 정보 구조

### 4.1 사이트맵
```
/                       홈
/technology             기술 (3개 기술을 한 페이지에, 섹션 앵커로 구분)
/solutions              솔루션 목록
/solutions/[slug]       솔루션(BM) 상세 — 단일 템플릿
/company                회사 (비전 · 대표 · 마일스톤 · 인증 · 채용 · 오시는 길)
/news                   뉴스 목록            ← 글 1개 이상일 때만
/news/[slug]            뉴스 상세            ← 글 1개 이상일 때만
/contact                문의
/contact/thanks         문의 완료
/privacy                개인정보처리방침
/404                    Not Found
/en/...                 위와 같은 구조(영문)
```

### 4.2 GNB
- 좌측 로고, 우측에 `기술 · 솔루션 · 회사 · (뉴스) · [문의]`와 `KO/EN`. 문의는 버튼으로 강조한다.
- 다크 섹션 위에서는 투명 배경에 밝은 글자를 쓰고, 라이트 섹션에 들어서면 불투명 배경에 어두운 글자로 전환한다.
- 모바일에서는 햄버거 메뉴로 전체 화면 오버레이를 연다.
- 언어 전환 시 같은 페이지의 다른 언어 버전으로 이동한다(예: `/solutions/low-power` ↔ `/en/solutions/low-power`).

### 4.3 조건부 노출 규칙
| 요소 | 노출 조건 |
|---|---|
| 뉴스 메뉴·페이지·홈 섹션 | 해당 언어의 `draft: false` 뉴스가 1개 이상 |
| 회사 > 마일스톤 | milestones 데이터가 1개 이상 |
| 회사 > 인증·특허 | certifications 데이터가 1개 이상 |
| 솔루션 상세 > 비교표 / 사양 | 해당 BM에 comparison / specs 데이터가 있음 |
| 홈 > 파트너 로고 | partners 데이터가 1개 이상 (현재 비어 있음) |
| 푸터 SNS 아이콘 | 해당 URL이 설정돼 있음 |

---

## 5. 페이지별 구성

### 5.1 홈 `/`
| # | 섹션 | 테마 | 내용 | 인터랙션 / 이미지 |
|---|---|---|---|---|
| 1 | 히어로 | 다크 | 아이브로우 `SEMICONDUCTOR & SYSTEM DESIGN`, 헤드라인, 서브카피, CTA 2개(기술 상담 요청 → `/contact`, 기술 살펴보기 → `/technology`), 하단 핵심 수치 3개(92% / 98% / 22년) | 회로 신호 필드(I-1), 수치 카운트업(I-2), 칩 3D 렌더(IMG-1) |
| 2 | 핵심 기술 | 다크→라이트 전환 | HW×SW 융합 제목과 소개문(§3.1), 3개 기술을 `SW`/`HW` 태그와 함께 단계별로 설명하고 `/technology#…`로 연결 | PCB 레이어 분해 스크롤 연출(I-3) |
| 3 | 솔루션 | 라이트 | BM 카드(제목, 한 줄 요약, 대표 수치, 적용 분야 칩, "자세히") | BM 키 비주얼(IMG-5) |
| 4 | Why ZEPHYROS | 라이트 | 비교 슬라이더, 차별점 4줄(첫 줄은 HW×SW 융합), 기존 방식 vs ZEPHYROS 요약표(BM 중 comparison 데이터가 하나라도 있을 때만), 파트너 로고(조건부) | 비교 슬라이더(I-4) |
| 5 | 회사·대표 | 라이트 | 비전 문구, 대표 인용과 약력 요약, 마일스톤 하이라이트(조건부), `/company` 링크 | — |
| 6 | 최신 소식 | 라이트 | 최신 3건 (조건부) | — |
| 7 | 마무리 CTA | 다크 | "당신의 하드웨어, 더 작고 더 효율적으로." + 기술 상담 요청 버튼 + 이메일 | 회로 신호 필드 축소판 재사용 |
| — | 푸터 | 다크 | 회사명(국/영), 대표, 사업자등록번호 532-88-03254, 본사·R&D센터 주소, 연락처, 개인정보처리방침, KO/EN | — |

헤드라인: "AI와 로보틱스를 위한 / 하드웨어 & 소프트웨어"(사용자 제안, §3.1). 서브카피: "AI 설계 자동화 소프트웨어와 22년 임베디드 PCB 하드웨어 기술을 융합해, 더 작고 더 효율적인 AI·로봇 시스템을 설계합니다."
모든 카피는 초안이며 오픈 전에 검토한다.

### 5.2 기술 `/technology`
- 다크 헤더: "하드웨어를 설계하는 방식을 바꿉니다"(초안).
- 데스크톱은 좌측에 고정 목차를 두고 스크롤 위치에 따라 현재 섹션을 표시한다.
- 섹션 3개(앵커: `#ai-design`, `#embedded-pcb`, `#simulation`). 각 섹션은 설명, 인터랙션, 핵심 수치, 관련 솔루션 링크로 구성한다. 핵심 수치는 회사가 제공한 값만 쓴다(현재: 임베디드 PCB 22년, 시뮬레이션 98%). 값이 없는 기술은 수치를 생략한다.
  - AI 설계 자동화: 자동 배치·배선 애니메이션(I-5)
  - 5D 임베디드 PCB: 레이어 분해 상세 뷰(I-3 재사용, 단계 수 확장)
  - 고정밀 시뮬레이션: 시뮬레이션 vs 실측 곡선 오버레이(I-6)
- 하단에 CTA 밴드를 둔다.

### 5.3 솔루션 목록 `/solutions`
- 짧은 인트로 뒤에 BM 카드 그리드(`order` 순)를 둔다. 카드 구성은 홈 솔루션 섹션과 같다.

### 5.4 솔루션 상세 `/solutions/[slug]`
1. **다크 헤더**: `SOLUTION 0N` 라벨, 제목, 한 줄 요약, 대표 수치 배지, 키 비주얼
2. **개요·핵심 특징**: 본문 마크다운 + features(3~4개)
3. **작동 원리**: principle.steps를 흐름 다이어그램으로 렌더링하고 스크롤 시 단계별로 활성화한다(I-7)
4. **기존 방식 vs ZEPHYROS**: comparison 표. ZEPHYROS 열을 강조한다(조건부)
5. **적용 분야**: applications 칩
6. **주요 사양**: specs 표(조건부)
7. **관련 기술**: relatedTech → `/technology#…` 링크
8. **CTA(다크)**: "이 솔루션 상담하기" → `/contact?type=<slug>`
9. 이전·다음 솔루션 내비게이션

### 5.5 회사 `/company`
1. 다크 헤더: 미션·비전(글로벌 팹리스·시스템 기업)
2. 대표 인사말: 인용("제피로스는 전자공학의 미래를 설계합니다. 전력 효율과 초소형화의 한계를 넓혀갑니다."), 약력. 사진은 제공받으면 넣고, 없으면 사진 없는 레이아웃을 쓴다. **"한국의 Broadcom" 표현은 사이트 어디에도 쓰지 않는다**(사용자 요청)
3. 마일스톤 타임라인(조건부, 연혁 수령 후 채움)
4. 인증·특허(조건부)
5. 채용: 인재상 3줄, 지원 이메일, 문의 유형 "채용" 링크
6. 오시는 길: 본사·R&D센터 카드와 네이버지도/Google Maps 링크 버튼. 지도 임베드는 쓰지 않는다
7. 투자·협력 문의 CTA: `/contact?type=partnership`

### 5.6 문의 `/contact`
- 좌측 폼, 우측 직접 연락처(이메일, 전화, 주소 요약).
- 필드와 동작은 §10을 따른다.

### 5.7 뉴스 `/news` (조건부)
- 목록: 카테고리 필터(보도·수상·전시·공지), 날짜 역순.
- 상세: 마크다운 본문. `externalUrl`이 있으면 목록에서 외부 기사로 바로 연결한다.

### 5.8 기타
- `/privacy`: §10.3 참고.
- `/404`: 다크 배경, 홈·문의 링크.

---

## 6. 비주얼 디자인 — "Dark Hero + Light Body" (A+B 혼합)

첫인상(히어로)과 기술 전환 구간은 **다크(A: Deep Signal)** 로 몰입감을 주고, 읽어야 하는 정보(솔루션, 비교표, 회사)는 **라이트(B: Clean Precision)** 로 가독성을 확보한다. 스크롤하며 어둠에서 빛으로 넘어가는 전환 자체를 연출로 쓴다.
시안 원본: `.superpowers/brainstorm/*/content/visual-direction.html`.

### 6.1 컬러 토큰
| 토큰 | 값 | 용도 |
|---|---|---|
| `--dark-bg` | `#06090F` | 다크 섹션 배경 |
| `--dark-bg-2` | `#0A1224` | 다크 그라데이션 중간 |
| `--dark-surface` | `#0E1730` | 다크 카드 |
| `--dark-line` | `rgba(143,193,255,.14)` | 다크 구분선 |
| `--dark-text` | `#E8EEF9` | 다크 본문 |
| `--dark-muted` | `#9AA7BF` | 다크 보조 텍스트 |
| `--blue-300` | `#8FC1FF` | 다크 위 강조·라벨 |
| `--blue-500` | `#3B7BFF` | 글로우, 다크 CTA |
| `--blue-600` | `#2F5BD3` | 로고 블루, 다크 CTA 하단 |
| `--accent` | `#2F6BFF` | 라이트 위 강조 |
| `--accent-strong` | `#1E4FD8` | 라이트 위 링크·표 강조 텍스트 |
| `--light-bg` | `#F6F7F9` | 라이트 섹션 배경 |
| `--light-surface` | `#FFFFFF` | 라이트 카드 |
| `--light-tint` | `#EAF1FF` | 표 강조 열, 배지 |
| `--light-line` | `#E3E6EC` | 라이트 구분선·그리드 |
| `--ink` | `#0B1220` | 라이트 본문, 라이트 주 버튼 |
| `--ink-muted` | `#4A5568` | 라이트 보조 텍스트 |

- 모든 텍스트와 배경 조합은 WCAG AA(본문 4.5:1, 큰 글자 3:1)를 충족해야 한다.
- 사이트 전체에 다크 모드 토글을 두지 않는다. 섹션별 테마가 고정이다.

### 6.2 타이포그래피
- **원티드 산스(Wanted Sans Variable, SIL OFL)**를 국·영 본문과 제목에 쓰고 self-host한다. 사용자가 toss.im의 서체 느낌을 원해 골랐다(Toss Product Sans는 토스 전용이라 사용할 수 없다). 시안 비교: `mockups/font-headline.html`.
- **JetBrains Mono**(아이브로우, 라벨, 수치 단위, 표 헤더)도 self-host한다.
- 스케일(데스크톱 → 모바일): Display 64 → 40 / H2 40 → 28 / H3 24 → 20 / Body 17 → 16 / Small 14.
- 국문 본문은 `line-height: 1.7`, `word-break: keep-all`로 둔다. 제목은 `letter-spacing: -0.03em`.
- 제목에 그라데이션 텍스트를 쓰지 않는다(사용자 요청). 히어로 헤드라인도 단색이다.
- **영문 회사명 표기**: 본문과 라벨에 적을 때는 `ZE PHY ROS`처럼 음절 사이를 띄운다(사용자 요청). `Brand` 컴포넌트가 음절 사이에 시각적 간격(.42em)만 넣고, 텍스트는 `ZEPHYROS` 한 단어로 유지해 검색과 스크린리더에 영향이 없게 한다. 법인명(`Zephyros Electronics Inc.`), `<title>`·alt 텍스트는 원래 표기를 유지한다.
- **헤더 로고**: 공식 로고의 육각형 심볼과 텍스트 워드마크 `ZE PHY ROS`(원티드 산스 800)를 조합한다(사용자 요청). 워드마크 색은 헤더 테마(다크/라이트)를 따른다. 시안에서는 공식 PNG의 왼쪽 20%(심볼)를 잘라 쓰고 있다. 구현 시에는 로고 원본(SVG/AI)에서 심볼을 SVG로 추출해 쓴다(§14 #4).

### 6.3 레이아웃
- 최대 폭 1200px, 12컬럼, 거터 24px. 모바일 좌우 여백은 16px이며 가로 스크롤이 없어야 한다.
- 브레이크포인트: 360 / 768 / 1024 / 1440.
- 라이트 섹션에는 가는 그리드 배경(`--light-line`, 28px)을 옅게 깐다.

### 6.4 공통 컴포넌트
`Header`, `Footer`, `LangSwitch`, `Button`(primary/secondary × dark/light), `Eyebrow`, `SectionHeader`, `Stat`, `SolutionCard`, `FeatureGrid`, `PrincipleFlow`, `ComparisonTable`, `ApplicationChips`, `SpecTable`, `Timeline`, `CtaBand`, `NewsCard`, `ContactForm`, `ThemeSection`(dark/light/transition 래퍼).

---

## 7. 인터랙션 명세

공통 원칙:
- `prefers-reduced-motion: reduce`이면 모든 애니메이션을 끄고 정적 대체물을 보여준다.
- 화면 밖에 있는 캔버스와 애니메이션은 IntersectionObserver로 일시정지한다.
- 모든 인터랙션은 키보드로 접근할 수 있고, 설명 텍스트는 애니메이션 없이도 온전히 읽힌다.

| ID | 이름 | 위치 | 동작 | 모바일 | 모션 줄이기 | 구현 |
|---|---|---|---|---|---|---|
| I-1 | 회로 신호 필드 | 홈 히어로, 마무리 CTA | 배경 이미지(IMG-1) 위에 45° 모서리의 PCB식 배선을 옅게 깔고 신호 펄스가 흐른다. 마우스 근처 배선이 밝아지고 펄스가 빨라진다. 헤드라인 쪽은 마스크로 흐리게 한다 | 배선 수를 줄이고 자동 재생만 한다 | 배선만 정적으로 그리고 펄스는 없앤다 | Canvas 2D |
| I-2 | 수치 카운트업 | 홈 히어로 수치, 기술 페이지 수치 | 뷰포트에 들어오면 0에서 목표값까지 1회 증가한다 | 동일 | 최종값을 바로 표시 | 순수 JS |
| I-3 | PCB 레이어 분해 | 홈 핵심 기술, 기술 > 5D 임베디드 PCB | 섹션을 고정(pin)한 채 스크롤하면 3개 레이어(AI SoC / 임베디드 R·C / 파워 플레인)가 단계별로 분리된다. 단계마다 기술 설명이 바뀌고, 홈에서는 배경이 다크에서 라이트로 보간된다 | 고정 없이 단계별 카드를 세로로 쌓고, 각 카드에 작은 SVG 애니메이션을 둔다 | 분해된 상태의 정적 SVG와 설명 목록 | GSAP ScrollTrigger + SVG |
| I-4 | 비교 슬라이더 | 홈 Why ZEPHYROS | 핸들을 드래그해 "기존 PCB(표면 실장)"와 "5D 임베디드 PCB"를 비교한다. 두 기판은 같은 시드로 그린 SVG여서 칩과 배선 위치가 정확히 겹친다. 임베디드 쪽은 부품이 점선 윤곽으로만 보이고, 기판이 작아진 자리에 기존 크기를 점선으로 표시한다(수치는 넣지 않는다). "개념 이미지"라고 캡션을 단다 | 터치 드래그 | 두 이미지를 나란히 표시 | `<input type="range">` 기반(키보드 접근) |
| I-5 | 자동 배치·배선 | 기술 > AI 설계 자동화 | 부품이 배치된 뒤 배선이 순서대로 그려진다 | 동일(축소) | 완성된 도면 정적 표시 | SVG stroke-dashoffset + GSAP |
| I-6 | 시뮬레이션 vs 실측 | 기술 > 고정밀 시뮬레이션 | 실측 곡선 위에 시뮬레이션 곡선이 그려지며 겹친다 | 동일 | 두 곡선 정적 표시 | SVG. **실제 데이터를 받기 전에는 축 수치 없는 개념 도식으로 두고 "개념도"라고 명시한다** |
| I-7 | 작동 원리 흐름 | 솔루션 상세 | principle.steps를 노드와 화살표로 렌더링하고, 스크롤하면 단계가 순서대로 활성화된다 | 세로 흐름 | 전체 활성 상태 | SVG/HTML + IntersectionObserver |
| I-8 | 스크롤 리빌 | 전 페이지 섹션 | 섹션 진입 시 옅게 떠오른다(12px, 400ms) | 동일 | 끔 | CSS + IntersectionObserver |
| I-9 | 헤더 전환 | 전 페이지 | 헤더 아래 섹션의 테마에 맞춰 헤더 스타일을 전환한다 | 동일 | 전환 애니메이션만 끔 | IntersectionObserver |

JS 예산: 홈 초기 로드 JS를 gzip 150KB 이하로 유지한다. GSAP는 필요한 페이지에서만 로드한다.

---

## 8. 이미지

### 8.1 원칙
- 생성 이미지는 **개념 이미지만** 쓴다(칩 매크로, PCB 레이어, 추상적 로봇 관절, 신호·필드 시각화).
- **실제 제품이나 실제 인물처럼 보이는 가짜 사진은 만들지 않는다.** 대표 사진, 제품 사진, 파트너 로고는 실제 자료만 쓴다.
- 톤은 다크 섹션에 블루 림라이트의 어두운 3D 렌더, 라이트 섹션에 흰 배경 스튜디오 톤 또는 아이소메트릭 렌더를 쓴다. 팔레트는 §6.1을 따른다.
- 모든 이미지에 국·영 대체 텍스트를 단다(장식용은 빈 alt).
- 원본 PNG에서 `astro:assets`로 AVIF/WebP 반응형 이미지를 만들고, 첫 화면 아래 이미지는 지연 로드한다.
- 스타일 가이드와 생성 프롬프트를 `docs/image-style-guide.md`에 기록해 같은 톤으로 다시 생성할 수 있게 한다.

### 8.2 목록
| ID | 용도 | 톤 |
|---|---|---|
| IMG-1 | 홈 히어로 칩 매크로 렌더 (I-1 대체 이미지, 기본 OG 이미지 베이스) | 다크 |
| IMG-2 | 기술 섹션 대표 이미지 3장 (AI 배선 추상 / 임베디드 PCB 단면 / 기판 위 필드 시각화) | 다크→라이트 |
| IMG-4 | 회사 페이지 헤더: 추상 R&D 분위기 (인물 없음) | 다크 |
| IMG-5 | BM 키 비주얼 1장씩 (현재 3장) | 다크 |
| IMG-6 | 페이지별 OG 이미지 (기본 1장, BM별 1장) | 다크 |

PCB 레이어 분해(I-3), 비교 슬라이더(I-4), 배선 애니메이션(I-5)은 **SVG 일러스트**로 직접 만든다. 선명하게 움직여야 하고, 비교하는 두 장면의 구도가 정확히 맞아야 하기 때문이다(생성 이미지 두 장은 구도가 맞지 않는다). ID는 기존 번호를 유지해 IMG-3은 결번이다.
생성 이미지가 아직 없을 때는 같은 자리에 SVG 대체 그래픽을 보여준다(히어로 칩, BM 카드 일러스트). 시안에서 이미 이 방식을 쓰고 있다.

---

## 9. 콘텐츠 모델

Astro Content Collections(Zod 스키마)를 쓴다. 필수 필드가 빠지면 **빌드가 실패한다.**

### 9.1 사이트 설정 `src/data/site.ts`
```ts
{
  company: { ko: '제피로스 일렉트로닉스(주)', en: 'Zephyros Electronics Inc.' },
  ceo: { ko: '김유선', en: 'Yooseon Kim', title: { ko: '대표이사 · 공학박사', en: 'CEO, Ph.D. in Engineering' } },
  bizRegNo: '532-88-03254',
  email: 'sdh@zpr.co.kr',
  phone: '<확인 필요>',            // §14 참고
  offices: [
    { id: 'hq', name: { ko: '본사', en: 'Head Office' },
      address: { ko: '서울특별시 강서구 금낭화로 136, 1020호', en: 'Rm. 1020, 136 Geumnanghwa-ro, Gangseo-gu, Seoul, Republic of Korea' },
      mapUrl: /* 네이버지도 검색 URL (주소 기반으로 생성) */ },
    { id: 'rnd', name: { ko: 'R&D센터', en: 'R&D Center' },
      address: { ko: '서울특별시 마포구 백범로31길 21, 서울창업허브 별관 308호', en: 'Rm. 308, Seoul Startup Hub Annex, 21 Baekbeom-ro 31-gil, Mapo-gu, Seoul, Republic of Korea' },
      mapUrl: /* 네이버지도 검색 URL */ },
  ],
  social: {},                      // 비어 있으면 아이콘을 숨긴다
}
```

### 9.2 솔루션 `src/content/solutions/{ko,en}/<slug>.md`
```yaml
slug: low-power                 # ko/en 공통 식별자, URL
order: 1
draft: false
title: 에너지 고효율 저전력 솔루션
summary: 노이즈를 에너지로 회수해 전력 변환 효율을 높입니다.
metric: { value: '92%', label: '전력 변환 효율' }   # 선택. 수치가 없으면 텍스트 값 허용(예: { value: 'Sensor + RF', label: '단일 기판 통합' })
keyVisual: ./images/low-power.png
features:                        # 3~4개
  - { title: 노이즈 회수, desc: ... }
principle:
  steps:                         # 2~6개
    - { label: 입력 전원, desc: ... }
comparison:                      # 선택
  rows:
    - { item: 전력 효율, conventional: '90%', zephyros: '92%' }
applications: [휴머노이드 로봇, 드론, 웨어러블]
specs:                           # 선택
  - { key: ..., value: ..., unit: ... }
relatedTech: [embedded-pcb, simulation]   # ai-design | embedded-pcb | simulation
```
본문(마크다운)은 개요 섹션에 들어간다.

- 초기 slug: `low-power`, `sensor-wireless`, `robotics-ai`.
- **빌드 검증**: 모든 slug는 ko·en 파일이 모두 있어야 하고, `relatedTech`는 정의된 기술 ID만 허용한다.
- 초기 내용은 현재 사이트 문구를 바탕으로 한 초안이다. 비교표 수치는 회사가 확정한 값만 넣고, 확정 전에는 `comparison`을 비워 섹션을 숨긴다.

### 9.3 기술 `src/content/technologies/{ko,en}.yaml`
3개 기술(`ai-design`, `embedded-pcb`, `simulation`)의 제목, 요약, 본문, 수치, 이미지.

### 9.4 마일스톤 `src/content/milestones/{ko,en}.yaml`
```yaml
- { date: '2025-10', title: ..., desc: ... }
```
비어 있으면 섹션을 숨긴다. 연혁을 받은 뒤 채운다.

### 9.5 뉴스 `src/content/news/{ko,en}/<slug>.md`
`title`, `date`, `category`(press | award | exhibition | notice), `summary`, `cover?`, `externalUrl?`, `draft`.

### 9.6 인증·특허, 파트너
- `src/content/certifications.yaml`: `{ type: patent|cert|award, name: {ko,en}, issuer, date }`
- `src/content/partners.yaml`: `{ name, logo, url? }`
- 둘 다 비어 있으면 숨긴다.

### 9.7 UI 문자열 `src/i18n/{ko,en}.json`
버튼, 라벨, 폼 문구, 메타 기본값을 둔다. 키가 누락되면 빌드 검증에서 실패한다.

---

## 10. 문의 폼

### 10.1 구현: Netlify Forms
- `<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">`
- 국·영 폼 모두 같은 폼 이름 `contact`로 제출하고, hidden 필드 `lang`으로 구분한다.
- 제출 후 `/contact/thanks` 또는 `/en/contact/thanks`로 이동한다.
- 알림: Netlify 폼 알림 이메일을 sdh@zpr.co.kr로 설정한다(Netlify 대시보드에서 사용자가 설정).
- 스팸: Netlify 기본 스팸 필터와 honeypot 필드를 쓴다.

### 10.2 필드
| 필드 | 필수 | 비고 |
|---|---|---|
| 문의 유형 `type` | ✓ | BM 목록(데이터에서 생성) + `partnership`(투자·협력) + `careers`(채용) + `other`. `?type=` 쿼리로 미리 선택 |
| 이름 | ✓ | |
| 회사 | | |
| 이메일 | ✓ | 형식 검증 |
| 연락처 | | |
| 내용 | ✓ | |
| 개인정보 수집·이용 동의 | ✓ | 체크박스, `/privacy` 링크 |

- 클라이언트 검증은 HTML5 기본 검증에 국·영 오류 문구를 붙인다. 오류는 필드 옆에 표시하고 `aria-describedby`로 연결한다.

### 10.3 개인정보처리방침 `/privacy`
- 수집 항목, 목적(문의 응대), 보유 기간(문의 처리 완료 후 1년, 이후 파기), 처리 위탁·국외 이전(Netlify, Inc., 미국: 폼 데이터 저장), 보호책임자 연락처를 적는다.
- 초안은 작성하되 **법률 검토는 회사가 한다.** 보호책임자 정보는 §14 참고.

---

## 11. 기술 구조

| 항목 | 선택 |
|---|---|
| 프레임워크 | Astro(정적 출력), TypeScript |
| 스타일 | CSS 변수 기반 디자인 토큰 + 컴포넌트 스코프 CSS |
| 애니메이션 | GSAP + ScrollTrigger(필요한 페이지만), Canvas 2D, SVG |
| 다국어 | Astro i18n 라우팅: 국문 기본 `/`(prefix 없음), 영문 `/en/` |
| 이미지 | `astro:assets` (AVIF/WebP, 반응형) |
| 폰트 | Pretendard Variable, JetBrains Mono self-host |
| 호스팅 | Netlify (GitHub 저장소 연동, main 브랜치 = 운영, 브랜치·PR = 미리보기) |
| 폼 | Netlify Forms |
| 분석 | Cloudflare Web Analytics(쿠키 없는 JS 비콘, 무료 계정 필요). 선택 사항 |

### 11.1 폴더 구조(개요)
```
src/
  components/
    ui/            Button, Eyebrow, Stat …
    sections/      Hero, TechExplode, SolutionsGrid, WhyZephyros, CompanyTeaser, CtaBand …
    interactive/   CircuitField, LayerExplode, CompareSlider, AutoRoute, SimOverlay, PrincipleFlow
  content/         solutions/, technologies/, milestones/, news/, certifications.yaml, partners.yaml
  content.config.ts
  data/site.ts
  i18n/            ko.json, en.json, utils.ts
  layouts/         BaseLayout.astro
  pages/           국문 라우트 + en/ 라우트 (공통 페이지 컴포넌트를 공유하는 얇은 라우트 파일)
  styles/          tokens.css, global.css
public/
  _redirects, robots.txt, favicon, fonts/
docs/
  superpowers/specs/, image-style-guide.md, launch-checklist.md
tests/
  e2e/ (Playwright)
```

---

## 12. 배포와 도메인 전환

### 12.1 현재 DNS (카페24, 2026-09-23 조회)
| 레코드 | 값 | 전환 시 |
|---|---|---|
| NS | ns1/ns2.cafe24.com, ns1/ns2.cafe24.co.kr | **유지** |
| A `zpr.co.kr` | 183.111.138.241 (현 워드프레스) | **Netlify IP로 변경** (Netlify 대시보드에 안내되는 값) |
| CNAME `www` | zpr.co.kr | 유지 (Netlify에서 www → apex 리다이렉트) |
| MX | spam.cafe24.com (10) | **절대 변경하지 않음** |
| TXT | `v=spf1 include:spf.cafe24.com ~all` | **유지** |
| TXT | google-site-verification=… | **유지** |

### 12.2 전환 절차 (`docs/launch-checklist.md`로 관리)
1. Netlify에 사이트를 배포하고 미리보기 URL에서 전체 QA를 마친다.
2. Netlify에 커스텀 도메인 `zpr.co.kr`(primary)과 `www.zpr.co.kr`을 추가한다.
3. (전날) 카페24에서 A 레코드 TTL을 낮춘다(가능한 경우).
4. **사용자가 직접** 카페24 DNS 관리에서 A 레코드 값을 변경한다.
5. 전파를 확인하고, Netlify에서 SSL(Let's Encrypt) 자동 발급을 확인한다.
6. 메일 송수신을 테스트한다(MX 변경이 없으므로 영향이 없어야 한다).
7. 리다이렉트, 폼 제출, 메일 도착을 확인한다.
8. Google Search Console에 sitemap을 제출한다.
9. **롤백:** A 레코드를 183.111.138.241로 되돌린다. 워드프레스는 오픈 후 최소 2주간 유지한다.
10. **카페24 호스팅 해지 전에 메일이 호스팅 상품과 별도인지 반드시 확인한다.**

### 12.3 리다이렉트 (`public/_redirects`, 301)
```
/tech-emi         /solutions/low-power         301
/tech-sensor      /solutions/sensor-wireless   301
/tech-robotai     /solutions/robotics-ai       301
/  page_id=1557   /company                     301!
```
- `/` 경로에는 실제 파일(index.html)이 있으므로, 쿼리 매칭 규칙이 적용되려면 강제 플래그(`301!`)가 필요하다.
- 기존 `/contact/`는 새 사이트의 `/contact/`(디렉터리 형식 출력)와 경로가 같으므로 리다이렉트하지 않는다. 규칙을 넣으면 Netlify의 trailing slash 정규화와 맞물려 무한 루프가 날 수 있다.

---

## 13. SEO · 접근성 · 성능 · 테스트

### 13.1 SEO
- 페이지별·언어별 title과 description, canonical, `hreflang`(ko, en, x-default=ko)을 설정한다.
- `@astrojs/sitemap`(i18n)과 `robots.txt`를 둔다.
- JSON-LD `Organization`(이름, URL, 로고, 주소)을 넣는다.
- OG·Twitter 카드 이미지(IMG-6)를 둔다.

### 13.2 접근성
- WCAG 2.1 AA 대비, skip link, 포커스 스타일, 랜드마크, 페이지별 `lang` 속성을 갖춘다.
- 폼 라벨과 오류 연결, 모션 줄이기 대응(§7), 이미지 대체 텍스트(§8)를 적용한다.

### 13.3 성능
- 모바일 Lighthouse 성능 85 이상, 홈 초기 JS 150KB(gzip) 이하.
- LCP 요소(히어로 헤드라인과 이미지)를 우선 로드하고, 폰트는 subset과 preload를 적용한다.
- 지원 브라우저: 최신 2개 버전의 Chrome, Edge, Safari(iOS 16 이상), Firefox, 삼성 인터넷.

### 13.4 테스트와 검증
| 종류 | 내용 |
|---|---|
| 빌드 검증 | `astro check`, 콘텐츠 스키마, ko/en 파일 쌍 검사, i18n 키 누락 검사 |
| 링크 검사 | 빌드 결과물의 내부 링크 404 검사 |
| E2E (Playwright) | 모든 라우트(ko/en)의 200 응답과 h1 존재, 언어 전환 시 같은 페이지 유지, 문의 폼 필수 필드와 `?type=` 미리 선택, 데이터가 빈 섹션 미노출(fixture), 모션 줄이기 시 정적 대체물 표시, 모바일 360px에서 가로 스크롤 없음 |
| Lighthouse | 미리보기 URL에서 §2.2 목표 확인 |
| 수동 | 미리보기에서 실제 폼 제출 후 메일 도착 1회 확인, 전환 후 메일 송수신 확인 |

---

## 14. 사용자에게 받아야 할 것

| # | 항목 | 필요 시점 | 없을 때 처리 |
|---|---|---|---|
| 1 | 연혁(마일스톤) | 오픈 전 권장 | 섹션을 숨긴다 |
| 2 | BM 3개 확정 내용(요약, 대표 수치, 비교표, 적용 분야) | 오픈 전 | 현재 사이트 문구로 초안을 쓰고, 비교표는 숨긴다 |
| 3 | 대표 약력과 사진 | 오픈 전 권장 | 사진 없는 레이아웃을 쓴다 |
| 4 | 로고 원본(SVG/AI) | 개발 초기 | 현재 PNG에서 SVG로 재작성한 뒤 확인받는다 |
| 5 | 공개용 대표 전화번호 | 개발 중 | 현재 표기 `+82 010-2520-9699`는 형식이 잘못됐고(→ `+82 10-…`) 휴대폰 번호로 보인다. 공개 여부를 확인하고, 미확정이면 이메일만 표시한다 |
| 6 | 개인정보 보호책임자 이름·연락처, 방침 검토 | 오픈 전 필수 | 오픈할 수 없다 |
| 7 | 영문 카피 검토 | 오픈 전 | — |
| 8 | GitHub·Netlify 계정(사용자 소유) | 배포 단계 | — |
| 9 | 카페24 DNS 변경(사용자가 직접) | 오픈 당일 | — |
| 10 | Cloudflare Web Analytics 사용 여부 | 오픈 전 | 분석 없이 오픈 |
| 11 | Gemini API 크레딧 충전(생성 이미지용) | 개발 중 | SVG 대체 그래픽으로 오픈 가능 |

---

## 15. 범위 밖 (이번 리뉴얼에 포함하지 않음)
- 관리자 화면(CMS). 콘텐츠는 파일로 관리한다.
- Three.js 등 WebGL 3D, 인터랙티브 효율 계산기 같은 제품 데모. BM 확정 후 별도로 검토한다.
- 채용 지원 시스템, IR 자료 다운로드 게이트, 투자자 전용 페이지.
- 국·영 외 언어, 다크 모드 토글, 챗봇, 뉴스레터.
