import { atom } from 'recoil';
import { persistEffect } from './effects';

const atomKeys = {
	SIDE_BAR: 'SidebarOpen',
	NOTIFICATION_BAR: 'NotificationBarOpen',
};

export const sidebarOpenState = atom({
	key: atomKeys.SIDE_BAR,
	default: true,
	effects: [persistEffect(atomKeys.SIDE_BAR)],
});

export const notificationBarOpenState = atom({
	key: atomKeys.NOTIFICATION_BAR,
	default: true,
	effects: [persistEffect(atomKeys.NOTIFICATION_BAR)],
});
