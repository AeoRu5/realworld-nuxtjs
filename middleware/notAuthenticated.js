export default function ({ query, store, redirect }) {
  if (store.state.user.user && query.sign_in === 'true') {
    return redirect('/')
  }
}