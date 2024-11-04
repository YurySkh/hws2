type ThemeState = {
    themeId: number
}

const initState: ThemeState = {
    themeId: 1,
}

export const themeReducer = (state: ThemeState = initState, action: changeThemeIdType): ThemeState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
        return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeIdType = ReturnType<typeof changeThemeId>

type ChangeThemeIdAction = {
    type: 'SET_THEME_ID';
    id: number;
};

export const changeThemeId = (id: number): ChangeThemeIdAction => ({ type: 'SET_THEME_ID', id }) // fix any
