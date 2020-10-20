리덕스 튜토리얼

인덱스.js는 두번 만든다.
하나는 실질적으로 index.js이고, 다른 하나는 루트 리듀서의 역할을 한다.
이것은 ducks타입으로 해당 액션(modules) 폴더에 포함되어있다.

프레젠테이션 컴포넌트는 단순 ui만 표시한다.
해당 컴포넌트에 useState를 쓰지 않는다.

컨테이너 컴포넌트에 해당 useSelector를 써서 조회한다.
useDispatch도 동일하게 작동된다.

초기값은 액션에 있는 initial state에다 설정한다.

React를 배울때 처럼 흐름을 이해하는 것이 제일 중요하다.

1. index.js에 createStore 선언, Provider 감싸기.
2. Routes.js에 실제 컨테이너 컴포넌트 연결하기
3. 컨테이너에는 컴포넌트로 넘어가는 인자값과 액션값을 넘겨준다.
   해당 컴포넌트에서 useSelector, useDispatch 사용하여 해당 값을 조회하고, dispatch하도록 설정.
4. 액션 폴더에 있는 counter는 해당 store의 초기값을 설정해두고,
   액션 타입설정, 액션생성함수를 만든다.
   그리고 그 아래에 리듀서를 만들어 놓는다.
5. 액션폴더에 있는 index.js에 combineReducer를 이용하여, 해당 리듀서를 통합하여 루트리듀서로 리턴한다.
6. redux-devtools-extension 설치한 후에 { composeWithDevTools } 스토어에서 호출하여 연결해 둔다.
