// eslint.config.js
export default [
  {
    ignores: ['node_modules/**'] // 특정 파일 또는 폴더를 무시할 수 있음
  },
  {
    files: ['**/*.js', '**/*.jsx'], // ESLint가 검사할 파일 확장자 지정
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-console': 'error', // console.log 사용 금지
      'no-use-before-define': ['error', { functions: false, classes: true }], // 함수 선언 전 사용 가능, 클래스는 선언전에 사용할 수 없게 설정
      'comma-dangle': ['error', 'never'], // 마지막 요소 뒤에 쉼표 사용 x
      indent: ['error', 2], // 들여쓰기 2칸
      quotes: ['error', 'single'], // 문자열 '' 사용
      'eol-last': ['error', 'always'], // 파일 끝에 개행 문자 추가
      'no-trailing-spaces': 'error', // 빈 줄 끝에 공백 금지
      eqeqeq: ['error', 'always'], // 일치 연산자 사용
      'object-curly-spacing': ['error', 'always'], // 객체 리터럴 중괄호 사이에 공백 추가
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }], // 사용하지 않는 변수 금지
      'prefer-const': ['error'], // const 사용 권장
      'no-var': 'error', // var 사용 금지
      'max-len': ['error', { code: 120 }], // 코드 한 줄 길이 제한
      'no-shadow': ['error'], // 변수 중복 선언 금지
      'consistent-return': 'error', // 일관된 return 사용
      'arrow-body-style': ['error', 'as-needed'], // 필요할 때만 중괄호 사용
      'no-duplicate-imports': 'error', // 중복된 import 금지
      'prefer-template': 'error', // 문자열 연결 시 템플릿 리터럴 사용 권장
      'no-nested-ternary': 'error',
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }]
    }
  }
]
