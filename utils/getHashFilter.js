const getHashFilter = () => {
	const hash = window.location.hash.replace("#", "")
	switch (hash) {
		case "active":
			return "active"
		case "completed":
			return "completed"
		default:
			return "all"
	}
}
export default getHashFilter
