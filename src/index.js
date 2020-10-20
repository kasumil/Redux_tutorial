import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import { createStore } from 'redux';
import { Provider }  from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.

ReactDOM.render(
<Provider store={store}>
  <Routes/>
</Provider>,
document.getElementById('root'));
