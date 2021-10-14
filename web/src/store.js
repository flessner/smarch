import { EthereumAuthProvider, SelfID } from '@self.id/web'
import { writable, get, derived } from 'svelte/store';

// SELF STORE
export const self = writable(undefined);

export const did = derived(
  self,
  ($self) => {
    if ($self) {
      return $self.id
    } else {
      return undefined
    }
  }
)

// AUTH STATES
const startedAuth = writable(false)
self.subscribe((val) => {
  if (val != undefined) {
    startedAuth.set(false)
  }
})

export const authenticating = derived(
  [self, startedAuth],
  ($self, $startedAuth) => {
    if ($self == undefined && $startedAuth) {
      return true
    } else {
      return false
    }
  }
)

export const authenticated = derived(
  [self],
  ($self) => {
    if ($self != undefined) {
      return true
    } else {
      return false
    }
  }
)

// LOGIN & LOGOUT LOGIC
export async function login() {
  startedAuth.set(true)
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