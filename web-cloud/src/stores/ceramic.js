import { EthereumAuthProvider, SelfID } from '@self.id/web'
import { writable, get, derived } from 'svelte/store';


// SELF STORE
export const cself = writable(undefined);

export const ceramic = derived(
  cself,
  ($cself) => {
    if ($cself) {
      return $cself.client.ceramic
    } else {
      return undefined
    }
  }
)

// AUTH STATES
export const authenticated = derived(
  [cself, ceramic],
  () => {
    if (get(cself) && get(ceramic)) {
      return true
    } else {
      return false
    }
  }
)

// LOGIN & LOGOUT LOGIC
export async function login() {
  if (get(cself) != undefined) {
    return cself;
  }

  const addresses = await window.ethereum.enable()
  let data = await SelfID.authenticate({
    authProvider: new EthereumAuthProvider(window.ethereum, addresses[0]),
    ceramic: 'https://ceramic-clay.3boxlabs.com',
    connectNetwork: 'testnet-clay',
  });
  cself.set(data)
}

export function logout() {
  cself.set(undefined)
}
