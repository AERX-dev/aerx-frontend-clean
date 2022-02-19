import { createClient } from '@supabase/supabase-js'


export async function getProfile(accountId = "") {
	if (accountId.length == 0) {
		return;
	}

	const { data, error } = await supabase
		.from('profiles')
		.select(`
		*, 
		follows(*), 
		posts!posts_profileId_fkey(*)
	`)
		.eq('walletId', accountId);

	if (!error && data.length) {
		return data[0];
	} else {
		return createProfile(accountId);
	}
}

async function createProfile(accountId) {
	
	const { data, error } = await supabase
		.from('profiles')
		.insert([
			{ walletId: accountId }
		]);

	if (!error && data.length) {
		return data[0];
	} else {
		console.log(error)
		// alert("Error creating profile");
	}
}

// Create a single supabase client for interacting with your database
const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_ANON,
)

export default supabase;