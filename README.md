# Resume Single Page

이 저장소는 GitHub Pages에 배포되는 단일 페이지 이력서 템플릿입니다.

## 구성
- `index.html`: 페이지 구조
- `styles.css`: 반응형/가독성 중심 스타일
- `app.js`: 데이터 렌더링 로직
- `data/resume.js`: 이력서 데이터
- `.github/workflows/deploy.yml`: `main` 브랜치 push(merge 포함) 시 자동 배포

## 로컬 실행
정적 파일 프로젝트이므로 별도 빌드가 필요 없습니다.

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173` 접속.

## 데이터 수정
`data/resume.js`의 필드를 실제 이력서 내용으로 교체하면 됩니다.

## 배포
- `main`에 머지되면 GitHub Actions가 자동으로 Pages 배포를 진행합니다.
- 저장소 Settings > Pages에서 **Source: GitHub Actions**로 설정해야 합니다.
