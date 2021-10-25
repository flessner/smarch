import { EthereumAuthProvider, SelfID } from '@self.id/web'
import { writable, get, derived } from 'svelte/store';


// SELF STORE
export const self = writable(undefined);

export const ceramic = derived(
  self,
  ($self) => {
    if ($self) {
      return $self.client.ceramic
    } else {
      return undefined
    }
  }
)

// AUTH STATES
export const authenticated = derived(
  [self, ceramic],
  () => {
    if (get(self) && get(ceramic)) {
      return true
    } else {
      return false
    }
  }
)

// LOGIN & LOGOUT LOGIC
export async function login() {
  if (get(self) != undefined) {
    return self;
  }

  const addresses = await window.ethereum.enable()
  let data = await SelfID.authenticate({
    authProvider: new EthereumAuthProvider(window.ethereum, addresses[0]),
    ceramic: 'https://ceramic-clay.3boxlabs.com',
    connectNetwork: 'testnet-clay',
  });
  self.set(data)
  return self;
}

export function logout() {
  self.set(undefined)
}
