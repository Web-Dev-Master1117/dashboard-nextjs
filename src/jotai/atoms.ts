import { atomWithStorage } from 'jotai/utils';

const atomKeys = {
	SIDE_BAR: 'SidebarOpen',
	NOTIFICATION_BAR: 'NotificationBarOpen',
};

export const sidebarOpenState = atomWithStorage(atomKeys.SIDE_BAR, true);

export const notificationBarOpenState = atomWithStorage(
	atomKeys.NOTIFICATION_BAR,
	true
);
