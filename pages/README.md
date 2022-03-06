# Notes and Todo's

## TODO: Create Profile NFT

IPFS:

- how is the image 'uploaded'? ✅
- - until before through uploadcare. I find it simpler to do it on the client side.
- where is it stored and how can we access it? ✅
- - is was stored on their cloud and took real long to load. Now its in a local refference.
- can we upload it in tha format to ipfs? 🔴
- - not yet, the ipfs/crust function is fcked. TODO fix the `header` function with the signed in NEAR id.

Create ProfileNFT:

- create a template Metadata file.
- fill in the account details.
- test functionality.

Call ProfileNFT:

- check if User already minted/owns a profileNFT.
- call the NFT metadata.
- fill the profile page with the metadata.
- call and display the profile image through IPFS.

## TODO: Codebase

Decide on coding practices:

- 4 space intendent.
- use `styled-components` to style elements.
- use lazy-loading: instead of a en component, write a function which returns the component.
- don't repeat code, write reusable components.
- No copy-pasting!!!
- okay, who r u fooling? We all gonna do it anyways. Make sure to:
  - Decalre the source (url)
  - Discribe which purpose the code serves in our context
  - Mark from where-to-where the code is copied
  - Remove dead/unneccesary code
- document every function or component you write.
- if you create a new folder, add a `README.md` with a walkthrough for its functionalities.
- only push to main if nothing's breaking!!!
- agree on:
  - Linter (ES6)
  - Formatter (Prettier, TS JS Formatter)
  - Debugger?
  - Deployment (Vercel)
  - Libraries/tools in general

Refactor code:

- good excercise to get familiar with the codebase:
- Go over the code and think of ways to improve it. That can be in terms of:
  - performance, (server) rendering time
  - rewirite code shorter or conciser
  - remove obsolete/dead code
  - write comments!!!

### Happy coding 🍸
