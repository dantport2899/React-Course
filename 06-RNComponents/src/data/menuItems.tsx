import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component:'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component:'Animation102Screen'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component:'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component:'AlertScreen'
    },
    {
        name: 'TextInputs',
        icon: 'document-text-outline',
        component:'TextInputScreen'
    },
    {
        name: 'PullToRefresh',
        icon: 'refresh-outline',
        component:'PullToRefresh'
    },
    {
        name: 'SectionList',
        icon: 'list-outline',
        component:'CustomSectionListScreen'
    },
    {
        name: 'ModalScreen',
        icon: 'copy-outline',
        component:'ModalScrenn'
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component:'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        component:'SlideScreen'
    }
]