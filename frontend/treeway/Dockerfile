# 1단계 애플리케이션 빌드
# Node.js 베이스 이미지를 사용하여 애플리케이션을 빌드
FROM node:20 AS build

# 작업 디렉토리를 /app으로 설정
WORKDIR /app

# package.json과 package-lock.json을 복사하여 의존성을 설치
COPY package*.json ./

# 필요한 모든 의존성을 설치
RUN npm install

# 프론트엔드 밑에 모든 파일을 복사
COPY . .

# Next.js 애플리케이션을 빌드
RUN npm run build

# 2단계 실행환경 설정
FROM node:20-alpine

# 작업 디렉토리를 /app으로 설정
WORKDIR /app

# build 스테이지에서 빌드된 파일을 복사
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/package*.json ./
# COPY --from=build /app/public ./public
# COPY --from=build /app/next.config.mjs ./next.config.mjs
COPY --from=build /app /app


# 환경 변수 설정
ENV PORT=3001

# 포트 설정 (Next.js는 기본적으로 3000번 포트 사용)
EXPOSE 3001

# Next.js 애플리케이션을 시작하는 명령어
CMD ["next", "start", "-H", "0.0.0.0", "-p", "3001"]
