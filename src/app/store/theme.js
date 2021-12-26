import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
	id: 'theme',
	state: () => ({
		darkmode: false,
		sidebar: false,
		count: 0,
	}),
	actions: {
		turnOnDarkMode() {
			this.darkmode = !this.darkmode;
		},
		changeSidebar() {
			this.sidebar = !this.sidebar;
		},
		increment() {
			this.count += 2;
		},
	},
});
