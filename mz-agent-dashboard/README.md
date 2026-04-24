# AgentCore Document Agent

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![AWS Bedrock](https://img.shields.io/badge/AWS_Bedrock-Ready-orange.svg)](https://aws.amazon.com/bedrock/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

AgentCore는 AWS Partner Network (APN) Proof of Concept (PoC) 프로젝트를 위한 지능형 문서 생성 에이전트입니다. Slack 스타일의 채팅 인터페이스와 실시간 문서 워크스페이스를 결합하여, 사용자가 자연스러운 대화를 통해 전문적인 프로젝트 문서를 자동으로 생성할 수 있습니다.

## ✨ 주요 기능

### 🤖 지능형 문서 생성
- **대화형 인터페이스**: Slack 스타일 채팅으로 직관적인 문서 생성
- **실시간 업데이트**: 채팅 중 문서가 실시간으로 업데이트되는 것을 확인 가능
- **섹션별 관리**: Executive Summary, Success Criteria, Scope 등 체계적인 문서 구조

### 📋 듀얼 패인 레이아웃
- **좌측 채팅 패널**: 에이전트와의 대화 인터페이스
- **우측 문서 워크스페이스**: 실시간으로 생성되는 문서 확인 및 편집
- **탭 기반 네비게이션**: 문서 섹션별 빠른 이동

### 🎯 전문적인 UI/UX
- **다크 테마**: AWS 콘솔 스타일의 전문적인 디자인
- **반응형 레이아웃**: 다양한 화면 크기 지원
- **인터랙티브 요소**: 호버 효과, 애니메이션, 상태 표시

### 🔧 기술 특징
- **AWS Bedrock 통합**: Nova Pro 모델 기반 지능형 응답
- **상태 관리**: React Hooks를 활용한 효율적인 상태 관리
- **실시간 동기화**: 채팅과 문서 간 실시간 데이터 동기화

## 🚀 데모

### 메인 인터페이스
![AgentCore Main Interface](./screenshots/main-interface.png)

*듀얼 패인 레이아웃: 좌측 채팅, 우측 문서 워크스페이스*

### 문서 생성 과정
![Document Generation](./screenshots/document-generation.gif)

*실시간 문서 업데이트를 보여주는 데모*

### 섹션별 탭 네비게이션
![Tab Navigation](./screenshots/tab-navigation.png)

*문서 섹션별 체계적인 관리*

## 🛠️ 기술 스택

- **Frontend**: React 18.2.0, Tailwind CSS 3.3.0
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Backend Integration**: AWS Bedrock (Nova Pro)
- **Deployment**: AWS Amplify / S3 Static Hosting

## 📦 설치 및 실행

### 사전 요구사항
- Node.js 16.x 이상
- npm 또는 yarn

### 설치 방법

```bash
# 프로젝트 클론
git clone https://github.com/iloveit8110-MZC/UI_Example.git
cd UI_Example/mz-agent-dashboard

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인할 수 있습니다.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 파일들은 build/ 폴더에 생성됩니다
```

## 📁 프로젝트 구조

```
mz-agent-dashboard/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.js          # 메인 애플리케이션 컴포넌트
│   ├── App.css         # 커스텀 스타일
│   ├── App.test.js     # 테스트 파일
│   ├── index.js        # 애플리케이션 엔트리 포인트
│   ├── index.css       # 글로벌 스타일 (Tailwind CSS)
│   └── setupTests.js   # 테스트 설정
├── package.json
├── tailwind.config.js  # Tailwind CSS 설정
└── postcss.config.js   # PostCSS 설정
```

## 🎨 UI 컴포넌트 설명

### 사이드바 (Sidebar)
- **AgentCore 로고**: 브랜드 아이덴티티
- **통합 채팅**: 메인 채팅 인터페이스
- **에이전트 워크플로우**: 에이전트 처리 과정 시각화
- **사내 지식베이스**: 내부 문서 및 지식 검색

### 채팅 인터페이스 (Chat Interface)
- **메시지 버블**: 사용자/에이전트 메시지 구분
- **타이핑 인디케이터**: 에이전트 응답 중 표시
- **자동 스크롤**: 새로운 메시지로 자동 이동

### 문서 워크스페이스 (Document Workspace)
- **섹션 탭**: Overview, Success Criteria, Scope 등
- **실시간 업데이트**: 채팅 중 문서 변경사항 즉시 반영
- **메타 정보 입력**: 고객사, 날짜 등 프로젝트 정보
- **DOCX 내보내기**: 완성된 문서 다운로드

## 🔧 설정 및 커스터마이징

### 환경 변수
`.env` 파일을 생성하여 다음과 같이 설정할 수 있습니다:

```env
REACT_APP_AWS_REGION=us-east-1
REACT_APP_BEDROCK_MODEL_ID=amazon.nova-pro-v1:0
REACT_APP_API_ENDPOINT=https://your-api-endpoint.com
```

### 테마 커스터마이징
`src/App.css` 파일에서 색상과 스타일을 조정할 수 있습니다:

```css
/* 메인 색상 변경 예시 */
.app-container {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --background-color: #0f172a;
}
```

## 🧪 테스트

```bash
# 테스트 실행
npm test

# 테스트 커버리지 확인
npm test -- --coverage
```

## 📚 API 문서

### 채팅 API
```
POST /api/chat
Content-Type: application/json

{
  "message": "프로젝트 계획서를 작성해줘",
  "context": {
    "customer": "ABC Corp",
    "requirements": ["클라우드 마이그레이션", "비용 최적화"]
  }
}
```

### 문서 생성 API
```
POST /api/documents/generate
Content-Type: application/json

{
  "template": "apn_poc_project_plan",
  "sections": ["executive_summary", "success_criteria"],
  "meta": {
    "customer": "ABC Corp",
    "date": "2024-01-15"
  }
}
```

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 개발 가이드라인
- **코드 스타일**: ESLint + Prettier 사용
- **커밋 메시지**: [Conventional Commits](https://conventionalcommits.org/) 형식
- **테스트**: 모든 새 기능에 대한 테스트 코드 작성
- **문서화**: 새로운 기능에 대한 README 업데이트

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙋‍♂️ 문의 및 지원

- **이슈 리포팅**: [GitHub Issues](https://github.com/iloveit8110-MZC/UI_Example/issues)
- **이메일**: your-email@example.com
- **문서**: [Wiki](https://github.com/iloveit8110-MZC/UI_Example/wiki)

## 🔄 버전 히스토리

### v1.0.0 (2024-01-15)
- 초기 릴리즈
- 기본 채팅 인터페이스 구현
- 문서 워크스페이스 기능 추가
- AWS Bedrock 통합

### 예정 기능
- [ ] 다중 문서 템플릿 지원
- [ ] 협업 기능 (실시간 공동 편집)
- [ ] 고급 AI 모델 통합
- [ ] 모바일 앱 버전
- [ ] 다국어 지원

---

**AgentCore** - 지능형 문서 생성의 새로운 표준

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
