const initState = {
    posts: [
        { id: '1', title: 'Squirtle laid an egg', body: 'Lorem ipsum, dolor sit amet' },
        { id: '2', title: 'Charmander laid an egg', body: 'Lorem ipsum, dolor sit amet' },
        { id: '3', title: 'a Helix Fossil was found', body: 'Lorem ipsum, dolor sit amet' },

    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer
