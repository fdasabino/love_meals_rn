import MapScreen from "../../../components/features/map/screens/map.screen";
import RestaurantsScreen from "../../../components/features/restaurants/screens/restaurants.screen";
import SettingsScreen from "../../../components/features/settings/screens/settings.screen";

export const screens = [
    {
        name: "Restaurants",
        component: RestaurantsScreen,
        icon: "list-outline",
    },
    {
        name: "Map",
        component: MapScreen,
        icon: "map-outline",
    },
    {
        name: "Settings",
        component: SettingsScreen,
        icon: "settings-outline",
    },
];
