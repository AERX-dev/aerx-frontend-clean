export function TokenMetadata(title, description, media, media_hash, copies, issued_at, expires_at, starts_at, updated_at, extra, reference, reference_hash) {
    this.title = title; // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
    this.description = description;// free-form description
    this.media = media; // URL to associated media, preferably to decentralized, content-addressed storage
    this.media_hash = media_hash;// Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
    this.copies = copies; // number of copies of this set of metadata in existence when token was minted.
    this.issued_at = issued_at; // When token was issued or minted, Unix epoch in milliseconds
    this.expires_at = expires_at; // When token expires, Unix epoch in milliseconds
    this.starts_at = starts_at; // When token starts being valid, Unix epoch in milliseconds
    this.updated_at = updated_at; // When token was last updated, Unix epoch in milliseconds
    this.extra = extra; // anything extra the NFT wants to store on-chain. Can be stringified JSON.
        // todo: this is gonna contain a link to IPFS's JSON:
    this.reference = reference; // URL to an off-chain JSON file with more info.
    this.reference_hash = reference_hash; // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
  }