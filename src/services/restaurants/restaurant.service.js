import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("Location not found");
        }
        resolve(mock);
    });
};

const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });
    return camelize(mappedResults);
};

restaurantsRequest()
    .then(restaurantsTransform)
    .then((transformedResponse) => {
        console.log(transformedResponse);
    })
    .catch((err) => {
        console.log(err);
    });

//     import camelize from "camelize";

// // Assuming mocks is imported properly
// import { mocks } from "./mock";

// // Use async/await for clearer asynchronous handling
// export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
//     const mock = mocks[location];
//     if (!mock) {
//         throw new Error("Location not found");
//     }
//     return mock; // Directly return the mock data
// };

// // Simplified and safer data transformation
// const restaurantsTransform = (data) => {
//     const results = data.results ?? [];
//     const mappedResults = results.map((restaurant) => ({
//         ...restaurant,
//         isOpenNow: restaurant.opening_hours?.open_now ?? false,
//         isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//     }));
//     return camelize(mappedResults);
// };

// // Usage of async/await with try-catch for error handling
// const displayRestaurants = async () => {
//     try {
//         const response = await restaurantsRequest();
//         const transformedResponse = restaurantsTransform(response);
//         console.log(transformedResponse);
//     } catch (err) {
//         console.error(err);
//     }
// };

// displayRestaurants();
