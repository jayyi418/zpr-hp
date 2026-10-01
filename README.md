# ZEPHYROS 홈페이지 리뉴얼

zpr.co.kr 리뉴얼 작업 저장소입니다. 현재는 디자인 시안 단계입니다.

## 구성

| 경로 | 내용 |
|---|---|
| `mockups/v2/home.html` | 현재 시안(v2, 방향 C · SPLIT). 국문 기본, `?lang=en`으로 영문 |
| `mockups/v2/assets/gen/` | 생성 이미지. 프롬프트는 `PROMPTS.md` |
| `mockups/v2/assets/ir/` | IR 자료에서 가져온 이미지 |
| `mockups/home.html` | v1 시안(보관) |
| `docs/superpowers/specs/` | 설계 문서(v1, v2) |

## 배포

- **Vercel**에 배포합니다. `main`에 푸시하면 자동으로 배포됩니다.
- 빌드(`node scripts/build-site.mjs`)는 `mockups/v2/home.html`을 `dist/index.html`로 복사하고, 페이지가 쓰는 이미지만 함께 복사합니다. 예전 시안과 문서는 배포되지 않습니다.
- 시안 단계이므로 검색엔진 노출을 막아 두었습니다(`X-Robots-Tag: noindex`, `vercel.json`).

## 로컬 미리보기

```bash
python -m http.server 5178 --directory mockups
```

http://localhost:5178/v2/home.html 에서 확인합니다.
