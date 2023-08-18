# opentutorials-nextjs13
opentutorials nextjs13 study
https://opentutorials.org/course/5098/32347

## Next.js install

```
$ npx create-next-app@latest .
```
√ Would you like to use TypeScript? ... No / [Yes]  
√ Would you like to use ESLint? ... No / [Yes]  
√ Would you like to use Tailwind CSS? ... No / [Yes]  
√ Would you like to use `src/` directory? ... No / [Yes]  
√ Would you like to use App Router?   (recommended) ... No / [Yes]  
√ Would you like to customize the default import alias? ... [No] / Yes

## Run nextjs command
```
$ npm run dev //DEV 실행

$ npm run build //PROD 빌드

$ npm run start //PROD 실행
```

## Nextjs JSON Server 
https://www.youtube.com/watch?v=t-Jt961oNeg

npm json server : https://www.npmjs.com/package/json-server

```
$ npx json-server --port 9999 --watch db.json
```

## Nextjs Cache
Next.js DOC: https://nextjs.org/docs/app/building-your-application/caching

## Nextjs Other
package.json
```
"scripts": {  
    "dev": "next dev", //개발용 실행 명령어  
    "build": "next build", //배포 실행 명령어  
    "start": "next start", //배포한 프로젝트를 실행 시키는 명령어  
    "lint": "next lint"  
},
```
  
Routing 

ex) 생활코딩 Routing : https://opentutorials.org/course/5098/32350

```
ex) http://a.com/dashboard/analytics/
- a.com : domain
- dashboard: segment
- analytics: segment
- /dashboard/analytics/: path
```
