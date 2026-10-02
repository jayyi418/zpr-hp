# ZEPHYROS 홈페이지 (zpr.co.kr)

제피로스 일렉트로닉스(주) 홈페이지 소스입니다. **빌드 과정이 없는 정적 웹사이트**(HTML 한 페이지)입니다. 저장소 내용을 그대로 웹 서버에 올리면 됩니다.

## 구성

| 경로 | 내용 |
|---|---|
| `index.html` | 홈페이지 전체(스타일·스크립트 포함). 국문이 기본이고, `?lang=en`을 붙이면 영문이 나옵니다 |
| `assets/images/` | 페이지 이미지(WebP). `og.jpg`는 링크 공유 미리보기 이미지입니다 |
| `assets/logo/` | 로고 마크, 파비콘 |
| `robots.txt`, `sitemap.xml` | 검색엔진용 |

외부에서 불러오는 리소스는 세 가지입니다.

- 글꼴: Wanted Sans(jsDelivr), Geist Mono(Google Fonts)
- 애니메이션 라이브러리: GSAP(jsDelivr)

## 호스팅

빌드 명령은 없고, 공개 폴더는 **저장소 루트**입니다.

- **Vercel / Netlify:** 저장소를 연결합니다. Framework는 Other, Build command는 비워 두고, Output directory는 루트로 둡니다.
- **GitHub Pages:** Settings → Pages에서 Branch `main`, 폴더 `/ (root)`를 선택합니다.
- **일반 웹호스팅(FTP):** 저장소 파일 전체를 웹 루트(`public_html` 등)에 올립니다.

로컬에서 확인하려면 다음 명령을 실행한 뒤 http://localhost:8000 을 엽니다.

```bash
python -m http.server 8000
```

## 도메인(zpr.co.kr) 연결 시 주의

- **회사 메일(@zpr.co.kr)도 이 도메인을 씁니다.** DNS에서는 **웹 레코드(A / CNAME)만** 새 호스팅으로 바꿔 주세요. **MX, SPF(TXT) 같은 메일 레코드는 그대로** 둡니다.
- `www.zpr.co.kr`도 같은 사이트로 연결하거나 `zpr.co.kr`로 리디렉트하는 것을 권장합니다.
- HTTPS 인증서를 적용해 주세요. 대부분의 호스팅에서 자동으로 발급됩니다.
- 페이지의 대표 주소(canonical), 공유 미리보기, `sitemap.xml`은 `https://zpr.co.kr/` 기준으로 작성되어 있습니다.

## 기술 상담 문의 폼

- "기술 상담 요청" 폼의 내용은 [FormSubmit](https://formsubmit.co)을 통해 **sdh@zpr.co.kr**로 전송됩니다. 서버나 API 키는 필요 없습니다.
  - 메일 제목은 `[홈페이지 문의] 회사 · 이름`입니다.
  - 본문은 이름, 회사·기관, 이메일, 연락처, 관심 분야, 문의 내용이 표로 정리됩니다.
  - 메일에서 답장하면 문의자에게 회신됩니다.
- **처음 한 번 활성화가 필요합니다.**
  1. 사이트를 연 뒤 폼을 한 번 제출합니다. 이 첫 제출은 전달되지 않고 화면에 오류 문구가 나오는 것이 정상입니다.
  2. sdh@zpr.co.kr로 "Activate Form" 메일이 옵니다.
  3. 메일의 링크를 누르면 그 뒤로 들어오는 문의가 전달됩니다.
- 받는 주소를 바꾸려면 `index.html`의 `CONTACT_ENDPOINT` 값과 화면에 표시된 메일 주소를 함께 수정합니다.

## 내용 수정

- **국문 문구:** `index.html` 본문에서 직접 고칩니다.
- **영문 문구:** `index.html` 스크립트의 `const EN = { … }`에서 고칩니다. 키는 본문 요소의 `data-k` 값과 같습니다.
- **기술 탭 5개:** 스크립트의 `const TECH = [ … ]`에 국문과 영문이 함께 있습니다.
- **이미지:** `assets/images/`에서 같은 이름의 파일을 바꿉니다. WebP를 권장합니다.

## 공개 전 확인

- [ ] 푸터 "개인정보처리방침" 링크 연결. 지금은 비어 있고, 문의 폼이 개인정보를 받으므로 필요합니다.
- [ ] 문의 폼 동의 문구의 개인정보 보유 기간(현재 "문의 처리 후 1년")
- [ ] FormSubmit 활성화(위 절차)
- [ ] 필요하면 Google Search Console, 네이버 서치어드바이저에 사이트를 등록하고 `sitemap.xml`을 제출
