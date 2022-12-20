type FoodCategory = {
    value: string,
    images: Array<string>
}

const foodCategories: Array<FoodCategory> = [
    {
        value: 'asian',
        images: [
            "chinese1",
            "chinese2",
            "chinese3"
        ]
    },
    {
        value: 'barbeque',
        images: [
            "barbeque1",
            "barbeque2",
            "barbeque3"
        ]
    },
    {
        value: 'brew_pub',
        images: []
    },
    {
        value: 'burgers',
        images: [
            "burgers1",
            "burgers2",
            "burgers3"
        ]
    },
    {
        value: 'cafe',
        images: []
    },
    {
        value: 'cajun_creole',
        images: [
            "cajunCreole1"
        ]
    },
    {
        value: 'chinese',
        images: []
    },
    {
        value: 'deli',
        images: [
            "deli1",
            "deli2",
            "deli3"
        ]
    },
    {
        value: 'fast_food',
        images: []
    },
    {
        value: 'french',
        images: [
            "french1"
        ]
    },
    {
        value: 'fusion',
        images: []
    },
    {
        value: 'greek',
        images: []
    },
    {
        value: 'indian',
        images: [
           "indian1",
           "indian2",
           "indian3"
        ]
    },
    {
        value: 'italian',
        images: [
           "italian1",
           "italian2",
           "italian3"
        ]
    },
    {
        value: 'japanese',
        images: []
    },
    {
        value: 'korean',
        images: []
    },
    {
        value: 'mediterranean',
        images: []
    },
    {
        value: 'mexican',
        images: [
            "mexican1"
        ]
    },
    {
        value: 'middle_eastern',
        images: []
    },
    {
        value: 'pizza',
        images: [
            "pizza1",
            "pizza2",
            "pizza3"
        ]
    },
    {
        value: 'seafood',
        images: []
    },
    {
        value: 'steakhouse',
        images: [
            "steakhouse1",
            "steakhouse2",
            "steakhouse3"
        ]
    },
    // Google Maps API hates the sushi keyword for some reason.
    // {
    //     value: 'sushi',
    //     images: [
    //        "sushi1",
    //        "sushi2",
    //        "sushi3"
    //     ]
    // },
    {
        value: 'tapas',
        images: []
    },
    {
        value: 'thai',
        images: []
    },
    {
        value: 'vietnamese',
        images: []
    }
]

export default foodCategories;