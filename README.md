# UI Example Repository

이 리포지토리는 다양한 UI/UX 구현 예제와 프로토타입을 포함하는 컬렉션입니다.

## 📁 프로젝트 구조

### mz-agent-dashboard/
AWS 기반 지능형 문서 생성 에이전트 UI 구현체

#### 주요 특징
- **AgentCore Document Agent**: APN PoC 프로젝트 문서 자동 생성
- **듀얼 패인 레이아웃**: 채팅 인터페이스 + 실시간 문서 워크스페이스
- **AWS Bedrock 통합**: Nova Pro 모델 기반 지능형 응답
- **React + Tailwind CSS**: 현대적인 웹 기술 스택

#### 데모 실행
```bash
cd mz-agent-dashboard
npm install
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

#### 스크린샷
![AgentCore Interface](./mz-agent-dashboard/screenshots/main-interface.png)

*좌측: Slack 스타일 채팅 인터페이스 | 우측: 실시간 문서 워크스페이스*

## 🛠️ 기술 스택

- **Frontend**: React, Tailwind CSS, Lucide Icons
- **Backend Integration**: AWS Bedrock, REST APIs
- **Build Tools**: Create React App, PostCSS
- **Deployment**: AWS Amplify, S3 Static Hosting

## 📚 프로젝트 목록

### 1. AgentCore Document Agent (`mz-agent-dashboard/`)
- **상태**: ✅ 완료
- **기술**: React 18, Tailwind CSS, AWS Bedrock
- **설명**: 지능형 문서 생성을 위한 채팅 기반 인터페이스
- **데모**: [http://localhost:3000](http://localhost:3000)

## 🚀 빠른 시작

### 모든 프로젝트 실행
```bash
# AgentCore 실행
cd mz-agent-dashboard
npm install && npm start

# 다른 프로젝트들은 추후 추가 예정
```

### 개발 환경 설정
```bash
# Node.js 16+ 권장
node --version

# 프로젝트별 의존성 설치
npm install
```

## 📖 문서

각 프로젝트의 자세한 문서는 해당 폴더의 `README.md` 파일을 참조하세요:

- [AgentCore Document Agent](./mz-agent-dashboard/README.md)

## 🤝 기여

1. 프로젝트 아이디어 제안
2. 코드 개선 및 버그 수정
3. 새로운 UI/UX 패턴 구현
4. 문서화 개선

## 📄 라이선스

MIT License - 자유로운 사용 및 수정 가능

## 📞 연락처

- **GitHub**: [iloveit8110-MZC](https://github.com/iloveit8110-MZC)
- **Repository**: [UI_Example](https://github.com/iloveit8110-MZC/UI_Example)

---

*이 리포지토리는 UI/UX 개발 학습과 프로토타이핑을 위한 공간입니다.*