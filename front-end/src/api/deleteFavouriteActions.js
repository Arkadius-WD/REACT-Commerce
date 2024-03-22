import { BACK_END_URL } from "../constants/api";

export function deleteFavouriteActions({ params }) {
	return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
		method: "DELETE",
	});
}
