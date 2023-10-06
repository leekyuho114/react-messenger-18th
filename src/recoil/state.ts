import { atom, atomFamily, selector, selectorFamily } from "recoil";
import userData from "../data/userData.json";
import chatData from "../data/chatData.json";
//현재 login한 user,나머지 user list, chattingRoom list
export const loginUserState = atom({
  key: "loginUserState",
  default: userData.users[0],
});
//초기 사용 user는 0번 고정
export const nowUserIdState = atom({
  key: "nowUserIdState",
  default: userData.users[0].userId,
});
//user제외 나머지 friends
export const friendsState = atom({
  key: "friendsState",
  default: userData.users.slice(1),
});
//총 user데이터
export const usersState = atom({
  key: "usersState",
  default: userData.users,
});

export const chatRoomListState = atom({
  key: "chatRoomListState",
  default: chatData.chattings,
});

export const chatListByIdState = atomFamily({
  key: "chatListByIdState",
  default: (chatRoomId: number) => {
    const chatRoom = chatData.chattings.find(
      (room) => room.chatRoomId === chatRoomId
    );
    return chatRoom ? chatRoom.chatList : [];
  },
});
