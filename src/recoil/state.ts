import {atom, selector, selectorFamily} from 'recoil';
import userData from '../data/userData.json';
import chatData from '../data/chatData.json';
//현재 user,나머지 user list, chattingRoom list
export const currentUserState = atom({
    key : 'currentUserState',
    default: userData.users[0],
});

export const friendsState = atom({
    key : 'friendsState',
    default : userData.users.slice(1),
});

export const chatRoomListState = atom({
    key : 'chatRoomListState',
    default : chatData.chattings,
});


