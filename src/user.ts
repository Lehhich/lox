
SearchUser(status :string) : Promise<Search>  {

	return new Promise((resolve, reject) => {        network.UserPost<Search>(Endpoints.Users.CheckCode, {user_search : Search})

	.then((r) => {

	resolve(r)

	return r

	})

	.catch((err) => {

	reject(err)

	})

	})},
