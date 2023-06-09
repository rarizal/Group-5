import { auth_types } from "./types";

const init = {
	email: "John Doe",
	password: "",
};

function userReducer(state = init, action) {
	//ACTION ADALAH EVENT YANG TERJADI
	if (action.type == auth_types.login) {
		return {
			...state,
			email: action.payload.email,
			password: action.payload.password,
			name: action.payload.name,
			birthdate: action.payload.birthdate,
		};
	} else {
		return init;
	}
}

export default userReducer;
