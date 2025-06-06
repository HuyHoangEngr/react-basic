const initState = {
    users: [
        { id: 1, name: "Le Van A" },
        { id: 2, name: "Nguyen Van B" },
        { id: 3, name: "Trinh Van C" },
    ],
    posts: [],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                users,
            };

        case "CREATE_USER":
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `random - ${id}` };

            return {
                ...state,
                users: [...state.users, user],
            };

        default:
            return state;
    }
};

export default rootReducer;
