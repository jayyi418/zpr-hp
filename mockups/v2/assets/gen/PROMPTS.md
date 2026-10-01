# v2 생성 이미지 프롬프트

이 폴더(`mockups/v2/assets/gen/`)에 **아래 파일명 그대로** PNG를 넣으면 시안(`v2/home.html`)에 자동으로 나타난다.

**공통 조건**
- 글자, 숫자, 로고를 넣지 않는다. (예외: G-T2는 도해라서 영문 라벨을 넣는다.)
- 실제 제품처럼 보이지 않는 **개념 렌더**로 만든다.
- 가능하면 2K 이상으로 만든다.
- 팔레트:

| 이름 | 값 | 용도 |
|---|---|---|
| Abyss | `#030A1F` | 다크 배경 |
| Navy | `#0A1A5A` | |
| Royal | `#0048C8` | |
| Sky | `#3A88E8` | |
| Steel | `#62A2D2` | |
| White | `#FFFFFF` | 기술 도판 배경 |

## 현재 시안의 이미지 자리

| ID | 파일명 | 비율 | 위치 | 상태 |
|---|---|---|---|---|
| — | `statement.png` | 16:9 | 01 POSITIONING 배경 (투명도 16%) | 적용됨 |
| G-T1 | `tech-01.png` | 16:10 | 03 기술 · 01 EMI 필터 | 적용됨 |
| G-T2 | `tech-02.png` | 16:10 | 03 기술 · 02 Embedded L/C | 적용됨 |
| G-T3 | `tech-03.png` | 16:10 | 03 기술 · 03 LC 촉각센서 | 적용됨 |
| G-T4 | `tech-04.png` | 16:10 | 03 기술 · 04 AI 설계 자동화 | 적용됨 |
| G-T5 | `tech-05.png` | 16:10 | 03 기술 · 05 sLLM·Edge | 적용됨 |
| G-Z | `zpr-z.png` | 2:1 내외 | 05 Z·P·R · Z 카드 | 적용됨 |
| G-P | `zpr-p.png` | 3:2 내외 | 05 Z·P·R · P 카드 | 적용됨 |
| G-R | `zpr-r.png` | 16:9 내외 | 05 Z·P·R · R 카드 | 적용됨 |
| G-CTA | `cta.png` | 21:9 | 07 문의 배경 | 적용됨 |
| G-OG | `og.png` | 1200×630 | 링크 공유 미리보기 | 적용됨 |

**기술 도판(G-T1~T5) 동작:** `tech-0N.png`가 있으면 그 이미지를 보여주고 캡션을 "FIG.0N — (제목) · 개념 이미지"로 바꾼다. 파일이 없으면 IR 도판(`assets/ir/…`)과 "자사 실증" 캡션을 그대로 쓴다.

**기술 도판 공통 규칙(다섯 장이 한 세트로 보이도록):**
- 배경은 완전한 흰색 `#FFFFFF`, 바닥선이나 그라데이션 없이. 도판 칸이 흰색이라 배경이 회색이면 네모가 드러난다.
- 비율 16:10 (1600×1000 이상). 피사체는 가운데, 화면 폭의 약 70%, 사방 여백을 고르게.
- 같은 카메라(약간 위에서 본 3/4 등각), 같은 부드러운 스튜디오 조명, 옅은 접지 그림자.
- 기판은 초록 솔더마스크가 아닌 **무광 네이비**, 금속부는 은색·구리색, 강조는 로열 블루.

---

## G-T1 · `tech-01.png` · 16:10 · white — 초박형 자성부품 · EMI 필터
```
Clean studio 3D product visualization of an ultra-thin, low-profile magnetic component (a flat planar inductor with a thin ferrite core and fine copper windings) sitting beside a compact EMI filter section on a small power-supply circuit board. Three-quarter isometric view from slightly above. Matte navy blue circuit board (#0A1A5A), silver and copper metal details, a few royal blue (#0048C8) accents, subtle steel blue (#62A2D2) edge highlights. Soft diffused studio lighting, faint contact shadow. Pure white seamless background (#FFFFFF), no floor line, no gradient. Subject centered, filling about 70% of the frame width with even margins. 16:10 aspect ratio. Precise, minimal concept render, not a real product. No green solder mask, no text, no letters, no numbers, no logos, no labels.
```

## G-T2 · `tech-02.png` · 16:10 · white — Embedded L/C 복합 패키지 (글자 포함)
IR 도판(위: 모듈 3D, 아래: 적층 단면)과 같은 구성이다. 이 장만 예외로 글자를 넣는다. 라벨은 영문으로 두어 국·영 페이지에 함께 쓴다.
```
Technical illustration on a pure white background (#FFFFFF), 16:10 aspect ratio, composed of two parts stacked vertically, like a page from a premium engineering datasheet.

TOP PART (upper third): a clean 3D isometric render of a small matte navy circuit board (#0A1A5A) with a compact rectangular module stacked on it in three thin layers. Small crisp labels printed on the module layers read "EMBEDDED LC" and "POWER MODULE". Soft studio light, faint shadow.

BOTTOM PART (lower two thirds): a flat 2D cross-section diagram of the same board, drawn as crisp vector graphics:
- Five horizontal board layers stacked on top of each other: three matte navy core layers (#0A1A5A) alternating with two pale blue-gray embedded layers (#E8EEF7).
- Three rectangular component blocks sit on top of the board, from left to right labeled "POWER MAGNETICS", "AI SoC", "Wi-Fi/BT IC".
- Inside the upper pale layer, on the right side, a small embedded part with the label "Wi-Fi/BT EMBEDDED (BM2)" in royal blue (#0048C8).
- Inside the lower pale layer, on the left side, a small embedded part with the label "EMI FILTER EMBEDDED (BM1)" in royal blue (#0048C8).
- Groups of three thin vertical lines in bright blue (#3A88E8) run down through the layers: the left group from "POWER MAGNETICS" ends at the lower pale layer; the middle and right groups connect "AI SoC" and "Wi-Fi/BT IC" to two blocks hanging below the board, labeled "STORAGE A" and "STORAGE B". One small label next to the lines reads "VERTICAL INTERCONNECT".

Style: flat, minimal and precise, thin dark-ink outlines (#0B1433), component blocks in light gray (#EEF1F6), clean geometric sans-serif labels in dark ink, generous white space, balanced margins. All text spelled exactly as written in quotes, no other text, no logos, no green solder mask, no shadows in the diagram part.
```

## G-T3 · `tech-03.png` · 16:10 · white — LC 공진 촉각센서 (센서 어레이만)
IR 도판(`assets/ir/tactile-array-3d.png`)과 같은 구성이다. 로봇 손가락은 넣지 않는다.
- 얇은 판 위에 촘촘한 공진 소자 어레이가 있다.
- 오른쪽 앞의 판독 모듈 블록으로 배선이 모인다.
```
Clean isometric 3D technical illustration of an LC resonant tactile sensor array, seen from above at a three-quarter angle. A thin square sensor plate in pale steel blue (#62A2D2 tint) with a slightly darker navy edge (#0A1A5A) is densely covered with a regular grid of about 200 tiny resonator elements. Each element is a small inverted cone, like a tiny funnel, standing on a short thin stem, with a fine Y-shaped wire visible inside; the cones are soft brass-gold with thin navy outlines. From the right edge of the plate, several thin copper-gold signal traces run in stepped, right-angled paths and converge into a rectangular readout module: a slim upright block in light steel blue with a navy outline, standing at the front right of the plate. Thin navy outline lines on the ground link the plate and the module like a schematic base. Precise and minimal, soft 3D shading, thin dark-ink outlines (#0B1433), a few royal blue (#0048C8) accents, soft diffused light, faint shadow. Pure white seamless background (#FFFFFF), no floor texture, no gradient. Subject centered, filling about 75% of the frame width with even margins. 16:10 aspect ratio.
No robot, no finger, no hands, no text, no letters, no numbers, no logos.
```

## G-T4 · `tech-04.png` · 16:10 · white — AI 설계 자동화 · EMC 시뮬레이션
```
3D render of a compact circuit board seen at a three-quarter angle from above, overlaid with a translucent electromagnetic-field simulation: smooth blue gradient contour bands (#0048C8 to #62A2D2) radiating from two or three components, and a faint wireframe analysis mesh draped over part of the board, as if the design is being checked digitally before manufacturing. Matte navy board (#0A1A5A) with silver component details. Soft diffused studio lighting, faint contact shadow. Pure white seamless background (#FFFFFF), no floor line, no gradient. Subject centered, filling about 70% of the frame width with even margins. 16:10 aspect ratio. Crisp, minimal engineering visualization. No text, no letters, no numbers, no logos, no charts, no user-interface elements.
```

## G-T5 · `tech-05.png` · 16:10 · white — 경량 AI(sLLM) · 초소형 Edge
```
Clean studio 3D render of a tiny edge-AI computing board about the size of a coin, a single processor chip with a few stacked micro components, floating at a slight angle. Fine luminous royal blue (#0048C8) signal paths run across the board surface and gather into the chip, suggesting on-device inference. Matte navy board (#0A1A5A), silver and copper details, subtle steel blue (#62A2D2) edge highlights. Soft diffused studio lighting, soft shadow beneath. Pure white seamless background (#FFFFFF), no floor line, no gradient. Board centered and smaller in frame (about 45% of the frame width) to convey its size, with generous even margins. 16:10 aspect ratio. Precise, minimal concept render. No green solder mask, no text, no letters, no numbers, no logos, no labels.
```

## G-Z · `zpr-z.png` · 4:3 · dark — 차량용
```
Concept 3D render of a compact automotive edge-AI computer module: a slim sealed aluminum enclosure partly cut away to show a dense multilayer board inside, floating in dark navy space (#030A1F) with subtle blue rim light (#0048C8, #3A88E8). Keep the top-left corner dark and empty. Premium industrial design, minimal, centered, no text, no logos.
```

## G-P · `zpr-p.png` · 4:3 · dark — 가정용
```
Concept 3D render of a small home AI hub circuit module with a wireless antenna pattern embedded in the board, soft concentric translucent blue signal rings around it, dark navy background (#030A1F), blue highlights (#3A88E8, #62A2D2). Keep the top-left corner dark and empty. Minimal, centered, no text, no logos.
```

## G-R · `zpr-r.png` · 4:3 · dark — 로봇용
```
Concept 3D render of an ultra-compact robot edge module mounted inside a sleek robotic finger joint, with a thin flexible sensor skin wrapping the fingertip and a partial cutaway revealing stacked board layers, dark navy background (#030A1F), cool blue rim light (#3A88E8). Keep the top-left corner dark and empty. No humans, no text, no logos.
```

## G-CTA · `cta.png` · 21:9 · dark — 문의 배경
```
Abstract top-down view of fine circuit traces converging from the edges toward a single softly glowing point at the center, like signals being gathered and cleaned. Deep navy background (#030A1F), luminous blue lines (#0048C8, #3A88E8, #62A2D2), very dark overall with lots of empty space around the center. No text, no logos.
```

## G-OG · `og.png` · 1200×630 · dark — 공유 미리보기
```
Minimal dark navy (#030A1F) composition: a thin steel-blue (#62A2D2) line drawing of a circuit board on the right half, one circular lens area revealing blue embedded components inside the board, the left half empty for a title. Flat vector style, no text, no logos.
```
