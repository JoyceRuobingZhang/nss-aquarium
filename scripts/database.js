export const getFishDatabase = () => {
    return [{
            name: "Mr. Tickles",
            species: "gold fish",
            length: "2 inches",
            location: "Mexico",
            food: "Kale chips",
            image: ["../images/mr.tickles.jpg", "gold fish"]
        },
        {
            name: "Dr. Blubz",
            species: "Piranha",
            length: "7 inches",
            location: "Brazil",
            food: "gold fish",
            image: ["../images/Piranha.png", "Piranha"]
        },
        {
            name: "Red Jackie",
            species: "Siamese Fighting Fish",
            length: "2 inches",
            location: "Cambodia",
            food: "Fish Flakes",
            image: ["../images/red jackie.jpg", "Red Jackie"]
        }
    ]
}

// function fishArray() {
//     return database[fish].slice();
// }