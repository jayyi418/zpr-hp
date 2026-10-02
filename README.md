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

## 상담 폼

- "기술 상담 요청" 폼은 [FormSubmit](https://formsubmit.co)을 통해 **sdh@zpr.co.kr**로 전송됩니다. 서버나 API 키가 필요 없습니다(`home.html`의 `CONTACT_ENDPOINT`).
- **처음 한 번 활성화가 필요합니다.**
  1. 사이트에서 폼을 한 번 제출합니다.
  2. FormSubmit이 sdh@zpr.co.kr로 "Activate Form" 메일을 보냅니다.
  3. 메일의 링크를 누르면 그 뒤로 들어오는 문의가 전달됩니다.
- 전송에 실패하면 폼에 오류 문구와 메일 주소가 표시됩니다.

## 배포(Vercel, 선택)

- `node scripts/build-site.mjs`는 `mockups/v2/home.html`을 `dist/index.html`로 복사하고, 페이지가 쓰는 이미지만 함께 복사합니다.
- `npx vercel@latest deploy --prod`로 배포합니다. GitHub 자동 배포는 연결하지 않았습니다.
- 시안 단계라 검색엔진 노출을 막아 두었습니다(`vercel.json`의 `X-Robots-Tag: noindex`).

## 로컬 미리보기

```bash
python -m http.server 5178 --directory mockups
```

http://localhost:5178/v2/home.html 에서 확인합니다.
