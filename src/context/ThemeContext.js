import { createContext } from "react";

// 만약 상위 컴포넌트에서 Provider로 감싸주지 않고 불러온 경우, 여기서 설정해 준 초기값을 대신 불러온다.
export const ThemeContext = createContext(null);