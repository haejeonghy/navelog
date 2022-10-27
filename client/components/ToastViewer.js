import React from "react";
import { Viewer } from "@toast-ui/react-editor";

function ToastViewer() {
  return (
    <>
      <Viewer
        initialValue={`
# 나는야 초보개발자 길을 비켜랏
## 비켜주세요..
### 포기하지 말자 ^~^
- 개발이란 멀까?
* [ ] 나벨로그 다듬기  



[멋쟁이 제훈이 네이버 블로그](https://blog.naver.com/luna1489) 👈 왜 하이퍼링크처럼 안뜨지?
![](https://images.unsplash.com/photo-1526667900883-4a817696e7e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRzb21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)




> 인용문 마크다운
      

_이태릭체 기울기!!_


**볼드체 굵기!!**

“예술은 학습하는 게 아니라, 자연스럽게 나를 둘러싸고 있는 존재여야 한다고 생각해요. 어릴 때 우리는 모두가 예술가였어요. 춤을 췄고, 그림을 그렸고, 노래했죠. 하지만 어느 순간 예술이 공부의 대상이 돼요. 

예술 작품을 감상하는 건, 누군가의 생각을 읽고 소통하는 거잖아요. 한국의 많은 어른들은 어느 순간 그 소통이 단절돼 버리는 거죠.”
      `}
      />
    </>
  );
}

export default ToastViewer;
